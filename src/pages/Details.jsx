import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import ProductDetails from "../Sections/ProductDetails";
import Reviews from "../Sections/Reviews";
import CartContext from "../Context/CartContext";

function Details() {
  const { id } = useParams();

  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const { product } = useContext(ProductContext);
  const [singleProduct, setSingleProduct] = useState();
  const [mainImage, SetMainimage] = useState();
  const [activeTab, setActiveTab] = useState("Reviews");

  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }
  function dicremenQuantity() {
    setQuantity((prev) => prev - 1);
  }

  function addToCart() {
    setCartItems((prev) => [
      ...prev,
      {
        id: singleProduct.id,
        thumbnail: singleProduct.thumbnail,
        title: singleProduct.title,
        price: singleProduct.price,
        brand: singleProduct.brand,
        returnPolicy: singleProduct.returnPolicy,
        quantity: quantity,
      },
    ]);
  }

  useEffect(() => {
    if (!product) return;
    const found = product.find((item) => String(item.id) === String(id));
    setSingleProduct(found);
    if (singleProduct) SetMainimage(singleProduct.images[0]);
  }, [product, singleProduct]);

  if (!singleProduct) return <p>Loading..........</p>;

  const isInCart = cartItems.some(
    (item) => Number(item.id) === Number(singleProduct.id),
  );
  console.log(isInCart);
  return (
    <div>
      <div className="flex max-w-4/5 m-auto gap-10 mt-10">
        <div className=" flex">
          <div className="flex flex-col gap-4 justify-start overflow-clip">
            {singleProduct.images.map((image, index) => (
              <img
                src={image}
                alt=""
                className={
                  image == mainImage
                    ? "w-40 border bg-primary rounded "
                    : "w-40 bg-primary rounded "
                }
                onClick={() => SetMainimage(image)}
              />
            ))}
          </div>
          <div className=" flex justify-center">
            <img
              src={mainImage}
              alt=""
              srcset=""
              className="max-w-[90%] bg-primary rounded "
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex">
            <h1 className="font-bold text-5xl">{singleProduct.title}</h1>
            <div className="w-1/2 flex justify-end">
              <img src={singleProduct.meta.qrCode} alt="" className="w-25" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            <span className="text-black">⭐ </span>
            {singleProduct.rating}
          </p>
          <div className="flex gap-2">
            <h1 className="font-bold">
              Rs. {Math.floor(Number(singleProduct.price * 286))}
            </h1>
            <h1 className="font-bold text-gray-400 line-through">
              Rs.
              {Math.floor(
                Math.floor(Number(singleProduct.price * 286)) /
                  (1 -
                    Math.floor(Number(singleProduct.discountPercentage)) / 100),
              )}
            </h1>
            <h1 className="bg-red-200 text-xs text-red-600 flex rounded-full p-1 pr-2 pl-2  items-center">
              -{Math.floor(Number(singleProduct.discountPercentage))}%
            </h1>
          </div>

          <p className="text-xs w-4/5 text-justify text-gray-700">
            {singleProduct.description}
          </p>
          <div>
            <p
              className={
                singleProduct.availabilityStatus === "In Stock"
                  ? "bg-green-200 w-[25%] text-xs text-center p-2 text-green-600 pl-4 pr-4 text-green rounded-full"
                  : "bg-red-200 w-[25%] text-xs text-center p-2 text-red-600 pl-4 pr-4 text-red rounded-full"
              }
            >
              {singleProduct.availabilityStatus}
            </p>
          </div>
          <p className="text-xs text-gray-600">Tags</p>
          <div className="flex gap-2">
            {singleProduct.tags.map((tag) => (
              <span className="bg-gray-200 text-gray-600 p-2 rounded-full pl-4 pr-4 text-xs">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-gray-600 text-xs">
            <span>{singleProduct.returnPolicy}</span>
          </div>

          <div className="flex gap-2">
            <div className="bg-gray-200 w-1/3 text-xl flex justify-around p-1 rounded-full items-center">
              <button
                onClick={dicremenQuantity}
                disabled={quantity === 1}
                className="text-2xl"
              >
                -
              </button>
              <span className="text-sm">{quantity}</span>
              <button
                onClick={incrementQuantity}
                disabled={quantity == singleProduct.stock}
                className="text-2xl"
              >
                +
              </button>
            </div>
            <div className="w-full">
              <button
                disabled={isInCart}
                onClick={addToCart}
                className={
                  isInCart
                    ? "bg-gray-700 cursor-not-allowed text-white rounded-full pt-2 pb-2 pl-8 pr-8 w-full"
                    : "bg-black text-white cursor-pointer rounded-full pt-2 pb-2 pl-8 pr-8 w-full"
                }
              >
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-15 mb-5 mt-10 max-w-[80%] m-auto ">
        <div
          onClick={() => setActiveTab("Product")}
          className={
            activeTab === "Product"
              ? "w-1/2 flex justify-center items-center font-bold border-2 border-transparent border-b-black"
              : "w-1/2 flex justify-center items-center font-bold border-2 border-transparent border-b-gray-200 text-gray-500"
          }
        >
          <h1>More Details</h1>
        </div>
        <div
          onClick={() => setActiveTab("Reviews")}
          className={
            activeTab === "Reviews"
              ? "w-1/2 flex justify-center items-center font-bold border-2 border-transparent border-b-black"
              : "w-1/2 flex justify-center items-center font-bold border-2 border-transparent border-b-gray-200 text-gray-500"
          }
        >
          <h1>Reviews({singleProduct.reviews.length})</h1>
        </div>
      </div>
      <div className="max-w-[80%] m-auto">
        {activeTab === "Reviews" ? (
          <Reviews Product={singleProduct} />
        ) : (
          <ProductDetails Product={singleProduct} />
        )}
      </div>
    </div>
  );
}

export default Details;
