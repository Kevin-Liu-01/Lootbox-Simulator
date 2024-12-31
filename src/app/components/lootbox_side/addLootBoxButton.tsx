import { Flex } from "@radix-ui/themes";
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
    <div className="z-5 h-full w-full select-none rounded-lg border border-transparent bg-gradient-to-br from-gray-700 to-gray-800 p-3 text-transparent opacity-40">
      {/* Glowing Image Placeholder */}
      <div className="mb-2 h-32 w-full animate-pulse rounded-md bg-gray-600"></div>
      {/* Title and Game Name Placeholder */}
      <h3 className="mt-3 w-3/4 animate-pulse rounded-md bg-gray-600 text-sm font-extrabold tracking-wide">
        A
      </h3>
      <p className="mb-3 mt-2 w-1/2 animate-pulse rounded-md bg-gray-500 text-xs">
        A
      </p>
      {/* Buttons */}
      <Flex className="mt-auto w-full flex-wrap gap-2">
        <div className="w-full animate-pulse rounded-md bg-gray-600 px-4 py-2 text-xs font-semibold">
          A
        </div>
        <div className="w-full animate-pulse rounded-md bg-gray-600 px-4 py-2 text-xs font-semibold">
          A
        </div>
      </Flex>
    </div>
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
