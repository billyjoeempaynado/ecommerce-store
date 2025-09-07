"use client";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existing = cartItems.find(
      (item) => item.id === product.id && item.selectedSize === product.selectedSize
    );

    if (existing) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1, uid: uuidv4() }]);
    }
  };

  const updateQuantity = (uid, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.uid === uid ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeFromCart = (uid) => {
    setCartItems((prev) => prev.filter((item) => item.uid !== uid));
  };

  const clearCart = () => setCartItems([]); // ✅ new function to reset cart

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart, // ✅ provide clearCart to context
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
