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

export const transformers = [
  {
    name: "Optimus Prime",
    rarity: "legendary",
    chance: 5,
    image: "/images/drops/optimus.png",
  },
  {
    name: "Megatron",
    rarity: "legendary",
    chance: 5,
    image: "/images/drops/megatron.png",
  },
  {
    name: "Bumblebee",
    rarity: "epic",
    chance: 7,
    image: "/images/drops/bumblebee.webp",
  },
  {
    name: "Starscream",
    rarity: "epic",
    chance: 7,
    image: "/images/drops/starscream.png",
  },
  { name: "Jazz", rarity: "rare", chance: 10, image: "/images/drops/jazz.png" },
  {
    name: "Ironhide",
    rarity: "rare",
    chance: 10,
    image: "/images/drops/ironhide.png",
  },
  {
    name: "Ratchet",
    rarity: "rare",
    chance: 10,
    image: "/images/drops/ratchet.png",
  },
  {
    name: "Soundwave",
    rarity: "epic",
    chance: 7,
    image: "/images/drops/soundwave.webp",
  },
  {
    name: "Shockwave",
    rarity: "epic",
    chance: 7,
    image: "/images/drops/shockwave.png",
  },
  {
    name: "Grimlock",
    rarity: "legendary",
    chance: 5,
    image: "/images/drops/grimlock.png",
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
  { name: "Kup", rarity: "common", chance: 8, image: "/images/drops/kup.png" },
  {
    name: "Hot Rod",
    rarity: "epic",
    chance: 7,
    image: "/images/drops/hotrod.png",
  },
  {
    name: "Rodimus Prime",
    rarity: "legendary",
    chance: 5,
    image: "/images/drops/rodimus.png",
  },
  {
    name: "Ultra Magnus",
    rarity: "epic",
    chance: 7,
    image: "/images/drops/ultramagnus.webp",
  },
];

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
      { name: "Temporal Fragment", rarity: "common", chance: 42, image: "" },
      { name: "Chrono Gear", rarity: "common", chance: 28, image: "" },
      { name: "Rare Circuitry", rarity: "super rare", chance: 10, image: "" },
      { name: "Timekeeper Artifact", rarity: "epic", chance: 8, image: "" },
      {
        name: "Eternal Nexus Core",
        rarity: "mythical",
        chance: 6,
        image: "",
      },
      {
        name: "Singularity Sphere",
        rarity: "legendary",
        chance: 4,
        image: "",
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
      { name: "Stardust Pebble", rarity: "common", chance: 45, image: "" },
      { name: "Asteroid Core", rarity: "common", chance: 25, image: "" },
      { name: "Nebula Crystal", rarity: "super rare", chance: 12, image: "" },
      { name: "Cosmic Relic", rarity: "epic", chance: 10, image: "" },
      { name: "Black Hole Shard", rarity: "mythical", chance: 6, image: "" },
      { name: "Galactic Crown", rarity: "legendary", chance: 2, image: "" },
    ],
  },
  {
    id: uuidv4(),
    name: "Summoner Crystal",
    game: "Transformers Universe",
    type: "summon",
    background: "bg-gradient-to-r from-red-600 to-orange-600",
    backgroundImage: "/images/backgrounds/summoner_crystal.avif",
    image: "/images/lootboxes/summoner-crystal.webp",
    drops: transformers,
  },
  {
    id: "loot-crate",
    name: "Treasure Horde",
    game: "Adventure Saga",
    type: "crate",
    background: "bg-gradient-to-r from-green-700 to-emerald-600",
    backgroundImage: "/images/backgrounds/lootcrate.jpg",
    image: "/images/lootboxes/loot-crate.png",
    drops: [
      { name: "Bronze Coin", rarity: "common", chance: 50, image: "" },
      { name: "Silver Dagger", rarity: "common", chance: 20, image: "" },
      { name: "Golden Chalice", rarity: "super rare", chance: 12, image: "" },
      { name: "Emerald Amulet", rarity: "epic", chance: 10, image: "" },
      { name: "Crown of Kings", rarity: "mythical", chance: 6, image: "" },
      { name: "Dragon Relic", rarity: "legendary", chance: 2, image: "" },
    ],
  },
  {
    id: "portal",
    name: "Aether Gate",
    game: "Gacha Adventures",
    type: "summon",
    background: "bg-gradient-to-r from-purple-700 to-indigo-600",
    backgroundImage: "/images/backgrounds/gachaportal.jpg",
    image: "/images/lootboxes/gacha_crystal.webp",
    drops: [
      { name: "Spirit Shard", rarity: "common", chance: 48, image: "" },
      { name: "Mystic Charm", rarity: "common", chance: 22, image: "" },
      {
        name: "Ethereal Fragment",
        rarity: "super rare",
        chance: 10,
        image: "",
      },
      { name: "Arcane Relic", rarity: "epic", chance: 8, image: "" },
      { name: "Void Essence", rarity: "mythical", chance: 8, image: "" },
      { name: "Nether Crystal", rarity: "legendary", chance: 4, image: "" },
    ],
  },
  {
    id: "skin-crate",
    name: "Chromatic Case",
    game: "Battle Royale Legends",
    type: "skin",
    background: "bg-gradient-to-r from-orange-600 to-yellow-500",
    backgroundImage: "/images/backgrounds/skincrate.jpg",
    image: "/images/lootboxes/skin-crate.png",
    drops: [
      { name: "Basic Skin", rarity: "common", chance: 50, image: "" },
      { name: "Rare Fade", rarity: "super rare", chance: 10, image: "" },
      { name: "Radiant Sheen", rarity: "epic", chance: 10, image: "" },
      { name: "Neon Apex", rarity: "mythical", chance: 8, image: "" },
      { name: "Legendary Glow", rarity: "legendary", chance: 4, image: "" },
    ],
  },
];
