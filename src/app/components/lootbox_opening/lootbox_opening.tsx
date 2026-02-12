// lootBoxAnimation.tsx
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import { type LootBox, type Item, rarityColors } from "~/app/utils/types";
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
  RuneCircle,
  GlowingAura,
} from "~/app/utils/staticImages";
import { GiftIcon, GithubIcon } from "lucide-react";

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

  const rarityData = [
    {
      label: "Common",
      description: "Frequently dropped items that are easily obtained.",
      color: rarityColors.common,
    },
    {
      label: "Rare",
      description: "Less common than common drops but still fairly frequent.",
      color: rarityColors.rare,
    },
    {
      label: "Super Rare",
      description: "Rare items that have a notable value.",
      color: rarityColors["super rare"],
    },
    {
      label: "Epic",
      description: "Highly sought-after drops with greater rarity.",
      color: rarityColors.epic,
    },
    {
      label: "Mythical",
      description: "Extremely rare items that are coveted by collectors.",
      color: rarityColors.mythical,
    },
    {
      label: "Legendary",
      description: "The rarest and most valuable items in the drop pool.",
      color: rarityColors.legendary,
    },
  ];

  const renderItems = () => (
    <Flex
      align="center"
      justify="center"
      className="absolute z-30 my-3 h-full w-full max-w-4xl overflow-y-auto py-8"
    >
      <Flex
        align="center"
        justify="center"
        className="mx-8 flex-wrap gap-2 sm:mx-4 sm:gap-4"
      >
        <FlashingLights />
        <SpinningLightCircle />

        {openedItems.map((item, index) => (
          <ItemCard key={"itemcard" + item.name + index} item={item} />
        ))}
      </Flex>
    </Flex>
  );

  function handleDisplay() {
    if (!selectedLootBox) {
      return (
        <Flex
          align="center"
          justify="center"
          className="h-auto min-h-full w-full flex-col rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-indigo-950/90 p-4 text-center xl:p-8"
        >
          <GiftIcon className="mr-2 size-10 rounded-xl border-2 border-indigo-400/30 p-2 text-indigo-300" />
          <Text className="my-1 text-lg font-extrabold xl:text-2xl">
            Welcome to the
          </Text>
          <Text className="mb-4 gap-2 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 px-4 py-1 text-lg font-extrabold shadow-lg shadow-purple-900/30 xl:text-3xl">
            Lootbox Simulator!
          </Text>
          <p className="mb-6 max-w-md text-center text-sm leading-relaxed text-gray-300">
            In this game, you&apos;ll unlock amazing loot boxes filled with various
            items. Each loot box contains a unique set of rewards. Start opening
            loot boxes to collect rare items and fill your inventory with
            goodies!
          </p>

          <Flex
            align="center"
            justify="center"
            className="mb-6 h-full flex-col rounded-xl border border-indigo-500/15 bg-black/20 p-3"
          >
            <Text className="mb-3 text-base font-semibold text-gray-100">
              Item Rarities:
            </Text>
            <div className="grid w-full grid-cols-2 gap-2">
              {rarityData.map(({ label, description, color }) => (
                <Flex
                  key={label}
                  justify="center"
                  align="center"
                  className={`${color} flex-col rounded-xl border border-white/[0.06] p-2.5 text-center transition-all hover:scale-[1.02]`}
                >
                  <Text className="rounded-full border border-white/30 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                    {label}
                  </Text>
                  <p className="mt-1.5 text-[0.7rem] leading-tight text-gray-200">
                    {description}
                  </p>
                </Flex>
              ))}
            </div>
          </Flex>
          <Text className="text-sm text-gray-300">Created by Kevin Liu</Text>
          <Text className="mt-1 text-sm text-gray-400">
            <a
              href="https://github.com/Kevin-Liu-01/Lootbox-Simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-gray-200"
            >
              <GithubIcon className="mr-1 inline-block size-4" />
              View on GitHub
            </a>
          </Text>
        </Flex>
      );
    }

    switch (selectedLootBox.type) {
      case "crate":
      case "skin":
        return (
          <Flex
            align="center"
            justify="center"
            className={`relative h-full w-full flex-col overflow-hidden ${isOpening ? "animate-shake" : ""} ${selectedLootBox.background}`}
          >
            <img
              src={selectedLootBox.backgroundImage}
              alt={selectedLootBox.name}
              className="absolute h-full w-full object-cover opacity-70 blur-sm"
            />
            <BackgroundLightning isOpening={isOpening} />
            <Particles show={openedItems.length !== 0} />
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
            className="relative h-full w-full flex-col overflow-hidden"
          >
            <img
              src={selectedLootBox.backgroundImage}
              alt={selectedLootBox.name}
              className={`${isOpening ? "animate-shake" : "animate-pulse"} absolute h-full w-full object-cover opacity-50`}
            />
            <SpeedParticles isOpening={isOpening} />
            <BackgroundLightning isOpening={isOpening} />
            <Particles show={openedItems.length !== 0} />

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
            className={`relative h-full flex-col overflow-hidden starrdrop-stage-${starrDropStage} ${shakeEffect ? "animate-shake" : ""}`}
            onClick={handleStarrDropClick}
          >
            <img
              src={selectedLootBox.backgroundImage}
              alt={selectedLootBox.name}
              className="z-5 absolute h-full w-full object-cover opacity-50 blur-sm"
            />
            <BackgroundLightning2 isOpening={shakeEffect} />
            <Particles show={openedItems.length !== 0} />

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
                <p className="mt-3 text-center text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={"star" + i}
                      className={`mx-1 inline-block h-4 w-4 rounded-full transition-all ${
                        i < starrDropStage - 1
                          ? "bg-yellow-400 shadow-md shadow-yellow-400/50"
                          : i === starrDropStage - 1
                            ? "border-2 border-yellow-400 bg-gray-600"
                            : "bg-gray-600"
                      }`}
                    />
                  ))}
                </p>
              </Flex>
            )}
          </Flex>
        );

      case "runereveal":
        return (
          <Flex
            align="center"
            justify="center"
            className={`relative h-full w-full flex-col overflow-hidden ${selectedLootBox.background}`}
          >
            <Flex
              align="center"
              justify="center"
              className="relative h-full w-full flex-col"
            >
              <RuneCircle isOpening={isOpening} items={openedItems.length} />
              <GlowingAura />
              <img
                src={selectedLootBox.image}
                alt={selectedLootBox.name}
                className={`z-30 h-72 w-72 transition-transform duration-[1000] ease-in-out ${
                  isOpening ? "animate-wiggleInfinite" : "hover:scale-105"
                }`}
              />
            </Flex>
            <BackgroundLightning isOpening={isOpening} />
            <Particles show={openedItems.length !== 0} />
            <OpeningSparks isOpening={isOpening} />
            <img
              src={selectedLootBox.backgroundImage}
              alt={selectedLootBox.name}
              className={`${isOpening ? "animate-shake" : "animate-pulse"} absolute h-full w-full object-cover opacity-50`}
            />

            {openedItems.length > 0 && renderItems()}
          </Flex>
        );

      default:
        return null;
    }
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-900 shadow-xl shadow-indigo-900/20">
      {/* Outer frame with glowing effect */}
      <div className="absolute inset-0 z-20 animate-pulse rounded-2xl border border-indigo-400/20"></div>
      {/* Content area */}
      <div className="relative z-30 h-full w-full overflow-y-auto">
        {handleDisplay()}
      </div>
    </div>
  );
};

export default LootBoxOpening;
