// lootBoxAnimation.tsx
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import { LootBox, Item } from "~/app/utils/types";
import ItemCard from "~/app/components/lootbox_opening/item_card";
import {
  FlashingLights,
  SpinningLightCircle,
  BackgroundLightning,
  BackgroundLightning2,
  Particles,
  OpeningSparks,
  SpeedParticles,
  Portal,
} from "~/app/utils/staticImages";
import { GiftIcon } from "lucide-react";

interface LootBoxAnimationProps {
  selectedLootBox: LootBox | null;
  openedItems: Item[];
  isOpening?: boolean;
  starrDropStage?: number;
  handleStarrDropClick?: () => void;
}

const LootBoxOpening: React.FC<LootBoxAnimationProps> = ({
  selectedLootBox,
  openedItems,
  isOpening = false,
  starrDropStage = 1,
  handleStarrDropClick,
}) => {
  const [shakeEffect, setShakeEffect] = useState(true);

  if (!selectedLootBox) {
    return (
      <Flex
        align="center"
        justify="center"
        className="h-full w-full flex-col rounded-2xl border-2 border-dashed border-indigo-600 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 p-8 text-center"
      >
        <GiftIcon className="mr-2 size-12 rounded-xl border-2 p-2" />
        <Text className="my-2 text-4xl font-extrabold">Welcome to the</Text>
        <Text className="mb-4 gap-2 rounded-xl border border-gray-700 bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-600 px-3 text-4xl font-extrabold">
          Lootbox Simulator!
        </Text>
        <p className="mb-6 max-w-md text-center text-lg">
          In this game, you'll unlock amazing loot boxes filled with various
          items. Each loot box contains a unique set of rewards. Start opening
          loot boxes to collect rare items and fill your inventory!
        </p>
        <p className="text-md mb-6 text-center text-gray-300">
          To get started, select a loot box to open, and watch as the magic
          unfolds! The more loot boxes you open, the more exciting the
          possibilities.
        </p>
        <Text>Created by Kevin Liu</Text>
        <Text className="text-sm text-gray-300">
          <a
            href="https://github.com/Kevin-Liu-01/Lootbox-Simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View on GitHub
          </a>
        </Text>
      </Flex>
    );
  }

  const renderItems = () => (
    <Flex
      align="center"
      justify="center"
      className="absolute z-10 h-full w-[90%] max-w-4xl overflow-y-scroll"
    >
      <Flex align="center" justify="center" className="flex-wrap gap-4">
        {/*render a white flash that only appears for 25 milliseconds */}
        <FlashingLights />

        {/*render a spinning white circle  */}
        <SpinningLightCircle />

        {openedItems.map((item, index) => (
          <ItemCard item={item} index={index} />
        ))}
      </Flex>
    </Flex>
  );

  switch (selectedLootBox.type) {
    case "crate":
    case "skin":
      return (
        <Flex
          align="center"
          justify="center"
          className={`relative h-full w-full flex-col ${isOpening ? "animate-shake" : ""} ${selectedLootBox.background}`}
        >
          <img
            src={selectedLootBox.backgroundImage}
            alt={selectedLootBox.name}
            className="absolute h-full w-full object-cover opacity-70 blur-sm"
          />
          <BackgroundLightning isOpening={isOpening} />
          <Particles show={openedItems.length != 0} />
          <OpeningSparks isOpening={isOpening} />

          <img
            src={selectedLootBox.image}
            alt={selectedLootBox.name}
            className={`z-10 h-72 w-72 transition-transform duration-[1000] ease-in-out ${
              isOpening ? "animate-wiggleInfinite" : "hover:scale-105"
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
            className={`${isOpening ? "animate-shake" : "animate-pulse"} absolute h-full w-full object-cover opacity-50`}
          />
          <SpeedParticles isOpening={isOpening} />
          <BackgroundLightning isOpening={isOpening} />
          <Particles show={openedItems.length != 0} />

          <Flex align="center" justify="center" className="relative">
            <Portal isOpening={isOpening} />
            {openedItems.length > 0 && renderItems()}
          </Flex>
        </Flex>
      );

    case "starrdrop":
      return (
        <Flex
          align="center"
          justify="center"
          className={`h-full flex-col starrdrop-stage-${starrDropStage} ${shakeEffect ? "animate-shake" : ""}`}
          onClick={handleStarrDropClick}
        >
          <img
            src={selectedLootBox.backgroundImage}
            alt={selectedLootBox.name}
            className="z-5 absolute h-full w-full object-cover opacity-50 blur-sm"
          />
          <BackgroundLightning2 isOpening={shakeEffect} />
          <Particles show={openedItems.length != 0} />

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
                    key={"star" + i}
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
