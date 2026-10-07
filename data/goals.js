"use strict";
// -----------------------------------------------------------------------------
// "THE GRIND" - the levels each player is trying to beat.
//
// This is NOT the same as a player's "In Progress" row in the stats viewer:
// that row is real sub-100% records on demons already ON the list. A grind
// goal can be any Geometry Dash level, listed or not, and its progress is
// tracked here by hand. The one overlap: a goal with a run longer than
// SITE.grindInProgress (50%) is ALSO listed in In Progress - display only.
//
// One row per (player, level). Fields:
//   player    - exact player name, as it appears in data/demons.js records
//   levelId   - the Geometry Dash level id (also the key into data/goal-levels.js,
//               unless the level is on the Demonlist, in which case demons.js wins)
//   best      - best run % from the start (number). null = unknown / not tracked
//   segments  - [[from, to], ...] practice-mode runs the player can do. optional
//               Only add a run that isn't completely inside another one (5-25
//               is left out when there's a 5-26). Repeats go in `note`.
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

window.GOALS = [
  { player: "ace", levelId: 42584142, best: null, segments: [[67, 85], [71, 92], [75, 93], [80, 96], [88, 100]], note: "75–93 twice." }, // Bloodlust
  { player: "ace", levelId: 26681070, best: 38, segments: [[20, 45]] }, // Sonic Wave (on the list)
  { player: "ace", levelId: 58811846, best: 16 }, // Astral Divinity
  { player: "Dihmaster500", levelId: 59075347, best: 10, segments: [[3, 13], [5, 26], [13, 28], [63, 75], [79, 100]], note: "10% five times." }, // Tartarus
  { player: "Dihmaster500", levelId: 27690100, best: 55, segments: [[41, 93], [67, 100]] }, // Slaughterhouse
  { player: "Poatan", levelId: 68668045, best: 63, segments: [[42, 100]] }, // Congregation
  { player: "Jaiden", levelId: 27122654, best: 77, segments: [[40, 100]] }, // Artificial Ascent
  { player: "Jesus", levelId: 27122654, best: 0, note: "Haven't started." }, // Artificial Ascent
  { player: "hesoaring", levelId: 10565740, best: 49, segments: [[33, 92], [70, 100]] }, // Bloodbath (on the list)
  { player: "Joancio", levelId: 10565740, best: 44 }, // Bloodbath (on the list)
  // Nigel's, ported from his own list (his own recordings as the showcases)
  { player: "Nigel", levelId: 68668045, best: 39, segments: [[11, 53], [42, 100]], video: "https://youtu.be/Fuxe0O10s-E" }, // Congregation
  { player: "Nigel", levelId: 92466083, best: 0, note: "Haven't started ✌️", video: "https://youtu.be/wxyYAuMYq5o" }, // Jupiter My Favourite
  { player: "zinglebob238", levelId: 38235367, best: 58, segments: [[48, 100]] }, // Quantum Processing (on the list)
  { player: "zinglebob238", levelId: 23262780, best: 45, segments: [[32, 73], [80, 100]] }, // Sakupen Hell
  { player: "aura", levelId: 37259527, best: 0 }, // BuTiTi II (on the list)
];
