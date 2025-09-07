"use client";
import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Data:", formData);
    alert("✅ Order placed successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded-lg w-full">
      <h2 className="text-xl font-bold mb-6">Checkout Information</h2>

      <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
      <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
      <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
      <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
      <InputField label="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} />

      <SelectField
        label="Country"
        name="country"
        options={["Philippines", "USA", "UK"]}
        value={formData.country}
        onChange={handleChange}
      />

      <SelectField
        label="Payment Method"
        name="paymentMethod"
        options={["Cash on Delivery", "Credit Card", "PayPal"]}
        value={formData.paymentMethod}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Place Order
      </button>
    </form>
  );
}
