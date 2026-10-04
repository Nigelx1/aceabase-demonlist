#!/usr/bin/env python3
"""Add clears (and any new demons) to the list from a JSON spec.

    python tools/add-records.py spec.json             # apply
    python tools/add-records.py spec.json --dry-run   # show the plan, write nothing
    python tools/add-records.py spec.json --initial   # FIRST import only: becomes the
                                                      # baseline (no "add" log items)
spec.json:
{
  "date": "2026-10-03",                     # changelog date (default: today)
  "players": {                              # per-player info (needed for new players)
    "ace": {"nationality": "US", "subdivision": "TX", "gdladder": 12345}
  },
  "records": [                              # level = id or gdladder/gdbrowser link
    {"player": "ace", "level": "https://gdladder.com/level/86084399"},
    {"player": "ace", "level": 12345, "progress": 100}
  ],
  "tiebreak": ["ace"],                      # who gets `verifier` on a new demon several cleared
  "verifiers": {"10565740": "ace"},        # or set it per level (wins over tiebreak)
  "notes": ["New member: ..."]              # extra changelog notes
}
A player's "gdladder" (user id or profile link) also imports every 100% on
their gdladder profile. config.js `extremesOnly: true` -> anything that isn't
an Extreme Demon is refused; platformers are always refused.
Needs python3, curl and node on PATH.
"""
import io, json, os, re, subprocess, sys, urllib.request
from datetime import date as _date

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
SITE = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
DATA = os.path.join(SITE, "data")
FLAGS = os.path.join(SITE, "static", "images", "flags")
FLAG_SRC = "https://raw.githubusercontent.com/stadust/pointercrate/master/pointercrate-demonlist-pages/static/images/flags/"
FALLBACK = {"Extreme": 24, "Insane": 16.5, "Hard": 11, "Medium": 7, "Easy": 2.5, "Official": 3}
LENGTHS = {1: "Tiny", 2: "Short", 3: "Medium", 4: "Long", 5: "XL"}


def curl_json(url):
    try:
        out = subprocess.run(["curl", "-sS", "--max-time", "30", url], capture_output=True,
                             text=True, encoding="utf-8", timeout=60).stdout
        return json.loads(out)
    except Exception:
        return None


def load_js(name, var):
    code = "global.window={};require(process.argv[1]);process.stdout.write(JSON.stringify(window[process.argv[2]]))"
    r = subprocess.run(["node", "-e", code, os.path.join(DATA, name), var],
                       capture_output=True, text=True, encoding="utf-8")
    if r.returncode:
        sys.exit(f"could not load {name}: {r.stderr[:400]}")
    return json.loads(r.stdout)


def write_js(name, var, value):
    path = os.path.join(DATA, name)
    src = io.open(path, encoding="utf-8").read()
    i = src.find(f"window.{var} =")
    io.open(path, "w", encoding="utf-8", newline="\n").write(
        (src[:i] if i >= 0 else '"use strict";\n\n') + f"window.{var} = "
        + json.dumps(value, indent=2, ensure_ascii=False) + ";\n")


def trailing_id(x):
    s = str(x).strip()
    if s.isdigit():
        return int(s)
    m = re.search(r"(\d+)/?(?:[?#].*)?$", s)
    if not m:
        sys.exit(f"can't read an id from {x!r}")
    return int(m.group(1))


def thumb(vid):
    # YouTube only makes /maxresdefault for HD uploads (see Bad Trip on Nigel's list)
    for q in ("maxresdefault", "sddefault", "hqdefault"):
        url = f"https://i.ytimg.com/vi/{vid}/{q}.jpg"
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=25) as r:
                if len(r.read()) > 2000:
                    return url
        except Exception:
            pass
    return f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg"


def fetch_level(lid, extremes_only):
    gl = curl_json(f"https://gdladder.com/api/levels/{lid}")
    gl = gl if isinstance(gl, dict) and gl.get("ID") else {}
    gb = curl_json(f"https://gdbrowser.com/api/level/{lid}")
    gb = gb if isinstance(gb, dict) else {}
    if not gl and not gb:
        return None, "not found on gdladder or gdbrowser"
    meta = gl.get("Meta") or {}
    ingame = gb.get("difficulty") or ((meta.get("Difficulty") or "?") + " Demon")
    tier = meta.get("Difficulty") or ingame.replace(" Demon", "")
    if meta.get("Length") == 6 or str(gb.get("length", "")).lower().startswith("plat"):
        return None, "platformer"
    if extremes_only and not (tier == "Extreme" or ingame == "Extreme Demon"):
        return None, f"not an Extreme Demon ({ingame})"
    gd = {}
    ln = gb.get("length") or LENGTHS.get(meta.get("Length"))
    if ln:
        gd["length"] = ln
    objs = gb.get("objects") or meta.get("objects") or 0
    if isinstance(objs, int) and objs > 0:
        gd["objects"] = objs
    if gb.get("gameVersion") and gb["gameVersion"] != "0.0":
        gd["gameVersion"] = gb["gameVersion"]
    gd["inGameDifficulty"] = ingame
    song = meta.get("Song") or {}
    sid, sname = str(gb.get("songID") or song.get("ID") or ""), gb.get("songName") or song.get("Name")
    if sid.isdigit() and sname:
        gd["song"] = {"id": sid, "name": sname, "artist": gb.get("songAuthor") or ""}
        if gb.get("songLink") and gb["songLink"] != "-":
            gd["song"]["link"] = gb["songLink"]
        gd["songOfficial"] = False
    vid, rating = gl.get("Showcase"), gl.get("Rating")
    pub = gb.get("author") or (meta.get("Publisher") or {}).get("name") or "Unknown"
    return {
        "id": lid, "position": 0, "name": gb.get("name") or meta.get("Name") or f"Level {lid}",
        "difficulty": "Extreme" if ingame == "Extreme Demon" else tier,
        "rating": round(rating, 2) if isinstance(rating, (int, float)) else None,
        "publisher": pub, "creators": [pub], "verifier": None,
        "videoUrl": f"https://www.youtube.com/watch?v={vid}" if vid else None,
        "thumbnailUrl": thumb(vid) if vid else None,
        "levelId": lid, "description": gb.get("description") or meta.get("Description") or None,
        "requirementPercent": 100, "records": [], "gd": gd,
    }, None


VERIFY = r"""
global.window = {};
const P = require('path'), site = process.argv[1], p = (f) => require(P.join(site, f));
p('data/config.js'); p('data/demons.js'); p('data/changelog.js'); p('static/js/list-utils.js');
const DL = window.DL, D = window.DEMONS, bad = [];
D.forEach((d, i) => { if (d.position !== i + 1 || d.id !== d.levelId) bad.push('position/id ' + d.name); });
for (let i = 1; i < D.length; i++) if (DL.demonRating(D[i - 1]) < DL.demonRating(D[i])) bad.push('order ' + D[i].name);
D.forEach((d) => { const h = DL.positionHistoryFor(d); if (!h.length || h[h.length - 1].position !== d.position) bad.push('history ' + d.name); });
if (window.SITE.extremesOnly) D.forEach((d) => { if (d.difficulty !== 'Extreme') bad.push('not extreme ' + d.name); });
console.log(bad.length ? 'VERIFY FAILED: ' + bad.join('; ') : 'verify ok: ' + D.length + ' demons, ' + DL.aggregatePlayers().length + ' players');
process.exit(bad.length ? 1 : 0);
"""


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    opts = {a for a in sys.argv[1:] if a.startswith("--")}
    if not args:
        sys.exit(__doc__)
    dry, initial = "--dry-run" in opts, "--initial" in opts
    spec = json.load(io.open(args[0], encoding="utf-8"))
    day = spec.get("date") or _date.today().isoformat()
    cfg_path = os.path.join(DATA, "config.js")
    cfg = io.open(cfg_path, encoding="utf-8").read()
    extremes_only = bool(re.search(r"extremesOnly:\s*true", cfg))
    demons = load_js("demons.js", "DEMONS")
    log = load_js("changelog.js", "CHANGELOG")
    if initial and demons:
        sys.exit("--initial is only for the first import (the list already has demons)")
    by_lid = {d["levelId"]: d for d in demons}
    players = spec.get("players") or {}
    known = {}
    for d in demons:
        for r in d.get("records", []):
            known.setdefault(r["player"], (r.get("nationality"), r.get("subdivision")))

    wanted = [(r["player"], trailing_id(r["level"]), int(r.get("progress", 100))) for r in spec.get("records", [])]
    for name, info in players.items():
        if not info.get("gdladder"):
            continue
        uid = trailing_id(info["gdladder"])
        prof = curl_json(f"https://gdladder.com/api/user/{uid}") or {}
        if not info.get("nationality") and prof.get("CountryCode"):
            info["nationality"] = prof["CountryCode"]
        base = f"https://gdladder.com/api/user/{uid}/submissions"
        ok = next(((n, p) for n in (100, 50, 25, 10) for p in (0, 1)
                   if isinstance((curl_json(f"{base}?limit={n}&page={p}") or {}).get("submissions"), list)), None)
        if not ok:
            print(f"  WARNING gdladder {uid}: couldn't read submissions")
            continue
        limit, page = ok
        seen, total, misses = {}, None, 0
        while page < 1000 and misses < 2 and (total is None or len(seen) < total):
            res = curl_json(f"{base}?limit={limit}&page={page}") or {}
            total = res.get("total", total or 0)
            new = [s for s in res.get("submissions") or [] if s.get("ID") not in seen]
            misses = 0 if new else misses + 1
            seen.update({s["ID"]: s for s in new})
            page += 1
        took = 0
        for s in seen.values():
            m = (s.get("Level") or {}).get("Meta") or {}
            if (s.get("Progress") or 0) < 100 or m.get("Length") == 6:
                continue
            if extremes_only and m.get("Difficulty") != "Extreme":
                continue
            wanted.append((name, int(s["Level"]["ID"]), 100))
            took += 1
        print(f"gdladder {uid} ({prof.get('Name')}, {info.get('nationality')}): {len(seen)}/{total} submissions read, {took} imported")

    def nat(player):
        info = players.get(player) or {}
        if info.get("nationality"):
            sub = info.get("subdivision")
            return info["nationality"].upper(), sub.upper() if sub else None
        return known.get(player, (None, None))

    fresh, rejected = {}, {}
    for _, lid, _ in wanted:
        if lid in by_lid or lid in fresh or lid in rejected:
            continue
        d, why = fetch_level(lid, extremes_only)
        if why:
            rejected[lid] = why
            print(f"  REFUSED {lid}: {why}")
        else:
            fresh[lid] = d

    order = list(dict.fromkeys(list(spec.get("tiebreak", [])) + [p for p, _, _ in wanted]))
    also, added, no_nat = {}, 0, set()
    for player, lid, prog in wanted:
        d = by_lid.get(lid) or fresh.get(lid)
        if not d:
            continue
        rec = next((r for r in d["records"] if r["player"] == player), None)
        if rec:
            rec["progress"] = max(rec["progress"], prog)
            continue
        cc, sub = nat(player)
        if not cc:
            no_nat.add(player)
        d["records"].append({"player": player, "progress": prog, "nationality": cc, "subdivision": sub})
        added += 1
        if lid in by_lid:
            also.setdefault(player, []).append(d["name"])
    for d in fresh.values():
        clears = [r["player"] for r in d["records"] if r["progress"] >= 100]
        d["verifier"] = sorted(clears, key=order.index)[0] if clears else None
    for lid, who in (spec.get("verifiers") or {}).items():  # {"levelId": "player"}
        if int(lid) in fresh:
            fresh[int(lid)]["verifier"] = who

    everything = demons + list(fresh.values())
    everything.sort(key=lambda d: -(d["rating"] if isinstance(d.get("rating"), (int, float)) else FALLBACK.get(d.get("difficulty"), 3)))
    for i, d in enumerate(everything, 1):
        d["position"], d["id"] = i, d["levelId"]

    items = []
    if initial:
        n = len({r["player"] for d in everything for r in d["records"]})
        kind = "Extreme Demons" if extremes_only else "demons"
        items.append({"kind": "note", "text": f"List created - {len(everything)} {kind} from {n} players."})
    else:
        for d in sorted(fresh.values(), key=lambda d: -d["position"]):  # high -> low: the replay reverses items
            it = {"kind": "add", "demon": d["name"], "demonId": d["levelId"], "at": d["position"]}
            if d["verifier"]:
                it["text"] = f"{d['verifier']}'s clear"
            items.append(it)
        for p, names in also.items():
            items.append({"kind": "note", "text": f"{p} also cleared {', '.join(names)}."})
    items += [{"kind": "note", "text": t} for t in spec.get("notes", [])]
    if items:
        if log and log[0].get("date") == day:
            log[0]["items"] = items + log[0]["items"]
        else:
            log.insert(0, {"date": day, "items": items})

    for d in sorted(fresh.values(), key=lambda d: d["position"]):
        print(f"  + #{d['position']} {d['name']} ({d['levelId']}) r{d['rating']} - {d['verifier']}")
    print(f"{len(fresh)} new demons, {added} records added, {len(rejected)} refused, list -> {len(everything)} demons")
    if no_nat:
        print("  WARNING no nationality for:", ", ".join(sorted(no_nat)))
    for d in everything:
        if d.get("rating") is None:
            print(f"  WARNING {d['name']} has no gdladder rating - sorted as a typical {d['difficulty']}")

    need = {(r["nationality"], r.get("subdivision")) for d in everything for r in d["records"] if r.get("nationality")}
    for cc, sub in sorted(need, key=str):
        for rel in [f"{cc.lower()}.svg"] + ([f"{cc.lower()}/{sub.lower()}.svg"] if sub else []):
            dest = os.path.join(FLAGS, *rel.split("/"))
            if os.path.exists(dest):
                continue
            if dry:
                print(f"  would fetch flag {rel}")
                continue
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            r = subprocess.run(["curl", "-sS", "-f", "-o", dest, FLAG_SRC + rel], capture_output=True)
            print(f"  flag {rel}: {'ok' if r.returncode == 0 else 'NOT on pointercrate'}")

    if dry:
        print("dry run - nothing written")
        return
    write_js("demons.js", "DEMONS", everything)
    write_js("changelog.js", "CHANGELOG", log)
    if initial:
        io.open(cfg_path, "w", encoding="utf-8", newline="\n").write(
            re.sub(r'listCreated:\s*"[^"]*"', f'listCreated: "{day}"', cfg))
    v = subprocess.run(["node", "-e", VERIFY, SITE], capture_output=True, text=True, encoding="utf-8")
    print((v.stdout or v.stderr).strip())


if __name__ == "__main__":
    main()
