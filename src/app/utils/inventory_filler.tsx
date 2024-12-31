import { Flex } from "@radix-ui/themes";
import React from "react";

export default function InventoryFiller({
  entries,
  minEntries,
  columns,
  adjustVal,
  height,
}: {
  entries: any;
  minEntries: number;
  columns: any;
  adjustVal: number;
  height?: string;
}) {
  const numColumns = Number(columns.slice(-1)); // Extract the number of columns
  const totalEntries = entries.length + adjustVal; // Ensure we meet the minimum entries
  const remainder = totalEntries % numColumns; // Calculate entries in the last row
  const placeholders = numColumns - remainder; // Fill remaining slots in the row

  return (
    <>
      {/* <div className="absolute">
        {totalEntries + "," + numColumns + "," + placeholders}
      </div> */}
      {Array.from({ length: placeholders }).map((_, index) => (
        <Flex
          align="center"
          justify="center"
          key={`placeholder-${index}`}
          className={`relative min-h-full ${height} overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-lg`}
        >
          {/* Holographic Border Animation */}
          <div className="absolute h-full w-full border-4 border-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 opacity-30" />

          {/* High-Tech Holographic Effect */}
          {/* <div className="absolute -z-10 h-full w-full animate-pulse bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-20 blur-md"></div> */}

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
                  className={`h-2 w-2 animate-pulse rounded-full bg-indigo-500/70`}
                  style={{ animationDelay: `${dotIndex * 200}ms` }}
                />
              ))}
            </Flex>
            {/* Empty Slot Text */}
            <span className="select-none text-sm text-gray-400/40">
              Empty Slot
            </span>
          </Flex>
        </Flex>
      ))}
    </>
  );
}
