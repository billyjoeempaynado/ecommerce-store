"use client";

import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";
import DeleteButton from "../DeleteButton"; // adjust path if needed
import { motion, AnimatePresence } from "framer-motion";

export default function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border-b bg-white">
      <div className="relative w-full md:w-48 h-48">
        <Image src={item.image} alt={item.name} fill className="object-contain rounded" />
      </div>

      <div className="flex-1 space-y-2">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-600">{item.category}</p>
        <p className="text-gray-600">Size: {item.selectedSize}</p>
        <p className="font-semibold">₱ {item.price}</p>

        <div className="flex items-center gap-2 mt-2">
          <AnimatePresence mode="wait">
            {item.quantity === 1 ? (
              <motion.div
                key="delete"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <DeleteButton
                  onDelete={() => removeFromCart(item.uid)}
                  confirmMessage="Remove this item from your cart?"
                />
              </motion.div>
            ) : (
              <motion.button
                key="minus"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={() => updateQuantity(item.uid, item.quantity - 1)}
                className="p-1 bg-gray-200 rounded"
              >
                <HiOutlineMinusSm size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          <span className="px-2">{item.quantity}</span>

          <button
            onClick={() => updateQuantity(item.uid, item.quantity + 1)}
            className="p-1 bg-gray-200 rounded"
          >
            <GoPlus size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
