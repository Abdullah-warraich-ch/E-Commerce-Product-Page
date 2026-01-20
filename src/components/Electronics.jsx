import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ProductContext from "../Context/ProductContext";
function Electronics() {
  const { product, loading, setLoading } = useContext(ProductContext);
  const [electricitems, setElectricitems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const Electric = product.filter((item) =>
      item.tags.includes("electronics"),
    );
    setElectricitems(Electric);
    console.log(electricitems);
  }, [product]);

  if (loading) return <p>Loading...........</p>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {electricitems.slice(0, visibleCount).map((item) => (
        <Card
          key={item.id}
          id={item.id}
          thumbnail={item.thumbnail}
          title={item.title}
          reviews={
            Math.trunc(
              (item.reviews.reduce(
                (total, review) => total + review.rating,
                0,
              ) /
                3) *
                10,
            ) / 10
          }
          price={Math.round(item.price * 283)}
        />
      ))}
      {visibleCount < electricitems.length && (
        <div className="col-span-4 flex justify-center">
          <button
            onClick={() => setVisibleCount((v) => v + 4)}
            className="px-4 py-2 text-white bg-black cursor-pointer hover:text-black hover:bg-white border rounded"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}

export default Electronics;
