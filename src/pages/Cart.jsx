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
  if (cartItems.length == 0)
    return (
      <div className="max-w-[80%] m-auto h-screen font-bold text-xl flex justify-center items-center">
        Cart is Empty
      </div>
    );
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
      <div className="flex">
        <div className="w-[60%] border border-gray-200 pl-5 pr-5 rounded">
          {cartItems.map((item) => (
            <Cartard item={item} />
          ))}
        </div>
        {/* order Summary */}
        <div className="w-[40%] pl-10 pr-10 pt-5 pb-5 border gap-5 border-gray-200 ml-5 rounded  flex flex-col h-91">
          <div>
            <h1 className="font-bold text-xl">Order Summary</h1>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-light">Subtotal</p>
            <p className="font-medium text-sm">
              Rs.
              {Math.floor(
                cartItems.reduce((total, item) => total + item.price, 0) * 283,
              )}
            </p>
          </div>
          <div className="flex justify-between border border-transparent border-b-gray-200 pb-2">
            <p className="text-sm font-light">Delivery Fee</p>
            <p className="font-medium text-sm">Rs. 160</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-light">Total</p>
            <p className="font-medium text-sm">
              Rs.
              {Math.floor(
                cartItems.reduce((total, item) => total + item.price, 0) * 283 +
                  160,
              )}
            </p>
          </div>
          <div>
            <button className="p-2 pl-4 pr-4 bg-gray-200  rounded-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
