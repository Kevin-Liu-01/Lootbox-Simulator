import { Flex } from "@radix-ui/themes";
import React, { useState } from "react";
import {
  ArchiveIcon,
  BoxIcon,
  CodeSquareIcon,
  PackageIcon,
  PackageOpenIcon,
} from "lucide-react";
import useLocalStorage from "~/app/utils/useLocalStorage";
import InventoryFiller from "~/app/utils/inventory_filler";
import AddLootBoxButton from "./addLootBoxButton";
import { LootBox } from "~/app/utils/types";

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
  addLootBoxToInventory: (lootBox: LootBox, count: number) => void;
}) {
  const [columns, setColumns] = useLocalStorage(
    "inventory_columns",
    "grid-cols-4",
  ); // Default 4 columns
  const [filter, setFilter] = useState<string | null>(null);

  const lootBoxTypes = [
    "Quantum Cache",
    "Aether Gate",
    "Chromatic Case",
    "Mega Crystal",
    "Star Drop",
    "Treasure Horde",
  ];

  const lootBoxCounts = lootBoxTypes.map((type) => ({
    type,
    count: lootBoxInventory.filter((box) => box.name === type).length,
  }));

  const filteredLootBoxes = filter
    ? lootBoxInventory.filter((box) => box.name === filter)
    : lootBoxInventory;

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
    <Flex className="h-full w-full flex-col bg-gray-800 p-3 text-gray-100">
      <Flex className="mb-4 flex-col gap-4">
        <Flex>
          <Flex align="center" className="gap-3 text-2xl font-bold">
            <BoxIcon size={24} />
            Lootbox Inventory ({lootBoxInventory.length})
          </Flex>
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
              className="rounded-lg border border-gray-600 bg-gray-700 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={"grid-cols-3"}>3 Columns</option>
              <option value={"grid-cols-4"}>4 Columns</option>
              <option value={"grid-cols-5"}>5 Columns</option>
            </select>
          </div>
        </Flex>

        {/* Filter Section */}
        <Flex className="gap-2">
          {lootBoxCounts.map(({ type, count }) => (
            <button
              key={type}
              className={`rounded-md px-4 py-2 text-sm font-semibold text-gray-200 transition ${
                filter === type
                  ? `${
                      availableLootBoxes.find((box) => box.name === type)
                        ?.background
                    } duration-150 hover:text-white`
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setFilter(filter === type ? null : type)}
            >
              {type} ({count})
            </button>
          ))}
        </Flex>
      </Flex>

      {/* Lootbox Inventory Grid */}
      <div
        className={`grid ${columns} h-full gap-3 overflow-y-auto rounded-md bg-gray-900 p-3`}
      >
        {/* Add Specific Lootbox Button, then Add Random Lootbox Button */}
        <AddLootBoxButton
          filter={filter}
          availableLootBoxes={availableLootBoxes}
          addLootBoxToInventory={addLootBoxToInventory}
        />

        {/* Display Lootboxes */}
        {filteredLootBoxes.map((box) => (
          <Flex
            key={box.id}
            className={`relative flex-col rounded-xl p-3 shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:rotate-1 hover:scale-[1.02] ${box.background} border-2 border-transparent bg-gradient-to-br`}
          >
            {/* Glowing Image Container */}
            <Flex
              justify="center"
              align="center"
              className="relative overflow-hidden rounded-md bg-black/30 p-3 shadow-inner"
            >
              <img
                src={box.backgroundImage}
                alt={box.name}
                className="z-5 absolute h-full w-full object-cover opacity-50 blur-[1px]"
              />
              <div className="animate-glow absolute inset-0 rounded-md border border-blue-800/30"></div>
              <img
                src={box.image}
                alt={box.name}
                className="z-10 mb-2 h-24 w-full rounded-lg object-contain transition-transform duration-300 hover:scale-110"
              />
            </Flex>

            {/* Box Title */}
            <h3 className="text-md mt-3 font-extrabold tracking-wide text-white">
              {box.name}
            </h3>

            {/* Game Name */}
            <p className="mb-3 text-xs italic text-gray-200">{box.game}</p>

            {/* Open and Delete Buttons */}
            <Flex className="mt-auto w-full flex-wrap gap-2">
              <button
                onClick={() => handleOpenLootBox(box)}
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_10px_2px_rgba(0,200,255,0.5)] transition-transform hover:scale-105 hover:from-blue-500 hover:to-blue-600"
              >
                <PackageOpenIcon size={16} className="mr-1" />
                Open
              </button>
              <button
                onClick={() => handleDeleteLootBox(box.id)}
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-red-700 px-3 py-2 text-xs font-semibold text-white shadow-[0_0_10px_2px_rgba(255,50,50,0.5)] transition-transform hover:scale-105 hover:from-red-500 hover:to-red-600"
              >
                <PackageIcon size={16} className="mr-1" />
                Delete
              </button>
            </Flex>
          </Flex>
        ))}

        {/* Fill empty columns with dark squares */}
        <InventoryFiller
          entries={filteredLootBoxes}
          minEntries={64}
          columns={columns}
          adjustVal={1}
          height={"h-64"}
        />
      </div>
    </Flex>
  );
}
