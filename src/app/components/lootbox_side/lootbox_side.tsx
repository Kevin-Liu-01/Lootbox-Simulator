import React, { useState } from "react";
import {
  ArrowRightLeftIcon,
  BoxIcon,
  FileBoxIcon,
  GiftIcon,
  TrashIcon,
} from "lucide-react";
import { Flex } from "@radix-ui/themes";
import LootBoxMenu from "./lootbox_menu";
import LootBoxInventory from "./lootbox_inventory";
import CollectedItems from "~/app/components/lootbox_side/collected_items";
import { type Item, type LootBox } from "~/app/utils/types";

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
  availableLootBoxes: LootBox[];
  addLootBoxToInventory: (box: LootBox, count: number) => void;
  confirmOpenLootBox: (box: LootBox) => void;
  collectedItems: Item[];
  setCollectedItems: React.Dispatch<React.SetStateAction<Item[]>>;
  lootBoxInventory: LootBox[];
  setLootBoxInventory: React.Dispatch<React.SetStateAction<LootBox[]>>;
  isLeftSideOnLeft: boolean;
  setIsLeftSideOnLeft: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isInventoryView, setIsInventoryView] = useState(true);

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
      {/* Header Bar */}
      <Flex className="mb-3 flex-row gap-3 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-gray-800/90 to-gray-900/90 px-3 py-2.5 shadow-lg shadow-indigo-900/10 sm:mb-4 sm:gap-0">
        <Flex
          align="center"
          justify="center"
          className="gap-2 rounded-xl border border-white/20 bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 py-1.5 pl-2 pr-3 shadow-lg shadow-purple-900/30 sm:gap-2"
        >
          <GiftIcon className="mr-0.5 size-7 rounded-lg bg-white/20 p-1 sm:size-8" />
          <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            LOOTBOX
          </span>
          <span className="rounded-full border border-white/50 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-800 px-2 py-0.5 text-xs font-semibold sm:text-sm">
            Simulator
          </span>
        </Flex>

        {/* Toggle Buttons */}
        <Flex
          align="center"
          className="w-full gap-2 text-sm font-semibold sm:ml-auto sm:w-auto sm:text-base"
        >
          <button
            onClick={() => setIsLeftSideOnLeft(!isLeftSideOnLeft)}
            className="hidden w-full items-center justify-center rounded-xl border border-white/10 bg-gray-700/80 px-3 py-2 shadow-md transition-all duration-200 hover:border-green-400/30 hover:bg-green-600/80 sm:flex"
          >
            <ArrowRightLeftIcon className="size-5 text-white" />
          </button>
          <button
            onClick={handleToggleView}
            className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-gray-700/80 px-2 py-2 text-white shadow-md transition-all duration-200 hover:border-blue-400/30 hover:bg-blue-600/80 sm:gap-2 sm:px-3"
          >
            {isInventoryView ? (
              <FileBoxIcon className="size-5" />
            ) : (
              <BoxIcon className="size-5" />
            )}
            <span className="hidden sm:inline">
              {isInventoryView ? "Lootboxes" : "Inventory"}
            </span>
          </button>

          {/* Clear Inventory Button */}
          <button
            onClick={handleClearInventory}
            className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-gray-700/80 px-2 py-2 text-white shadow-md transition-all duration-200 hover:border-red-400/30 hover:bg-red-600/80 sm:gap-2 sm:px-3"
          >
            <TrashIcon className="size-5" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex className="h-full w-full overflow-hidden rounded-2xl border border-indigo-500/10 bg-gray-800/80 shadow-xl shadow-indigo-900/10">
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
