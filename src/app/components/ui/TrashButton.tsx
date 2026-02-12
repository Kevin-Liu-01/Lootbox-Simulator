"use client";

import React from "react";
import { TrashIcon } from "lucide-react";

export interface TrashButtonProps {
  onClick: (e: React.MouseEvent) => void;
  /** Size: icon-only (small), compact (icon + optional text), or full */
  variant?: "icon" | "compact" | "full";
  /** Text when variant is compact or full */
  label?: string;
  /** Danger level affects styling */
  dangerLevel?: "subtle" | "medium" | "high";
  className?: string;
  /** Title for tooltip */
  title?: string;
  /** Disabled */
  disabled?: boolean;
}

const variantClasses = {
  icon: "rounded-full p-1.5",
  compact: "rounded-lg gap-2 px-2.5 py-1.5",
  full: "rounded-lg gap-2 px-4 py-2.5 w-full justify-center",
};

const dangerClasses = {
  subtle:
    "border border-red-600 bg-red-700 text-red-100 hover:bg-red-600 hover:border-red-500",
  medium:
    "border border-red-600 bg-red-600 text-white hover:bg-red-500 hover:border-red-500 shadow-lg shadow-red-900/20",
  high:
    "border border-red-600 bg-red-600 text-white hover:bg-red-500 hover:border-red-500 shadow-lg shadow-red-900/30",
};

export default function TrashButton({
  onClick,
  variant = "icon",
  label = "Delete",
  dangerLevel = "medium",
  className = "",
  title,
  disabled = false,
}: TrashButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title ?? (variant === "icon" ? "Delete" : undefined)}
      className={`inline-flex items-center text-sm font-semibold transition-all ${variantClasses[variant]} ${dangerClasses[dangerLevel]} disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      <TrashIcon className="size-4 shrink-0" />
      {variant !== "icon" && label && <span>{label}</span>}
    </button>
  );
}
