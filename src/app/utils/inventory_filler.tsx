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
  const placeholders =
    entries.length < minEntries
      ? Array.from({ length: minEntries - entries.length })
      : Array.from({
          length:
            Number(columns.slice(-1)) -
            adjustVal -
            (entries.length % Number(columns.slice(-1))),
        });

  return (
    <>
      {placeholders.map((_, index) => (
        <div
          key={`placeholder-${index}`}
          className={`relative min-h-full ${height} flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-700 via-gray-700 to-gray-700 shadow-lg`}
        >
          <span className="absolute select-none text-sm text-gray-500">
            Empty Slot
          </span>
          {/* <svg
            className="h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg> */}
        </div>
      ))}
    </>
  );
}
