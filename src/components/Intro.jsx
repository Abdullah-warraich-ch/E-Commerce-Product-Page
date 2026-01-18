import React from "react";
import Button from "../components/Button";

function Intro() {
  return (
    <div className=" flex h-full max-w-4/5 m-auto">
      <div className=" flex flex-col gap-5 justify-center w-1/2">
        <h1 className="font-bold text-5xl ">
          Start Your Shopping Adventure Now!
        </h1>
        <p className="text-gray-500">
          Discover a world of convenience, quality, and unbeatable deals—all in
          one place. We bring you a curated selection of products ranging from
          fashion, electronics, and home essentials to exclusive items you won’t
          find anywhere else.
        </p>

        <div className="w-1/3">
          <Button text="Shop Now" />
        </div>
        <div className="flex gap-10 mt-5">
          <div className=" text-center border border-transparent pr-5  border-r-gray-500">
            <h1 className="font-medium text-2xl">200+</h1>
            <p className="text-gray-500 text-xs">International Brands</p>
          </div>
          <div className=" text-center border border-transparent pr-5  border-r-gray-500">
            <h1 className="font-medium text-2xl">2000+</h1>
            <p className="text-gray-500 text-xs">High Quality Products</p>
          </div>
          <div className="text-center">
            <h1 className="font-medium text-2xl">30,000+</h1>
            <p className="text-gray-500 text-xs">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="shrink-0 flex justify-center">
        <img src="Modal.png" alt="Modal" className="w-150 h-auto" />
      </div>
    </div>
  );
}

export default Intro;
