import React, { useState } from "react";
import { LootBox, rarityColors } from "~/app/utils/types";
import { Flex, Text } from "@radix-ui/themes";
import { FileBoxIcon } from "lucide-react";

export default function LootBoxMenu({
  availableLootBoxes,
  addLootBoxToInventory,
  handleToggleView,
}: {
  availableLootBoxes: LootBox[];
  addLootBoxToInventory: (box: LootBox, count: number) => void;
  handleToggleView: () => void;
}) {
  // Track quantities for each loot box
  const [quantities, setQuantities] = useState(
    Object.fromEntries(availableLootBoxes.map((box) => [box.id, 1])),
  );

  const incrementQuantity = (id: string) => {
    setQuantities((prev: any) => ({
      ...prev,
      [id]: Math.min(prev[id] + 1, 20),
    }));
  };

  const decrementQuantity = (id: string) => {
    setQuantities((prev: any) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1),
    }));
  };

  const addHandler = (box: LootBox, count: number) => {
    addLootBoxToInventory(box, count);
    handleToggleView();
  };

  return (
    <Flex className="w-full flex-col p-3">
      <Flex className="mb-4">
        <Flex align="center" className="gap-3 text-2xl font-bold">
          <FileBoxIcon size={24} />
          Available Lootboxes
        </Flex>
      </Flex>
      <div className="grid w-full grid-cols-2 gap-4 overflow-y-auto rounded-md bg-gray-900 p-3 md:grid-cols-3">
        {availableLootBoxes.map((box) => (
          <Flex
            key={box.id}
            className={`cursor-pointer flex-col rounded-xl p-4 shadow-lg ${box.background}`}
          >
            <Flex
              justify="center"
              align="center"
              className="relative overflow-hidden rounded-lg bg-black/20 p-3"
            >
              <img
                src={box.backgroundImage}
                alt={box.name}
                className="z-5 absolute h-full w-full object-cover opacity-50 blur-[1px]"
              />
              <img
                src={box.image}
                alt={box.name}
                className="z-10 h-24 w-full rounded-lg object-contain"
              />
            </Flex>
            <h3 className="pt-2 text-lg font-bold">{box.name}</h3>
            <p className="text-sm capitalize">Type: {box.type}</p>
            {/* Potential Drops */}
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-200">
                Potential Drops:
              </h3>
              <ul className="mt-2 max-h-[8.5rem] space-y-1 overflow-y-auto rounded-lg bg-gray-900/80 p-1 text-sm text-gray-300">
                {box.drops.length > 0 ? (
                  box.drops.map((item) => (
                    <li
                      key={item.name + item.id}
                      className={`flex items-center gap-2 rounded-md ${rarityColors[item.rarity]} p-2 shadow`}
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
            <Flex justify="center" align="center" className="mt-3 gap-2">
              <Flex
                justify="center"
                align="center"
                className="h-full gap-3 rounded-lg bg-black/30 p-1"
              >
                <button
                  className="rounded bg-black/30 px-2 py-1 text-white transition-all hover:bg-black/50"
                  onClick={() => decrementQuantity(box.id)}
                >
                  -
                </button>
                <Text>{quantities[box.id]}</Text>
                <button
                  className="rounded bg-black/30 px-2 py-1 text-white transition-all hover:bg-black/50"
                  onClick={() => incrementQuantity(box.id)}
                >
                  +
                </button>
              </Flex>
              <button
                className="w-full rounded-lg bg-black/30 px-4 py-2 text-white transition-all hover:bg-black/50"
                onClick={() => addHandler(box, quantities[box.id] ?? 0)}
              >
                Add {quantities[box.id]} Boxes
              </button>
            </Flex>
          </Flex>
        ))}
      </div>
    </Flex>
  );
}
