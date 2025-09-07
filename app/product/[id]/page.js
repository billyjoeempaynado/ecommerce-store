"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useParams } from "next/navigation";
import { products } from "@/app/lib/products";
import Navbar from "@/app/components/Navbar";
import BackButton from "@/app/components/BackButton";

export default function ProductPage() {
  const { id } = useParams(); // get product id from URL
  const productId = parseInt(id, 10); // convert to number
  const product = products.find((p) => p.id === productId); // find product

  const { addToCart } = useCart();
  const [size, setSize] = useState(null);

  if (!product) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-20 text-lg">❌ Product not found</p>
      </>
    );
  }

    const handleAddToCart = () => {
      if (!size) return;

      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        selectedSize: size,
        category: product.category,
      });

      alert(`${product.name} added to cart 🛒`);
    };

  return (
    <>
      <Navbar />
      <BackButton className="mt-20 top-4 left-4 z-50" />
      <div className="flex flex-col md:flex-row mt-20 items-center justify-center w-[92%] max-w-4xl mx-auto p-6">
        {/* Product Image */}
        <div className="relative w-full h-64 md:h-96 shadow-sm rounded-lg overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-contain p-6" />
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
              {product.sizes?.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 border rounded-lg transition ${
                    size === s ? "bg-black text-white border-black" : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!size}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
          >
            {size ? "Add to Cart" : "Select a Size"}
          </button>
        </div>
      </div>
    </>
  );
}
