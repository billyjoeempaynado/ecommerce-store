// app/thankyou/page.jsx
"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="mb-6">Your order has been successfully placed.</p>
      <Link
        href="/shop"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
