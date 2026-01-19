import React from "react";
import CartContext from "./CartContext";
import { useState, useEffect } from "react";

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || [],
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log("CartContextProvider cartItems changed:");
  }, [cartItems]);
  console.log("Provider Rendered. Items:", cartItems.length);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
