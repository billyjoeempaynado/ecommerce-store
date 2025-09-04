import Image from "next/image";
import Link from "next/link";

export default function Items() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-[92%] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Shop Our Collection</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <div className="relative w-full h-64">
              <Image
                src="/images/jordan.png"
                alt="Product 1"
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">Air Jordan</h3>
              <p className="text-gray-600 mt-2">$199.00</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <div className="relative w-full h-64">
              <Image
                src="/images/shoe2.png"
                alt="Product 2"
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">Nike Runner</h3>
              <p className="text-gray-600 mt-2">$149.00</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <div className="relative w-full h-64">
              <Image
                src="/images/shoe3.png"
                alt="Product 3"
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">Adidas Classic</h3>
              <p className="text-gray-600 mt-2">$129.00</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
