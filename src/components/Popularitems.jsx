import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ProductContext from "../Context/ProductContext";
function Popularitems() {
  const { product, loading, setLoading } = useContext(ProductContext);
  const [popularitems, setPopularitems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const popular = product.filter(
      (item) =>
        Math.trunc(
          (item.reviews.reduce((total, review) => total + review.rating, 0) /
            3) *
          10,
        ) /
        10 >
        4.5,
    );
    setPopularitems(popular);
    console.log(popularitems);
  }, [product]);

  if (loading) return <p>Loading...........</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {popularitems.slice(0, visibleCount).map((item) => (
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

      {visibleCount < popularitems.length && (
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

export default Popularitems;
