import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ProductImageSlider from "../ProductImageSlider/ProductImageSlider";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { addProductToCart } from "../../cartServices";


export default function ProductDetails() {
  let { id } = useParams();

  const [productDetails, setproductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  


  useEffect(() => {
    getProductDetails();
  }, [id]);

  async function getProductDetails() {
    setIsLoading(true);
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products/" + id
    );
    setproductDetails(data.data);
    getRelatedProduct(data.data?.category._id);
    setIsLoading(false);

    async function getRelatedProduct(categoryId) {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products",
        {
          params: {
            category: categoryId,
          },
        }
      );
      setRelatedProducts(data.data);
    }
  }

  return (
    <>
      {IsLoading ? (
        <LoadingScreen />
      ) : (
        <div className="bg-white">
          <main className="my-8">
            <div className="container mx-auto px-6">
              <div className="md:flex md:items-center">
                <div className="w-full  md:w-3/12 lg:h-96">
                  <ProductImageSlider images={productDetails?.images} />
                </div>
                <div className="w-full  mt-5 md:ml-8 md:mt-0 md:w-9/12">
                  <h3 className="text-gray-700 uppercase text-lg">
                    {productDetails?.title}
                  </h3>
                  <span className="text-gray-500 mt-3">
                    ${productDetails?.price}
                  </span>
                  <hr className="my-3" />
                  
                  <div className="mt-3">
                    <label className="text-gray-700 text-sm" for="count">
                      Rating:
                    </label>
                    <RatingStars rating={productDetails?.ratingsAverage ?? 0} />
                  </div>
                  <div className="mt-3">
                    <label className="text-gray-700 text-sm" for="count">
                      Description:
                    </label>
                    <h3>{productDetails?.description}</h3>
                  </div>
                  <div className="mt-3">
                    <label className="text-gray-700 text-sm" for="count">
                      Category:
                    </label>
                    <h3>{productDetails?.category.name}</h3>
                  </div>
                  <div className="mt-3">
                    <label className="text-gray-700 text-sm" for="count">
                      SubCategory:
                    </label>
                    <h3>{productDetails?.subcategory[0].name}</h3>
                  </div>
                  <div className="mt-3">
                    <label className="text-gray-700 text-sm" for="count">
                      Brand:
                    </label>
                    <h3>{productDetails?.brand.name}</h3>
                  </div>
                  <div className="flex items-center mt-6">
                    <button className="px-8 py-2 bg-green-700 text-white text-sm font-medium rounded hover:bg-green-800 focus:outline-none focus:bg-indigo-500">
                      Order Now
                    </button>
                    <button onClick={() => addProductToCart(productDetails._id)} className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <RelatedProducts products={relatedProducts} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
