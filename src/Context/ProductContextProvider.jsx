import { useContext, useState, useEffect } from "react";
import ProductContext from "./ProductContext";

function ProductContextProvider({ children }) {
  const api_url = "/public/api/products.json";
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(api_url);

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProduct(data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ product, loading, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
