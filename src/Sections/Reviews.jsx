import React from "react";

function Reviews({ Product }) {
  return (
    <div>
      <div className="mb-10">
        <h1 className="font-bold text-gray-500">All Reviews</h1>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {Product.reviews.map((item) => (
          <div className="p-5 border border-gray-200 rounded flex flex-col gap-2">
            <p className="text-xs"> {"⭐".repeat(item.rating)}</p>
            <p className="font-bold">{item.reviewerName}</p>
            <p className="text-sm text-gray-500">{item.comment}</p>
            <p className="text-xs text-gray-600">
              Posted on {item.date.slice(0, 10)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
