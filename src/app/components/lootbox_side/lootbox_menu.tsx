import React, { useState } from "react";
import { LootBox, rarityColors } from "~/app/utils/types";
import { Flex, Text } from "@radix-ui/themes";
import { FileBoxIcon, MinusIcon, PlusIcon } from "lucide-react";

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
    //if quantity is 1, then we make it 20
    if (quantities[id] === 1) {
      setQuantities((prev: any) => ({
        ...prev,
        [id]: 20,
      }));
      return;
    } else {
      setQuantities((prev: any) => ({
        ...prev,
        [id]: Math.max(prev[id] - 1, 1),
      }));
    }
  };

  const addHandler = (box: LootBox, count: number) => {
    addLootBoxToInventory(box, count);
    handleToggleView();
  };

  return (
    <Flex className="w-full flex-col p-3">
      <Flex
        align="center"
        className="mx-auto mb-3 gap-3 text-lg font-bold sm:mx-0 sm:justify-start sm:text-2xl"
      >
        <FileBoxIcon size={24} />
        Available Lootboxes
      </Flex>
      <div className="grid w-full grid-cols-2 gap-2 overflow-y-auto rounded-md bg-gray-900 p-2 sm:gap-4 sm:p-3 md:grid-cols-3">
        {availableLootBoxes.map((box) => (
          <Flex
            key={box.id}
            className={`cursor-pointer flex-col rounded-xl p-3 shadow-lg sm:p-4 ${box.background}`}
          >
            <Flex
              justify="center"
              align="center"
              className="relative overflow-hidden rounded-lg bg-black/20 p-2"
            >
              <img
                src={box.backgroundImage}
                alt={box.name}
                className="z-5 absolute h-full w-full object-cover opacity-50 blur-[1px]"
              />
              <img
                src={box.image}
                alt={box.name}
                className="z-10 h-[3.95rem] w-full rounded-lg object-contain sm:h-24"
              />
            </Flex>
            <h3 className="line-clamp-2 w-full truncate pt-2 text-base font-bold sm:text-lg">
              {box.name}
            </h3>
            <p className="hidden text-xs capitalize sm:inline sm:text-sm">
              Type: {box.type}
            </p>
            {/* Potential Drops */}
            <div className="text-left sm:mb-4">
              <h3 className="text-sm font-semibold text-gray-200 sm:text-lg">
                Potential Drops:
              </h3>
              <ul className="mt-2 max-h-[8.5rem] space-y-1 overflow-y-auto rounded-lg bg-gray-900/80 p-1 text-sm text-gray-300 sm:max-h-[8.5rem]">
                {box.drops.length > 0 ? (
                  box.drops.map((item) => (
                    <li
                      key={item.name + item.id}
                      className={`flex items-center gap-2 rounded-md ${rarityColors[item.rarity]} p-2 shadow`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-6 w-6 rounded-full bg-black/10 object-contain p-1"
                      />
                      <Text className="truncate">{item.name}</Text>
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
            <Flex
              justify="center"
              align="center"
              className="mt-3 flex-col gap-2 sm:flex-row"
            >
              <Flex
                justify="center"
                align="center"
                className="h-full w-full gap-3 rounded-lg bg-black/30 p-1 sm:w-auto"
              >
                <button
                  className="h-full rounded bg-black/30 px-2 py-1 text-white transition-all hover:bg-black/50"
                  onClick={() => decrementQuantity(box.id)}
                >
                  <MinusIcon className="size-4" />
                </button>

                <Text className="w-full text-center font-semibold">
                  {quantities[box.id]}
                </Text>
                <button
                  className="h-full rounded bg-black/30 px-2 py-1 text-white transition-all hover:bg-black/50"
                  onClick={() => incrementQuantity(box.id)}
                >
                  <PlusIcon className="size-4" />
                </button>
              </Flex>
              <button
                className="w-full rounded-lg bg-black/30 px-4 py-2 text-white transition-all hover:bg-black/50"
                onClick={() => addHandler(box, quantities[box.id] ?? 0)}
              >
                Add
                <span className="hidden sm:inline">
                  {" "}
                  {quantities[box.id]} Boxes
                </span>
              </button>
            </Flex>
          </Flex>
        ))}
      </div>
    </Flex>
  );
}
