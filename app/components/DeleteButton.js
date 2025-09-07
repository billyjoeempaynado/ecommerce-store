"use client";

import { CiTrash } from "react-icons/ci";

export default function DeleteButton({ onDelete, confirmMessage }) {
  const handleDelete = () => {
    if (!confirmMessage || confirm(confirmMessage)) {
      onDelete();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-700 transition"
    >
      <CiTrash size={20} />
    </button>
  );
}
