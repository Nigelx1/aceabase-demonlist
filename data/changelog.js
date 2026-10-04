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

window.CHANGELOG = [];
