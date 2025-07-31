import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { addProductToCart } from "../../cartServices";

export default function RelatedProducts({ products }) {


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // default on large screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280, // xl
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024, // lg
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // sm
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <>
   

      <div className="mt-32 px-4 sm:px-6 lg:px-8">
  <h3 className="text-gray-600 text-xl sm:text-2xl font-medium mb-6">
    More Products
  </h3>
  <Slider {...settings}>
    {products.map((product, index) => (
      <div
        key={index}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-xs mx-auto p-2"
      >
        <div className="p-4 shadow-md rounded-md hover:shadow-emerald-800 transition-shadow duration-300">
          <div
            className="flex items-end justify-end h-52 sm:h-56 md:h-60 w-full bg-cover bg-center rounded"
            style={{ backgroundImage: `url(${product.imageCover})` }}
          >
            <button
              onClick={() => addProductToCart(product._id)}
              className="p-2 rounded-full bg-green-700 text-white mx-4 -mb-4 hover:bg-green-800 focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
          <div className="px-3 pt-4 text-center">
            <Link to={`/ProductDetails/${product._id}`}>
              <h3 className="text-gray-700 uppercase text-sm sm:text-base line-clamp-1">
                {product.title}
              </h3>
            </Link>
            <span className="text-gray-500 mt-1 block">${product.price}</span>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

    </>
  );
}
