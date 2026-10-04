"use strict";
// -----------------------------------------------------------------------------
// Aceabase Demonlist - EXTREME DEMONS ONLY (no platformers).
//
// Don't hand-edit positions: add clears with tools/add-records.py. It pulls
// level facts from gdladder.com + gdbrowser.com, refuses anything that isn't an
// Extreme Demon, re-sorts the whole array by gdladder `rating` (hardest first),
// renumbers `position` (id == levelId) and logs it in data/changelog.js.
//
// verifier = who in the community cleared it first (not the real-life
//   verifier); publisher/creators = the level's real GD creator.
// records[] = { player, progress, nationality (ISO code), subdivision }.
// thumbnailUrl = best available YouTube still of the showcase video.
// gd = gdbrowser facts for the demon page (length, objects, version, song).
// -----------------------------------------------------------------------------

window.DEMONS = [];
