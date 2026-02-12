import { Flex } from "@radix-ui/themes";
import React from "react";

export default function InventoryFiller({
  entries,
  minEntries,
  columns,
  adjustVal,
  height,
}: {
  entries: unknown[];
  minEntries: number;
  columns: string;
  adjustVal: number;
  height?: string;
}) {
  const numColumns = Number(columns.slice(-1)); // Extract the number of columns
  const totalEntries = entries.length + adjustVal; // Ensure we meet the minimum entries
  const remainder = totalEntries % numColumns; // Calculate entries in the last row
  const placeholders = numColumns - remainder + numColumns; // Fill remaining slots in the row

  return (
    <>
      {Array.from({ length: placeholders }).map((_, index) => (
        <Flex
          align="center"
          justify="center"
          key={`placeholder-${index}`}
          className={`relative min-h-full ${height} overflow-hidden rounded-lg border border-gray-700/60 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-lg`}
        >
          {/* Holographic Border Animation */}
          <div className="absolute h-full w-full border-4 border-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 opacity-30" />

          {/* Pulsing Dots */}
          <Flex
            align="center"
            justify="center"
            className="absolute flex-col gap-2"
          >
            <Flex className="space-x-2">
              {[...Array(3)].map((_, dotIndex) => (
                <div
                  key={`dot-${dotIndex}`}
                  className="size-1 animate-pulse rounded-full bg-indigo-500/70 sm:size-2"
                  style={{ animationDelay: `${dotIndex * 200}ms` }}
                />
              ))}
            </Flex>
            {/* Empty Slot Text */}
            <span className="select-none px-3 text-center text-xs text-gray-400/40 sm:text-sm">
              Empty Slot
            </span>
          </Flex>
        </Flex>
      ))}
    </>
  );
}
