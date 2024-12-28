import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

type Item = {
  id: string;
  name: string;
  image: string;
  rarity: string;
  chance: number;
};

type LootBoxType = "crate" | "starrdrop" | "skin" | "summon";

type LootBox = {
  id: string;
  name: string;
  game: string;
  type: LootBoxType;
  background: string;
  image: string;
  drops: Item[];
};

// Define available loot boxes
export default function LootBoxMenu({
  availableLootBoxes,
  addLootBoxToInventory,
}: {
  availableLootBoxes: LootBox[];
  addLootBoxToInventory: (box: LootBox) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {availableLootBoxes.map((box) => (
        <Flex
          key={box.id}
          className={`cursor-pointer flex-col rounded-lg p-4 shadow-lg ${box.background}`}
        >
          <Flex
            justify="center"
            align="center"
            className="rounded-lg bg-black/20 p-3"
          >
            <img
              src={box.image}
              alt={box.name}
              className="mb-2 h-24 w-full rounded-lg object-contain"
            />
          </Flex>
          <h3 className="pt-2 text-lg font-bold">{box.name}</h3>
          <p className="text-sm capitalize">Type: {box.type}</p>
          {/* <p className="text-sm">Potential Drops:</p> */}
          <ul className="mt-2 h-20 overflow-y-auto rounded-lg bg-black/10 p-2 text-sm shadow-inner">
            {box.drops.map((drop, index) => (
              <li key={index}>
                <Text className="font-semibold">{drop.name}</Text> (
                {drop.rarity} rarity): {drop.chance.toFixed(1)}%
              </li>
            ))}
          </ul>
          <button
            className="mt-3 w-full rounded bg-black/30 px-4 py-2 text-white"
            onClick={() => addLootBoxToInventory(box)}
          >
            Add to Inventory
          </button>
        </Flex>
      ))}
    </div>
  );
}
