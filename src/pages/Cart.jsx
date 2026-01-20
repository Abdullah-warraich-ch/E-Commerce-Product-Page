import React, { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";
import CartCard from "../components/CartCard";
import { CiShoppingTag } from "react-icons/ci";
import Button from "../components/Button";

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
      <div className="max-w-[80%] m-auto min-h-screen font-bold text-xl flex justify-center items-center">
        Cart is Empty
      </div>
    );
  return (
    <div className="max-w-[95%] md:max-w-4/5 m-auto mt-10 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">YOUR CART</h1>
        <button
          className="p-2 pl-4 pr-4 bg-gray-200  rounded-full text-sm hover:bg-gray-300"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-5 md:gap-0">
        <div className="w-full md:w-[60%] border border-gray-200 pl-2 pr-2 md:pl-5 md:pr-5 rounded py-4">
          {cartItems.map((item) => (
            <CartCard item={item} key={item.id} />
          ))}
        </div>
        {/* order Summary */}
        <div className="w-full md:w-[40%] pl-5 pr-5 md:pl-10 md:pr-10 pt-5 pb-5 border gap-5 border-gray-200 md:ml-5 rounded flex flex-col h-fit md:h-91">
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
          <div className="flex items-center gap-2">
            <div className="relative flex items-center w-full">
              <CiShoppingTag
                className="absolute left-2 "
                size={24}
                color="gray"
              />
              <input
                type="text"
                placeholder="Enter coupon code"
                className="bg-gray-200 p-3 rounded-full pl-10 w-full text-xs outline-gray-500"
              />
            </div>
            <div>
              <Button text="Apply" />
            </div>
          </div>
          <div className="w-full">
            <button className="p-2 pl-4 pr-4 w-full cursor-pointer  bg-black text-white rounded-full hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
