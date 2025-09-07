"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderQuery = searchParams.get("order");
    if (orderQuery) setOrder(JSON.parse(orderQuery));
  }, [searchParams]);

  if (!order) return <p className="p-8 text-center">No order found.</p>;

  return (
    <div className="mt-20 max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Thank You for Your Order!</h1>
      <p className="text-center mb-8">We have received your order and it is being processed.</p>

      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {order.items.map((item) => (
          <div key={item.uid} className="flex justify-between border-b py-2">
            <div>
              {item.name} ({item.selectedSize}) x {item.quantity}
            </div>
            <div>₱ {item.price * item.quantity}</div>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4">
          <span>Subtotal:</span>
          <span>₱ {order.subtotal}</span>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Customer Info</h2>
        <p><strong>Name:</strong> {order.customer.fullName}</p>
        <p><strong>Email:</strong> {order.customer.email}</p>
        <p><strong>Address:</strong> {order.customer.address}, {order.customer.city}, {order.customer.postalCode}, {order.customer.country}</p>
        <p><strong>Payment Method:</strong> {order.customer.paymentMethod}</p>

        {order.customer.paymentMethod === "Credit Card" && (
          <>
            <p><strong>Card Number:</strong> {order.customer.cardNumber}</p>
            <p><strong>Expiry Date:</strong> {order.customer.expiryDate}</p>
            <p><strong>CVV:</strong> {order.customer.cvv}</p>
          </>
        )}

        {order.customer.paymentMethod === "PayPal" && (
          <p><strong>PayPal Email:</strong> {order.customer.paypalEmail}</p>
        )}
      </div>
      <div className="mt-6 flex gap-4 justify-center">
       <Link href="/">
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Back to Home
        </button>
        </Link>
        <Link href="/shop">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
         
        >
          Order Again
        </button>
        </Link>
      </div>
    </div>
  );
}
