"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { products } from "@/app/lib/products";
import Navbar from "@/app/components/Navbar";

export default function ProductPage() {
  const { id } = useParams();
  const [size, setSize] = useState(null);

  // Parse id safely
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  // Debug logs (check console in browser devtools)
  console.log("Params ID:", id);
  console.log("Product found:", product);

  // If no product found
  if (!product) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-20 text-lg">❌ Product not found</p>
      </>
    );
  }

  const handleAddToBag = () => {
    if (!size) return;
    alert(`✅ Added ${product.name} (size ${size}) to bag`);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row mt-20 items-center justify-center w-[92%] max-w-4xl mx-auto p-6">
        {/* Product Image */}
        <div className="shadow-sm relative w-full h-96 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="ml-0 md:ml-10 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-xl font-semibold mt-2">₱ {product.price}</p>

          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="font-bold">Choose Size:</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              {Array.isArray(product.sizes) &&
                product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 border rounded-lg transition ${
                      size === s
                        ? "bg-black text-white border-black"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
            </div>
            {size && (
              <p className="mt-2 text-sm text-gray-600">
                Selected size: <span className="font-semibold">{size}</span>
              </p>
            )}
          </div>

          {/* Add to Bag */}
          <button
            onClick={handleAddToBag}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
            disabled={!size}
          >
            {size ? "Add to Bag" : "Select a Size"}
          </button>
        </div>
      </div>
    </>
  );
}
