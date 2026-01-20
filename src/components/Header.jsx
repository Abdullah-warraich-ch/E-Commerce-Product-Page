import React, { useContext, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";

function Header() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-20 w-full flex justify-between md:justify-around items-center shadow px-4 md:px-0 relative">
      <div className="flex items-center gap-2">
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <CiMenuBurger size={25} />
        </div>
        <h1 className="text-black font-black text-2xl md:text-3xl">SHOP.CO</h1>
      </div>

      <div className={`absolute top-20 left-0 w-full bg-white shadow-md md:static md:w-auto md:shadow-none md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row font-normal gap-5 text-sm md:text-xs p-5 md:p-0">
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>Shows</li>
          <li>Cloths</li>
          <li>Gaming</li>
          <li>Furniture</li>
        </ul>
      </div>
      <div className="hidden md:flex justify-center items-center relative">
        <CiSearch className="absolute left-3" />
        <input
          type="text"
          placeholder="Search For Products"
          className="bg-primary p-2 pl-10 w-full rounded-full text-xs outline-gray-500"
        />
      </div>
      <div className="flex text-xl gap-5 items-center">
        <div className="md:hidden">
          <CiSearch size={25} />
        </div>
        <div className="relative">
          <span className="absolute text-xs -right-2 bg-red-600 pl-1.25 pr-1.25  text-white rounded-full  -top-2">
            {cartItems.length}
          </span>
          <Link to="/cart">
            <CiShoppingCart size={25} className="md:w-[30px] md:h-[30px]" />
          </Link>
        </div>
        <GiSelfLove size={25} className="md:w-[30px] md:h-[30px]" />
      </div>
    </div>
  );
}

export default Header;
