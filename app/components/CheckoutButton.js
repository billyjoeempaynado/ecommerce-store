"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function CheckoutButton() {
  const router = useRouter();
  const pathname = usePathname() || ""; // ✅ make sure it's a string
  const { cartItems } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Only navigate if not already on checkout page
    if (!pathname.startsWith("/checkout")) {
      router.push("/checkout");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      Checkout
    </button>
  );
}
