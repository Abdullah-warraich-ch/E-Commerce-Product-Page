import React from "react";
import Button from "../components/Button";

function Intro() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-full max-w-[95%] md:max-w-4/5 m-auto py-10 md:py-0">
      <div className="flex flex-col gap-5 justify-center w-full md:w-1/2 mt-10 md:mt-0">
        <h1 className="font-bold text-3xl md:text-5xl ">
          Start Your Shopping Adventure Now!
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Discover a world of convenience, quality, and unbeatable deals—all in
          one place. We bring you a curated selection of products ranging from
          fashion, electronics, and home essentials to exclusive items you won’t
          find anywhere else.
        </p>

        <div className="w-full md:w-1/3">
          <Button text="Shop Now" />
        </div>
        <div className="flex md:flex-wrap md:gap-10 mt-5 justify-between md:justify-start">
          <div className=" text-center border border-transparent pr-5  border-r-gray-500">
            <h1 className="font-medium text-xs md:text-2xl">200+</h1>
            <p className="text-gray-500 text-xs">International Brands</p>
          </div>
          <div className=" text-center border border-transparent pr-5  border-r-gray-500">
            <h1 className="font-medium text-xs md:text-2xl">2000+</h1>
            <p className="text-gray-500 text-xs">High Quality Products</p>
          </div>
          <div className="text-center">
            <h1 className="font-medium text-xs md:text-2xl">30,000+</h1>
            <p className="text-gray-500 text-xs">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="shrink-0 flex justify-center w-full md:w-1/2">
        <img
          src="Modal.png"
          alt="Modal"
          className="w-full max-w-[300px] md:max-w-[600px] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Intro;
