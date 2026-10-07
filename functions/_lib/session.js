// Logins for the mod page: a signed cookie, no server-side storage.
//
// The session cookie holds {id, name, exp} (Discord user id, list name, expiry
// in Unix seconds) as base64url JSON, then "." and an HMAC-SHA256 of it keyed
// with env.SESSION_SECRET. Nobody can make or change one without the secret.
// The OAuth "state" cookie is signed the same way. Each kind of value is
// signed under its own label, so a state cookie can never pass as a session.
//
// Being signed in isn't enough by itself: every request also checks that the
// id is still in functions/editors.json and takes the list name from there, so
// taking someone off editors.json (and pushing) ends their access at once.

import EDITORS from "../editors.json";
import { readCookie, setCookie, clearCookie } from "./http.js";
import { checkName } from "./contract.js";

export const SESSION_COOKIE = "__Host-gb_session";
export const STATE_COOKIE = "__Host-gb_oauth";
export const SESSION_SECONDS = 7 * 24 * 60 * 60;
export const STATE_SECONDS = 10 * 60; // long enough to read Discord's consent screen

const enc = new TextEncoder();
const dec = new TextDecoder();

function b64url(bytes) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function unb64url(s) {
  if (!/^[A-Za-z0-9_-]*$/.test(s)) return null;
  try {
    const bin = atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
    return Uint8Array.from(bin, (c) => c.charCodeAt(0));
  } catch {
    return null;
  }
}

async function key(secret) {
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

// "<body>.<signature>" where the signature covers "<label>:<body>"
export async function sign(secret, label, body) {
  const sig = await crypto.subtle.sign("HMAC", await key(secret), enc.encode(label + ":" + body));
  return body + "." + b64url(new Uint8Array(sig));
}

// The body if the signature is right, otherwise null. crypto.subtle.verify
// compares in constant time.
export async function unsign(secret, label, value) {
  if (typeof value !== "string") return null;
  const i = value.lastIndexOf(".");
  if (i < 0) return null;
  const body = value.slice(0, i);
  const sig = unb64url(value.slice(i + 1));
  // only the one canonical spelling: base64 leaves 2 spare bits in the last
  // character, and a signature that verifies under two spellings is untidy
  if (!sig || sig.length !== 32 || b64url(sig) !== value.slice(i + 1)) return null;
  const ok = await crypto.subtle.verify("HMAC", await key(secret), sig, enc.encode(label + ":" + body));
  return ok ? body : null;
}

const now = () => Math.floor(Date.now() / 1000);

// --- the session --------------------------------------------------------------

export async function makeSession(secret, id, name, seconds = SESSION_SECONDS) {
  const body = b64url(enc.encode(JSON.stringify({ id, name, exp: now() + seconds })));
  return sign(secret, "session", body);
}

// {id, name, exp} from a cookie value that's genuine and not expired, else null.
export async function readSession(secret, value) {
  const body = await unsign(secret, "session", value);
  if (body === null) return null;
  let s;
  try {
    s = JSON.parse(dec.decode(unb64url(body)));
  } catch {
    return null;
  }
  if (!s || typeof s.id !== "string" || typeof s.name !== "string" || !Number.isInteger(s.exp)) return null;
  return s.exp > now() ? s : null;
}

export function sessionCookie(value) {
  return setCookie(SESSION_COOKIE, value, SESSION_SECONDS);
}

export function clearSessionCookie() {
  return clearCookie(SESSION_COOKIE);
}

// The hint static/js/modnav.js reads to show a mod "Mod panel (<name>)" in the
// menu: not HttpOnly (pages can't see the session), and it proves nothing -
// /api/me still decides who's logged in.
export const MOD_HINT_COOKIE = "gb_mod";

export function modHintCookie() {
  return `${MOD_HINT_COOKIE}=1; Path=/; Max-Age=${SESSION_SECONDS}; Secure; SameSite=Lax`;
}

export function clearModHintCookie() {
  return `${MOD_HINT_COOKIE}=; Path=/; Max-Age=0; Secure; SameSite=Lax`;
}

// --- the editors list ---------------------------------------------------------

// The list name editors.json gives a Discord id: {name} when it's there and a
// valid list name, {bad: "<why>"} when the entry is broken, null when absent.
export function editorFor(id) {
  if (typeof id !== "string" || !/^\d{1,25}$/.test(id) || !Object.hasOwn(EDITORS, id)) return null;
  try {
    return { name: checkName(EDITORS[id], "list name") };
  } catch (e) {
    return { bad: `functions/editors.json: ${e.message}` };
  }
}

// The logged-in editor for a request: {id, name} or null. The name comes from
// editors.json as it is now, not from the cookie.
export async function currentEditor(request, env) {
  const s = await readSession(env.SESSION_SECRET, readCookie(request, SESSION_COOKIE));
  if (!s) return null;
  const ed = editorFor(s.id);
  return ed && ed.name ? { id: s.id, name: ed.name } : null;
}

// --- the OAuth state ------------------------------------------------------------

export async function makeState(secret, state, seconds = STATE_SECONDS) {
  return sign(secret, "oauth-state", `${state}~${now() + seconds}`);
}

// The state a cookie value holds when it's genuine and fresh, else null.
export async function readState(secret, value) {
  const body = await unsign(secret, "oauth-state", value);
  const m = body && /^([0-9a-f]{32})~(\d+)$/.exec(body);
  return m && Number(m[2]) > now() ? m[1] : null;
}

export function stateCookie(value) {
  return setCookie(STATE_COOKIE, value, STATE_SECONDS);
}

export function clearStateCookie() {
  return clearCookie(STATE_COOKIE);
}
