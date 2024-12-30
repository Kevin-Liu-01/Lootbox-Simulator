import { Flex } from "@radix-ui/themes";
import React from "react";
import useLocalStorage from "~/app/utils/useLocalStorage";
import InventoryFiller from "~/app/utils/inventory_filler";

type Item = {
  id: string;
  name: string;
  image: string;
};

type LootBoxType = "crate" | "starrdrop" | "skin" | "summon";

type LootBox = {
  backgroundImage: string | undefined;
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
  const [columns, setColumns] = useLocalStorage(
    "inventory_columns",
    "grid-cols-4",
  ); // Default 4 columns

  const handleOpenLootBox = (lootBox: LootBox) => {
    confirmOpenLootBox(lootBox);
  };

  const handleDeleteLootBox = (lootBoxId: string) => {
    setLootBoxInventory(lootBoxInventory.filter((box) => box.id !== lootBoxId));
  };

  const handleColumnToggle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumns(e.target.value);
  };

  return (
    <div className="h-full w-full bg-gray-800 p-4 text-gray-100">
      <Flex className="mb-4">
        <h2 className="text-2xl font-bold">Lootbox Inventory</h2>
        {/* Column toggle */}
        <div className="ml-auto flex items-center">
          <label
            htmlFor="column-toggle"
            className="mr-2 text-sm font-medium text-gray-300"
          >
            Columns:
          </label>
          <select
            id="column-toggle"
            value={columns}
            onChange={handleColumnToggle}
            className="rounded-lg border border-gray-700 bg-gray-800 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={"grid-cols-3"}>3 Columns</option>
            <option value={"grid-cols-4"}>4 Columns</option>
            <option value={"grid-cols-5"}>5 Columns</option>
          </select>
        </div>
      </Flex>

      {/* Lootbox Inventory Grid */}
      <div className={`grid ${columns} gap-3`}>
        {/* {lootBoxInventory.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No lootboxes in inventory
          </div>
        )} */}

        {/* Add Random Lootbox Button */}
        <button
          className="h-full rounded-lg border-2 border-dashed border-green-500 bg-green-600/20 px-4 py-2 text-sm font-semibold text-green-300 hover:bg-green-600/30"
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
        {lootBoxInventory.map((box) => (
          <Flex
            key={box.id}
            className={`relative flex-col rounded-lg p-3 shadow-lg transition hover:rotate-1 hover:scale-[1.02] ${box.background}`}
          >
            <Flex
              justify="center"
              align="center"
              className="relative overflow-hidden rounded-md bg-black/20 p-3"
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
            <h3 className="mt-2 text-lg font-bold">{box.name}</h3>
            <p className="mb-3 text-sm italic">{box.game}</p>

            {/* Open and Delete buttons */}
            <Flex className="mt-auto gap-2">
              <button
                onClick={() => handleOpenLootBox(box)}
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-all hover:bg-blue-700"
              >
                Open
              </button>
              <button
                onClick={() => handleDeleteLootBox(box.id)}
                className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-500"
              >
                Delete
              </button>
            </Flex>
          </Flex>
        ))}

        {/* Fill empty columns with dark squares */}
        <InventoryFiller
          entries={lootBoxInventory}
          minEntries={64}
          columns={columns}
          adjustVal={1}
          height={"h-64"}
        />
      </div>
    </div>
  );
}
