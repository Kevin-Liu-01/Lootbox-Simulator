"use client";

import React, { useEffect } from "react";
import { XIcon } from "lucide-react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Modal content */
  children: React.ReactNode;
  /** Optional title */
  title?: React.ReactNode;
  /** Optional footer */
  footer?: React.ReactNode;
  /** Size: sm, md, lg */
  size?: "sm" | "md" | "lg";
  /** Panel container classes */
  panelClassName?: string;
  /** Close button classes */
  closeButtonClassName?: string;
  /** Show X close button */
  showCloseButton?: boolean;
  /** Close when clicking overlay */
  closeOnOverlayClick?: boolean;
  /** Overlay opacity: light, medium, heavy */
  overlayOpacity?: "light" | "medium" | "heavy";
  /** Custom z-index */
  zIndex?: number;
}

const sizeClasses = {
  sm: "max-w-md w-full",
  md: "max-w-lg w-full",
  lg: "max-w-2xl w-full",
};

const overlayOpacityClasses = {
  light: "bg-black/40",
  medium: "bg-black/60",
  heavy: "bg-black/70",
};

export default function Modal({
  open,
  onClose,
  children,
  title,
  footer,
  size = "md",
  panelClassName = "bg-gray-900 border border-gray-700",
  closeButtonClassName = "text-gray-400 hover:text-white hover:bg-gray-700/50",
  showCloseButton = true,
  closeOnOverlayClick = true,
  overlayOpacity = "heavy",
  zIndex = 50,
}: ModalProps) {
  useEffect(() => {
    if (open) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[${zIndex}] flex items-center justify-center p-4 ${overlayOpacityClasses[overlayOpacity]} backdrop-blur-sm`}
      style={{ zIndex }}
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className={`relative flex max-h-[90vh] flex-col overflow-hidden rounded-2xl shadow-2xl ${sizeClasses[size]} ${panelClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className={`absolute right-3 top-3 z-10 rounded-lg p-1.5 transition-colors ${closeButtonClassName}`}
            aria-label="Close"
          >
            <XIcon className="size-5" />
          </button>
        )}

        {title && <div className="shrink-0 border-b border-gray-700/50 px-6 pb-4 pt-6 pr-12">{title}</div>}

        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">{children}</div>

        {footer && (
          <div className="shrink-0 border-t border-gray-700/50 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
