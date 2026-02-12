import React, { useState } from "react";
import {
  ArrowRightLeftIcon,
  BoxIcon,
  FileBoxIcon,
  GiftIcon,
  Maximize2Icon,
  Minimize2Icon,
  MonitorIcon,
} from "lucide-react";
import { Flex } from "@radix-ui/themes";
import LootBoxMenu from "./lootbox_menu";
import LootBoxInventory from "./lootbox_inventory";
import CollectedItems from "~/app/components/lootbox_side/collected_items";
import { type Item, type LootBox } from "~/app/utils/types";
import DeleteConfirmModal from "~/app/components/ui/DeleteConfirmModal";
import TrashButton from "~/app/components/ui/TrashButton";

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
  isFullscreenOpening,
  setIsFullscreenOpening,
  useFullscreenForOpening,
  setUseFullscreenForOpening,
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
  isFullscreenOpening: boolean;
  setIsFullscreenOpening: React.Dispatch<React.SetStateAction<boolean>>;
  useFullscreenForOpening: boolean;
  setUseFullscreenForOpening: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isInventoryView, setIsInventoryView] = useState(true);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleToggleView = () => {
    setIsInventoryView(!isInventoryView);
  };

  const handleClearInventory = () => {
    setShowClearConfirm(true);
  };

  const confirmClearInventory = () => {
    setLootBoxInventory([]);
    setShowClearConfirm(false);
  };

  return (
    <Flex className="min-h-screen w-full flex-col overflow-y-auto p-3 sm:h-screen sm:min-h-0 sm:p-4">
      {/* Header Bar */}
      <Flex className="mb-3 shrink-0 flex-row gap-3 rounded-2xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 px-3 py-2.5 shadow-lg sm:mb-4 sm:gap-0">
        <Flex
          align="center"
          justify="center"
          className="gap-2 rounded-xl border border-white/40 bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 py-1.5 pl-2 pr-3 shadow-lg shadow-purple-900/30 sm:gap-2"
        >
          <GiftIcon className="mr-0.5 size-7 rounded-lg bg-white/20 p-1 sm:size-8" />
          <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            LOOTBOX
          </span>
          <span className="rounded-full border border-white/70 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-800 px-2 py-0.5 text-xs font-semibold sm:text-sm">
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
            className="hidden h-10 shrink-0 items-center justify-center rounded-xl border border-gray-600 bg-gray-700 px-3 py-0 shadow-md transition-all duration-200 hover:border-green-500/40 hover:bg-green-600 sm:flex"
          >
            <ArrowRightLeftIcon className="size-5 text-white" />
          </button>
          <button
            onClick={() => setUseFullscreenForOpening(!useFullscreenForOpening)}
            className={`flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-xl border px-3 py-0 shadow-md transition-all duration-200 sm:w-auto ${useFullscreenForOpening
              ? "border-purple-500/60 bg-purple-600 hover:border-purple-400 hover:bg-purple-500"
              : "border-gray-600 bg-gray-700 hover:border-purple-500/40 hover:bg-purple-600"
              }`}
            title={
              useFullscreenForOpening
                ? "Fullscreen opening (on)"
                : "Fullscreen opening (off) – opening stays in shelf"
            }
          >
            <MonitorIcon className="size-5 text-white" />

          </button>
          {useFullscreenForOpening && (
            <button
              onClick={() => setIsFullscreenOpening(!isFullscreenOpening)}
              className="hidden h-10 shrink-0 items-center justify-center rounded-xl border border-gray-600 bg-gray-700 px-3 py-0 shadow-md transition-all duration-200 hover:border-purple-500/40 hover:bg-purple-600 sm:flex"
              title={
                isFullscreenOpening
                  ? "Exit fullscreen opening"
                  : "Fullscreen opening"
              }
            >
              {isFullscreenOpening ? (
                <Minimize2Icon className="size-5 text-white" />
              ) : (
                <Maximize2Icon className="size-5 text-white" />
              )}
            </button>
          )}
          <button
            onClick={handleToggleView}
            className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-600 bg-gray-700 px-2 py-0 text-white shadow-md transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-600 sm:px-3"
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

          {/* Clear Inventory - Custom Trash Button */}
          <TrashButton
            variant="compact"
            label="Clear"
            dangerLevel="high"
            onClick={handleClearInventory}
            className="flex h-10 shrink-0 items-center justify-center rounded-xl !py-0 sm:w-auto"
          />
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex className="min-h-[300px] w-full flex-1 overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-xl">
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

      <DeleteConfirmModal
        open={showClearConfirm}
        onClose={() => setShowClearConfirm(false)}
        title="Clear Lootbox Inventory?"
        description="This will remove all lootboxes from your inventory. This action cannot be undone."
        confirmLabel="Clear All"
        onConfirm={confirmClearInventory}
      />
    </Flex>
  );
}
