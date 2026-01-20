import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ProductContext from "../Context/ProductContext";
function Beauty() {
  const { product, loading, setLoading } = useContext(ProductContext);
  const [beauty, setBeauty] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const bea = product.filter((item) => item.tags.includes("beauty"));
    setBeauty(bea);
    console.log(beauty);
  }, [product]);

  if (loading) return <p>Loading...........</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {beauty.slice(0, visibleCount).map((item) => (
        <Card
          id={item.id}
          key={item.id}
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
      {visibleCount < beauty.length && (
        <div className="col-span-full flex justify-center">
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

export default Beauty;
