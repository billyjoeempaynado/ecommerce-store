"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// ✅ Helper for price formatting
const formatPrice = (amount) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(amount);

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderQuery = searchParams.get("order");
    if (orderQuery) setOrder(JSON.parse(orderQuery));
  }, [searchParams]);

  if (!order) {
    return (
      <div className="p-8 text-center">
        <p className="mb-4">⚠️ No order found.</p>
        <Link href="/" className="text-blue-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-20 max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Thank You for Your Order!
      </h1>
      <p className="text-center mb-8">
        We have received your order and it is being processed.
      </p>

      {/* Order Summary */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {order.items.map((item) => (
          <div key={item.uid} className="flex justify-between border-b py-2">
            <div>
              {item.name} ({item.selectedSize}) x {item.quantity}
            </div>
            <div>{formatPrice(item.price * item.quantity)}</div>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4">
          <span>Subtotal:</span>
          <span>{formatPrice(order.subtotal)}</span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="mt-6 bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Customer Info</h2>
        <p>
          <strong>Name:</strong> {order.customer.fullName}
        </p>
        <p>
          <strong>Email:</strong> {order.customer.email}
        </p>
        <p>
          <strong>Address:</strong> {order.customer.address},{" "}
          {order.customer.city}, {order.customer.postalCode},{" "}
          {order.customer.country}
        </p>
        <p>
          <strong>Payment Method:</strong> {order.customer.paymentMethod}
        </p>

        {/* Credit Card (masking) */}
        {order.customer.paymentMethod === "Credit Card" && (
          <>
            <p>
              <strong>Card Number:</strong> **** **** ****{" "}
              {order.customer.cardNumber.slice(-4)}
            </p>
            <p>
              <strong>Expiry Date:</strong> {order.customer.expiryDate}
            </p>
          </>
        )}

        {order.customer.paymentMethod === "PayPal" && (
          <p>
            <strong>PayPal Email:</strong> {order.customer.paypalEmail}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4 justify-center">
        <Link href="/">
          <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
            Back to Home
          </button>
        </Link>
        <Link href="/shop">
          <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50 transition">
            Order Again
          </button>
        </Link>
      </div>
    </div>
  );
}
