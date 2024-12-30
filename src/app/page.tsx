"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, Flex, Text } from "@radix-ui/themes";
import { StarIcon } from "lucide-react";

import LootBoxOpening from "~/app/components/lootbox_opening/lootbox_opening";
import LootBoxSide from "~/app/components/lootbox_side/lootbox_side";
import { availableLootBoxes } from "~/app/utils/drops";
import useLocalStorage from "~/app/utils/useLocalStorage";

type Rarity =
  | "common"
  | "rare"
  | "super rare"
  | "epic"
  | "mythical"
  | "legendary";

type Item = {
  name: string;
  rarity: Rarity;
  chance: number;
  image: string;
};

type LootBoxType = "crate" | "starrdrop" | "skin" | "summon";

type LootBox = {
  id: string;
  name: string;
  game: string;
  type: LootBoxType;
  background: string;
  backgroundImage: string;
  image: string;
  drops: Item[];
};

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

  const addLootBoxToInventory = (box: LootBox) => {
    setLootBoxInventory([...lootBoxInventory, { ...box, id: uuidv4() }]);
  };

  const openLootBox = (box: LootBox) => {
    setIsOpening(true);

    if (box.type === "starrdrop") {
      // StarrDrop animation
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
      }, 500);
    }
  };

  const finalizeOpening = (box: LootBox) => {
    setLootBoxInventory(
      lootBoxInventory.filter((b: { id: string }) => b.id !== box.id),
    );
    // setSelectedLootBox(null);
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
    <Flex className="min-h-screen flex-row bg-gray-900 text-white">
      {/* Left Side: Opening Area */}
      <Flex
        align="center"
        justify="center"
        className="h-screen w-1/2 flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-800 p-4"
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

      {/* Right Side: LootBox Side */}
      <LootBoxSide
        availableLootBoxes={availableLootBoxes}
        addLootBoxToInventory={addLootBoxToInventory}
        confirmOpenLootBox={confirmOpenLootBox}
        collectedItems={collectedItems}
        lootBoxInventory={lootBoxInventory}
        setLootBoxInventory={setLootBoxInventory}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative rounded-lg bg-gray-800 p-6 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Open {selectedLootBox?.name}?
            </h2>
            <button
              className="mr-4 rounded-xl bg-green-500 px-4 py-2"
              onClick={handleConfirmOpen}
            >
              Confirm
            </button>
            <button
              className="rounded-xl bg-red-500 px-4 py-2"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Flex>
  );
};

export default App;
