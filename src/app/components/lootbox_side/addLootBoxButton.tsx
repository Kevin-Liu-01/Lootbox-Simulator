import { Box, Flex } from "@radix-ui/themes";
import { type LootBox } from "~/app/utils/types";

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
    <Flex className="z-5 h-full w-full select-none flex-col rounded-xl border border-transparent bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-2 text-transparent opacity-30">
      {/* Glowing Image Placeholder */}
      <Box className="mb-2 w-full animate-pulse rounded-lg bg-gray-700/60 p-2">
        <Box className="h-[4.5rem]"></Box>
      </Box>
      {/* Title and Game Name Placeholder */}
      <Box className="mt-1 h-[0.75rem] w-3/4 animate-pulse rounded-md bg-gray-700/60 font-extrabold tracking-wide"></Box>
      <Box className="mb-3 mt-2 h-[0.75rem] w-1/2 animate-pulse rounded-md bg-gray-600/50"></Box>
      {/* Buttons */}
      <Flex className="mt-auto w-full flex-row gap-2 sm:flex-col sm:flex-wrap">
        <Box className="w-full animate-pulse rounded-lg bg-gray-700/60 px-3 py-2 text-xs font-semibold">
          A
        </Box>
        <Box className="w-full animate-pulse rounded-lg bg-gray-700/60 px-3 py-2 text-xs font-semibold">
          A
        </Box>
      </Flex>
    </Flex>
  );

  return filter ? (
    <button
      className={`${
        specificLootBox?.background
      } relative flex h-full items-center justify-center rounded-xl border-2 border-dashed border-white/15 text-sm font-semibold text-white/90 transition-all hover:border-white/25 hover:bg-opacity-80`}
      onClick={() => {
        if (specificLootBox) {
          addLootBoxToInventory(specificLootBox, 1);
        }
      }}
    >
      {/* Button Content */}
      <SkeletonCard />
      <span className="absolute z-10 rounded-lg bg-black/30 px-4 py-2 backdrop-blur-sm">
        + Add {filter} Lootbox
      </span>
    </button>
  ) : (
    <button
      className="relative flex h-full items-center justify-center rounded-xl border-2 border-dashed border-green-500/30 bg-green-600/10 text-sm font-semibold text-green-300 transition-all hover:border-green-400/40 hover:bg-green-600/20"
      onClick={() => {
        const randomBox =
          availableLootBoxes[
            Math.floor(Math.random() * availableLootBoxes.length)
          ];
        if (randomBox) {
          addLootBoxToInventory(randomBox, 1);
        }
      }}
    >
      <SkeletonCard />
      <span className="absolute z-10 rounded-lg bg-black/30 px-4 py-2 backdrop-blur-sm">
        + Add Random Lootbox
      </span>
    </button>
  );
};

export default AddLootBoxButton;
