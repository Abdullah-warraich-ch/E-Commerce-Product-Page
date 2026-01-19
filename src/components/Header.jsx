import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-20 w-full flex justify-around     items-center shadow">
      <h1 className="text-black font-black text-3xl">SHOP.CO</h1>
      <div>
        <ul className="flex font-normal gap-5 text-xs">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shows</li>
          <li>Cloths</li>
          <li>Gaming</li>
          <li>Furniture</li>
        </ul>
      </div>
      <div className="flex justify-center items-center relative">
        <CiSearch className="absolute left-3" />
        <input
          type="text"
          placeholder="Search For Products"
          className="bg-primary p-2 pl-10 w-full rounded-full text-xs outline-gray-500"
        />
      </div>
      <div className="flex text-xl gap-5">
        <Link to="/cart">
          <CiShoppingCart />
        </Link>
        <GiSelfLove onClick={localStorage.clear} />
      </div>
    </div>
  );
}

export default Header;
