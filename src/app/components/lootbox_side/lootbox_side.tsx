import React, { useState } from "react";
import {
  ArrowRightLeftIcon,
  BoxIcon,
  FileBoxIcon,
  GiftIcon,
  TrashIcon, // Added TrashIcon for clear inventory button
} from "lucide-react";
import { Flex } from "@radix-ui/themes";
import LootBoxMenu from "./lootbox_menu";
import LootBoxInventory from "./lootbox_inventory";
import CollectedItems from "~/app/components/lootbox_side/collected_items";

export default function LootBoxSide({
  availableLootBoxes,
  addLootBoxToInventory,
  confirmOpenLootBox,
  collectedItems,
  setCollectedItems,
  lootBoxInventory,
  setLootBoxInventory,
  isLeftSideOnLeft,
  setIsLeftSideOnLeft,
}: {
  availableLootBoxes: any;
  addLootBoxToInventory: any;
  confirmOpenLootBox: any;
  collectedItems: any;
  setCollectedItems: any;
  lootBoxInventory: any;
  setLootBoxInventory: any;
  isLeftSideOnLeft: any;
  setIsLeftSideOnLeft: any;
}) {
  const [isInventoryView, setIsInventoryView] = useState(true); // Toggle state for view

  const handleToggleView = () => {
    setIsInventoryView(!isInventoryView);
  };

  const handleClearInventory = () => {
    if (
      window.confirm("Are you sure you want to clear your lootbox inventory?")
    ) {
      setLootBoxInventory([]);
    }
  };

  return (
    <Flex className="h-screen w-full flex-col overflow-y-auto p-3 sm:p-4">
      <Flex className="flex-row gap-3 sm:gap-0">
        <Flex
          align="center"
          className="mb-3 gap-2 rounded-xl border border-gray-700 bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-600 p-2 pr-3 sm:mb-4 sm:gap-2"
        >
          <GiftIcon className="mr-1 size-8 rounded-xl border-2 p-1 sm:size-12 sm:p-2" />
          <span className="text-2xl font-extrabold text-white sm:text-5xl">
            LOOTBOX
          </span>
          <span className="rounded-full border border-white/70 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-800 px-2 py-1 text-base font-medium sm:text-xl">
            Simulator
          </span>
        </Flex>

        {/* Toggle Button */}
        <Flex
          align="center"
          className="mb-3 w-full gap-3 rounded-xl border border-gray-700 bg-gray-800 px-2 py-2 text-sm font-semibold sm:mb-4 sm:ml-auto sm:w-auto sm:px-3 sm:text-base"
        >
          <button
            onClick={() => setIsLeftSideOnLeft(!isLeftSideOnLeft)}
            className="hidden h-full w-full items-center justify-center rounded-lg border border-white/40 bg-green-500 px-4 py-2 shadow-lg transition-all duration-200 hover:bg-green-600 sm:flex"
          >
            <ArrowRightLeftIcon className="size-6 text-white" />
          </button>
          <button
            onClick={handleToggleView}
            className="hidden w-full items-center gap-2 rounded-lg border border-white/40 bg-blue-500 px-4 py-2 text-white shadow-lg transition-all duration-200 hover:bg-blue-600 sm:flex"
          >
            {isInventoryView ? (
              <FileBoxIcon className="size-4 sm:size-6" />
            ) : (
              <BoxIcon className="size-4 sm:size-6" />
            )}
            {isInventoryView ? " Lootboxes" : "Inventory"}
          </button>

          {/* Clear Inventory Button */}
          <button
            onClick={handleClearInventory}
            className="flex h-full w-full items-center justify-center gap-2 rounded-lg border border-white/40 bg-red-500 px-2 py-2 text-white shadow-lg transition-all duration-200 hover:bg-red-600 sm:px-4"
          >
            <TrashIcon className="size-6" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </Flex>
      </Flex>

      <Flex className="h-full w-full overflow-hidden rounded-xl border border-gray-700 bg-gray-800 shadow-lg">
        {/* Conditionally render LootBoxMenu or LootBoxInventory */}
        {isInventoryView ? (
          <LootBoxInventory
            availableLootBoxes={availableLootBoxes}
            confirmOpenLootBox={confirmOpenLootBox}
            lootBoxInventory={lootBoxInventory}
            setLootBoxInventory={setLootBoxInventory}
            addLootBoxToInventory={addLootBoxToInventory}
          />
        ) : (
          <LootBoxMenu
            availableLootBoxes={availableLootBoxes}
            addLootBoxToInventory={addLootBoxToInventory}
            handleToggleView={handleToggleView}
          />
        )}
      </Flex>
      {/* Collected Items */}
      <CollectedItems
        collectedItems={collectedItems}
        setCollectedItems={setCollectedItems}
      />
    </Flex>
  );
}
