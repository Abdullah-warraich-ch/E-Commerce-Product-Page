import React from "react";
import { Link } from "react-router-dom";

function Card({ thumbnail, title, reviews, price, id }) {
  return (
    <Link to={`details/${id}`}>
      <div className="flex flex-col gap-2">
        <div className="bg-primary rounded-xl">
          <img src={thumbnail} alt="Product Thumbnail" />
        </div>
        <div>
          <h1 className="font-bold text-xs">{title}</h1>
        </div>
        <div className="text-gray-500 text-xs">{reviews}/5</div>
        <div className="font-bold text-2xs">Rs. {price}</div>
      </div>
    </Link>
  );
}

export default Card;
