"use client";

import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";

export default function BackButton({ className }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`mt-10 flex items-center gap-2 px-4 py-2  hover:color-gray-300 transition ${className}`}
    >
      <HiArrowLeft size={20} />
   
    </button>
  );
}
