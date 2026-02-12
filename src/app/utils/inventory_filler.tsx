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
          className={`relative min-h-full ${height} overflow-hidden rounded-xl border border-white/[0.03] bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80`}
        >
          {/* Subtle border shimmer */}
          <div className="absolute inset-0 rounded-xl border border-indigo-500/[0.06]" />

          {/* Pulsing Dots */}
          <Flex
            align="center"
            justify="center"
            className="absolute flex-col gap-2"
          >
            <Flex className="space-x-1.5">
              {[...Array(3)].map((_, dotIndex) => (
                <div
                  key={`dot-${dotIndex}`}
                  className="size-1 animate-pulse rounded-full bg-indigo-400/30 sm:size-1.5"
                  style={{ animationDelay: `${dotIndex * 200}ms` }}
                />
              ))}
            </Flex>
            {/* Empty Slot Text */}
            <span className="select-none px-3 text-center text-[0.65rem] text-gray-500/40 sm:text-xs">
              Empty Slot
            </span>
          </Flex>
        </Flex>
      ))}
    </>
  );
}
