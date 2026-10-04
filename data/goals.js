"use strict";
// -----------------------------------------------------------------------------
// "THE GRIND" - the levels each player is trying to beat.
//
// This is NOT the same as a player's "In Progress" row in the stats viewer:
// that row is real sub-100% records on demons already ON the list. A grind
// goal can be any Geometry Dash level, listed or not, and its progress is
// tracked here by hand.
//
// One row per (player, level). Fields:
//   player    - exact player name, as it appears in data/demons.js records
//   levelId   - the Geometry Dash level id (also the key into data/goal-levels.js,
//               unless the level is on the Demonlist, in which case demons.js wins)
//   best      - best run % from the start (number). null = unknown / not tracked
//   segments  - [[from, to], ...] practice-mode runs the player can do. optional
//   note      - freeform status line shown under the progress bar. optional
//   blurb     - "why this one" - a sentence from the player. optional
//   attempts  - attempt count. optional
//   video     - a YouTube URL to use as THIS LEVEL's showcase instead of the
//               gdladder one (e.g. the player's own recording). If several goals
//               on one level set it, the first in this file wins. optional
//   milestones- [{ date: "YYYY-MM-DD", percent: N, note?: "" }] dated log. optional
//
// Rendered as a "The Grind" section in the stats-viewer player panel (buttons)
// and, per level, on demonlist/goal.html?level=<levelId> - a page themed off
// the level's thumbnail colours (data/goal-levels.js `palette`).
// -----------------------------------------------------------------------------

window.GOALS = [];
