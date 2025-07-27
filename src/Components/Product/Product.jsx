import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars"; // adjust import if needed

export default function Product({ product, addProductToCart }) {
  return (
    <div className="w-full">
      <div className="bg-white shadow-sm hover:shadow-emerald-800 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300 h-full flex flex-col justify-between">
        <Link to={`/ProductDetails/${product._id}`}>
          <img
            className="rounded-t-lg p-4 object-cover w-full h-48 sm:h-56 md:h-64"
            src={product.imageCover}
            alt="product"
          />
        </Link>

        <div className="px-4 pb-4 flex flex-col flex-grow justify-between">
          <Link to={`/ProductDetails/${product._id}`}>
            <h3 className="text-gray-900 font-semibold text-lg sm:text-xl tracking-tight dark:text-white line-clamp-1">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base line-clamp-2 mt-1 dark:text-gray-300">
              {product.description}
            </p>
          </Link>

          <div className="flex justify-between items-center mt-3">
            <RatingStars rating={product?.ratingsAverage} />
            <button onClick={() => addProductToCart(product._id)}>
              <i className="fa-solid fa-heart text-red-500 hover:text-red-600"></i>
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <button
              onClick={() => addProductToCart(product._id)}
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
