import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import ProductContext from "../Context/ProductContext";
function Popularitems() {
  const { product, loading, setLoading } = useContext(ProductContext);
  const [popularitems, setPopularitems] = useState([]);

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
    <div className="grid grid-cols-4 gap-4">
      {popularitems.map((item) => (
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

export default Popularitems;
