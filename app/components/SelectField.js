"use client";

export default function SelectField({ label, name, options, value, onChange, required = true }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-black outline-none"
      >
        <option value="">Select {label}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
