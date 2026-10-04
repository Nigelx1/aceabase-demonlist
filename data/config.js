"use strict";
// -----------------------------------------------------------------------------
// SITE CONFIGURATION - a plain JS object the pages read directly (no server).
// -----------------------------------------------------------------------------

window.SITE = {
  name: "Aceabase Demonlist",
  tagline: "The Extreme Demon list for ace's community",
  description:
    "Aceabase Demonlist ranks every Extreme Demon beaten by ace and the active members of her server.",

  // Extreme Demons only - tools/add-records.py refuses anything else.
  extremesOnly: true,

  // Day the list went live: the "Added to list" date in each demon's Position
  // History for the first batch (tools/add-records.py --initial sets it).
  listCreated: "2026-10-03",

  // Tiers: the top mainListSize demons are the Main List, everything after is
  // the Extended List (extendedListSize null = no Legacy tier). Display split
  // only - scoring is by difficulty rating, see SCORING below.
  mainListSize: 10,
  extendedListSize: null,

  // Discord invite URL -> shows the Discord panel; null hides it.
  discordInvite: "https://discord.gg/aceabase",

  // Sidebar "List Editors" / "List Helpers". Real names only, no guesses.
  editors: [{ name: "Nigel" }, { name: "Dihmaster500" }, { name: "Poatan" }],
  helpers: [],

  // The community roster. Members with no clears yet still get a
  // (0-point) spot in the stats viewer - and so their Grind goals.
  members: [
    { name: "ace", nationality: "US" },
    { name: "Nigel", nationality: "US", subdivision: "IL" },
    { name: "Dihmaster500", nationality: "US" },
    { name: "Poatan", nationality: "MX" },
    { name: "owen346", nationality: "US" },
    { name: "Jaiden", nationality: "US" },
    { name: "hesoaring", nationality: "US" },
  ],

  // Home page columns.
  about: [
    {
      title: "The list",
      text: "Extreme Demons only. Every one beaten by ace or the active members of her server, ranked hardest-first by GD Demon Ladder's difficulty rating. The top 10 are the Main List and everything after that is the Extended List.",
    },
    {
      title: "Scoring",
      text: "Each extreme is worth points based on its GD Demon Ladder difficulty rating, on a steep curve fit to the AREDL - the hardest extremes are worth far more than the rest. Your score is the sum of every demon you've completed.",
    },
    {
      title: "The community",
      text: "A list for ace and the active members of her Discord server. Records come from members' gdladder profiles, so there's no public submission form - talk to a list editor if something's off.",
    },
  ],

  // /guidelines/ page.
  guidelines: [
    "Only rated Extreme Demons are eligible - no platformers.",
    "A record counts once it's a full 100% completion.",
    "Records come from your gdladder profile or a video of the full run.",
    "Mods/hacks that trivialize gameplay are not allowed unless explicitly permitted for that level.",
  ],

  // SCORING - a 100% is worth topScore * base ^ (rating - topRating), where
  // rating is the demon's gdladder difficulty rating and topRating the highest
  // on the list. Curve shape fit to the AREDL: each -1.0 of rating divides
  // points by ~1.18. No floor. Function: DL.scoreAt100 in static/js/list-utils.js.
  scoring: {
    topScore: 500,
    base: 1.176,
    legacyScore: 2,
    requirementScoreFraction: 0.25,
  },
};
