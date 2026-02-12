"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
  meta?: string;
}

export interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  width?: string;
  className?: string;
}

export default function Dropdown({
  value,
  onChange,
  options,
  width = "min-w-32",
  className = "",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value) ?? options[0];

  return (
    <div ref={ref} className={`relative ${width} ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded-lg border border-gray-700/60 bg-gray-900 px-3 py-2 text-sm font-medium text-gray-200 shadow-sm transition-all hover:border-gray-500 hover:bg-gray-800 ${width}`}
      >
        <span className="truncate">
          {selected?.label}
          {selected?.meta != null && (
            <span className="ml-1 text-gray-400">{selected.meta}</span>
          )}
        </span>
        <ChevronDownIcon
          className={`size-4 shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-600 bg-gray-900 py-1 shadow-xl">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-gray-800 ${opt.value === value
                ? "bg-indigo-600/30 font-semibold text-indigo-200"
                : "text-gray-200"
                }`}
            >
              <span>
                {opt.label}
                {opt.meta != null && (
                  <span className="ml-1 text-gray-400">{opt.meta}</span>
                )}
              </span>
            </button>
          ))}

        </div>
      )}
    </div>
  );
}
