"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Flex, Text } from "@radix-ui/themes";
import { Item, LootBox, rarityColors } from "~/app/utils/types";
import LootBoxOpening from "~/app/components/lootbox_opening/lootbox_opening";
import LootBoxSide from "~/app/components/lootbox_side/lootbox_side";
import { availableLootBoxes } from "~/app/utils/drops";
import useLocalStorage from "~/app/utils/useLocalStorage";
import { XIcon, SwatchBook } from "lucide-react";

const App = () => {
  const [selectedLootBox, setSelectedLootBox] = useState<LootBox | null>(null);
  const [lootBoxInventory, setLootBoxInventory] = useLocalStorage(
    "lootboxInventory",
    [],
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [openedItems, setOpenedItems] = useState<Item[]>([]);
  const [collectedItems, setCollectedItems] = useLocalStorage(
    "collectedItems",
    [],
  );
  const [starrDropStage, setStarrDropStage] = useState<number>(0);
  const [isLeftSideOnLeft, setIsLeftSideOnLeft] = useState(true); // New state to toggle position

  const addLootBoxToInventory = (box: LootBox, count: number) => {
    setLootBoxInventory([
      ...lootBoxInventory,
      ...Array.from({ length: count }, () => ({ ...box, id: uuidv4() })),
    ]);
  };

  const openLootBox = (box: LootBox) => {
    setIsOpening(true);
    if (box.type === "starrdrop") {
      setStarrDropStage(1);
    } else {
      setTimeout(() => {
        const items = simulateDrops(
          box,
          box.type === "summon" ? 1 : Math.floor(Math.random() * 5) + 2,
        );
        setOpenedItems(items);
        setCollectedItems([...collectedItems, ...items]);
        finalizeOpening(box);
      }, 1000);
    }
  };

  const finalizeOpening = (box: LootBox) => {
    setLootBoxInventory(
      lootBoxInventory.filter((b: { id: string }) => b.id !== box.id),
    );
    setIsOpening(false);
  };

  const simulateDrops = (box: LootBox, limit: number): Item[] => {
    const totalWeight = box.drops.reduce((acc, drop) => acc + drop.chance, 0);
    const result: Item[] = [];
    for (let i = 0; i < limit; i++) {
      const randomValue = Math.random() * totalWeight;
      let cumulativeWeight = 0;
      for (const drop of box.drops) {
        cumulativeWeight += drop.chance;
        if (randomValue <= cumulativeWeight) {
          drop.id = uuidv4();
          result.push(drop);
          break;
        }
      }
    }
    return result;
  };

  const handleStarrDropClick = () => {
    if (starrDropStage < 5) {
      setStarrDropStage(starrDropStage + 1);
    } else if (starrDropStage == 5) {
      const upgradedItem = simulateDrops(selectedLootBox!, 1);
      setOpenedItems(upgradedItem);
      setCollectedItems([...collectedItems, ...upgradedItem]);
      finalizeOpening(selectedLootBox!);
      setStarrDropStage(6);
    }
  };

  const confirmOpenLootBox = (box: LootBox) => {
    setSelectedLootBox(box);
    setOpenedItems([]);
    setIsModalOpen(true);
  };

  const handleConfirmOpen = () => {
    setIsModalOpen(false);
    if (selectedLootBox) openLootBox(selectedLootBox);
  };

  return (
    <Flex
      className={`min-h-screen flex-col bg-gray-900 font-sans text-white ${isLeftSideOnLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
    >
      {/* Right Side: LootBox Side */}
      <LootBoxSide
        availableLootBoxes={availableLootBoxes}
        addLootBoxToInventory={addLootBoxToInventory}
        confirmOpenLootBox={confirmOpenLootBox}
        collectedItems={collectedItems}
        setCollectedItems={setCollectedItems}
        lootBoxInventory={lootBoxInventory}
        setLootBoxInventory={setLootBoxInventory}
        isLeftSideOnLeft={isLeftSideOnLeft}
        setIsLeftSideOnLeft={setIsLeftSideOnLeft}
      />

      {/* Left Side: Opening Area */}
      <Flex
        align="center"
        justify="center"
        className="h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-800 to-indigo-900 p-4 sm:w-1/2"
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-900 shadow-lg shadow-blue-800/50">
          {/* Outer frame with glowing effect */}
          <div className="absolute inset-0 z-20 animate-pulse rounded-2xl border-2 border-dashed border-blue-400/40"></div>
          {/* Content area */}
          <div className="relative z-30 h-full w-full overflow-y-auto">
            <LootBoxOpening
              selectedLootBox={selectedLootBox}
              openedItems={openedItems}
              isOpening={isOpening}
              starrDropStage={starrDropStage}
              handleStarrDropClick={handleStarrDropClick}
            />
          </div>
        </div>
      </Flex>

      {/* Modal */}
      {isModalOpen && selectedLootBox && (
        <Flex
          align="center"
          justify="center"
          className="fixed inset-0 z-20 bg-black bg-opacity-75"
        >
          <div
            className={`${selectedLootBox.background} relative w-96 max-w-full rounded-xl p-5 text-center text-gray-100 shadow-lg`}
          >
            <XIcon
              className="absolute right-4 top-4 size-6 cursor-pointer text-gray-800 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            />
            {/* Loot Box Title */}
            <h2 className="mb-1 text-2xl font-bold text-white">
              {selectedLootBox.name}
            </h2>
            {/* Game Name */}
            <p className="mb-4 text-sm italic text-gray-200">
              From: {selectedLootBox.game}
            </p>
            {/* Loot Box Image */}
            <div className="relative mb-3 overflow-hidden rounded-lg border border-gray-900/60 bg-gray-700 p-4 shadow-inner">
              <img
                src={selectedLootBox.image}
                alt={selectedLootBox.name}
                className="z-10 mx-auto mb-2 h-24 w-24 object-contain"
              />
              {selectedLootBox.backgroundImage && (
                <img
                  src={selectedLootBox.backgroundImage}
                  alt="Background"
                  className="z-5 absolute inset-0 h-full w-full border object-cover opacity-20 blur-[2px]"
                />
              )}
            </div>
            {/* Type */}
            <p className="mb-3 rounded-lg bg-gray-800/20 py-2 text-sm font-medium capitalize text-gray-200">
              Type: {selectedLootBox.type}
            </p>
            {/* Potential Drops */}
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-200">
                Potential Drops:
              </h3>
              <ul className="mt-2 max-h-[16.75rem] space-y-1 overflow-y-auto rounded-lg bg-gray-900 p-1 text-sm text-gray-300">
                {selectedLootBox.drops.length > 0 ? (
                  selectedLootBox.drops.map((item) => (
                    <li
                      key={item.name + item.id}
                      className={`flex items-center gap-2 rounded-md ${rarityColors[item.rarity]} p-2 shadow`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      {item.name}
                      <Text className="ml-auto text-xs font-semibold text-white/80">
                        {item.chance}%
                      </Text>
                    </li>
                  ))
                ) : (
                  <li className="italic text-gray-400">No drops available.</li>
                )}
              </ul>
            </div>
            {/* Action Buttons */}
            <Flex justify="center" className="gap-3">
              <button
                className="w-full rounded-lg border border-gray-800/40 bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                onClick={handleConfirmOpen}
              >
                Confirm
              </button>
              <button
                className="w-full rounded-lg border border-gray-800/40 bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </Flex>
          </div>
        </Flex>
      )}
    </Flex>
  );
};

export default App;
