import { v4 as uuidv4 } from "uuid";

type Rarity =
  | "common"
  | "rare"
  | "super rare"
  | "epic"
  | "mythical"
  | "legendary";

type Item = {
  name: string;
  rarity: Rarity;
  chance: number;
  image: string;
};

type LootBoxType = "crate" | "starrdrop" | "skin" | "summon";

type LootBox = {
  id: string;
  name: string;
  game: string;
  type: LootBoxType;
  background: string;
  backgroundImage: string;
  image: string;
  drops: Item[];
};

export const availableLootBoxes: LootBox[] = [
  {
    id: uuidv4(),
    name: "Quantum Cache",
    game: "Chrono Nexus",
    type: "crate",
    background: "bg-gradient-to-br from-blue-700 to-cyan-600",
    backgroundImage: "/images/backgrounds/normal-lootbox-bg.jpg",
    image: "/images/lootboxes/normal-lootbox.png",
    drops: [
      {
        name: "Temporal Fragment",
        rarity: "common",
        chance: 40,
        image: "/images/drops/transparentshard.webp",
      },
      {
        name: "Quantum Drive",
        rarity: "common",
        chance: 35,
        image: "/images/drops/quantumdrive.png",
      },
      {
        name: "Dilation Helmet",
        rarity: "common",
        chance: 50,
        image: "/images/drops/dilationhelmet.png",
      },
      {
        name: "Thermal Redshift",
        rarity: "rare",
        chance: 15,
        image: "/images/drops/thermalredshift.webp",
      },
      {
        name: "Singularity Stabilizer",
        rarity: "rare",
        chance: 30,
        image: "/images/drops/singularitystabilizer.png",
      },
      {
        name: "Chrono Gear",
        rarity: "rare",
        chance: 20,
        image: "/images/drops/chronogear.webp",
      },
      {
        name: "Rare Circuitry",
        rarity: "rare",
        chance: 16,
        image: "/images/drops/circuitry.png",
      },
      {
        name: "Warp Drive",
        rarity: "super rare",
        chance: 12,
        image: "/images/drops/warpdrive.png",
      },
      {
        name: "Void Energy Capsule",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/voidenergycapsule.png",
      },
      {
        name: "Celestial Compass",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/celestialcompass.png",
      },
      {
        name: "Eclipse Saber",
        rarity: "epic",
        chance: 7,
        image: "/images/drops/eclipsesaber.webp",
      },
      {
        name: "Timekeeper Artifact",
        rarity: "epic",
        chance: 8,
        image: "/images/drops/timekeeper.png",
      },
      {
        name: "Nova Reactor",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/novareactor.png",
      },
      {
        name: "Eternal Nexus Core",
        rarity: "mythical",
        chance: 2,
        image: "/images/drops/nexuscore.webp",
      },

      {
        name: "Stellar Forge Core",
        rarity: "mythical",
        chance: 1,
        image: "/images/drops/stellarforge.png",
      },
      {
        name: "Infinity Tesseract",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/infinitytessaract.webp",
      },
      {
        name: "Dyson Sphere",
        rarity: "legendary",
        chance: 0.25,
        image: "/images/drops/dysonsphere.png",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Star Drop",
    game: "Galaxy Adventures",
    type: "starrdrop",
    background: "bg-gradient-to-r from-amber-600 to-yellow-500",
    backgroundImage: "/images/backgrounds/starr.jpeg",
    image: "/images/lootboxes/starr-drop.webp",
    drops: [
      {
        name: "Stardust Pebble",
        rarity: "common",
        chance: 45,
        image: "/images/drops/stardust.png",
      },
      {
        name: "Solar Flare Core",
        rarity: "common",
        chance: 30,
        image: "/images/drops/solarflarecore.png",
      },
      {
        name: "Asteroid Core",
        rarity: "rare",
        chance: 25,
        image: "/images/drops/asteroid.webp",
      },
      {
        name: "Lunar Fragment",
        rarity: "rare",
        chance: 20,
        image: "/images/drops/lunarfragment.png",
      },
      {
        name: "Galactic Particle",
        rarity: "rare",
        chance: 15,
        image: "/images/drops/galacticparticle.png",
      },
      {
        name: "Nebula Crystal",
        rarity: "super rare",
        chance: 12,
        image: "/images/drops/nebulacrystal.png",
      },
      {
        name: "Eclipse Lens",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/eclipselens.png",
      },
      {
        name: "Cosmic Relic",
        rarity: "epic",
        chance: 10,
        image: "/images/drops/cosmicrelic.webp",
      },
      {
        name: "Gravity Wave Orb",
        rarity: "epic",
        chance: 8,
        image: "/images/drops/gravitywaveorb.png",
      },

      {
        name: "Black Hole Shard",
        rarity: "mythical",
        chance: 4.8,
        image: "/images/drops/blackholeshard.webp",
      },
      {
        name: "Starforge Ingot",
        rarity: "mythical",
        chance: 2.5,
        image: "/images/drops/starforgeingot.webp",
      },
      {
        name: "Galactic Crown",
        rarity: "legendary",
        chance: 1,
        image: "/images/drops/crown.png",
      },
      {
        name: "Universal Keystone",
        rarity: "legendary",
        chance: 1,
        image: "/images/drops/universalkeystone.webp",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Mega Crystal",
    game: "Transformers",
    type: "summon",
    background: "bg-gradient-to-r from-red-600 to-orange-600",
    backgroundImage: "/images/backgrounds/summoner_crystal.avif",
    image: "/images/lootboxes/summoner-crystal.webp",
    drops: [
      {
        name: "Prowl",
        rarity: "common",
        chance: 8,
        image: "/images/drops/prowl.png",
      },
      {
        name: "Sideswipe",
        rarity: "common",
        chance: 8,
        image: "/images/drops/sideswipe.png",
      },
      {
        name: "Sunstreaker",
        rarity: "common",
        chance: 8,
        image: "/images/drops/sunstreaker.png",
      },
      {
        name: "Blurr",
        rarity: "common",
        chance: 8,
        image: "/images/drops/blurr.png",
      },
      {
        name: "Kup",
        rarity: "common",
        chance: 8,
        image: "/images/drops/kup.png",
      },
      {
        name: "Blackout",
        rarity: "common",
        chance: 8,
        image: "/images/drops/blackout.png",
      },
      {
        name: "Grindor",
        rarity: "common",
        chance: 8,
        image: "/images/drops/grindor.png",
      },
      {
        name: "Barricade",
        rarity: "common",
        chance: 8,
        image: "/images/drops/barricade.png",
      },
      {
        name: "Arcee",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/arcee.webp",
      },
      {
        name: "Wheeljack",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/wheeljack.png",
      },
      {
        name: "Cyclonus",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/cyclonus.png",
      },
      {
        name: "Skorponok",
        rarity: "rare",
        chance: 10,
        image: "/images/drops/skorponok.png",
      },
      {
        name: "Jazz",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/jazz.png",
      },
      {
        name: "Ironhide",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/ironhide.png",
      },
      {
        name: "Ratchet",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/ratchet.png",
      },
      {
        name: "Starscream",
        rarity: "super rare",
        chance: 7,
        image: "/images/drops/starscream.png",
      },
      {
        name: "Skywarp",
        rarity: "super rare",
        chance: 7,
        image: "/images/drops/skywarp.png",
      },
      {
        name: "Bumblebee",
        rarity: "epic",
        chance: 7,
        image: "/images/drops/bumblebee.webp",
      },
      {
        name: "Hot Rod",
        rarity: "epic",
        chance: 7,
        image: "/images/drops/hotrod.png",
      },
      {
        name: "Soundwave",
        rarity: "epic",
        chance: 7,
        image: "/images/drops/soundwave.webp",
      },
      {
        name: "Shatter",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/shatter.png",
      },
      {
        name: "Breakdown",
        rarity: "epic",
        chance: 4,
        image: "/images/drops/breakdown.png",
      },
      {
        name: "Shockwave",
        rarity: "mythical",
        chance: 3,
        image: "/images/drops/shockwave.png",
      },

      {
        name: "Ultra Magnus",
        rarity: "mythical",
        chance: 3,
        image: "/images/drops/ultramagnus.webp",
      },
      {
        name: "Grimlock",
        rarity: "mythical",
        chance: 3,
        image: "/images/drops/grimlock.png",
      },
      {
        name: "Rodimus Prime",
        rarity: "legendary",
        chance: 1,
        image: "/images/drops/rodimus.png",
      },
      {
        name: "Optimus Prime",
        rarity: "legendary",
        chance: 1,
        image: "/images/drops/optimus.png",
      },
      {
        name: "Megatron",
        rarity: "legendary",
        chance: 1,
        image: "/images/drops/megatron.png",
      },
    ],
  },

  {
    id: uuidv4(),
    name: "Treasure Horde",
    game: "Adventure Saga",
    type: "crate",
    background: "bg-gradient-to-r from-green-700 to-emerald-600",
    backgroundImage: "/images/backgrounds/lootcrate.jpg",
    image: "/images/lootboxes/loot-crate.png",
    drops: [
      {
        name: "Bronze Coin",
        rarity: "common",
        chance: 50,
        image: "/images/drops/coins.webp",
      },
      {
        name: "Rusty Key",
        rarity: "common",
        chance: 40,
        image: "/images/drops/rustykey.webp",
      },
      {
        name: "Old Map",
        rarity: "common",
        chance: 35,
        image: "/images/drops/oldmap.png",
      },
      {
        name: "Silver Dagger",
        rarity: "rare",
        chance: 20,
        image: "/images/drops/silverdagger.png",
      },
      {
        name: "Traveler's Cloak",
        rarity: "rare",
        chance: 18,
        image: "/images/drops/travelerscloak.webp",
      },
      {
        name: "Ancient Scroll",
        rarity: "rare",
        chance: 15,
        image: "/images/drops/ancientscroll.webp",
      },
      {
        name: "Battle Axe",
        rarity: "rare",
        chance: 15,
        image: "/images/drops/battleaxe.png",
      },
      {
        name: "Golden Chalice",
        rarity: "super rare",
        chance: 12,
        image: "/images/drops/goldenchalice.png",
      },
      {
        name: "Ruby Ring",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/rubyring.webp",
      },
      {
        name: "Sapphire Pendant",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/sapphirependant.webp",
      },
      {
        name: "Emerald Amulet",
        rarity: "epic",
        chance: 10,
        image: "/images/drops/emeraldamulet.png",
      },
      {
        name: "Phoenix Feather",
        rarity: "epic",
        chance: 8,
        image: "/images/drops/phoenixfeather.png",
      },
      {
        name: "Armor of Ages",
        rarity: "epic",
        chance: 7,
        image: "/images/drops/armorofages.png",
      },
      {
        name: "Obsidian Blade",
        rarity: "epic",
        chance: 5,
        image: "/images/drops/obsidianblade.png",
      },
      {
        name: "Crown of Kings",
        rarity: "mythical",
        chance: 4,
        image: "/images/drops/kingscrown.png",
      },

      {
        name: "Ogre's Club",
        rarity: "mythical",
        chance: 3,
        image: "/images/drops/ogreclub.png",
      },
      {
        name: "Great Helm",
        rarity: "mythical",
        chance: 1,
        image: "/images/drops/greathelm.webp",
      },
      {
        name: "Dragon Claw",
        rarity: "legendary",
        chance: 2,
        image: "/images/drops/dragonrelic.png",
      },
      {
        name: "Eternal Helm",
        rarity: "legendary",
        chance: 1,
        image: "/images/drops/eternalhelm.webp",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Aether Gate",
    game: "Gacha Adventures",
    type: "summon",
    background: "bg-gradient-to-r from-purple-700 to-indigo-600",
    backgroundImage: "/images/backgrounds/gachaportal.jpg",
    image: "/images/lootboxes/gacha_crystal.webp",
    drops: [
      {
        name: "Spirit Shard",
        rarity: "common",
        chance: 48,
        image: "/images/drops/spiritshard.png",
      },
      {
        name: "Gleaming Pearl",
        rarity: "common",
        chance: 45,
        image: "/images/drops/gleamingpearl.png",
      },
      {
        name: "Galaxy Essence",
        rarity: "common",
        chance: 40,
        image: "/images/drops/galaxyessence.png",
      },
      {
        name: "Inactive Runestone",
        rarity: "common",
        chance: 40,
        image: "/images/drops/inactiverunestonefragment.png",
      },
      {
        name: "Mystic Charm",
        rarity: "rare",
        chance: 22,
        image: "/images/drops/mysticcharm.png",
      },
      {
        name: "Crystalline Mirror",
        rarity: "rare",
        chance: 20,
        image: "/images/drops/crystallinemirror.webp",
      },
      {
        name: "Runestone Fragment",
        rarity: "rare",
        chance: 18,
        image: "/images/drops/runestonefragment.png",
      },
      {
        name: "Ethereal Fragment",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/etherealfragment.png",
      },
      {
        name: "Twilight Orb",
        rarity: "super rare",
        chance: 9,
        image: "/images/drops/twilightorb.png",
      },
      {
        name: "Arcane Relic",
        rarity: "epic",
        chance: 8,
        image: "/images/drops/arcanerelic.png",
      },
      {
        name: "Celestial Talisman",
        rarity: "epic",
        chance: 7,
        image: "/images/drops/celestialtalisman.png",
      },
      {
        name: "Runestone Rift",
        rarity: "epic",
        chance: 7,
        image: "/images/drops/runestonerift.webp",
      },
      {
        name: "Void Essence",
        rarity: "mythical",
        chance: 4.5,
        image: "/images/drops/voidessence.png",
      },
      {
        name: "Abyssal Drive",
        rarity: "mythical",
        chance: 3.5,
        image: "/images/drops/abyssdrive.png",
      },
      {
        name: "Nether Crystal",
        rarity: "legendary",
        chance: 2,
        image: "/images/drops/nethercrystal.gif",
      },
      {
        name: "Starlight Prism",
        rarity: "legendary",
        chance: 0.5,
        image: "/images/drops/starlightprism.webp",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Chromatic Case",
    game: "Battle Royale Legends",
    type: "skin",
    background: "bg-gradient-to-r from-orange-600 to-yellow-500",
    backgroundImage: "/images/backgrounds/skincrate.jpg",
    image: "/images/lootboxes/skin-crate.png",
    drops: [
      {
        name: "Basic Infantryman",
        rarity: "common",
        chance: 50,
        image: "/images/drops/basicgrunt.png",
      },
      {
        name: "Hoplite Grunt",
        rarity: "common",
        chance: 40,
        image: "/images/drops/hoplite.png",
      },
      {
        name: "Laser Drone",
        rarity: "common",
        chance: 45,
        image: "/images/drops/laserdrone.png",
      },
      {
        name: "Cyber Scout",
        rarity: "common",
        chance: 40,
        image: "/images/drops/cyberscout.png",
      },
      {
        name: "Elite Trooper",
        rarity: "rare",
        chance: 20,
        image: "/images/drops/trooper.png",
      },
      {
        name: "Exo Suit",
        rarity: "rare",
        chance: 20,
        image: "/images/drops/exosuit.png",
      },
      {
        name: "Plasma Rifleman",
        rarity: "rare",
        chance: 18,
        image: "/images/drops/plasmarifleman.webp",
      },
      {
        name: "Athenian Spearman",
        rarity: "rare",
        chance: 15,
        image: "/images/drops/athenian.png",
      },
      {
        name: "Super Soldier",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/supersoldier.png",
      },
      {
        name: "EMPilot",
        rarity: "super rare",
        chance: 11,
        image: "/images/drops/EMPilot.webp",
      },
      {
        name: "Nanobot Guardian",
        rarity: "super rare",
        chance: 12,
        image: "/images/drops/nanobot.png",
      },
      {
        name: "Rogue Raider",
        rarity: "epic",
        chance: 10,
        image: "/images/drops/raider.png",
      },
      {
        name: "Voidwalker",
        rarity: "epic",
        chance: 8,
        image: "/images/drops/voidwalker.webp",
      },
      {
        name: "Barbarian King",
        rarity: "epic",
        chance: 9,
        image: "/images/drops/barbarianking.png",
      },
      {
        name: "Neon Apex",
        rarity: "mythical",
        chance: 8,
        image: "/images/drops/radiantrobot.png",
      },
      {
        name: "Dragon Dragoon",
        rarity: "mythical",
        chance: 6,
        image: "/images/drops/dragoon.png",
      },
      {
        name: "Viking Berserker",
        rarity: "mythical",
        chance: 5,
        image: "/images/drops/viking.png",
      },
      {
        name: "Legion Commander",
        rarity: "mythical",
        chance: 1,
        image: "/images/drops/romancommander.png",
      },
      {
        name: "Cosmic Crusader",
        rarity: "legendary",
        chance: 2,
        image: "/images/drops/cosmiccrusader.png",
      },
      {
        name: "Infinity Sentinel",
        rarity: "legendary",
        chance: 2,
        image: "/images/drops/infinitysentinel.webp",
      },
      {
        name: "Galactic Vanguard",
        rarity: "legendary",
        chance: 1,
        image: "/images/drops/galacticvanguard.webp",
      },
    ],
  },
];
