"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, Flex, Text } from "@radix-ui/themes";
import { StarIcon } from "lucide-react";
import LootBoxSide from "~/app/components/lootbox_side/lootbox_side";
import { transformers } from "~/app/utils/drops";

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

const rarityColors: Record<Rarity, string> = {
  common: "bg-gray-500",
  rare: "bg-blue-500",
  "super rare": "bg-purple-500",
  epic: "bg-pink-500",
  mythical: "bg-red-500",
  legendary: "bg-yellow-500",
};

const App = () => {
  const [selectedLootBox, setSelectedLootBox] = useState<LootBox | null>(null);
  const [lootBoxInventory, setLootBoxInventory] = useState<LootBox[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [openedItems, setOpenedItems] = useState<Item[]>([]);
  const [collectedItems, setCollectedItems] = useState<Item[]>([]);
  const [starrDropStage, setStarrDropStage] = useState<number>(0);

  const availableLootBoxes: LootBox[] = [
    {
      id: uuidv4(),
      name: "Normal Lootbox",
      game: "Fantasy Quest",
      type: "crate",
      background: "bg-blue-500",
      backgroundImage: "/images/backgrounds/normal-lootbox-bg.jpg",
      image: "/images/lootboxes/normal-lootbox.png",
      drops: [
        { name: "Common Sword", rarity: "common", chance: 70, image: "" },
        { name: "Rare Shield", rarity: "rare", chance: 20, image: "" },
        {
          name: "Legendary Helmet",
          rarity: "legendary",
          chance: 0.5,
          image: "",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Star Drop",
      game: "Galaxy Adventures",
      type: "starrdrop",
      background: "bg-yellow-500",
      backgroundImage: "/images/backgrounds/starr.jpeg",
      image: "/images/lootboxes/starr-drop.webp",
      drops: [
        { name: "Rare Gem", rarity: "rare", chance: 80, image: "" },
        {
          name: "Super Rare Crystal",
          rarity: "super rare",
          chance: 15,
          image: "",
        },
        {
          name: "Legendary Relic",
          rarity: "legendary",
          chance: 0.5,
          image: "",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Summoner Crystal",
      game: "Transformers Universe",
      type: "summon",
      background: "bg-red-500",
      backgroundImage: "/images/backgrounds/summoner_crystal.avif",
      image: "/images/lootboxes/summoner-crystal.webp",
      drops: transformers,
    },
    {
      id: "loot-crate",
      name: "Loot Crate",
      game: "Adventure Saga",
      type: "crate",
      background: "bg-green-500",
      backgroundImage: "/images/backgrounds/lootcrate.jpg",
      image: "/images/lootboxes/loot-crate.png",
      drops: [
        {
          name: "Treasure Map",
          rarity: "common",
          chance: 60,
          image: "/images/lootboxes/treasure-map.png",
        },
        {
          name: "Golden Sword",
          rarity: "rare",
          chance: 25,
          image: "/images/lootboxes/golden-sword.png",
        },
        {
          name: "Ancient Artifact",
          rarity: "super rare",
          chance: 10,
          image: "/images/lootboxes/ancient-artifact.png",
        },
      ],
    },
    {
      id: "portal",
      name: "Portal",
      game: "Gacha Adventures",
      type: "summon",
      background: "bg-purple-500",
      backgroundImage: "/images/backgrounds/gachaportal.jpg",
      image: "/images/lootboxes/gacha_crystal.webp",
      drops: [
        {
          name: "Hero A",
          rarity: "common",
          chance: 50,
          image: "/images/lootboxes/hero-a.png",
        },
        {
          name: "Hero B",
          rarity: "rare",
          chance: 30,
          image: "/images/lootboxes/hero-b.png",
        },
        {
          name: "Hero S",
          rarity: "legendary",
          chance: 5,
          image: "/images/lootboxes/hero-s.png",
        },
      ],
    },
    {
      id: "skin-crate",
      name: "Skin Crate",
      game: "Battle Royale Legends",
      type: "skin",
      background: "bg-orange-500",
      backgroundImage: "/images/backgrounds/skincrate.jpg",
      image: "/images/lootboxes/skin-crate.png",
      drops: [
        {
          name: "Epic Outfit",
          rarity: "epic",
          chance: 15,
          image: "/images/lootboxes/epic-outfit.png",
        },
        {
          name: "Rare Outfit",
          rarity: "rare",
          chance: 50,
          image: "/images/lootboxes/rare-outfit.png",
        },
        {
          name: "Legendary Outfit",
          rarity: "legendary",
          chance: 2,
          image: "/images/lootboxes/legendary-outfit.png",
        },
      ],
    },
  ];

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
        const items = simulateDrops(box, box.type === "summon" ? 1 : 3);
        setOpenedItems(items);
        setCollectedItems([...collectedItems, ...items]);
        finalizeOpening(box);
      }, 200);
    }
  };

  const finalizeOpening = (box: LootBox) => {
    setLootBoxInventory(lootBoxInventory.filter((b) => b.id !== box.id));
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

  const renderLootBoxAnimation = () => {
    if (!selectedLootBox) return null;

    switch (selectedLootBox.type) {
      case "crate":
      case "skin":
        return (
          <Flex
            align="center"
            justify="center"
            // className="relative flex h-full w-full flex-col items-center justify-center"
            className={`relative flex h-full w-full flex-col items-center justify-center ${selectedLootBox.background}`}
          >
            <img
              src={selectedLootBox.backgroundImage}
              alt={selectedLootBox.name}
              className="z-5 absolute h-full w-full object-cover opacity-50"
            />
            <img
              src={selectedLootBox.image}
              alt={selectedLootBox.name}
              className={`z-10 h-72 w-72 ${isOpening ? "animate-spin" : ""}`}
            />
            {openedItems.length > 0 && (
              <Flex className="absolute z-20 mt-4 grid grid-cols-3 gap-4">
                {openedItems.map((item, index) => (
                  <Box
                    key={index}
                    className={`flex flex-col items-center rounded-lg p-4 ${rarityColors[item.rarity]} bg-opacity-90 shadow-lg`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mx-auto mb-2 h-16 w-16"
                    />
                    <Text className="text-center">{item.name}</Text>
                    <Text className="capitalize italic"> {item.rarity}</Text>
                  </Box>
                ))}
              </Flex>
            )}
          </Flex>
        );

      case "summon":
        return (
          <Flex
            align="center"
            justify="center"
            className="relative h-full flex-col"
          >
            <img
              src={selectedLootBox.backgroundImage}
              alt={selectedLootBox.name}
              className="z-5 absolute h-full w-full animate-pulse object-cover"
            />
            <Flex
              align="center"
              justify="center"
              className="portal-animation relative"
            >
              <img
                src="/images/backgrounds/portal.png"
                alt="Portal"
                className="mb-4 animate-spin opacity-50"
              />
              {openedItems.length > 0 && (
                <div className="absolute flex flex-col items-center space-y-4">
                  {openedItems.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-3xl border border-white/50 bg-opacity-80 p-4 ${
                        item.rarity ? rarityColors[item.rarity] : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-auto w-72 p-4"
                      />
                      <p className="my-2 text-xl font-semibold">{item.name}</p>
                      <Flex
                        justify="center"
                        align="center"
                        className={`z-20 h-full space-x-0.5 rounded-full bg-black/50 p-2`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`size-5 rounded-full ${
                              i <
                              (item.rarity === "legendary"
                                ? 5
                                : item.rarity === "epic"
                                  ? 4
                                  : item.rarity === "super rare"
                                    ? 3
                                    : item.rarity === "rare"
                                      ? 2
                                      : 1)
                                ? "text-yellow-500"
                                : "text-gray-500"
                            }`}
                          />
                        ))}
                      </Flex>
                    </div>
                  ))}
                </div>
              )}
            </Flex>
          </Flex>
        );

      case "starrdrop":
        return (
          <Flex
            align="center"
            justify="center"
            className={`h-full flex-col starrdrop-stage-${starrDropStage}`}
            onClick={handleStarrDropClick}
          >
            {openedItems.length > 0 ? (
              <div className="mt-4 flex flex-col items-center">
                {openedItems.map((item, index) => (
                  <div key={index} className="rounded-lg p-4 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mx-auto mb-2 h-16 w-16"
                    />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <Flex justify="center" align="center" className="flex-col">
                <img
                  src="/images/lootboxes/starr-drop.webp"
                  alt="Star Drop"
                  className={`h-64 w-auto ${isOpening ? "animate-pulse" : ""} cursor-pointer`}
                />
                <p className="mt-2 text-center text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`mx-1 inline-block h-4 w-4 rounded-full ${
                        i < starrDropStage - 1
                          ? "bg-yellow-500" // Active (completed) dots
                          : i === starrDropStage - 1
                            ? "border-2 border-yellow-500 bg-gray-500" // Current stage (highlighted) with circle
                            : "bg-gray-300" // Inactive dots
                      }`}
                    />
                  ))}
                </p>
              </Flex>
            )}
          </Flex>
        );

      default:
        return null;
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
    <div className="flex min-h-screen flex-row bg-gray-900 text-white">
      {/* Left Side: Opening Area */}
      <Flex className="h-screen w-1/2 flex-col items-center justify-center p-4">
        <Box className="relative h-full w-full overflow-y-auto rounded-xl bg-gray-800">
          <h2 className="mb-4 text-2xl font-semibold">Opening Area</h2>
          <div className="relative h-full w-full">
            {renderLootBoxAnimation()}
          </div>
        </Box>
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
    </div>
  );
};

export default App;
