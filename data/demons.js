"use strict";
// -----------------------------------------------------------------------------
// Aceabase Demonlist - EXTREME + INSANE DEMONS (no platformers). Extremes are
// the Main List, insanes the Extended List (config.js mainListSize "extremes").
//
// Don't hand-edit positions: add clears with tools/add-records.py. It pulls
// level facts from gdladder.com + gdbrowser.com, refuses anything that isn't an
// Extreme or Insane Demon, re-sorts the whole array (extremes first, then by
// DL.demonRating's value - the AREDL fit for a demon with an aredlPosition,
// else its gdladder `rating` - the AREDL breaking ties),
// renumbers `position` (id == levelId) and logs it in data/changelog.js.
//
// verifier = who in the community cleared it first (not the real-life
//   verifier); publisher/creators = the level's real GD creator.
// records[] = { player, progress, nationality (ISO code), subdivision }.
// thumbnailUrl = best available YouTube still of the showcase video.
// gd = gdbrowser facts for the demon page (length, objects, version, song).
// swapGroup = (optional, Insane Demons only) set by a head mod's swap on the
//   mod page (config.js insaneSwaps; tools/apply-edit.py swap_insanes). The
//   demons sharing one were swapped together: their own values (DL.baseRating)
//   are handed out hardest-first in their stored order (DL.demonRating), so
//   they keep the order the head mods picked through every re-sort and trade
//   points. A swap back to the unswapped order removes it. Never hand-edit it:
//   every swap is a `swap` item in data/changelog.js.
// -----------------------------------------------------------------------------

window.DEMONS = [
  {
    "id": 86084399,
    "position": 1,
    "name": "LIMBO",
    "difficulty": "Extreme",
    "rating": 36.89,
    "publisher": "MindCap",
    "creators": [
      "MindCap"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=munuzC7ymR0",
    "thumbnailUrl": "https://i.ytimg.com/vi/munuzC7ymR0/maxresdefault.jpg",
    "levelId": 86084399,
    "description": "FOCUS",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/m4eQowaesxo"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "76743",
        "name": "NH22 - Isolation",
        "artist": "NightHawk22"
      },
      "songOfficial": false
    },
    "aredlPosition": 79
  },
  {
    "id": 58161496,
    "position": 2,
    "name": "Renevant",
    "difficulty": "Extreme",
    "rating": 33.81,
    "publisher": "nikroplays",
    "creators": [
      "nikroplays"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=RpBbk8E1Z2A",
    "thumbnailUrl": "https://i.ytimg.com/vi/RpBbk8E1Z2A/maxresdefault.jpg",
    "levelId": 58161496,
    "description": "After years of effort and pain, a spirit of darkness is released to the world. Verified by Roria (Rori).",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/9TFsWFyMTek"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "710816",
        "name": "Grim Grinning Ghosts (Feat. CrusherP and Corpse Husband)",
        "artist": "TheLivingTombstone"
      },
      "songOfficial": false
    },
    "aredlPosition": 186
  },
  {
    "id": 55624478,
    "position": 3,
    "name": "Ragnarok",
    "difficulty": "Extreme",
    "rating": 32.53,
    "publisher": "Knobbelboy",
    "creators": [
      "Knobbelboy"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=ZEqy9NYHtBY",
    "thumbnailUrl": "https://i.ytimg.com/vi/ZEqy9NYHtBY/maxresdefault.jpg",
    "levelId": 55624478,
    "description": "Twilight of the Gods",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtu.be/yBZJFv_BcXE"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "343707",
        "name": "soclb - Infertehno 2",
        "artist": "SOcollab"
      },
      "songOfficial": false
    },
    "aredlPosition": 234
  },
  {
    "id": 42584142,
    "position": 4,
    "name": "Bloodlust",
    "difficulty": "Extreme",
    "rating": 31.98,
    "publisher": "Knobbelboy",
    "creators": [
      "Knobbelboy"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=xmchFBTzwds",
    "thumbnailUrl": "https://i.ytimg.com/vi/xmchFBTzwds/maxresdefault.jpg",
    "levelId": 42584142,
    "description": "Your thirst for blood continues? Very well, let the blood spill. Let the demons feed off your unfortunate soul...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/etV53-hN0ZQ"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "467339",
        "name": "At the Speed of Light",
        "artist": "Dimrain47",
        "link": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3"
      },
      "songOfficial": false
    },
    "aredlPosition": 258
  },
  {
    "id": 79997992,
    "position": 5,
    "name": "Shardscapes",
    "difficulty": "Extreme",
    "rating": 32.75,
    "publisher": "ItzKiba",
    "creators": [
      "ItzKiba"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=Sh2bK8v7amA",
    "thumbnailUrl": "https://i.ytimg.com/vi/Sh2bK8v7amA/maxresdefault.jpg",
    "levelId": 79997992,
    "description": "he's not here anymore.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/JkNkx5rTwqY"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "800646",
        "name": "Creo - Slow Down",
        "artist": "CreoMusic"
      },
      "songOfficial": false
    },
    "aredlPosition": 261
  },
  {
    "id": 68668045,
    "position": 6,
    "name": "Congregation",
    "difficulty": "Extreme",
    "rating": 31.54,
    "publisher": "Presta",
    "creators": [
      "Presta"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=Fuxe0O10s-E",
    "thumbnailUrl": "https://i.ytimg.com/vi/Fuxe0O10s-E/maxresdefault.jpg",
    "levelId": 68668045,
    "description": "verified by floofle",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 17568,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "895761",
        "name": "Purgatori",
        "artist": "Koraii",
        "link": "https://geometrydashcontent.b-cdn.net/songs/895761.mp3"
      },
      "songOfficial": false
    },
    "aredlPosition": 277
  },
  {
    "id": 68688849,
    "position": 7,
    "name": "Sonic Wave Rebirth",
    "difficulty": "Extreme",
    "rating": 29.85,
    "publisher": "Serponge",
    "creators": [
      "Serponge"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=5VWq3JL3DnA",
    "thumbnailUrl": "https://i.ytimg.com/vi/5VWq3JL3DnA/maxresdefault.jpg",
    "levelId": 68688849,
    "description": "Collab with FunnyGame, Verified by Moosh.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/SKT5YxsFzfA"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 52486,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "574484",
        "name": "F-777 - Sonic Blaster",
        "artist": "F-777"
      },
      "songOfficial": false
    },
    "aredlPosition": 387
  },
  {
    "id": 26681070,
    "position": 8,
    "name": "Sonic Wave",
    "difficulty": "Extreme",
    "rating": 29.83,
    "publisher": "lSunix",
    "creators": [
      "lSunix"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=2ZtYignaojk",
    "thumbnailUrl": "https://i.ytimg.com/vi/2ZtYignaojk/maxresdefault.jpg",
    "levelId": 26681070,
    "description": "Mythical Demon by Cyclic! Video on my YouTube.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/J7di-kFpKiA"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 23157,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "574484",
        "name": "F-777 - Sonic Blaster",
        "artist": "F-777"
      },
      "songOfficial": false
    },
    "aredlPosition": 388
  },
  {
    "id": 28220417,
    "position": 9,
    "name": "Yatagarasu ",
    "difficulty": "Extreme",
    "rating": 29.94,
    "publisher": "TrusTa",
    "creators": [
      "TrusTa"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=6eiLMjCvKdQ",
    "thumbnailUrl": "https://i.ytimg.com/vi/6eiLMjCvKdQ/maxresdefault.jpg",
    "levelId": 28220417,
    "description": "Update made by Mark Napkin and DragoonGD",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/GKit0O3brng"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "490479",
        "name": "Flawless Wings of Yatagarasu",
        "artist": "Gls"
      },
      "songOfficial": false
    },
    "aredlPosition": 395
  },
  {
    "id": 27122654,
    "position": 10,
    "name": "Artificial Ascent",
    "difficulty": "Extreme",
    "rating": 27.99,
    "publisher": "ViPriN",
    "creators": [
      "ViPriN"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=zmKI2rqyQyU",
    "thumbnailUrl": "https://i.ytimg.com/vi/zmKI2rqyQyU/maxresdefault.jpg",
    "levelId": 27122654,
    "description": "Artificial intelligence is about to surpass human possibilities. Who can still keep up? Verified by Combined.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/dDHlSYov2_U"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "63082",
        "name": "Surface",
        "artist": "Dimrain47"
      },
      "songOfficial": false
    },
    "aredlPosition": 531
  },
  {
    "id": 72082021,
    "position": 11,
    "name": "Pandemonium",
    "difficulty": "Extreme",
    "rating": 27,
    "publisher": "Yakimaru",
    "creators": [
      "Yakimaru"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=Szg3ul7uaxo",
    "thumbnailUrl": "https://i.ytimg.com/vi/Szg3ul7uaxo/maxresdefault.jpg",
    "levelId": 72082021,
    "description": "Yakimaru - Terron - Knoeppel",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/wMo8Y569-mk"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 56805,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "685746",
        "name": "Death Moon",
        "artist": "SoundHolicK"
      },
      "songOfficial": false
    },
    "aredlPosition": 559
  },
  {
    "id": 38235367,
    "position": 12,
    "name": "Quantum Processing",
    "difficulty": "Extreme",
    "rating": 27.05,
    "publisher": "Riot",
    "creators": [
      "Riot"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=7Kxm2eOPg5I",
    "thumbnailUrl": "https://i.ytimg.com/vi/7Kxm2eOPg5I/maxresdefault.jpg",
    "levelId": 38235367,
    "description": "Blast Processing turned into a hellish nightmare. Gameplay done by Hinds and myself. Deco by Hinds and Sil3nce. Verified by Rampage.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/kldiw-m3mTE"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 21269,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon"
    },
    "aredlPosition": 567
  },
  {
    "id": 27580467,
    "position": 13,
    "name": "Hatred",
    "difficulty": "Extreme",
    "rating": 26.88,
    "publisher": "AZuLer4",
    "creators": [
      "AZuLer4"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=DnQ-CG2hrZE",
    "thumbnailUrl": "https://i.ytimg.com/vi/DnQ-CG2hrZE/maxresdefault.jpg",
    "levelId": 27580467,
    "description": "Decoration by me, layout and verification by SrGuillester, Extreme Demon I guess",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/6s0oSzgcoME"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 24100,
      "gameVersion": "2.0",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "553242",
        "name": "Hate Everything",
        "artist": "Xtrullor"
      },
      "songOfficial": false
    },
    "aredlPosition": 630
  },
  {
    "id": 33387622,
    "position": 14,
    "name": "SubSonic",
    "difficulty": "Extreme",
    "rating": 26.07,
    "publisher": "ViPriN",
    "creators": [
      "ViPriN"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=8h_Zx25MQP0",
    "thumbnailUrl": "https://i.ytimg.com/vi/8h_Zx25MQP0/maxresdefault.jpg",
    "levelId": 33387622,
    "description": "Megacollab by Terron, Gboy, xcy7, Evasium, Dudex, Viprin, Rustam, TheDevon, PanMan, Sumsar & Jeyzor. Verified by Combined.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/CtzxvjTUBP8"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "614361",
        "name": "SpeedBreaker",
        "artist": "Djjaner"
      },
      "songOfficial": false
    },
    "aredlPosition": 660
  },
  {
    "id": 26133601,
    "position": 15,
    "name": "Athanatos",
    "difficulty": "Extreme",
    "rating": 25.87,
    "publisher": "IIExenityII",
    "creators": [
      "IIExenityII"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=J5cULwobUlo",
    "thumbnailUrl": "https://i.ytimg.com/vi/J5cULwobUlo/maxresdefault.jpg",
    "levelId": 26133601,
    "description": "Only the immortals will stay...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 31296,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "508568",
        "name": "The Falling Mysts",
        "artist": "Dimrain47"
      },
      "songOfficial": false
    },
    "aredlPosition": 707
  },
  {
    "id": 35448603,
    "position": 16,
    "name": "Blade of Justice",
    "difficulty": "Extreme",
    "rating": 24.96,
    "publisher": "Manix648",
    "creators": [
      "Manix648"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=7nsVpIDlfv8",
    "thumbnailUrl": "https://i.ytimg.com/vi/7nsVpIDlfv8/maxresdefault.jpg",
    "levelId": 35448603,
    "description": "POGGERS",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/vdXb8IbxZVA"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "167229",
        "name": "Goukisan - Betrayal of Fear",
        "artist": "Goukisan"
      },
      "songOfficial": false
    },
    "aredlPosition": 762
  },
  {
    "id": 59933468,
    "position": 17,
    "name": "Fusion Z",
    "difficulty": "Extreme",
    "rating": 24.51,
    "publisher": "PlebKIngdom",
    "creators": [
      "PlebKIngdom"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=62c-85eUqgs",
    "thumbnailUrl": "https://i.ytimg.com/vi/62c-85eUqgs/maxresdefault.jpg",
    "levelId": 59933468,
    "description": "Orange... mostly (Verified by LuigiDB)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "579560",
        "name": "Corrosive",
        "artist": "Xtrullor"
      },
      "songOfficial": false
    },
    "aredlPosition": 806
  },
  {
    "id": 10565740,
    "position": 18,
    "name": "Bloodbath",
    "difficulty": "Extreme",
    "rating": 23.98,
    "publisher": "Riot",
    "creators": [
      "Riot"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=shOO9UfDvfs",
    "thumbnailUrl": "https://i.ytimg.com/vi/shOO9UfDvfs/maxresdefault.jpg",
    "levelId": 10565740,
    "description": "Whose blood will be spilt in the Bloodbath? Who will the victors be? How many will survive? Good luck...",
    "requirementPercent": 100,
    "records": [
      {
        "player": "ace",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtube.com/shorts/VxY0HeH2F7c?feature=share"
      },
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/J-k2wqXo3yo"
      },
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtu.be/_kCR7M6Fr8c"
      },
      {
        "player": "dot",
        "progress": 100,
        "nationality": "CA",
        "subdivision": null
      },
      {
        "player": "zinglebob238",
        "progress": 100,
        "nationality": "GB",
        "subdivision": null,
        "video": "https://www.youtube.com/watch?v=xTvd1mbo_Pg"
      },
      {
        "player": "pixl",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 24746,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "467339",
        "name": "At the Speed of Light",
        "artist": "Dimrain47",
        "link": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3"
      },
      "songOfficial": false
    },
    "aredlPosition": 856
  },
  {
    "id": 48175126,
    "position": 19,
    "name": "Idols",
    "difficulty": "Extreme",
    "rating": 23.78,
    "publisher": "Zafkiel7",
    "creators": [
      "Zafkiel7"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=4q3B9QeHQAI",
    "thumbnailUrl": "https://i.ytimg.com/vi/4q3B9QeHQAI/maxresdefault.jpg",
    "levelId": 48175126,
    "description": "Megacollab hosted by Herdys & Zafkiel. Verified by Dorami. Bugfixed by Dosh7t. Remix by Sparkler",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/fsOicixJGmQ"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "1088817",
        "name": "\"Stars\"",
        "artist": "ItzSparkler"
      },
      "songOfficial": false
    },
    "aredlPosition": 862
  },
  {
    "id": 89976481,
    "position": 20,
    "name": "court circuit",
    "difficulty": "Extreme",
    "rating": 22.67,
    "publisher": "Fafenel",
    "creators": [
      "Fafenel"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=PWHoCIrdY7o",
    "thumbnailUrl": "https://i.ytimg.com/vi/PWHoCIrdY7o/maxresdefault.jpg",
    "levelId": 89976481,
    "description": "Huge thanks to Aymen, Agar, DraxitIII, Litoks, Regnom, Nexo, Shadowhisky1374, Spatule and M435J for playtesting ! Verified by DraxitIII, update verified by LastPrismAlex !",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "657081",
        "name": "Lit Fuse",
        "artist": "Cacola"
      },
      "songOfficial": false
    },
    "aredlPosition": 1136
  },
  {
    "id": 24301797,
    "position": 21,
    "name": "Falling Up",
    "difficulty": "Extreme",
    "rating": 21.85,
    "publisher": "KrmaL",
    "creators": [
      "KrmaL"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=LyU-iirLOCg",
    "thumbnailUrl": "https://i.ytimg.com/vi/LyU-iirLOCg/maxresdefault.jpg",
    "levelId": 24301797,
    "description": "I put a lot of work into this, hope you enjoy :) Update 4: Fixed 144hz bugs, updated Low Detail Mode",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 30806,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "683996",
        "name": "Time Leaper",
        "artist": "hinkik"
      },
      "songOfficial": false
    },
    "aredlPosition": 1287
  },
  {
    "id": 30219145,
    "position": 22,
    "name": "HyperSonic",
    "difficulty": "Extreme",
    "rating": 21,
    "publisher": "ViPriN",
    "creators": [
      "ViPriN"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=yFwPswAfvqw",
    "thumbnailUrl": "https://i.ytimg.com/vi/yFwPswAfvqw/maxresdefault.jpg",
    "levelId": 30219145,
    "description": "Megacollab by Dudex, Serponge, Manix648, Vlacc, Rustam, nasgubb, ZenthicAlpha, me, PanMan, Evasium, Etzer & Terron. Verified by Combined",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/VvGNWsRgc7o"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "684300",
        "name": "ColBreakz - 10000",
        "artist": "ColBreakz"
      },
      "songOfficial": false
    },
    "aredlPosition": 1395
  },
  {
    "id": 71728635,
    "position": 23,
    "name": "Helios",
    "difficulty": "Extreme",
    "rating": 21.13,
    "publisher": "Canonlaw",
    "creators": [
      "Canonlaw"
    ],
    "verifier": "vapixel",
    "videoUrl": "https://www.youtube.com/watch?v=DPsfOWn4ZwM",
    "thumbnailUrl": "https://i.ytimg.com/vi/DPsfOWn4ZwM/sddefault.jpg",
    "levelId": 71728635,
    "description": "Hosted by Canonlaw, Haidenn, CarlosArt16, s3batr0nic, GTrap. Verified by Easterbuny",
    "requirementPercent": 100,
    "records": [
      {
        "player": "vapixel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "793089",
        "name": "Unholy Insurgency",
        "artist": "DMDOKURO"
      },
      "songOfficial": false
    },
    "aredlPosition": 1441
  },
  {
    "id": 69010770,
    "position": 24,
    "name": "Dark Odyssey",
    "difficulty": "Extreme",
    "rating": 21,
    "publisher": "JonathanGD",
    "creators": [
      "JonathanGD"
    ],
    "verifier": "Poatan",
    "videoUrl": "https://www.youtube.com/watch?v=9OSzz-hVIdE",
    "thumbnailUrl": "https://i.ytimg.com/vi/9OSzz-hVIdE/maxresdefault.jpg",
    "levelId": 69010770,
    "description": "After about 4 years, the darkness lingers again. Everything is even darker... Can you find another light at the end of <cr>Dark Odyssey</c>?",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/lLNZv8vwlUw"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "693041",
        "name": "Dark Matter Suite (1f1n1ty + LOrbSheddy Remix)",
        "artist": "1f1n1ty"
      },
      "songOfficial": false
    },
    "aredlPosition": 1461
  },
  {
    "id": 81257586,
    "position": 25,
    "name": "Anya III",
    "difficulty": "Extreme",
    "rating": 20.87,
    "publisher": "Anya21",
    "creators": [
      "Anya21"
    ],
    "verifier": "vapixel",
    "videoUrl": "https://www.youtube.com/watch?v=VNkYNa4W4TE",
    "thumbnailUrl": "https://i.ytimg.com/vi/VNkYNa4W4TE/maxresdefault.jpg",
    "levelId": 81257586,
    "description": "Verified by Gokill - Update by Seuni",
    "requirementPercent": 100,
    "records": [
      {
        "player": "vapixel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "933704",
        "name": "Geoxor - Virtual",
        "artist": "Geoxor",
        "link": "https://geometrydashcontent.b-cdn.net/songs/933704.mp3"
      },
      "songOfficial": false
    },
    "aredlPosition": 1488
  },
  {
    "id": 3979721,
    "position": 26,
    "name": "Cataclysm",
    "difficulty": "Extreme",
    "rating": 20.92,
    "publisher": "Ggb0y",
    "creators": [
      "Ggb0y"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=X8-qbbo9Ucw",
    "thumbnailUrl": "https://i.ytimg.com/vi/X8-qbbo9Ucw/maxresdefault.jpg",
    "levelId": 3979721,
    "description": "Now w/ coins and extra death ,this level was sponsored by riot (verified)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "ace",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtube.com/shorts/VNRp9biiqDs?feature=share"
      },
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "dot",
        "progress": 100,
        "nationality": "CA",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 15214,
      "gameVersion": "2.0",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "467339",
        "name": "At the Speed of Light",
        "artist": "Dimrain47",
        "link": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3"
      },
      "songOfficial": false
    },
    "aredlPosition": 1510
  },
  {
    "id": 119259720,
    "position": 27,
    "name": "Without U",
    "difficulty": "Extreme",
    "rating": 20.16,
    "publisher": "NoobyPro27",
    "creators": [
      "NoobyPro27"
    ],
    "verifier": "vapixel",
    "videoUrl": "https://www.youtube.com/watch?v=TVSmjdx0ry0",
    "thumbnailUrl": "https://i.ytimg.com/vi/TVSmjdx0ry0/maxresdefault.jpg",
    "levelId": 119259720,
    "description": "Always in a nightmare.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "vapixel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "1311890",
        "name": "IN A NIGHTMARE (Auston Flip)",
        "artist": "AustonMusic"
      },
      "songOfficial": false
    },
    "aredlPosition": 1571
  },
  {
    "id": 81148582,
    "position": 28,
    "name": "Sweater Weather",
    "difficulty": "Extreme",
    "rating": 20.39,
    "publisher": "VelYT",
    "creators": [
      "VelYT"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=sVjC-qvuSTc",
    "thumbnailUrl": "https://i.ytimg.com/vi/sVjC-qvuSTc/maxresdefault.jpg",
    "levelId": 81148582,
    "description": "Verified by tundra77; song is in the description of the youtube video. thank you all!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://www.youtube.com/watch?v=sVjC-qvuSTc"
      },
      {
        "player": "zinglebob238",
        "progress": 100,
        "nationality": "GB",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 39561,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "1004589",
        "name": "Sweater Weather (Dako Remix)",
        "artist": "d3codeftw"
      },
      "songOfficial": false
    },
    "aredlPosition": 1603
  },
  {
    "id": 61079355,
    "position": 29,
    "name": "Acu",
    "difficulty": "Extreme",
    "rating": 20.25,
    "publisher": "neigefeu",
    "creators": [
      "neigefeu"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=zps_9e-Jz34",
    "thumbnailUrl": "https://i.ytimg.com/vi/zps_9e-Jz34/maxresdefault.jpg",
    "levelId": 61079355,
    "description": "Enjoy this extreme demon, this was a load of fun to make :)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "Poatan",
        "progress": 100,
        "nationality": "MX",
        "subdivision": null,
        "video": "https://youtu.be/VF8W5xtEZVQ"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 32291,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "723714",
        "name": "Epilogue",
        "artist": "hyperdemented"
      },
      "songOfficial": false
    },
    "aredlPosition": 1605
  },
  {
    "id": 114933189,
    "position": 30,
    "name": "Through The Decay",
    "difficulty": "Extreme",
    "rating": 20.09,
    "publisher": "sparktwo",
    "creators": [
      "sparktwo"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=kMMMx14Ks_o",
    "thumbnailUrl": "https://i.ytimg.com/vi/kMMMx14Ks_o/maxresdefault.jpg",
    "levelId": 114933189,
    "description": "Insane/Extreme demon made in 2 hours. Inspired by Forest Temple and R3XX3R. Not affiliated with The Fog.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 6739,
      "gameVersion": "2.2",
      "inGameDifficulty": "Extreme Demon",
      "song": {
        "id": "1236581",
        "name": "...and Yet It Goes Nowhere",
        "artist": "Llaappssee"
      },
      "songOfficial": false
    },
    "aredlPosition": 1607
  },
  {
    "id": 72211008,
    "position": 31,
    "name": "Dragonlocked",
    "difficulty": "Insane",
    "rating": 20.12,
    "publisher": "FrostDragonGD",
    "creators": [
      "FrostDragonGD"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=dabjVNnjl-Q",
    "thumbnailUrl": "https://i.ytimg.com/vi/dabjVNnjl-Q/maxresdefault.jpg",
    "levelId": 72211008,
    "description": "My first time trying some glow design. This is my hardest difficulty level I've created so far, GL! Verified by RyuDieDragon",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon"
    },
    "aredlPosition": null
  },
  {
    "id": 80575901,
    "position": 32,
    "name": "in canon",
    "difficulty": "Insane",
    "rating": 20.05,
    "publisher": "cordeaux",
    "creators": [
      "cordeaux"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=l1tcE2OEBSM",
    "thumbnailUrl": "https://i.ytimg.com/vi/l1tcE2OEBSM/maxresdefault.jpg",
    "levelId": 80575901,
    "description": "the gameplay on the top and bottom is the same but offset five blocks | verified by theycallmeevan",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://www.youtube.com/watch?v=E21NUDbFwAI"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 33072,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "1086825",
        "name": "Broken Shell",
        "artist": "Llaappssee"
      },
      "songOfficial": false
    },
    "aredlPosition": 1618
  },
  {
    "id": 81043147,
    "position": 33,
    "name": "Auroral Bloom",
    "difficulty": "Insane",
    "rating": 19.11,
    "publisher": "Loltad",
    "creators": [
      "Loltad"
    ],
    "verifier": "Kry",
    "videoUrl": "https://www.youtube.com/watch?v=5ULYcv_O2Fo",
    "thumbnailUrl": "https://i.ytimg.com/vi/5ULYcv_O2Fo/maxresdefault.jpg",
    "levelId": 81043147,
    "description": "Fixed again to be more authentic!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Kry",
        "progress": 100,
        "nationality": "GB",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 32936,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "1002120",
        "name": "Creo - Aurora",
        "artist": "CreoMusic"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 73725400,
    "position": 34,
    "name": "CraZy III",
    "difficulty": "Insane",
    "rating": 19.09,
    "publisher": "DavJT",
    "creators": [
      "DavJT"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=NPti8LbxTtQ",
    "thumbnailUrl": "https://i.ytimg.com/vi/NPti8LbxTtQ/maxresdefault.jpg",
    "levelId": 73725400,
    "description": "Welcome to 2.2",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "847287",
        "name": "Circus Contraption - Wicked Fascinations (DirtyPaws Remix)",
        "artist": "dirtypawsofficial",
        "link": "https://audio.ngfiles.com/847000/847287_Circus-Contraption---Wicke.mp3?f1549666114"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 14145098,
    "position": 35,
    "name": "Invisible Deadlocked",
    "difficulty": "Insane",
    "rating": 18.65,
    "publisher": "KrmaL",
    "creators": [
      "KrmaL"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=rjPllZX4FHI",
    "thumbnailUrl": "https://i.ytimg.com/vi/rjPllZX4FHI/maxresdefault.jpg",
    "levelId": 14145098,
    "description": "Think you know Deadlocked? (Verified on stream) Good luck!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 19496,
      "gameVersion": "2.0",
      "inGameDifficulty": "Insane Demon"
    },
    "aredlPosition": null
  },
  {
    "id": 95383256,
    "position": 36,
    "name": "Gensouteki",
    "difficulty": "Insane",
    "rating": 18.29,
    "publisher": "Subpixel",
    "creators": [
      "Subpixel"
    ],
    "verifier": "vapixel",
    "videoUrl": null,
    "thumbnailUrl": null,
    "levelId": 95383256,
    "description": "After over 2 years, its finally done! Thank you to everybody who partipated or supported this project along the way :] Enjoy!!!!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "vapixel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "995331",
        "name": "World Box (feat. m? tm)",
        "artist": "Miyolophone"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 61137742,
    "position": 37,
    "name": "Leyak",
    "difficulty": "Insane",
    "rating": 18.14,
    "publisher": "EnZore",
    "creators": [
      "EnZore"
    ],
    "verifier": "Kry",
    "videoUrl": "https://www.youtube.com/watch?v=wfvs8qZbFQw",
    "thumbnailUrl": "https://i.ytimg.com/vi/wfvs8qZbFQw/maxresdefault.jpg",
    "levelId": 61137742,
    "description": "a Sorcerer who has ability to shape shift into a Demon and serve Rangda [Verified by BoldStep] [Layout by Marwec and ILRELL]",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Kry",
        "progress": 100,
        "nationality": "GB",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "845356",
        "name": "Helvetican - Bufu",
        "artist": "SixImpala"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 37259527,
    "position": 38,
    "name": "BuTiTi II",
    "difficulty": "Insane",
    "rating": 17.79,
    "publisher": "JonathanGD",
    "creators": [
      "JonathanGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=Fky82YxMrjo",
    "thumbnailUrl": "https://i.ytimg.com/vi/Fky82YxMrjo/maxresdefault.jpg",
    "levelId": 37259527,
    "description": "Welcome to the beautiful future! | WARNING! This level contains dankest memes and vaporwave. | Verified by mbed | Updated boss color",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtu.be/pKfilX2PyyY"
      },
      {
        "player": "flowstate",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "684652",
        "name": "Milkshake",
        "artist": "meganeko"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 5155022,
    "position": 39,
    "name": "Acropolis",
    "difficulty": "Insane",
    "rating": 17.2,
    "publisher": "Zobros",
    "creators": [
      "Zobros"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=SSAfuCZ2cks",
    "thumbnailUrl": "https://i.ytimg.com/vi/SSAfuCZ2cks/maxresdefault.jpg",
    "levelId": 5155022,
    "description": "Easy Coin Update",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "Kry",
        "progress": 100,
        "nationality": "GB",
        "subdivision": null
      },
      {
        "player": "danieloveity",
        "progress": 100,
        "nationality": "GB",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 11082,
      "gameVersion": "2.0",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "598349",
        "name": "-Final Battle-",
        "artist": "Waterflame",
        "link": "http://audio.ngfiles.com/598000/598349_-Final-Battle-.mp3"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 82824219,
    "position": 40,
    "name": "MikuMikuMikuMiku",
    "difficulty": "Insane",
    "rating": 17.11,
    "publisher": "OddMod",
    "creators": [
      "OddMod"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=4i4qy6mizQY",
    "thumbnailUrl": "https://i.ytimg.com/vi/4i4qy6mizQY/maxresdefault.jpg",
    "levelId": 82824219,
    "description": "Original NONG song: Atama no Taisou by hapi=>",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "832007",
        "name": "FractureClutter x BouncyYak - Pandemonium",
        "artist": "FractureClutter"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 63593437,
    "position": 41,
    "name": "alika",
    "difficulty": "Insane",
    "rating": 17.05,
    "publisher": "2003devin",
    "creators": [
      "2003devin"
    ],
    "verifier": "vapixel",
    "videoUrl": "https://www.youtube.com/watch?v=UpOfN5UrT4Y",
    "thumbnailUrl": "https://i.ytimg.com/vi/UpOfN5UrT4Y/maxresdefault.jpg",
    "levelId": 63593437,
    "description": "0:",
    "requirementPercent": 100,
    "records": [
      {
        "player": "vapixel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "1218829",
        "name": "Troubles",
        "artist": "metea11"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 32885972,
    "position": 42,
    "name": "Dark Travel",
    "difficulty": "Insane",
    "rating": 16.94,
    "publisher": "JonathanGD",
    "creators": [
      "JonathanGD"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=eV4ly1ayarw",
    "thumbnailUrl": "https://i.ytimg.com/vi/eV4ly1ayarw/maxresdefault.jpg",
    "levelId": 32885972,
    "description": "The darkness lingers. Be careful who you trust... | My first 2.1 level | Viprin CC8 Entry | 208k objects | Length: 6:14 | Password = 963041",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtu.be/4RZtxK-aUEE"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "693041",
        "name": "Dark Matter Suite (1f1n1ty + LOrbSheddy Remix)",
        "artist": "1f1n1ty"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 9145341,
    "position": 43,
    "name": "8o",
    "difficulty": "Insane",
    "rating": 16.9,
    "publisher": "Zobros",
    "creators": [
      "Zobros"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=UctAJzDWozs",
    "thumbnailUrl": "https://i.ytimg.com/vi/UctAJzDWozs/maxresdefault.jpg",
    "levelId": 9145341,
    "description": "Easy",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 19210,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "624882",
        "name": "Jomekka - Eighto",
        "artist": "jomekka"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 75078198,
    "position": 44,
    "name": "Heritage",
    "difficulty": "Insane",
    "rating": 16.67,
    "publisher": "Karma8",
    "creators": [
      "Karma8"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=6KbGMRI2t8o",
    "thumbnailUrl": "https://i.ytimg.com/vi/6KbGMRI2t8o/maxresdefault.jpg",
    "levelId": 75078198,
    "description": "Gameplay by me & AgarOther. Decoration by Vit12. Verified by AgarOther.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "715502",
        "name": "-= Death From Above =-",
        "artist": "TheBiocide"
      },
      "songOfficial": false
    },
    "aredlPosition": null,
    "swapGroup": 4706930
  },
  {
    "id": 59858021,
    "position": 45,
    "name": "Dream Travel",
    "difficulty": "Insane",
    "rating": 16.79,
    "publisher": "SuprianGD ",
    "creators": [
      "SuprianGD "
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=-5YLPgXGr68",
    "thumbnailUrl": "https://i.ytimg.com/vi/-5YLPgXGr68/maxresdefault.jpg",
    "levelId": 59858021,
    "description": "Enjoy a new trip you dream of, different places and references| 5 months of creation|7:30 min| 294K Obj| 99!??| Verified: ItsAdvyStyles",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "793815",
        "name": "By Day By Night",
        "artist": "1f1n1ty"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 4706930,
    "position": 46,
    "name": "Supersonic",
    "difficulty": "Insane",
    "rating": 16.88,
    "publisher": "ZenthicAlpha",
    "creators": [
      "ZenthicAlpha"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=0G4CBc5Tq7c",
    "thumbnailUrl": "https://i.ytimg.com/vi/0G4CBc5Tq7c/maxresdefault.jpg",
    "levelId": 4706930,
    "description": "Megacollab by Glitter, Jeyzor, Sumsar, xcy-7, Daddepro, Evasium, Gboy, Viprin and me! Updated to add coins.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtu.be/k3J1FgsJ6hg"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 21371,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "467267",
        "name": "Ludicrous Speed - F-777",
        "artist": "F-777"
      },
      "songOfficial": false
    },
    "aredlPosition": null,
    "swapGroup": 4706930
  },
  {
    "id": 60619762,
    "position": 47,
    "name": "Denouement",
    "difficulty": "Insane",
    "rating": 16.62,
    "publisher": "Synactive GD",
    "creators": [
      "Synactive GD"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=ziHvsAriE3s",
    "thumbnailUrl": "https://i.ytimg.com/vi/ziHvsAriE3s/maxresdefault.jpg",
    "levelId": 60619762,
    "description": "awwww ya, collab with pocket, I made the start he made the end, whose part is better? shoutout to souly who stayed up 6 hrs to deco the wave",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 15316,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "714579",
        "name": "Glory",
        "artist": "FyremanMusic"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 7054561,
    "position": 48,
    "name": "Poltergeist",
    "difficulty": "Insane",
    "rating": 15.95,
    "publisher": "Andromeda GMD",
    "creators": [
      "Andromeda GMD"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=Amyhrr_faUg",
    "thumbnailUrl": "https://i.ytimg.com/vi/Amyhrr_faUg/maxresdefault.jpg",
    "levelId": 7054561,
    "description": "Poltergeist by Andromeda",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "dot",
        "progress": 100,
        "nationality": "CA",
        "subdivision": null
      },
      {
        "player": "Kry",
        "progress": 100,
        "nationality": "GB",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 14871,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "587870",
        "name": "NK - Poltergeist (OLD mix)",
        "artist": "Rukkus"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 4957691,
    "position": 49,
    "name": "Windy Landscape",
    "difficulty": "Insane",
    "rating": 15.78,
    "publisher": "WOOGI1411",
    "creators": [
      "WOOGI1411"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=hTX0Ch5bgMw",
    "thumbnailUrl": "https://i.ytimg.com/vi/hTX0Ch5bgMw/maxresdefault.jpg",
    "levelId": 4957691,
    "description": "Bug Fixed And Difficulty Rebalanced.... Good Luck!!!!!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "Joancio",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 10899,
      "gameVersion": "2.2",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "621135",
        "name": "TheFatRat - Windfall",
        "artist": "ThisIsTheFatRat",
        "link": "http://audio.ngfiles.com/621000/621135_TheFatRat---Windfall.mp3"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 56568010,
    "position": 50,
    "name": "Magma Bound",
    "difficulty": "Insane",
    "rating": 15.77,
    "publisher": "ScorchVx",
    "creators": [
      "ScorchVx"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=Q_ZwRocfBy4",
    "thumbnailUrl": "https://i.ytimg.com/vi/Q_ZwRocfBy4/maxresdefault.jpg",
    "levelId": 56568010,
    "description": "This took WAAAY longer than it should've.... like the rest of my levels.... I put my heart and soul into this so I hope you guys enjoy :)",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtu.be/fU-bDInjAhM"
      },
      {
        "player": "Kry",
        "progress": 100,
        "nationality": "GB",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "718171",
        "name": "cYsmix - Classic Pursuit",
        "artist": "cysmix"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 47620786,
    "position": 51,
    "name": "CraZy II",
    "difficulty": "Insane",
    "rating": 15.3,
    "publisher": "DavJT",
    "creators": [
      "DavJT"
    ],
    "verifier": "owen346",
    "videoUrl": "https://www.youtube.com/watch?v=I12UqR76CPk",
    "thumbnailUrl": "https://i.ytimg.com/vi/I12UqR76CPk/maxresdefault.jpg",
    "levelId": 47620786,
    "description": "#AdvyOUT",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "owen346",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "806733",
        "name": "Circus Contraption - Come To The Circus (DirtyPaws Remix)",
        "artist": "dirtypawsofficial",
        "link": "https://audio.ngfiles.com/806000/806733_Circus-Contraption---Come-.mp3?f1526820551"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 4545425,
    "position": 52,
    "name": "Stalemate",
    "difficulty": "Insane",
    "rating": 15.21,
    "publisher": "Nox",
    "creators": [
      "Nox"
    ],
    "verifier": "Dihmaster500",
    "videoUrl": "https://www.youtube.com/watch?v=Bc2OwdU0p-Y",
    "thumbnailUrl": "https://i.ytimg.com/vi/Bc2OwdU0p-Y/maxresdefault.jpg",
    "levelId": 4545425,
    "description": "Wow. This was tough to beat. First level with this song though!",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Dihmaster500",
        "progress": 100,
        "nationality": "US",
        "subdivision": null
      },
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtu.be/VQgKfiaoA2M"
      }
    ],
    "gd": {
      "length": "Long",
      "objects": 10564,
      "gameVersion": "1.9",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "482872",
        "name": "KzX - Stalemate",
        "artist": "Kayoszx"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  },
  {
    "id": 43945511,
    "position": 53,
    "name": "Game Time",
    "difficulty": "Insane",
    "rating": 15.06,
    "publisher": "SimilarAMZ",
    "creators": [
      "SimilarAMZ"
    ],
    "verifier": "Nigel",
    "videoUrl": "https://www.youtube.com/watch?v=xd7NDbq8Q2k",
    "thumbnailUrl": "https://i.ytimg.com/vi/xd7NDbq8Q2k/maxresdefault.jpg",
    "levelId": 43945511,
    "description": "I finally finished this level! I used 79983objs and 999IDs...Pass is 643344,please enjoy!But I recommend doing practice mode.",
    "requirementPercent": 100,
    "records": [
      {
        "player": "Nigel",
        "progress": 100,
        "nationality": "US",
        "subdivision": null,
        "video": "https://youtu.be/zPoPvhbq-YA"
      }
    ],
    "gd": {
      "length": "XL",
      "objects": 65535,
      "gameVersion": "2.1",
      "inGameDifficulty": "Insane Demon",
      "song": {
        "id": "284253",
        "name": "Blippblipp (modern 8bit)",
        "artist": "Bunnymajs"
      },
      "songOfficial": false
    },
    "aredlPosition": null
  }
];
