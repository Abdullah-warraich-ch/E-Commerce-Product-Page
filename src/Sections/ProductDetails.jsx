import React from "react";

function ProductDetails({ Product }) {
  return (
    <div>
      <div className="mb-10">
        <h1 className="font-bold text-gray-500">Product Details</h1>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <table width="100%">
            <tr className="border border-transparent border-b-gray-300">
              <td className="w-1/5 pt-2 pb-2 font-bold">Category</td>
              <td className="text-gray-500 ">{Product.category}</td>
            </tr>
            <tr className="border border-transparent border-b-gray-300">
              <td className="w-1/5 pt-2 pb-2 font-bold">Brand</td>
              <td className="text-gray-500 ">{Product.brand}</td>
            </tr>
            <tr className="border border-transparent border-b-gray-300">
              <td className="w-1/3 pt-2 pb-2 font-bold">sku</td>
              <td className="text-gray-500 ">{Product.sku}</td>
            </tr>
            <tr className="border border-transparent border-b-gray-300">
              <td className="w-1/3 pt-2 pb-2 font-bold">Weight</td>
              <td className="text-gray-500 ">{Product.weight}</td>
            </tr>
            <tr className="border border-transparent border-b-gray-300">
              <td className="w-1/3 pt-2 pb-2 font-bold">Warranty</td>
              <td className="text-gray-500 ">{Product.warrantyInformation}</td>
            </tr>
            <tr className="border border-transparent border-b-gray-300">
              <td className="w-1/3 pt-2 pb-2 font-bold">Shipping </td>
              <td className="text-gray-500 ">{Product.shippingInformation}</td>
            </tr>
            <tr className="border border-transparent border-b-gray-300">
              <td className="w-1/3 pt-2 pb-2 font-bold">Return Policy </td>
              <td className="text-gray-500 ">{Product.returnPolicy}</td>
            </tr>
            <tr className="border border-transparent border-b-gray-300">
              <td className="w-1/3 pt-2 pb-2 font-bold">Minimum Order</td>
              <td className="text-gray-500 ">{Product.minimumOrderQuantity}</td>
            </tr>
          </table>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img src={Product.thumbnail} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
