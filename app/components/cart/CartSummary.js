export default function CartSummary({ subtotal, deliveryFee = 150 }) {
  const total = subtotal + deliveryFee;

  return (
    <div className="p-8 bg-white border-b-1  h-fit">
      <h2 className="text-xl font-bold mb-4">Summary</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>₱ {subtotal}</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Estimated Delivery & Handling</span>
        <span>₱ {deliveryFee}</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Total</span>
        <span>₱ {total}</span>
      </div>

      <button className="w-full bg-black  text-white py-3 rounded-lg hover:bg-gray-800 transition">
        Checkout
      </button>
    </div>
  );
}
