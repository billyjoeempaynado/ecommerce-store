"use client";

import Navbar from "@/app/components/Navbar";
import { useCart } from "@/app/context/CartContext";
import CartItem from "@/app/components/cart/CartItem";
import CartSummary from "@/app/components/cart/CartSummary";
import BackButton from "../components/BackButton";

export default function CartPage() {
  const { cartItems, cartCount, removeFromCart, updateQuantity } = useCart();

  if (!cartItems.length) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-20">Your cart is empty</p>
      </>
    );
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <section className="mb-20">
        <Navbar />
      </section>
      <BackButton className="top-4 left-4 z-50" />
      <section className="px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-2xl font-bold mb-4">Cart ({cartCount})</h1>
            {cartItems.map((item) => (
              <CartItem
                key={item.uid}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <CartSummary subtotal={subtotal} />
          </div>
        </div>
      </section>
    </>
    
  );
}