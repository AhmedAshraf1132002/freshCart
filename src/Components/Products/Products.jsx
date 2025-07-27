import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Product from "../Product/Product";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Products() {
  // const [IsLoading, setIsLoading] = useState();

  function getProducts() {
    // setIsLoading(true);
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
    // setIsLoading(false);
  }

  // if (IsLoading) {
  //   return <LoadingScreen />;
  // }

  let { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <Helmet>
        <title>products</title>
      </Helmet>
          <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data.data.map((product, index) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
      
      {/* <div className="grid grid-cols-4 gap-3">
        {data?.data.data.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div> */}


    </>
  );
}
