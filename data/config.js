"use strict";
// -----------------------------------------------------------------------------
// SITE CONFIGURATION - a plain JS object the pages read directly (no server).
// -----------------------------------------------------------------------------

window.SITE = {
  name: "Aceabase Demonlist",
  tagline: "The Extreme and Insane Demon list for ace's community",
  description:
    "Aceabase Demonlist ranks every Extreme and Insane Demon beaten by ace and the active members of her server.",

  // Difficulties allowed on the list, in rank order: every Extreme sits above
  // every Insane. tools/add-records.py refuses anything else.
  allowedDifficulties: ["Extreme", "Insane"],
  // What the demonlist page says each section is (static/js/demonlist.js).
  listBlurbs: {
    main: "Every Extreme Demon on the list.",
    extended: "Every Insane Demon on the list. A 100% counts in full; a run over 50% counts for a quarter of its points times the run (in full in the Future views).",
  },

  // Day the list went live: the "Added to list" date in each demon's Position
  // History for the first batch (tools/add-records.py --initial sets it).
  listCreated: "2026-10-03",

  // Tiers: "extremes" = the Main List is exactly the Extreme Demons and the
  // Extended List is everything after them (the insanes). A number instead
  // means "the top N". extendedListSize null = no Legacy tier. Display split
  // only - scoring is by difficulty rating, see SCORING below.
  mainListSize: "extremes",
  extendedListSize: null,

  // The Grind -> stats viewer "In Progress" (Poatan's compromise, since The
  // Grind allows tiny runs): a goal in data/goals.js where the player has a run
  // LONGER than this % - from 0, or a practice run like 42-100 - also shows in
  // their In Progress row (and their nation's). It's also where in-progress
  // points start (inProgressPoints, below), and what the Future view counts as
  // beaten (futureList, below). null = off.
  grindInProgress: 50,

  // In-progress points (Nigel and Dihmaster500, 2026-10-30, like pointercrate's
  // progress records): a level someone hasn't beaten, with a run on it longer
  // than grindInProgress (from 0 or a practice run, in the Grind or a record
  // under 100%), counts for this share of the level's points times their longest
  // run. A 76% run on a 500-point level: 0.25 x 500 x 0.76 = 95. The level's
  // points are capped at topScore, so a level harder than the #1 is worth no
  // more than the #1. A level that isn't on the list still counts in the views
  // that don't show it (Current), on that view's curve. A clear gives full
  // points instead. The Current views only (static/js/views.js
  // DL.inProgressScores): the Future views count the run as a clear instead.
  // null = off.
  inProgressPoints: 0.25,

  // Future (Dihmaster500's idea): "Future" in the Time option on the list and
  // the stats viewer (static/js/views.js): the list with every off-list level
  // in someone's In Progress (above) added where it would go, and every level's
  // points and everyone's score worked out again. It's "what if everyone
  // finishes" (Nigel, 2026-10-30): every level in someone's In Progress counts
  // as beaten for them, with its full points - the stats viewer lists it in
  // their Beaten row with the % they have now ("Slaughterhouse (76%)").
  // The old page, demonlist/future.html, only redirects here now.
  futureList: true,

  // Future+ (Nigel and Dihmaster500, 2026-10-30): "Future+" in the Time option:
  // the same with every off-list level in anyone's Grind, at any progress
  // (the old future.html?plus redirects here); every level in someone's Grind,
  // and every record under 100%, counts as beaten for them.
  futurePlus: true,

  // Rated+ (Nigel and Dihmaster500, 2026-10-30): the Rating option on the list and
  // the stats viewer (Rated / Rated+). Rated+ adds the unrated levels the head mods
  // put on it (data/unrated.js, mod page > Add a clear / Grind) once someone has
  // beaten them. They are placed and scored by their GD Demon Ladder estimate like
  // any other level. Until someone beats one, it's a Grind level of Rated+: it
  // joins the Future views like one, and in Current + Rated+ a run on it over
  // grindInProgress scores in-progress points. The Rated views have no unrated
  // levels at all. Off = no Rating option, and unrated levels show nowhere.
  ratedPlus: true,
  // How far a head mod can move an unrated level by hand among its neighbors, in
  // rating points either side of its estimate (DL.unratedSlots; tools/apply-edit.py
  // slot_ok). Its points always come from the estimate. Default 1.
  unratedWindow: 1,

  // Discord invite URL -> shows the Discord panel; null hides it.
  discordInvite: "https://discord.gg/aceabase",

  // Night Cabin (Nigel, 2026-10-31): the list's own theme next to pointercrate's
  // look - deep navy, cream text and honey lamplight (static/css/theme-cabin.css,
  // linked in every page's <head>). Each viewer switches with the moon button in
  // the top bar, and their browser remembers it (static/js/theme.js);
  // pointercrate's look stays the default. null = pointercrate's look only, no
  // button.
  theme: "cabin",

  // Sidebar "List Mods" (pointercrate's List Editors panel): head: true = head mod,
  // shown first and in bold. Keep it in step with functions/editors.json, which
  // is what the mod page logs people in with (Discord id -> name + role).
  editors: [
    { name: "Nigel", head: true },
    { name: "Dihmaster500", head: true },
    { name: "Poatan", head: true },
    { name: "aura", head: true },
    { name: "ace" },
    { name: "hesoaring" },
    { name: "Jaiden" },
  ],
  helpers: [],

  // The community roster. Members with no clears yet still get a
  // (0-point) spot in the stats viewer - and so their Grind goals.
  // Country-based: players are ranked by country only, no states or provinces
  // (Nigel, 2026-10-06). The stats viewer hides its subdivision controls.
  subdivisions: false,

  members: [
    { name: "ace", nationality: "US" },
    { name: "Nigel", nationality: "US" },
    { name: "Dihmaster500", nationality: "US" },
    { name: "Poatan", nationality: "MX" },
    { name: "owen346", nationality: "US" },
    { name: "dot", nationality: "CA" },
    { name: "Joancio", nationality: "US" },
    { name: "zinglebob238", nationality: "GB" },
    { name: "pixl", nationality: "US" },
    { name: "flowstate", nationality: "US" },
    { name: "vapixel", nationality: "US" },
    { name: "Kry", nationality: "GB" },
    { name: "Jesus", nationality: "US" },
    { name: "Jaiden", nationality: "CA" },
  ],

  // Home page columns.
  about: [
    {
      title: "The list",
      text: "Extreme and Insane Demons beaten by ace or the active members of her server, ranked hardest-first: the extremes in AREDL order, the insanes by GD Demon Ladder's difficulty rating. The extremes are the Main List and the insanes are the Extended List.",
    },
    {
      title: "Scoring",
      text: "Each demon is worth points based on how hard it is - for an extreme, its AREDL placement, turned into a GD Demon Ladder-style rating by a curve fit to the whole AREDL; for an insane, its GD Demon Ladder rating - on a steep curve fit to the AREDL's extremes and carried straight down through the insanes. The hardest extremes are worth far more than the rest. Your score is the sum of every demon you've completed, plus a quarter of a demon's points times your run for any run longer than 50% on one you haven't beaten yet.",
    },
    {
      title: "The community",
      text: "A list for ace and the active members of her Discord server. Records come from members' gdladder profiles, so there's no public submission form - talk to a list editor if something's off.",
    },
  ],

  // /guidelines/ page.
  guidelines: [
    "Only rated Extreme and Insane Demons are eligible - no platformers.",
    "Unrated levels the head mods add count only in the Rated+ views.",
    "A record counts in full once it's a 100% completion.",
    "A run longer than 50% on a level you haven't beaten (from 0, or a practice run like 42-100) counts for a quarter of the level's points times the run. Only your longest run on it counts, and beating it replaces it with the full points.",
    "Records come from your gdladder profile or a video of the full run.",
    "Mods/hacks that trivialize gameplay are not allowed unless explicitly permitted for that level.",
  ],

  // AREDL FIT - tools/refresh-order.py fits a GD Demon Ladder-style rating to
  // an AREDL placement over the whole AREDL: rating = a + b * position^exponent.
  // Extremes on the AREDL are ordered and scored by it (DL.demonRating), so the
  // list follows AREDL placement; everything else uses its own GDDL rating.
  aredlFit: { a: 43.9258, b: -1.471249, exponent: 0.38, points: 1579, r2: 0.9728, fitted: "2026-10-29" },
  // SCORING - a 100% is worth topScore * base ^ (rating - topRating), where
  // rating is DL.demonRating (an extreme's AREDL placement through aredlFit,
  // otherwise the gdladder difficulty rating) and topRating the highest
  // on the list. Curve shape fit to the AREDL: each -1.0 of rating divides
  // points by ~1.18. No floor. Function: DL.scoreAt100 in static/js/list-utils.js.
  scoring: {
    topScore: 500,
    base: 1.176,
    legacyScore: 2,
    requirementScoreFraction: 0.25,
  },
};
