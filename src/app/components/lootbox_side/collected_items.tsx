import { Flex } from "@radix-ui/themes";
import InventoryFiller from "~/app/utils/inventory_filler";
import useLocalStorage from "~/app/utils/useLocalStorage";

type Rarity =
  | "common"
  | "rare"
  | "super rare"
  | "epic"
  | "mythical"
  | "legendary";

const rarityColors: Record<Rarity, string> = {
  common: "bg-gradient-to-r from-gray-600 to-gray-500",
  rare: "bg-gradient-to-r from-blue-600 to-blue-500",
  "super rare": "bg-gradient-to-r from-purple-600 to-purple-500",
  epic: "bg-gradient-to-r from-pink-600 to-pink-500",
  mythical: "bg-gradient-to-r from-red-600 to-red-500",
  legendary: "bg-gradient-to-r from-yellow-600 to-yellow-500",
};

export default function CollectedItems({
  collectedItems,
}: {
  collectedItems: any;
}) {
  const [columns, setColumns] = useLocalStorage("items_columns", "grid-cols-6"); // Default 6 columns

  const handleColumnToggle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumns(e.target.value);
  };

  return (
    <div className="mt-4 h-72 w-full overflow-y-auto rounded-xl bg-gray-800 p-4 shadow-lg">
      <Flex className="items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Collected Items</h2>
        {/* Column toggle */}
        <div className="ml-auto flex items-center">
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
            className="rounded-lg border border-gray-700 bg-gray-800 p-2 text-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={"grid-cols-4"}>4 Columns</option>
            <option value={"grid-cols-5"}>5 Columns</option>
            <option value={"grid-cols-6"}>6 Columns</option>
          </select>
        </div>
      </Flex>
      <div className={`grid ${columns} mt-4 gap-4`}>
        {collectedItems.map((item, index) => (
          <div
            key={index}
            className={`relative h-32 transform rounded-lg p-4 text-center shadow-lg transition duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl ${rarityColors[item.rarity]} hover:border-gradient-to-r border-4 border-transparent to-${rarityColors[
              item.rarity
            ]
              .split(" ")[1]
              .replace("from-", "")}`}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent blur-lg"></div>
            </div>

            {/* Item Image */}
            <div className="relative mx-auto h-14 w-14 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 p-1 shadow-md">
              <img
                src={item?.image}
                alt={item.name}
                className="h-full w-full rounded-full"
              />
            </div>

            <div
              className={`absolute right-1 top-1 rounded-full px-3 py-1 text-[0.5rem] font-bold text-white shadow-lg ${
                rarityColors[item.rarity]
              }`}
            >
              {item.rarity.toUpperCase()}
            </div>

            {/* Item Details */}
            <p className="mt-3 truncate text-base font-extrabold tracking-wide text-white">
              {item.name}
            </p>
            {/* <p className="text-xs capitalize text-gray-300">{item.rarity}</p> */}
          </div>
        ))}

        <InventoryFiller
          entries={collectedItems}
          minEntries={60}
          columns={columns}
          adjustVal={0}
          height="h-28"
        />
      </div>
    </div>
  );
}
