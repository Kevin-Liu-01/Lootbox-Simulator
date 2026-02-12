import { useState } from "react";
import { Box, Flex, Text, Tooltip } from "@radix-ui/themes";
import { rarityColors, type Item } from "~/app/utils/types";
import InventoryFiller from "~/app/utils/inventory_filler";
import useLocalStorage from "~/app/utils/useLocalStorage";
import { BoxesIcon } from "lucide-react";
import Dropdown from "~/app/components/ui/Dropdown";
import TrashButton from "~/app/components/ui/TrashButton";
import Modal from "~/app/components/ui/Modal";
import DeleteConfirmModal from "~/app/components/ui/DeleteConfirmModal";

const RARITY_OPTIONS = [
  "common",
  "rare",
  "super rare",
  "epic",
  "mythical",
  "legendary",
] as const;

const COLUMN_OPTIONS_DESKTOP = [
  { value: "grid-cols-4" as const, label: "4 Columns" },
  { value: "grid-cols-5" as const, label: "5 Columns" },
  { value: "grid-cols-6" as const, label: "6 Columns" },
];

const COLUMN_OPTIONS_MOBILE = [
  { value: "grid-cols-2" as const, label: "2 Columns" },
  { value: "grid-cols-3" as const, label: "3 Columns" },
  { value: "grid-cols-4" as const, label: "4 Columns" },
];

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
  const [itemToDelete, setItemToDelete] = useState<Item | null>(null);

  const deleteSelectedItem = (itemId: string) => {
    setCollectedItems(
      collectedItems.filter((item: Item) => item.id !== itemId),
    );
  };

  const handleRequestDeleteItem = (item: Item) => {
    setItemToDelete(item);
    setModalOpen(false); // Close item detail modal when opening delete confirm
  };

  const confirmDeleteItem = () => {
    if (itemToDelete?.id) {
      deleteSelectedItem(itemToDelete.id);
      setItemToDelete(null);
    }
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const rarityCount = RARITY_OPTIONS.reduce(
    (acc, rarity) => {
      acc[rarity] = collectedItems.filter(
        (item) => item.rarity === rarity,
      ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  const rarityOptions = [
    {
      value: "all" as const,
      label: "All",
      meta: `(${collectedItems.length})`,
    },
    ...RARITY_OPTIONS.map((r) => ({
      value: r as const,
      label: r.charAt(0).toUpperCase() + r.slice(1),
      meta: `(${rarityCount[r]})`,
    })),
  ];

  const filteredItems =
    selectedRarity === "all"
      ? collectedItems
      : collectedItems.filter((item) => item.rarity === selectedRarity);

  return (
    <Flex className="mt-3 h-[15rem] w-full shrink-0 flex-col rounded-2xl border border-gray-700 bg-gray-800 p-4 shadow-lg sm:mt-4">
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
        <Flex className="flex flex-wrap items-center justify-center gap-3 sm:ml-auto sm:justify-end">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-300">
              <span className="hidden sm:inline">Filter by </span>Rarity:
            </span>
            <Dropdown
              value={selectedRarity}
              onChange={setSelectedRarity}
              options={rarityOptions}
              width="min-w-28"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm font-medium text-gray-300 sm:inline">
              Columns:
            </span>
            <div className="hidden sm:block">
              <Dropdown
                value={columns}
                onChange={setColumns}
                options={COLUMN_OPTIONS_DESKTOP}
                width="min-w-28"
              />
            </div>
            <div className="sm:hidden">
              <Dropdown
                value={columns}
                onChange={setColumns}
                options={COLUMN_OPTIONS_MOBILE}
                width="min-w-28"
              />
            </div>
          </div>
        </Flex>
      </Flex>
      <div
        className={`grid ${columns} mt-3 gap-3 overflow-y-auto rounded-md bg-gray-900 p-3`}
      >
        {filteredItems
          .slice()
          .reverse()
          .map((item: Item, index: number) => (
            <Tooltip key={index} content="View More" className="h-full w-full">
              <Flex
                align="center"
                justify="center"
                className={`relative min-h-32 transform cursor-pointer flex-col overflow-hidden rounded-lg border-4 border-transparent p-3 text-center shadow-lg transition-all duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl ${rarityColors[item.rarity]}`}
              >
                <div
                  onClick={() => handleItemClick(item)}
                  className="absolute inset-0 z-10 h-full w-full rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-lg"></div>
                </div>

                <Flex
                  align="center"
                  justify="center"
                  className="relative z-20 size-14 rounded-full bg-gradient-to-tr from-gray-800/40 to-gray-700/40 p-1 shadow-md transition-all hover:rotate-2 hover:scale-105 sm:size-16"
                >
                  <img
                    src={item?.image}
                    alt={item.name}
                    className="h-full w-full rounded-full object-contain"
                  />
                </Flex>

                <div className="absolute right-0 top-0 z-40 sm:left-1 sm:right-auto sm:top-1">
                  <TrashButton
                    variant="icon"
                    dangerLevel="subtle"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRequestDeleteItem(item);
                    }}
                    title="Delete item"
                  />
                </div>

                <div
                  className={`absolute right-1 top-1 z-30 hidden truncate rounded-full border border-white/40 px-2 py-0.5 text-[0.65rem] font-bold text-white shadow-lg sm:right-1 sm:top-1 sm:inline ${
                    rarityColors[item.rarity]
                  }`}
                >
                  {item.rarity.toUpperCase()}
                </div>

                <Box className="relative mt-3 text-wrap text-xs font-semibold text-white">
                  <Text className="line-clamp-[2] sm:truncate">
                    {item.name}
                  </Text>
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

      {/* Item Detail Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        size="sm"
        panelClassName={
          selectedItem ? `${rarityColors[selectedItem.rarity]} border-white/20` : ""
        }
        closeButtonClassName="text-gray-200 hover:text-white"
      >
        {selectedItem && (
          <>
            <Flex
              align="center"
              justify="center"
              className="mb-6 w-full rounded-xl"
            >
              <div
                className="h-[90%] w-full rounded-lg bg-gray-200/10 p-1"
                style={{
                  background: `linear-gradient(135deg, ${rarityColors[selectedItem.rarity]}cc, ${rarityColors[selectedItem.rarity]}88)`,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                }}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="h-full max-h-72 w-full object-contain transition-all hover:rotate-2 hover:scale-105"
                />
              </div>
            </Flex>

            <Text className="mb-2 text-center text-2xl font-bold text-white">
              {selectedItem.name}
            </Text>

            <Flex justify="center" className="mb-4">
              <Text className="w-min text-nowrap rounded-full border border-white bg-gradient-to-br from-gray-300/20 to-gray-400/20 px-2 text-center text-sm font-semibold uppercase">
                {selectedItem.rarity}
              </Text>
            </Flex>

            <Text className="mb-6 text-center text-sm text-gray-100">
              {selectedItem.description}
            </Text>

            <TrashButton
              variant="full"
              label={`Delete ${selectedItem.name}`}
              dangerLevel="high"
              onClick={() => handleRequestDeleteItem(selectedItem)}
            />
          </>
        )}
      </Modal>

      <DeleteConfirmModal
        open={!!itemToDelete}
        onClose={() => setItemToDelete(null)}
        title={itemToDelete ? `Delete ${itemToDelete.name}?` : "Delete?"}
        description={
          itemToDelete
            ? `This will remove ${itemToDelete.name} from your collected items.`
            : undefined
        }
        confirmLabel="Delete"
        onConfirm={confirmDeleteItem}
      />
    </Flex>
  );
}
