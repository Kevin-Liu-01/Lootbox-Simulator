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
    <Flex className="flex-col p-4">
      <Flex className="mb-4">
        <h2 className="text-2xl font-bold">Available Lootboxes</h2>
        {/* Column toggle */}
        {/* <div className="mb-4 ml-auto">
          <label htmlFor="column-toggle" className="mr-2">
            Columns:
          </label>
          <select
            id="column-toggle"
            value={columns}
            onChange={handleColumnToggle}
            className="rounded border bg-gray-800 p-2"
          >
            <option value={"grid-cols-2"}>2 Columns</option>
            <option value={"grid-cols-3"}>3 Columns</option>
            <option value={"grid-cols-4"}>4 Columns</option>
          </select>
        </div> */}
      </Flex>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
        {availableLootBoxes.map((box) => (
          <Flex
            key={box.id}
            className={`cursor-pointer flex-col rounded-lg p-4 shadow-lg ${box.background}`}
          >
            <Flex
              justify="center"
              align="center"
              className="relative overflow-hidden rounded-lg bg-black/20 p-3"
            >
              <img
                src={box.backgroundImage}
                alt={box.name}
                className="z-5 absolute h-full w-full object-cover opacity-50 blur-[1px]"
              />
              <img
                src={box.image}
                alt={box.name}
                className="z-10 mb-2 h-24 w-full rounded-lg object-contain"
              />
            </Flex>
            <h3 className="pt-2 text-lg font-bold">{box.name}</h3>
            <p className="text-sm capitalize">Type: {box.type}</p>
            {/* <p className="text-sm">Potential Drops:</p> */}
            <ul className="mt-2 h-20 overflow-y-auto rounded-lg bg-black/10 p-2 text-sm shadow-inner">
              {box.drops.map((drop, index) => (
                <li key={index} className="capitalize">
                  <Text className="font-semibold">{drop.name}</Text> (
                  {drop.rarity} rarity): {drop.chance.toFixed(1)}%
                </li>
              ))}
            </ul>
            <button
              className="mt-3 w-full rounded bg-black/30 px-4 py-2 text-white transition-all hover:bg-black/50"
              onClick={() => addLootBoxToInventory(box)}
            >
              Add to Inventory
            </button>
          </Flex>
        ))}
      </div>
    </Flex>
  );
}
