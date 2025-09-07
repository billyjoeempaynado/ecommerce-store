"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

export default function CartSummary({ deliveryFee = 150 }) {
  const router = useRouter();
  const { cartItems } = useCart();

  // ✅ Compute subtotal directly from cartItems
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal + deliveryFee;

  // ✅ Format PHP currency properly
  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(amount);

  return (
    <div className="p-8 bg-white border h-fit rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Summary</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Estimated Delivery & Handling</span>
        <span>{formatCurrency(deliveryFee)}</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>

      <button
        onClick={() => router.push("/checkout")}
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Checkout
      </button>
    </div>
  );
}
