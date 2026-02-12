import { useState } from "react";
import { Box, Flex, Text, Tooltip } from "@radix-ui/themes";
import { rarityColors, type Item } from "~/app/utils/types";
import InventoryFiller from "~/app/utils/inventory_filler";
import useLocalStorage from "~/app/utils/useLocalStorage";
import { TrashIcon, BoxesIcon, XIcon } from "lucide-react";

export default function CollectedItems({
  collectedItems,
  setCollectedItems,
}: {
  collectedItems: Item[];
  setCollectedItems: (value: React.SetStateAction<Item[]>) => void;
}) {
  const [columns, setColumns] = useLocalStorage<string>(
    "items_columns",
    "grid-cols-4",
  );
  const [selectedRarity, setSelectedRarity] = useState<string>("all");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleColumnToggle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumns(e.target.value);
  };

  const deleteSelectedItem = (itemId: string) => {
    setCollectedItems(
      collectedItems.filter((item: Item) => item.id !== itemId),
    );
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const rarityTypes = [
    "common",
    "rare",
    "super rare",
    "epic",
    "mythical",
    "legendary",
  ] as const;

  // Count items for each rarity
  const rarityCount = rarityTypes.reduce(
    (acc, rarity) => {
      acc[rarity] = collectedItems.filter(
        (item) => item.rarity === rarity,
      ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  // Filter items based on selected rarity
  const filteredItems =
    selectedRarity === "all"
      ? collectedItems
      : collectedItems.filter((item) => item.rarity === selectedRarity);

  return (
    <Flex className="mt-3 h-[15rem] w-full flex-col rounded-2xl border border-indigo-500/10 bg-gray-800/80 p-4 shadow-xl shadow-indigo-900/10 sm:mt-4">
      <Flex className="flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
        <Flex
          align="center"
          className="gap-2 text-lg font-semibold text-white sm:text-xl"
        >
          <BoxesIcon size={22} className="text-indigo-400" />
          Collected Items
          <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-sm font-medium text-indigo-300">
            {collectedItems.length}
          </span>
        </Flex>
        {/* Rarity Filter */}
        <Flex className="text-sm sm:ml-auto sm:text-base">
          <div className="flex items-center space-x-3">
            <label className="text-sm font-medium text-gray-400">
              <span className="hidden sm:inline">Filter by </span>Rarity:
            </label>
            <select
              id="rarity-filter"
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="w-full rounded-lg border border-indigo-500/20 bg-gray-900/80 p-2 text-sm text-gray-300 shadow-sm focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:w-auto"
            >
              <option value="all">All ({collectedItems.length})</option>
              {rarityTypes.map((rarity) => (
                <option key={rarity} value={rarity}>
                  {rarity.charAt(0).toUpperCase() + rarity.slice(1)} (
                  {rarityCount[rarity]})
                </option>
              ))}
            </select>
          </div>
          {/* Column toggle */}
          <div className="ml-3 flex items-center">
            <label
              htmlFor="column-toggle"
              className="mr-2 hidden text-sm font-medium text-gray-400 sm:inline"
            >
              Columns:
            </label>
            {/* Column Toggle Select */}
            <select
              id="column-toggle"
              value={columns}
              onChange={handleColumnToggle}
              className="hidden w-full rounded-lg border border-indigo-500/20 bg-gray-900/80 p-2 text-sm text-gray-300 shadow-sm focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:inline sm:w-auto"
            >
              <option value={"grid-cols-4"}>4 Columns</option>
              <option value={"grid-cols-5"}>5 Columns</option>
              <option value={"grid-cols-6"}>6 Columns</option>
            </select>
            {/* Column toggle for mobile */}
            <select
              id="column-toggle-mobile"
              value={columns}
              onChange={handleColumnToggle}
              className="inline w-full rounded-lg border border-indigo-500/20 bg-gray-900/80 p-2 text-sm text-gray-300 shadow-sm focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:hidden sm:w-auto"
            >
              <option value={"grid-cols-2"}>2 Columns</option>
              <option value={"grid-cols-3"}>3 Columns</option>
              <option value={"grid-cols-4"}>4 Columns</option>
            </select>
          </div>
        </Flex>
      </Flex>
      <div
        className={`grid ${columns} mt-3 gap-2.5 overflow-y-auto rounded-xl bg-gray-900/60 p-2.5`}
      >
        {filteredItems
          .slice()
          .reverse()
          .map((item: Item, index: number) => (
            <Tooltip key={index} content="View More" className="h-full w-full">
              <Flex
                align="center"
                justify="center"
                className={`relative min-h-32 transform cursor-pointer flex-col overflow-hidden rounded-xl border border-white/[0.06] p-3 text-center shadow-lg transition-all duration-200 hover:scale-[1.03] hover:border-white/15 hover:shadow-xl ${rarityColors[item.rarity]}`}
              >
                {/* Glow Effect */}
                <div
                  onClick={() => handleItemClick(item)}
                  className="absolute inset-0 z-10 h-full w-full rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-lg"></div>
                </div>

                {/* Item Image */}
                <Flex
                  align="center"
                  justify="center"
                  className="relative z-20 size-12 rounded-full bg-gradient-to-tr from-black/30 to-black/10 p-1 shadow-md transition-all hover:scale-105 sm:size-14"
                >
                  <img
                    src={item?.image}
                    alt={item.name}
                    className="h-full w-full rounded-full object-contain"
                  />
                </Flex>

                {/* Delete Button */}
                <button
                  className="absolute right-1 top-1 z-40 rounded-full bg-red-500/40 p-1 text-white/80 transition-all hover:bg-red-500/70 hover:text-white sm:left-1 sm:right-auto"
                  onClick={() => item.id && deleteSelectedItem(item.id)}
                >
                  <TrashIcon size={14} />
                </button>

                {/* Rarity Badge */}
                <div
                  className={`absolute right-1 top-1 z-30 hidden truncate rounded-full border border-white/30 px-1.5 py-0.5 text-[0.6rem] font-bold text-white shadow-lg sm:right-1 sm:top-1 sm:inline ${
                    rarityColors[item.rarity]
                  }`}
                >
                  {item.rarity.toUpperCase()}
                </div>

                {/* Item Details */}
                <Box className="relative mt-2 text-wrap text-xs font-semibold text-white">
                  <Text className="line-clamp-2 sm:truncate">{item.name}</Text>
                </Box>
              </Flex>
            </Tooltip>
          ))}

        <InventoryFiller
          entries={filteredItems}
          minEntries={60}
          columns={columns}
          adjustVal={0}
          height="h-28"
        />
      </div>

      {/* Modal for selected items */}
      {isModalOpen && selectedItem && (
        <Flex
          justify="center"
          align="center"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
        >
          <Flex
            className={`${rarityColors[selectedItem.rarity]} relative w-[90%] max-w-md flex-col rounded-2xl border border-white/15 p-6 shadow-2xl`}
            align="center"
          >
            {/* Close Button */}
            <button
              className="absolute right-3 top-3 rounded-lg p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setModalOpen(false)}
            >
              <XIcon className="size-5" />
            </button>

            {/* Item Image */}
            <Flex
              align="center"
              justify="center"
              className="mb-5 w-full rounded-xl"
            >
              <div className="w-full rounded-xl bg-black/20 p-2 shadow-inner">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="h-full max-h-72 w-full object-contain transition-all hover:scale-[1.02]"
                />
              </div>
            </Flex>

            {/* Item Name */}
            <Text className="mb-2 text-center text-2xl font-bold text-white">
              {selectedItem.name}
            </Text>

            {/* Rarity */}
            <Text className="mb-4 w-min text-nowrap rounded-full border border-white/30 bg-black/20 px-3 py-0.5 text-center text-xs font-bold uppercase tracking-wider">
              {selectedItem.rarity}
            </Text>

            {/* Description */}
            <Text className="mb-6 text-center text-sm text-gray-100/80">
              {selectedItem.description}
            </Text>

            {/* Delete Button */}
            <button
              onClick={() => {
                selectedItem.id && deleteSelectedItem(selectedItem.id);
                setModalOpen(false);
              }}
              className="flex w-full items-center justify-center rounded-xl bg-red-600 p-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-red-500"
            >
              <TrashIcon size={16} className="mr-2" />
              Delete {selectedItem.name}
            </button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
