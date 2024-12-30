import React, { useState } from "react";
import { Flex } from "@radix-ui/themes";
import LootBoxMenu from "./lootbox_menu";
import LootBoxInventory from "./lootbox_inventory";
import CollectedItems from "~/app/components/lootbox_side/collected_items";

export default function LootBoxSide({
  availableLootBoxes,
  addLootBoxToInventory,
  confirmOpenLootBox,
  collectedItems,
  lootBoxInventory,
  setLootBoxInventory,
}: {
  availableLootBoxes: any;
  addLootBoxToInventory: any;
  confirmOpenLootBox: any;
  collectedItems: any;
  lootBoxInventory: any;
  setLootBoxInventory: any;
}) {
  const [isInventoryView, setIsInventoryView] = useState(true); // Toggle state for view

  const handleToggleView = () => {
    setIsInventoryView(!isInventoryView);
  };
  return (
    <Flex className="h-screen w-full flex-col overflow-y-auto p-4">
      <h1 className="mb-4 text-4xl font-bold">Lootbox Simulator</h1>

      {/* Toggle Button */}
      <div className="mb-4">
        <button
          onClick={handleToggleView}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          {isInventoryView
            ? "Switch to Available Lootboxes"
            : "Switch to Lootbox Inventory"}
        </button>
      </div>

      <Flex className="h-full w-full overflow-y-auto rounded-xl bg-gray-800">
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
          />
        )}
      </Flex>
      {/* Collected Items */}
      <CollectedItems collectedItems={collectedItems} />
    </Flex>
  );
}
