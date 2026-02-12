import { Box, Flex } from "@radix-ui/themes";
import React, { useState } from "react";
import { BoxIcon, PackageIcon, PackageOpenIcon } from "lucide-react";
import useLocalStorage from "~/app/utils/useLocalStorage";
import InventoryFiller from "~/app/utils/inventory_filler";
import AddLootBoxButton from "./addLootBoxButton";
import { type LootBox } from "~/app/utils/types";

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
  const [columns, setColumns] = useLocalStorage<string>(
    "inventory_columns",
    "grid-cols-3",
  );
  const [filter, setFilter] = useState<string | null>(null);

  const lootBoxTypes = [
    "Quantum Cache",
    "Aether Gate",
    "Chromatic Case",
    "Mega Crystal",
    "Star Drop",
    "Treasure Horde",
    "Abyss Chest",
    "Christmas Case",
    "Jungle Cache",
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
    <Flex className="h-full w-full flex-col bg-gray-800/60 p-3 text-gray-100">
      <Flex className="mb-3 flex-col gap-3">
        <Flex
          align="center"
          className="flex-col text-sm sm:flex-row sm:text-base"
        >
          <Flex
            align="center"
            className="gap-2 text-lg font-bold sm:text-xl"
          >
            <BoxIcon size={22} className="text-indigo-400" />
            Lootbox Inventory
            <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-sm font-medium text-indigo-300">
              {lootBoxInventory.length}
            </span>
          </Flex>
          {/* Column toggle */}
          <div className="mt-2 flex items-center sm:ml-auto sm:mt-0">
            <label
              htmlFor="column-toggle"
              className="mr-2 text-sm font-medium text-gray-400"
            >
              Columns:
            </label>
            {/* Column Toggle Select */}
            <select
              id="column-toggle"
              value={columns}
              onChange={handleColumnToggle}
              className="hidden rounded-lg border border-indigo-500/20 bg-gray-900/80 p-2 text-sm text-gray-300 shadow-sm focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:inline"
            >
              <option value={"grid-cols-3"}>3 Columns</option>
              <option value={"grid-cols-4"}>4 Columns</option>
              <option value={"grid-cols-5"}>5 Columns</option>
            </select>
            {/* Column toggle for mobile */}
            <select
              id="column-toggle-mobile"
              value={columns}
              onChange={handleColumnToggle}
              className="inline rounded-lg border border-indigo-500/20 bg-gray-900/80 p-2 text-sm text-gray-300 shadow-sm focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:hidden"
            >
              <option value={"grid-cols-1"}>1 Column</option>
              <option value={"grid-cols-2"}>2 Columns</option>
              <option value={"grid-cols-3"}>3 Columns</option>
            </select>
          </div>
        </Flex>

        {/* Filter Section */}
        <div className="flex w-full flex-wrap justify-center gap-1.5 overflow-x-auto rounded-xl bg-gray-900/60 p-2 text-[0.6rem] font-semibold sm:flex-nowrap sm:justify-start sm:gap-2 sm:text-sm">
          {lootBoxCounts.map(({ type, count }) => (
            <button
              key={type}
              className={`text-nowrap rounded-lg px-2 py-1.5 transition-all sm:px-3 sm:py-2 ${
                filter === type
                  ? `${
                      availableLootBoxes.find((box) => box.name === type)
                        ?.background
                    } border border-white/10 text-white shadow-md`
                  : "border border-transparent bg-gray-800/80 text-gray-400 hover:bg-gray-700/80 hover:text-gray-200"
              }`}
              onClick={() => setFilter(filter === type ? null : type)}
            >
              {type} ({count})
            </button>
          ))}
        </div>
      </Flex>

      {/* Lootbox Inventory Grid */}
      <div
        className={`grid ${columns} h-full gap-2 overflow-y-auto rounded-xl bg-gray-900/60 p-2.5 sm:gap-3 sm:p-3`}
      >
        {/* Add Specific Lootbox Button, then Add Random Lootbox Button */}
        <AddLootBoxButton
          filter={filter}
          availableLootBoxes={availableLootBoxes}
          addLootBoxToInventory={addLootBoxToInventory}
        />

        {/* Display Lootboxes */}
        {filteredLootBoxes
          .slice()
          .reverse()
          .map((box) => (
            <Flex
              key={box.id}
              className={`relative flex-col rounded-xl border border-white/[0.06] p-2 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:border-white/10 hover:shadow-xl ${box.background} bg-gradient-to-br`}
            >
              {/* Glowing Image Container */}
              <Flex
                justify="center"
                align="center"
                className="relative overflow-hidden rounded-lg bg-black/25 p-2 shadow-inner"
              >
                <img
                  src={box.backgroundImage}
                  alt={box.name}
                  className="absolute h-full w-full object-cover opacity-40 blur-[1px]"
                />
                <div className="absolute inset-0 rounded-lg border border-white/[0.05]"></div>
                <img
                  src={box.image}
                  alt={box.name}
                  className="z-10 h-[4.5rem] w-full rounded-lg object-contain transition-transform duration-300 hover:scale-110"
                />
              </Flex>

              {/* Box Title */}
              <h3 className="sm:text-md mt-1.5 text-sm font-extrabold tracking-wide text-white sm:mt-2">
                {box.name}
              </h3>

              {/* Game Name */}
              <p className="mb-2 text-xs text-gray-300 sm:mb-3">
                {box.game}
              </p>

              {/* Open and Delete Buttons */}
              <Flex className="mt-auto w-full flex-row gap-2 sm:flex-col sm:flex-wrap">
                <button
                  onClick={() => handleOpenLootBox(box)}
                  className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:scale-[1.02] hover:from-blue-500 hover:to-blue-600 sm:px-3"
                >
                  <PackageOpenIcon size={16} className="sm:mr-1" />
                  <span className="hidden sm:inline">Open</span>
                </button>
                <button
                  onClick={() => handleDeleteLootBox(box.id)}
                  className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-700 py-2 text-xs font-semibold text-white shadow-lg shadow-red-900/30 transition-all hover:scale-[1.02] hover:from-red-500 hover:to-red-600 sm:px-3"
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
