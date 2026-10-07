"use strict";
// -----------------------------------------------------------------------------
// LIST CHANGELOG - newest entry first.
//
// Add an entry whenever the list changes: a demon added / moved / removed, a
// scoring or tier tweak, anything worth a note. Rendered on /changelog/ and
// teased in the demonlist sidebar.
//
//   { date: "YYYY-MM-DD", items: [ ...one or more of the below... ] }
//
//   { kind: "add",    demon: "Name", demonId: 12345, at: 4,   text?: "why" }
//   { kind: "move",   demon: "Name", demonId: 12345, from: 6, to: 3 }
//   { kind: "remove", demon: "Name",                 from: 40, text?: "why" }
//   { kind: "note",   text: "free-form note" }
//
// demonId is optional (links to the demon page when it's present and the demon
// is still on the list). text is an optional extra clause on any kind.
//
// This file also drives each demon page's "Position History" table
// (DL.positionHistoryFor): the initial order is reconstructed by undoing every
// add/move/remove logged here, so ALWAYS log a position change as an `add`
// (with `at`), `move` (with `from` + `to`) or `remove` (with `from`) - an
// unlogged reorder would desync the history. `text` on a `move` becomes that
// row's reason verbatim.
// -----------------------------------------------------------------------------

window.CHANGELOG = [
  {
    "date": "2026-10-06",
    "items": [
      {
        "kind": "note",
        "text": "Joancio also cleared Windy Landscape."
      },
      {
        "kind": "note",
        "text": "New member: Joancio, from the US."
      },
      {
        "kind": "note",
        "text": "The list follows the AREDL now: extremes are ordered and scored by their AREDL placement, and everything else by its GD Demon Ladder rating on the same scale (a curve fit to the whole AREDL turns a placement into a rating). Points shift for everyone."
      },
      {
        "kind": "note",
        "text": "GD Demon Ladder ratings refreshed - 4 levels drifted (Shardscapes 32.71 → 32.77, Sonic Wave Rebirth 29.84 → 29.85, SubSonic 26.08 → 26.07, Dark Odyssey 21.02 → 21.01)."
      },
      {
        "kind": "move",
        "demon": "HyperSonic",
        "demonId": 30219145,
        "from": 22,
        "to": 21,
        "text": "The list follows the AREDL now - AREDL #1380"
      },
      {
        "kind": "move",
        "demon": "Pandemonium",
        "demonId": 72082021,
        "from": 11,
        "to": 10,
        "text": "The list follows the AREDL now - AREDL #552"
      },
      {
        "kind": "move",
        "demon": "Sonic Wave",
        "demonId": 26681070,
        "from": 8,
        "to": 7,
        "text": "The list follows the AREDL now - AREDL #382"
      },
      {
        "kind": "move",
        "demon": "Sonic Wave Rebirth",
        "demonId": 68688849,
        "from": 7,
        "to": 6,
        "text": "The list follows the AREDL now - AREDL #381"
      },
      {
        "kind": "move",
        "demon": "Bloodlust",
        "demonId": 42584142,
        "from": 5,
        "to": 4,
        "text": "The list follows the AREDL now - AREDL #256"
      },
      {
        "kind": "move",
        "demon": "Ragnarok",
        "demonId": 55624478,
        "from": 4,
        "to": 3,
        "text": "The list follows the AREDL now - AREDL #231"
      }
    ]
  },
  {
    "date": "2026-10-05",
    "items": [
      {
        "kind": "note",
        "text": "dot also cleared Bloodbath, Cataclysm, Poltergeist."
      },
      {
        "kind": "note",
        "text": "New member: dot, from Canada."
      },
      {
        "kind": "note",
        "text": "GD Demon Ladder ratings refreshed - 2 levels had drifted (Bloodbath 23.98 → 23.97, Game Time 15.05 → 15.06), so points shift a little."
      }
    ]
  },
  {
    "date": "2026-10-04",
    "items": [
      {
        "kind": "add",
        "demon": "Game Time",
        "demonId": 43945511,
        "at": 42,
        "text": "Nigel's clear"
      },
      {
        "kind": "add",
        "demon": "Stalemate",
        "demonId": 4545425,
        "at": 41,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "CraZy II",
        "demonId": 47620786,
        "at": 40,
        "text": "owen346's clear"
      },
      {
        "kind": "add",
        "demon": "Magma Bound",
        "demonId": 56568010,
        "at": 39,
        "text": "Nigel's clear"
      },
      {
        "kind": "add",
        "demon": "Windy Landscape",
        "demonId": 4957691,
        "at": 38,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "Poltergeist",
        "demonId": 7054561,
        "at": 37,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "Heritage",
        "demonId": 75078198,
        "at": 36,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "Dream Travel",
        "demonId": 59858021,
        "at": 35,
        "text": "Nigel's clear"
      },
      {
        "kind": "add",
        "demon": "Supersonic",
        "demonId": 4706930,
        "at": 34,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "8o",
        "demonId": 9145341,
        "at": 33,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "Dark Travel",
        "demonId": 32885972,
        "at": 32,
        "text": "Nigel's clear"
      },
      {
        "kind": "add",
        "demon": "MikuMikuMikuMiku",
        "demonId": 82824219,
        "at": 31,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "Acropolis",
        "demonId": 5155022,
        "at": 30,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "BuTiTi II",
        "demonId": 37259527,
        "at": 29,
        "text": "Nigel's clear"
      },
      {
        "kind": "add",
        "demon": "Invisible Deadlocked",
        "demonId": 14145098,
        "at": 28,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "CraZy III",
        "demonId": 73725400,
        "at": 27,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "add",
        "demon": "Dragonlocked",
        "demonId": 72211008,
        "at": 26,
        "text": "Dihmaster500's clear"
      },
      {
        "kind": "note",
        "text": "Insane Demons join the list: the extremes are the Main List and the insanes are the Extended List."
      },
      {
        "kind": "note",
        "text": "Rating ties now go to whichever level the AREDL places higher."
      },
      {
        "kind": "move",
        "demon": "Sonic Wave Rebirth",
        "demonId": 68688849,
        "from": 8,
        "to": 7,
        "text": "Tied with Sonic Wave on GD Demon Ladder - the AREDL places it higher"
      }
    ]
  },
  {
    "date": "2026-10-03",
    "items": [
      {
        "kind": "note",
        "text": "List created - 25 Extreme Demons from 4 players."
      }
    ]
  }
];
