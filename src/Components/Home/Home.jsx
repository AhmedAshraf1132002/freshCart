import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Helmet } from "react-helmet";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setIsLoading(true);
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProducts(data.data);
    setIsLoading(false);
  }

  if (IsLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
}
