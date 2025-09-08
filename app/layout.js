"use client";

import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          {/* Navbar */}
          <Navbar />

          {/* Main content grows to push footer down */}
          <main className="flex-1">
            {children}
          </main>

          {/* Toaster notifications */}
          <Toaster position="top-right" />
        </CartProvider>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
