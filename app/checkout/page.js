"use client";
import CheckoutForm from "@/app/components/CheckoutForm";
import CartSummary from "@/app/components/CartSummary";
import { useCart } from "@/app/context/CartContext";


export default function CheckoutPage() {
  const { subtotal } = useCart();

  return (
    <div className="mt-20 min-h-screen bg-gray-100 flex flex-col md:flex-row gap-6 p-8">
      {/* Left - Form */}
      <div className="flex-1">
        <CheckoutForm />
      </div>

      {/* Right - Cart Summary */}
      <div className="w-full md:w-1/3">
        <CartSummary subtotal={subtotal} />
      </div>
          
    </div>


  );
}
