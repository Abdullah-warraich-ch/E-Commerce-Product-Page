import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ProductContext from "../Context/ProductContext";
function Beauty() {
  const { product, loading, setLoading } = useContext(ProductContext);
  const [beauty, setBeauty] = useState([]);

  useEffect(() => {
    const bea = product.filter((item) => item.tags.includes("beauty"));
    setBeauty(bea);
    console.log(beauty);
  }, [product]);

  if (loading) return <p>Loading...........</p>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {beauty.map((item) => (
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
    </div>
  );
}

export default Beauty;
