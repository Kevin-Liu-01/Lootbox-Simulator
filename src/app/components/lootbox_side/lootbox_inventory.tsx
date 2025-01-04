import { Flex } from "@radix-ui/themes";
import React, { useState } from "react";
import { BoxIcon, PackageIcon, PackageOpenIcon } from "lucide-react";
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
    "grid-cols-3",
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
      <Flex className="mb-3 flex-col gap-3">
        <Flex
          align="center"
          className="flex-col text-sm sm:flex-row sm:text-base"
        >
          <Flex align="center" className="gap-3 text-lg font-bold sm:text-2xl">
            <BoxIcon size={24} />
            Lootbox Inventory ({lootBoxInventory.length})
          </Flex>
          {/* Column toggle */}
          <div className="mt-2 flex items-center sm:ml-auto sm:mt-0">
            <label
              htmlFor="column-toggle"
              className="mr-2 font-medium text-gray-300"
            >
              Columns:
            </label>
            {/* Column Toggle Select */}
            <select
              id="column-toggle"
              value={columns}
              onChange={handleColumnToggle}
              className="hidden rounded-lg border border-gray-600 bg-gray-700 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 sm:inline"
            >
              <option value={"grid-cols-3"}>3 Columns</option>
              <option value={"grid-cols-4"}>4 Columns</option>
              <option value={"grid-cols-5"}>5 Columns</option>
            </select>
            {/* Column toggle for mobile */}
            <select
              id="column-toggle"
              value={columns}
              onChange={handleColumnToggle}
              className="inline rounded-lg border border-gray-600 bg-gray-700 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 sm:hidden"
            >
              <option value={"grid-cols-1"}>1 Columns</option>
              <option value={"grid-cols-2"}>2 Columns</option>
              <option value={"grid-cols-3"}>3 Columns</option>
            </select>
          </div>
        </Flex>

        {/* Filter Section */}
        <Flex
          justify="center"
          className="w-full flex-wrap gap-2 overflow-x-auto rounded-lg bg-gray-900 p-2 text-[0.6rem] font-semibold sm:text-sm"
        >
          {lootBoxCounts.map(({ type, count }) => (
            <button
              key={type}
              className={`text-nowrap rounded-md px-2 py-1 text-gray-200 transition sm:px-4 sm:py-2 ${
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
        className={`grid ${columns} h-full gap-2 overflow-y-auto rounded-md bg-gray-900 p-2 sm:gap-3 sm:p-3`}
      >
        {/* Add Specific Lootbox Button, then Add Random Lootbox Button */}
        <AddLootBoxButton
          filter={filter}
          availableLootBoxes={availableLootBoxes}
          addLootBoxToInventory={addLootBoxToInventory}
        />

        {/* Display Lootboxes */}
        {filteredLootBoxes
          .slice() // Create a shallow copy to avoid mutating the original array
          .reverse() // Reverse the array
          .map((box) => (
            <Flex
              key={box.id}
              className={`relative flex-col rounded-xl p-2 shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:rotate-1 hover:scale-[1.02] sm:p-3 ${box.background} border-2 border-transparent bg-gradient-to-br`}
            >
              {/* Glowing Image Container */}
              <Flex
                justify="center"
                align="center"
                className="relative overflow-hidden rounded-md bg-black/30 p-2 shadow-inner"
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
                  className="z-10 h-[4.5rem] w-full rounded-lg object-contain transition-transform duration-300 hover:scale-110"
                />
              </Flex>

              {/* Box Title */}
              <h3 className="sm:text-md mt-1 text-sm font-extrabold tracking-wide text-white sm:mt-3">
                {box.name}
              </h3>

              {/* Game Name */}
              <p className="mb-3 text-xs italic text-gray-200">{box.game}</p>

              {/* Open and Delete Buttons */}
              <Flex className="mt-auto w-full flex-row gap-2 sm:flex-col sm:flex-wrap">
                <button
                  onClick={() => handleOpenLootBox(box)}
                  className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-blue-700 py-2 text-xs font-semibold text-white shadow-[0_0_10px_2px_rgba(0,200,255,0.5)] transition-transform hover:scale-105 hover:from-blue-500 hover:to-blue-600 sm:px-3"
                >
                  <PackageOpenIcon size={16} className="sm:mr-1" />
                  <span className="hidden sm:inline">Open</span>
                </button>
                <button
                  onClick={() => handleDeleteLootBox(box.id)}
                  className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-red-700 py-2 text-xs font-semibold text-white shadow-[0_0_10px_2px_rgba(255,50,50,0.5)] transition-transform hover:scale-105 hover:from-red-500 hover:to-red-600 sm:px-3"
                >
                  <PackageIcon size={16} className="sm:mr-1" />
                  <span className="hidden sm:inline">Delete</span>
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
