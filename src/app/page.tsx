"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Flex, Text } from "@radix-ui/themes";
import { type Item, type LootBox, rarityColors } from "~/app/utils/types";
import LootBoxOpening from "~/app/components/lootbox_opening/lootbox_opening";
import LootBoxSide from "~/app/components/lootbox_side/lootbox_side";
import { availableLootBoxes } from "~/app/utils/drops";
import useLocalStorage from "~/app/utils/useLocalStorage";
import { XIcon, DoorOpenIcon } from "lucide-react";

const App = () => {
  const [selectedLootBox, setSelectedLootBox] = useState<LootBox | null>(null);
  const [lootBoxInventory, setLootBoxInventory] = useLocalStorage<LootBox[]>(
    "lootboxInventory",
    [],
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [openedItems, setOpenedItems] = useState<Item[]>([]);
  const [collectedItems, setCollectedItems] = useLocalStorage<Item[]>(
    "collectedItems",
    [],
  );
  const [starrDropStage, setStarrDropStage] = useState<number>(0);
  const [isLeftSideOnLeft, setIsLeftSideOnLeft] = useState(true);
  const [displayOpening, setDisplayOpening] = useState(false);

  const addLootBoxToInventory = (box: LootBox, count: number) => {
    setLootBoxInventory([
      ...lootBoxInventory,
      ...Array.from({ length: count }, () => ({ ...box, id: uuidv4() })),
    ]);
  };

  const openLootBox = (box: LootBox) => {
    setIsOpening(true);
    setDisplayOpening(true);
    setLootBoxInventory(
      lootBoxInventory.filter((b: { id: string }) => b.id !== box.id),
    );
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
        setIsOpening(false);
      }, 1000);
    }
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
          const newDrop = { ...drop, id: uuidv4() };
          result.push(newDrop);
          break;
        }
      }
    }

    return result;
  };

  const handleStarrDropClick = () => {
    if (starrDropStage < 5) {
      setStarrDropStage(starrDropStage + 1);
    } else if (starrDropStage === 5) {
      const upgradedItem = simulateDrops(selectedLootBox!, 1);
      setOpenedItems(upgradedItem);
      setCollectedItems([...collectedItems, ...upgradedItem]);
      setIsOpening(false);

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
      className={`min-h-screen flex-col bg-[#0f0d1a] font-sans text-white ${isLeftSideOnLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
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

      {/* Left Side: Opening Area (Mobile Overlay) */}
      {displayOpening && (
        <Flex
          align="center"
          justify="center"
          className="absolute z-50 h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 p-4 sm:hidden sm:h-0 sm:w-0 sm:p-0"
        >
          <LootBoxOpening
            selectedLootBox={selectedLootBox}
            openedItems={openedItems}
            isOpening={isOpening}
            starrDropStage={starrDropStage}
            handleStarrDropClick={handleStarrDropClick}
          />

          {/* Return button */}
          {!isOpening && (
            <button
              className="absolute bottom-8 z-50 mx-auto flex animate-fadeIn items-center gap-2 rounded-xl border border-white/10 bg-gray-800/70 px-4 py-2.5 font-semibold text-gray-200 shadow-lg backdrop-blur-sm transition-all hover:border-white/20 hover:bg-gray-700/80 hover:text-white"
              onClick={() => setDisplayOpening(false)}
            >
              <DoorOpenIcon size={20} />
              Return to Inventory
            </button>
          )}
        </Flex>
      )}

      {/* Left Side: Opening Area (Desktop) */}
      <Flex
        align="center"
        justify="center"
        className="relative hidden h-0 flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 sm:inline sm:h-screen sm:w-1/2 sm:p-4"
      >
        <LootBoxOpening
          selectedLootBox={selectedLootBox}
          openedItems={openedItems}
          isOpening={isOpening}
          starrDropStage={starrDropStage}
          handleStarrDropClick={handleStarrDropClick}
        />
      </Flex>

      {/* Confirm Open Modal */}
      {isModalOpen && selectedLootBox && (
        <Flex
          align="center"
          justify="center"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
        >
          <div
            className={`${selectedLootBox.background} relative m-6 w-96 max-w-full rounded-2xl border border-white/10 p-6 text-center text-gray-100 shadow-2xl`}
          >
            <button
              className="absolute right-3 top-3 rounded-lg p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              <XIcon className="size-5" />
            </button>

            {/* Loot Box Title */}
            <h2 className="mb-1 text-2xl font-bold text-white">
              {selectedLootBox.name}
            </h2>
            {/* Game Name */}
            <p className="mb-4 text-sm text-gray-300">
              From: {selectedLootBox.game}
            </p>
            {/* Loot Box Image */}
            <div className="relative mb-4 overflow-hidden rounded-xl border border-white/[0.08] bg-black/30 p-4 shadow-inner">
              <img
                src={selectedLootBox.image}
                alt={selectedLootBox.name}
                className="z-10 mx-auto mb-2 h-24 w-24 object-contain"
              />
              {selectedLootBox.backgroundImage && (
                <img
                  src={selectedLootBox.backgroundImage}
                  alt="Background"
                  className="absolute inset-0 h-full w-full border-0 object-cover opacity-20 blur-[1px]"
                />
              )}
            </div>
            {/* Type */}
            <p className="mb-3 rounded-lg bg-black/20 py-2 text-sm font-medium capitalize text-gray-200">
              Type: {selectedLootBox.type}
            </p>
            {/* Potential Drops */}
            <div className="mb-4 text-left">
              <h3 className="text-base font-semibold text-gray-200">
                Potential Drops:
              </h3>
              <ul className="mt-2 max-h-[16.75rem] space-y-1 overflow-y-auto rounded-xl bg-gray-900/70 p-1.5 text-sm text-gray-300">
                {selectedLootBox.drops.length > 0 ? (
                  selectedLootBox.drops.map((item) => (
                    <li
                      key={item.name + item.id}
                      className={`flex items-center gap-2 rounded-lg ${rarityColors[item.rarity]} border border-white/[0.05] p-2 shadow`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-6 w-6 rounded-full object-contain"
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
                className="w-full rounded-xl border border-green-400/20 bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-green-500"
                onClick={handleConfirmOpen}
              >
                Confirm
              </button>
              <button
                className="w-full rounded-xl border border-red-400/20 bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-red-500"
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
