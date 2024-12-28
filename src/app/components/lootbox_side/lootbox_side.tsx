import React, { useState } from "react";
import LootBoxMenu from "./lootbox_menu";
import LootBoxInventory from "./lootbox_inventory";

type Rarity =
  | "common"
  | "rare"
  | "super rare"
  | "epic"
  | "mythical"
  | "legendary";

const rarityColors: Record<Rarity, string> = {
  common: "bg-gray-500",
  rare: "bg-blue-500",
  "super rare": "bg-purple-500",
  epic: "bg-pink-500",
  mythical: "bg-red-500",
  legendary: "bg-yellow-500",
};

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
    <div className="flex h-screen w-full flex-col overflow-y-auto p-4">
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

      <div className="h-full w-full overflow-y-auto rounded-xl bg-gray-800">
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
      </div>
      {/* Collected Items */}
      <div className="mt-4 h-72 w-full overflow-y-auto rounded-xl bg-gray-800 p-4">
        <h2 className="mb-2 text-center text-xl font-bold">Collected Items</h2>
        <div className="grid grid-cols-6 gap-2">
          {collectedItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg p-2 text-center text-sm shadow-md ${rarityColors[item.rarity]}`}
            >
              <img
                src={item?.image}
                alt={item.name}
                className="mx-auto h-10 w-10"
              />
              <p className="font-bold">{item.name}</p>
              <p className="capitalize">{item.rarity}</p>
            </div>
          ))}

          {collectedItems.length < 60 &&
            Array.from({ length: 60 - collectedItems.length }).map(
              (_, index) => (
                <div
                  key={`placeholder-${index}`}
                  className="h-32 rounded-lg bg-gray-700 shadow-lg"
                ></div>
              ),
            )}
        </div>
      </div>
    </div>
  );
}
