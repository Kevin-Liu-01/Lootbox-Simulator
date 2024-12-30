// lootBoxAnimation.tsx
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import { StarIcon } from "lucide-react";

export type Rarity =
  | "legendary"
  | "mythical"
  | "epic"
  | "super rare"
  | "rare"
  | "common";

export interface LootBoxItem {
  name: string;
  image: string;
  rarity: Rarity;
}

export interface LootBox {
  type: "crate" | "skin" | "summon" | "starrdrop";
  name: string;
  background: string;
  backgroundImage: string;
  image: string;
}

interface LootBoxAnimationProps {
  selectedLootBox: LootBox | null;
  openedItems: LootBoxItem[];
  isOpening?: boolean;
  starrDropStage?: number;
  handleStarrDropClick?: () => void;
}

const rarityColors: Record<Rarity, string> = {
  common: "bg-gradient-to-r from-gray-600 to-gray-500",
  rare: "bg-gradient-to-r from-blue-600 to-blue-500",
  "super rare": "bg-gradient-to-r from-purple-600 to-purple-500",
  epic: "bg-gradient-to-r from-pink-600 to-pink-500",
  mythical: "bg-gradient-to-r from-red-600 to-red-500",
  legendary: "bg-gradient-to-r from-yellow-600 to-yellow-500",
};

const LootBoxOpening: React.FC<LootBoxAnimationProps> = ({
  selectedLootBox,
  openedItems,
  isOpening = false,
  starrDropStage = 1,
  handleStarrDropClick,
}) => {
  if (!selectedLootBox) return null;
  const [shakeEffect, setShakeEffect] = useState(true);

  const renderItems = () => (
    <div className="absolute z-10 mt-6 flex w-[90%] max-w-4xl flex-wrap justify-center gap-4">
      {openedItems.map((item, index) => (
        <div
          key={index}
          className={`animate-fadeIn relative flex flex-col items-center rounded-2xl p-3 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)] ${
            rarityColors[item.rarity]
          } border border-white/10 bg-gradient-to-t from-gray-900/60 to-black/70`}
        >
          <div
            className={`absolute inset-0 -z-10 animate-pulse rounded-2xl opacity-20 ${
              rarityColors[item.rarity]
            }`}
          />

          <img
            src={item.image}
            alt={item.name}
            className="h-24 w-24 rounded-md bg-gradient-to-br from-gray-800 to-black object-cover shadow-lg transition-transform duration-300 hover:scale-110"
          />

          <p className="text-md mt-4 text-center font-bold tracking-wide text-white drop-shadow-md">
            {item.name}
          </p>

          <div className="mt-3 flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
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
                    ? "text-yellow-400 drop-shadow-[0_0_5px_rgba(255,255,0,0.8)]"
                    : "text-gray-800"
                }`}
              />
            ))}
          </div>

          <div
            className={`absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md ${
              rarityColors[item.rarity]
            }`}
          >
            {item.rarity.toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  );

  switch (selectedLootBox.type) {
    case "crate":
    case "skin":
      return (
        <Flex
          align="center"
          justify="center"
          className={`relative h-full w-full flex-col ${selectedLootBox.background}`}
        >
          <img
            src={selectedLootBox.backgroundImage}
            alt={selectedLootBox.name}
            className="absolute h-full w-full object-cover opacity-70 blur-sm"
          />
          <img
            src={selectedLootBox.image}
            alt={selectedLootBox.name}
            className={`z-10 h-72 w-72 transition-transform duration-[1000] ease-in-out ${
              isOpening ? "animate-wiggle" : "hover:scale-105"
            }`}
          />
          {openedItems.length > 0 && renderItems()}
        </Flex>
      );

    case "summon":
      return (
        <Flex
          align="center"
          justify="center"
          className="relative h-full w-full flex-col"
        >
          <img
            src={selectedLootBox.backgroundImage}
            alt={selectedLootBox.name}
            className="absolute h-full w-full animate-pulse object-cover opacity-70"
          />
          <Flex align="center" justify="center" className="relative">
            <img
              src="/images/backgrounds/portal.png"
              alt="Portal"
              className="mb-4 h-72 w-72 animate-spin opacity-80"
            />
            {openedItems.length > 0 && renderItems()}
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
          <img
            src={selectedLootBox.backgroundImage}
            alt={selectedLootBox.name}
            className="z-5 absolute h-full w-full object-cover opacity-50 blur-sm"
          />
          {openedItems.length > 0 ? (
            <Flex
              className={`z-10 flex-col items-center rounded-lg p-3 ${rarityColors[openedItems[0]?.rarity]} border border-white/30 bg-opacity-90 shadow-lg`}
            >
              <img
                src={openedItems[0]?.image}
                alt={openedItems[0]?.name}
                className="mx-auto mb-2 h-16 w-16 rounded-md bg-black/30 object-cover"
              />
              <Text className="mx-auto text-center font-semibold">
                {openedItems[0]?.name}
              </Text>
              <Flex
                justify="center"
                align="center"
                className={`z-20 mt-2 space-x-0.5 rounded-full bg-black/40 p-1`}
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`size-4 rounded-full ${
                      i <
                      (openedItems[0]?.rarity === "legendary"
                        ? 5
                        : openedItems[0]?.rarity === "epic"
                          ? 4
                          : openedItems[0]?.rarity === "super rare"
                            ? 3
                            : openedItems[0]?.rarity === "rare"
                              ? 2
                              : 1)
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }`}
                  />
                ))}
              </Flex>
              {/* <Text className="capitalize italic"> {item.rarity}</Text> */}
            </Flex>
          ) : (
            <Flex
              justify="center"
              align="center"
              className="relative z-30 flex-col"
            >
              <img
                src="/images/lootboxes/starr-drop.webp"
                alt="Star Drop"
                onClick={() => {
                  setShakeEffect(true);
                }}
                onAnimationEnd={() => setShakeEffect(false)}
                className={`h-64 w-auto ${shakeEffect ? "animate-wiggle" : ""} cursor-pointer select-none transition duration-200 ease-in-out hover:scale-105`}
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

export default LootBoxOpening;
