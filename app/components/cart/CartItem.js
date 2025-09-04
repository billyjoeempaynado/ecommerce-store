"use client";

import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";

export default function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border-b-1   bg-white">
      <div className="relative w-full md:w-48 h-48">
        <Image src={item.image} alt={item.name} fill className="object-contain rounded" />
      </div>

      <div className="flex-1 space-y-2">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-600">{item.category}</p>
        <p className="text-gray-600">Size: {item.selectedSize}</p>
        <p className="font-semibold">₱ {item.price}</p>

        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => removeFromCart(item.uid)} className="text-red-500">
            <CiTrash size={20} />
          </button>
          <button
            onClick={() => updateQuantity(item.uid, item.quantity - 1)}
            className="p-1 bg-gray-200 rounded"
          >
            <HiOutlineMinusSm size={20} />
          </button>
          <span className="px-2">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.uid, item.quantity + 1)}
            className="p-1 bg-gray-200 rounded"
          >
            <GoPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
