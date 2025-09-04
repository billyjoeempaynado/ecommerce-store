import Image from "next/image";
import Link from "next/link";
import { products as defaultProducts } from "@/app/lib/products"; // fallback
import HeroCarousel from "@/app/components/HeroCarousel";

export default function Items({ products = defaultProducts }) {
  return (
    <>
      <HeroCarousel />
      <section className="py-16 bg-gray-100">
        <div className="w-[92%] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Shop Our Collection</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer">
                  <div className="relative w-full h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-gray-600 mt-2">₱{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

