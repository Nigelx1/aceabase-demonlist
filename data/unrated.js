"use strict";
// -----------------------------------------------------------------------------
// UNRATED LEVELS: the list's Rated+ view (SITE.ratedPlus; Nigel and
// Dihmaster500, 2026-10-30). These levels aren't rated in game, but they count
// in the Rated+ views of the list and the stats viewer (static/js/views.js):
// one is on the Rated+ list once someone beats it, and until then it's a Grind
// level of Rated+. A head mod puts one on with its first clear or Grind goal
// (the mod page sends add_unrated in the same batch), and edits and removes
// them in the mod page's Rated+ levels panel (tools/apply-edit.py add_unrated /
// set_unrated / remove_unrated). Clears on them go in like any other clear
// (add_record). The scheduled upkeep (tools/refresh-order.py) never reads or
// writes this file.
//
// An entry is shaped like a data/demons.js demon, without position/aredlPosition:
//   id == levelId   the Geometry Dash level id
//   difficulty      "Extreme" | "Insane": the tier it counts as (the head mod's call)
//   rating          the head mod's GD Demon Ladder rating ESTIMATE (1-50, 2 dp).
//                   It places and scores the level like any demon (DL.demonRating)
//   placeBelow      optional: the levelId of the listed demon it sits right below
//                   (0 = the very top), picked inside its window (DL.unratedSlots).
//                   Left out = placed by the estimate. A spot that no longer fits
//                   (because the list moved) is ignored until a head mod picks again.
//   records[]       { player, progress, nationality, subdivision }
//   added           "YYYY-MM-DD"
// Don't hand-edit. tools/apply-edit.py checks and writes it.
// -----------------------------------------------------------------------------

window.UNRATED = [];
