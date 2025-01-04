import { Box, Flex } from "@radix-ui/themes";
import { LootBox } from "~/app/utils/types";

const AddLootBoxButton = ({
  filter,
  availableLootBoxes,
  addLootBoxToInventory,
}: {
  filter: string | null;
  availableLootBoxes: LootBox[];
  addLootBoxToInventory: (lootBox: LootBox, count: number) => void;
}) => {
  const specificLootBox = filter
    ? availableLootBoxes.find((box) => box.name === filter)
    : null;

  const SkeletonCard = () => (
    <Flex className="z-5 h-full w-full select-none flex-col rounded-lg border border-transparent bg-gradient-to-br from-gray-700 to-gray-800 p-2 text-transparent opacity-40 sm:p-3">
      {/* Glowing Image Placeholder */}
      <Box className="mb-2 w-full animate-pulse rounded-md bg-gray-600 p-2">
        <Box className="h-[4.5rem]"></Box>
      </Box>
      {/* Title and Game Name Placeholder */}
      <Box className="mt-1 h-[0.75rem] w-3/4 animate-pulse rounded-md bg-gray-600 font-extrabold tracking-wide"></Box>
      <Box className="mb-3 mt-2 h-[0.75rem] w-1/2 animate-pulse rounded-md bg-gray-500"></Box>
      {/* Buttons */}
      <Flex className="mt-auto w-full flex-row gap-2 sm:flex-col sm:flex-wrap">
        <Box className="w-full animate-pulse rounded-md bg-gray-600 px-3 py-2 text-xs font-semibold">
          A
        </Box>
        <Box className="w-full animate-pulse rounded-md bg-gray-600 px-3 py-2 text-xs font-semibold">
          A
        </Box>
      </Flex>
    </Flex>
  );

  return filter ? (
    <button
      className={`${
        specificLootBox?.background
      } relative flex h-full items-center justify-center rounded-lg border-2 border-dashed border-white/20 text-sm font-semibold text-white/90 transition-all hover:bg-opacity-80`}
      onClick={() => {
        if (specificLootBox) {
          addLootBoxToInventory(specificLootBox, 1); // Add the loot box to the inventory
        } else {
          console.error(`No loot box of type ${filter} available`);
        }
      }}
    >
      {/* Button Content */}
      <SkeletonCard />
      <span className="absolute z-10 px-4 py-2">+ Add {filter} Lootbox</span>
    </button>
  ) : (
    <button
      className="relative flex h-full items-center justify-center rounded-lg border-2 border-dashed border-green-500 bg-green-600/20 text-sm font-semibold text-green-300 hover:bg-green-600/30"
      onClick={() => {
        const randomBox =
          availableLootBoxes[
            Math.floor(Math.random() * availableLootBoxes.length)
          ];
        if (randomBox) {
          addLootBoxToInventory(randomBox, 1); // Add the loot box to the inventory
        } else {
          console.error("No loot boxes available");
        }
      }}
    >
      <SkeletonCard />
      <span className="absolute z-10 px-4 py-2">+ Add Random Lootbox</span>
    </button>
  );
};

export default AddLootBoxButton;
