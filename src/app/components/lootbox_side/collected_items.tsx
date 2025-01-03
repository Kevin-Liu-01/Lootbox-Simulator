import { useState } from "react";
import { Box, Flex, Text, Tooltip } from "@radix-ui/themes";
import { rarityColors, Item } from "~/app/utils/types";
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
  const [columns, setColumns] = useLocalStorage("items_columns", "grid-cols-4"); // Default 6 columns
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
  ];

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
    <Flex className="mt-3 h-[15rem] w-full flex-col rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg sm:mt-4">
      <Flex className="flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
        <Flex
          align="center"
          className="gap-3 text-lg font-semibold text-white sm:text-2xl"
        >
          <BoxesIcon size={24} />
          Collected Items ({filteredItems.length})
        </Flex>
        {/* Rarity Filter */}
        <Flex className="text-sm sm:ml-auto sm:text-base">
          <div className="flex items-center space-x-4">
            <label className="font-medium text-gray-300">
              <span className="hidden sm:inline">Filter by </span>Rarity:
            </label>
            <select
              id="rarity-filter"
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto"
            >
              <option value="all">All</option>
              {rarityTypes.map((rarity) => (
                <option key={rarity} value={rarity}>
                  {rarity.charAt(0).toUpperCase() + rarity.slice(1)} (
                  {rarityCount[rarity]})
                </option>
              ))}
            </select>
          </div>
          {/* Column toggle */}
          <div className="ml-4 flex items-center">
            <label
              htmlFor="column-toggle"
              className="mr-2 hidden font-medium text-gray-300 sm:inline"
            >
              Columns:
            </label>
            {/* Column Toggle Select */}
            <select
              id="column-toggle"
              value={columns}
              onChange={handleColumnToggle}
              className="hidden w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 sm:inline sm:w-auto"
            >
              <option value={"grid-cols-4"}>4 Columns</option>
              <option value={"grid-cols-5"}>5 Columns</option>
              <option value={"grid-cols-6"}>6 Columns</option>
            </select>
            {/* Column toggle for mobile */}
            <select
              id="column-toggle"
              value={columns}
              onChange={handleColumnToggle}
              className="inline w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 sm:hidden sm:w-auto"
            >
              <option value={"grid-cols-2"}>2 Columns</option>
              <option value={"grid-cols-3"}>3 Columns</option>
              <option value={"grid-cols-4"}>4 Columns</option>
            </select>
          </div>
        </Flex>
      </Flex>
      <div
        className={`grid ${columns} mt-4 gap-3 overflow-y-auto rounded-md bg-gray-900 p-3`}
      >
        {filteredItems
          .slice() // Create a shallow copy to avoid mutating the original array
          .reverse() // Reverse the array
          .map((item: Item, index: number) => (
            <Tooltip key={index} content="View More" className="h-full w-full">
              <Flex
                align="center"
                justify="center"
                className={`relative min-h-32 transform cursor-pointer flex-col overflow-hidden rounded-lg p-4 text-center shadow-lg transition duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl ${rarityColors[item.rarity]} hover:border-gradient-to-r border-4 border-transparent to-${rarityColors[
                  item.rarity
                ]
                  ?.split(" ")[1]
                  ?.replace("from-", "")}`}
              >
                {/* Glow Effect */}
                <div
                  onClick={() => handleItemClick(item)}
                  className="absolute inset-0 z-10 h-full w-full rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-lg"></div>
                </div>

                {/* Item Image */}
                <Flex
                  align="center"
                  justify="center"
                  className="relative z-20 size-12 rounded-full bg-gradient-to-tr from-gray-800/40 to-gray-700/40 p-1 shadow-md transition-all hover:rotate-2 hover:scale-105 sm:size-16"
                >
                  <img
                    src={item?.image}
                    alt={item.name}
                    className="rounded-full object-contain sm:h-14 sm:w-14"
                  />
                </Flex>

                {/* Delete Button */}
                <button
                  className="absolute right-0 top-0 z-40 rounded-full bg-red-500/50 p-1 text-white hover:bg-red-500/70 sm:left-1 sm:right-auto sm:top-1"
                  onClick={() => item.id && deleteSelectedItem(item.id)}
                >
                  <TrashIcon size={16} />
                </button>

                {/* Rarity Badge */}
                <div
                  className={`absolute z-30 truncate rounded-full border border-white/40 px-2 py-0.5 text-[0.65rem] font-bold text-white shadow-lg sm:right-1 sm:top-1 ${
                    rarityColors[item.rarity]
                  }`}
                >
                  {item.rarity.toUpperCase()}
                </div>

                {/* Item Details */}
                <Box className="relative mt-3 text-wrap text-xs font-semibold text-white">
                  <Text className="sm:truncate">{item.name}</Text>
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
      {/* Modal */}
      {isModalOpen && selectedItem && (
        <Flex
          justify="center"
          align="center"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        >
          <Flex
            className={`${rarityColors[selectedItem.rarity]} relative w-[90%] max-w-md flex-col rounded-xl border border-white/20 bg-opacity-20 p-6 shadow-xl`}
            align="center"
          >
            {/* Close Button */}
            <XIcon
              className="absolute right-2 top-2 cursor-pointer text-gray-200 hover:text-white"
              onClick={() => setModalOpen(false)}
            />

            {/* Item Image */}
            <Flex align="center" justify="center" className="mb-6 rounded-full">
              <div
                className="h-[90%] w-[90%] rounded-full bg-gray-200/10 p-1"
                style={{
                  background: `linear-gradient(135deg, ${rarityColors[selectedItem.rarity]}cc, ${rarityColors[selectedItem.rarity]}88)`,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                }}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="h-full w-full rounded-full object-contain transition-all hover:rotate-2 hover:scale-105"
                />
              </div>
            </Flex>

            {/* Item Name */}
            <Text className="mb-2 text-center text-2xl font-bold text-white">
              {selectedItem.name}
            </Text>

            {/* Rarity */}
            <Text
              className={`mb-4 w-min text-nowrap rounded-full border border-white bg-gradient-to-br from-gray-300/20 to-gray-400/20 px-2 text-center text-sm font-semibold uppercase`}
            >
              {selectedItem.rarity}
            </Text>

            {/* Description */}
            <Text className="mb-6 text-center text-sm text-gray-100">
              {selectedItem.description}
            </Text>

            {/* Delete Button */}
            <button
              onClick={() => {
                selectedItem.id && deleteSelectedItem(selectedItem.id);
                setModalOpen(false);
              }}
              className="flex w-full items-center justify-center rounded-md bg-red-500 p-2 text-sm font-bold text-white transition hover:bg-red-600"
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
