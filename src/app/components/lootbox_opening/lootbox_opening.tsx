// lootBoxAnimation.tsx
import React, { useState } from "react";
import { Flex } from "@radix-ui/themes";
import ItemCard from "~/app/components/lootbox_opening/item_card";

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
        <>
          {/*render a white flash that only appears for 25 milliseconds */}
          <img
            src="/images/backgrounds/flashinglights.png"
            className="animate-fadeIn absolute inset-0 -z-20 h-[110%] w-full rounded-full opacity-80 transition-opacity duration-[25]"
          />
          <ItemCard item={item} index={index} />
        </>
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
            src="/images/backgrounds/flashinglights.png"
            className="animate-fadeIn absolute inset-0 -z-20 h-[110%] w-full rounded-full opacity-80 transition-opacity duration-[25]"
          />
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
            renderItems()
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
