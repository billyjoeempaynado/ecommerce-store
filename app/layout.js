// app/layout.jsx
"use client";

import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {/* Navbar rendered once here */}
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </CartProvider>
        <Footer />
      </body>
      
    </html>
  );
}
