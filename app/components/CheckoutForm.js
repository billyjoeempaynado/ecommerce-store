"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useCart } from "../context/CartContext";

export default function CheckoutForm() {
  const router = useRouter();
  const { cartItems, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paypalEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      customer: formData,
      items: cartItems,
      subtotal,
    };

    clearCart();

    const orderQuery = encodeURIComponent(JSON.stringify(orderData));
    router.push(`/thank-you?order=${orderQuery}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded-lg w-full">
      <h2 className="text-xl font-bold mb-6">Checkout Information</h2>

      <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
      <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
      <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
      <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
      <InputField label="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} />
      <SelectField label="Country" name="country" options={["Philippines", "USA", "UK"]} value={formData.country} onChange={handleChange} />

      <SelectField
        label="Payment Method"
        name="paymentMethod"
        options={["Cash on Delivery", "Credit Card", "PayPal"]}
        value={formData.paymentMethod}
        onChange={handleChange}
      />

      {/* Conditional Fields */}
      {formData.paymentMethod === "Credit Card" && (
        <div className="space-y-2 mt-4">
          <InputField label="Card Number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
          <InputField label="Expiry Date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
          <InputField label="CVV" name="cvv" value={formData.cvv} onChange={handleChange} />
        </div>
      )}

      {formData.paymentMethod === "PayPal" && (
        <div className="space-y-2 mt-4">
          <InputField label="PayPal Email" name="paypalEmail" type="email" value={formData.paypalEmail} onChange={handleChange} />
        </div>
      )}

      <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition mt-4">
        Place Order
      </button>
    </form>
  );
}
