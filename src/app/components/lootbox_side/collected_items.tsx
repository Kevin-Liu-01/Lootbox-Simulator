import { useState } from "react";
import { Flex } from "@radix-ui/themes";
import { rarityColors, Item } from "~/app/utils/types";
import InventoryFiller from "~/app/utils/inventory_filler";
import useLocalStorage from "~/app/utils/useLocalStorage";
import { TrashIcon, BoxesIcon } from "lucide-react";

export default function CollectedItems({
  collectedItems,
  setCollectedItems,
}: {
  collectedItems: Item[];
  setCollectedItems: (value: React.SetStateAction<Item[]>) => void;
}) {
  const [columns, setColumns] = useLocalStorage("items_columns", "grid-cols-6"); // Default 6 columns
  const [selectedRarity, setSelectedRarity] = useState<string>("all");

  const handleColumnToggle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumns(e.target.value);
  };

  const deleteSelectedItem = (itemId: string) => {
    setCollectedItems(
      collectedItems.filter((item: Item) => item.id !== itemId),
    );
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
    <Flex className="mt-4 h-72 w-full flex-col rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg">
      <Flex className="items-center justify-between">
        <Flex
          align="center"
          className="gap-3 text-2xl font-semibold text-white"
        >
          <BoxesIcon size={24} />
          Collected Items ({filteredItems.length})
        </Flex>
        {/* Rarity Filter */}
        <div className="ml-auto flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-300">
            Filter by Rarity:
          </label>
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="rounded-lg border border-gray-600 bg-gray-700 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mr-2 text-sm font-medium text-gray-300"
          >
            Columns:
          </label>
          <select
            id="column-toggle"
            value={columns}
            onChange={handleColumnToggle}
            className="rounded-lg border border-gray-600 bg-gray-700 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={"grid-cols-4"}>4 Columns</option>
            <option value={"grid-cols-5"}>5 Columns</option>
            <option value={"grid-cols-6"}>6 Columns</option>
          </select>
        </div>
      </Flex>
      <div
        className={`grid ${columns} mt-4 gap-3 overflow-y-auto rounded-md bg-gray-900 p-3`}
      >
        {filteredItems.map((item: Item, index: number) => (
          <div
            key={index}
            className={`relative h-32 transform rounded-lg p-4 text-center shadow-lg transition duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl ${rarityColors[item.rarity]} hover:border-gradient-to-r border-4 border-transparent to-${rarityColors[
              item.rarity
            ]
              ?.split(" ")[1]
              ?.replace("from-", "")}`}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 w-full rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-lg"></div>
            </div>

            {/* Item Image */}
            <div className="relative mx-auto h-14 w-14 rounded-full bg-gradient-to-tr from-gray-800/40 to-gray-700/40 p-1 shadow-md">
              <img
                src={item?.image}
                alt={item.name}
                className="h-full w-full rounded-full"
              />
            </div>

            {/* Delete Button */}
            <button
              className="absolute left-1 top-1 rounded-full bg-red-500/50 p-1 text-white hover:bg-red-500/70"
              onClick={() => deleteSelectedItem(item.id)}
            >
              <TrashIcon size={16} />
            </button>

            <div
              className={`absolute right-1 top-1 rounded-full border border-white/40 px-3 py-1 text-[0.5rem] font-bold text-white shadow-lg ${
                rarityColors[item.rarity]
              }`}
            >
              {item.rarity.toUpperCase()}
            </div>

            {/* Item Details */}
            <p className="mt-3 truncate text-sm font-semibold text-white">
              {item.name}
            </p>
          </div>
        ))}

        <InventoryFiller
          entries={filteredItems}
          minEntries={60}
          columns={columns}
          adjustVal={0}
          height="h-28"
        />
      </div>
    </Flex>
  );
}
