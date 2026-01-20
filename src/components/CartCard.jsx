import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import ProductContext from "../Context/ProductContext";
import CartContext from "../Context/CartContext";

function CartCard({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  function dltItem() {
    setCartItems((prev) =>
      prev.filter((cart) => Number(cart.id) !== Number(item.id)),
    );

    console.log("Deleted", cartItems);
  }
  return (
    <div className="flex flex-col md:flex-row pt-5 pb-5 justify-between gap-4 md:gap-2 border border-transparent border-b-gray-200">
      <div className="flex gap-4 md:gap-5 w-full">
        <div className="shrink-0">
          <img
            src={item.thumbnail}
            alt=""
            srcset=""
            width={100}
            className="bg-gray-200 rounded w-20 md:w-[100px] h-20 md:h-[100px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div>
            <h1 className="font-bold text-sm md:text-base line-clamp-2">{item.title}</h1>
            <p className="text-xs text-gray-500">{item.brand}</p>
            <p className="text-xs text-gray-500">{item.returnPolicy}</p>
          </div>
          <p className="font-bold text-sm md:text-base">Rs. {Math.floor(item.price * 283)}</p>
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-between w-full md:w-auto mt-2 md:mt-0">
        <MdDeleteOutline
          color="red"
          size={25}
          onClick={dltItem}
          className="cursor-pointer hover:text-red-700"
        />
        <p className="text-sm">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
}

export default CartCard;
