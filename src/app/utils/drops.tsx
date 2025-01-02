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
        name: "Chrono Gear",
        rarity: "rare",
        chance: 30,
        image: "/images/drops/chronogear.webp",
      },
      {
        name: "Rare Circuitry",
        rarity: "super rare",
        chance: 16,
        image: "/images/drops/circuitry.png",
      },
      {
        name: "Timekeeper Artifact",
        rarity: "epic",
        chance: 10,
        image: "/images/drops/timekeeper.png",
      },
      {
        name: "Eternal Nexus Core",
        rarity: "mythical",
        chance: 3,
        image: "/images/drops/nexuscore.webp",
      },
      {
        name: "Dyson Sphere",
        rarity: "legendary",
        chance: 1,
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
        name: "Asteroid Core",
        rarity: "common",
        chance: 25,
        image: "/images/drops/asteroid.webp",
      },
      {
        name: "Nebula Crystal",
        rarity: "super rare",
        chance: 12,
        image: "/images/drops/nebulacrystal.png",
      },
      {
        name: "Cosmic Relic",
        rarity: "epic",
        chance: 10,
        image: "/images/drops/cosmicrelic.webp",
      },
      {
        name: "Black Hole Shard",
        rarity: "mythical",
        chance: 6,
        image: "/images/drops/blackholeshard.webp",
      },
      {
        name: "Galactic Crown",
        rarity: "legendary",
        chance: 2,
        image: "/images/drops/crown.png",
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
        name: "Silver Dagger",
        rarity: "rare",
        chance: 20,
        image: "/images/drops/silverdagger.png",
      },
      {
        name: "Golden Chalice",
        rarity: "super rare",
        chance: 12,
        image: "/images/drops/goldenchalice.png",
      },
      {
        name: "Emerald Amulet",
        rarity: "epic",
        chance: 10,
        image: "/images/drops/emeraldamulet.png",
      },
      {
        name: "Crown of Kings",
        rarity: "mythical",
        chance: 6,
        image: "/images/drops/kingscrown.png",
      },
      {
        name: "Dragon Relic",
        rarity: "legendary",
        chance: 2,
        image: "/images/drops/dragonrelic.png",
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
        name: "Mystic Charm",
        rarity: "rare",
        chance: 22,
        image: "/images/drops/mysticcharm.png",
      },
      {
        name: "Ethereal Fragment",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/etherealfragment.png",
      },
      {
        name: "Arcane Relic",
        rarity: "epic",
        chance: 8,
        image: "/images/drops/arcanerelic.png",
      },
      {
        name: "Void Essence",
        rarity: "mythical",
        chance: 8,
        image: "/images/drops/voidessence.png",
      },
      {
        name: "Nether Crystal",
        rarity: "legendary",
        chance: 4,
        image: "/images/drops/nethercrystal.gif",
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
        name: "Basic Grunt",
        rarity: "common",
        chance: 50,
        image: "/images/drops/basicgrunt.png",
      },
      {
        name: "Elite Trooper",
        rarity: "rare",
        chance: 20,
        image: "/images/drops/trooper.png",
      },
      {
        name: "Super Soldier",
        rarity: "super rare",
        chance: 10,
        image: "/images/drops/supersoldier.png",
      },
      {
        name: "Rogue Raider",
        rarity: "epic",
        chance: 10,
        image: "/images/drops/raider.png",
      },
      {
        name: "Neon Apex",
        rarity: "mythical",
        chance: 8,
        image: "/images/drops/radiantrobot.png",
      },
      {
        name: "Cosmic Crusader",
        rarity: "legendary",
        chance: 2,
        image: "/images/drops/cosmiccrusader.png",
      },
    ],
  },
];
