import React, { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";
import Cartard from "../components/Cartard";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  function clearCart() {
    setCartItems([]);
  }
  return (
    <div className="max-w-4/5 m-auto mt-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">YOUR CART</h1>
        <button
          className="p-2 pl-4 pr-4 bg-gray-200  rounded-full"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      <div>
        <div className="w-[60%] border border-gray-200 pl-5 pr-5 rounded">
          {cartItems.map((item) => (
            <Cartard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
