export type Rarity =
  | "common"
  | "rare"
  | "super rare"
  | "epic"
  | "mythical"
  | "legendary";

export type Item = {
  id: string;
  name: string;
  rarity: Rarity;
  chance: number; // Probability of obtaining the item
  image: string; // URL or file path to the item's image
};

export type LootBoxType = "crate" | "starrdrop" | "skin" | "summon";

export type LootBox = {
  id: string; // Unique identifier for the loot box
  name: string; // Display name of the loot box
  game: string; // Game to which the loot box belongs
  type: LootBoxType; // Type of the loot box
  background: string; // Background color or theme for the loot box UI
  backgroundImage: string; // URL or file path for the background image
  image: string; // URL or file path for the loot box image
  drops: Item[]; // List of it
};

export const rarityColors: Record<Rarity, string> = {
  common: "bg-gradient-to-r from-gray-600 to-gray-500",
  rare: "bg-gradient-to-r from-blue-600 to-blue-500",
  "super rare": "bg-gradient-to-r from-purple-600 to-purple-500",
  epic: "bg-gradient-to-r from-pink-600 to-pink-500",
  mythical: "bg-gradient-to-r from-red-600 to-red-500",
  legendary: "bg-gradient-to-r from-yellow-600 to-yellow-500",
};
