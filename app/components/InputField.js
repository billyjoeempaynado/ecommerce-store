"use client";

export default function InputField({ label, type = "text", name, value, onChange, required = true }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-black outline-none"
      />
    </div>
  );
}
