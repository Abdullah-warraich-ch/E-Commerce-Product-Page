import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import ProductContext from "../Context/ProductContext";
import CartContext from "../Context/CartContext";

function Cartard({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  function dltItem() {
    setCartItems((prev) =>
      prev.filter((cart) => Number(cart.id) !== Number(item.id)),
    );

    console.log("Deleted", cartItems);
  }
  return (
    <div className="flex pt-5 pb-5 justify-between gap-2 border border-transparent border-b-gray-200">
      <div className="flex gap-5">
        <div>
          <img
            src={item.thumbnail}
            alt=""
            srcset=""
            width={100}
            className="bg-gray-200 rounded "
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-bold">{item.title}</h1>
            <p className="text-xs text-gray-500">{item.brand}</p>
            <p className="text-xs text-gray-500">{item.returnPolicy}</p>
          </div>
          <p className="font-bold">Rs. {Math.floor(item.price * 283)}</p>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <MdDeleteOutline
          color="red"
          size={25}
          onClick={dltItem}
          className="cursor-pointer"
        />
        <p className="text-sm">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
}

export default Cartard;
