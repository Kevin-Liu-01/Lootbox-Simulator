import { Flex } from "@radix-ui/themes";
import React, { useState } from "react";

type Item = {
  id: string;
  name: string;
  image: string;
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

export default function LootBoxInventory({
  availableLootBoxes,
  confirmOpenLootBox,
  lootBoxInventory,
  setLootBoxInventory,
  addLootBoxToInventory,
}: {
  availableLootBoxes: LootBox[];
  confirmOpenLootBox: (lootBox: LootBox) => void;
  lootBoxInventory: LootBox[];
  setLootBoxInventory: (boxes: LootBox[]) => void;
  addLootBoxToInventory: (lootBox: LootBox) => void;
}) {
  const [columns, setColumns] = useState(4); // Default 2 columns

  const handleOpenLootBox = (lootBox: LootBox) => {
    confirmOpenLootBox(lootBox);
  };

  const handleDeleteLootBox = (lootBoxId: string) => {
    setLootBoxInventory(lootBoxInventory.filter((box) => box.id !== lootBoxId));
  };

  const handleColumnToggle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumns(Number(e.target.value));
  };

  return (
    <div className="p-4">
      <Flex className="">
        <h2 className="text-2xl font-bold">Lootbox Inventory</h2>
        {/* Column toggle */}
        <div className="mb-4 ml-auto">
          <label htmlFor="column-toggle" className="mr-2">
            Columns:
          </label>
          <select
            id="column-toggle"
            value={columns}
            onChange={handleColumnToggle}
            className="rounded border bg-gray-800 p-2"
          >
            <option value={2}>2 Columns</option>
            <option value={3}>3 Columns</option>
            <option value={4}>4 Columns</option>
          </select>
        </div>
      </Flex>

      {/* Lootbox Inventory Grid */}
      <div className={`grid grid-cols-${columns} gap-4`}>
        {/* {lootBoxInventory.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No lootboxes in inventory
          </div>
        )} */}

        {/* Add Random Lootbox Button */}
        <button
          className="h-full min-h-64 rounded-lg border-2 border-dashed border-green-500 bg-green-500/50 px-4 py-2 shadow-lg"
          onClick={() => {
            const randomBox =
              availableLootBoxes[
                Math.floor(Math.random() * availableLootBoxes.length)
              ];
            if (randomBox) {
              addLootBoxToInventory(randomBox);
            } else {
              console.error("No loot boxes available");
            }
          }}
        >
          + Add Random Lootbox
        </button>

        {/* Display Lootboxes */}
        {lootBoxInventory.map((box, index) => (
          <div
            key={box.id}
            className={`relative rounded-lg p-4 shadow-lg ${box.background}`}
          >
            <Flex
              justify="center"
              align="center"
              className="relative overflow-hidden rounded-lg bg-black/20 p-3"
            >
              <img
                src={box.backgroundImage}
                alt={box.name}
                className="z-5 absolute h-full w-full object-cover opacity-50"
              />
              <img
                src={box.image}
                alt={box.name}
                className="z-10 mb-2 h-24 w-full rounded-lg object-contain"
              />
            </Flex>
            <h3 className="mt-2 text-lg font-bold">{box.name}</h3>
            <p className="text-sm">Type: {box.type}</p>

            {/* Open and Delete buttons */}
            <Flex className="gap-4">
              <button
                onClick={() => handleOpenLootBox(box)}
                className="w-full rounded bg-blue-500 px-4 py-2 text-white"
              >
                Open
              </button>
              <button
                onClick={() => handleDeleteLootBox(box.id)}
                className="w-full rounded bg-red-500 px-4 py-2 text-white"
              >
                Delete
              </button>
            </Flex>
          </div>
        ))}

        {/* Fill empty columns with dark squares */}
        {lootBoxInventory.length < 64 &&
          Array.from({ length: 64 - lootBoxInventory.length - 1 }).map(
            (_, index) => (
              <div
                key={`placeholder-${index}`}
                className="h-64 rounded-lg bg-gray-700 shadow-lg"
              ></div>
            ),
          )}
      </div>
    </div>
  );
}
