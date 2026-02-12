"use client";

import React from "react";
import Modal from "~/app/components/ui/Modal";
import TrashButton from "~/app/components/ui/TrashButton";

export interface DeleteConfirmModalProps {
  open: boolean;
  onClose: () => void;
  /** e.g. "Delete Quantum Cache?" or "Clear Lootbox Inventory?" */
  title: string;
  /** Optional custom message */
  description?: string;
  /** Label for the confirm button, e.g. "Delete" or "Clear All" */
  confirmLabel?: string;
  onConfirm: () => void;
  /** Optional panel styling */
  panelClassName?: string;
}

export default function DeleteConfirmModal({
  open,
  onClose,
  title,
  description,
  confirmLabel = "Delete",
  onConfirm,
  panelClassName = "border-red-500/20 bg-gray-900",
}: DeleteConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="sm"
      title={<h3 className="text-lg font-bold text-white">{title}</h3>}
      footer={
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-600"
          >
            Cancel
          </button>
          <TrashButton
            variant="full"
            label={confirmLabel}
            dangerLevel="high"
            onClick={handleConfirm}
          />
        </div>
      }
      panelClassName={panelClassName}
    >
      {description && (
        <p className="text-sm text-gray-300">{description}</p>
      )}
    </Modal>
  );
}
