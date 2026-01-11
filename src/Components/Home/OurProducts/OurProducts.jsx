import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import LoadingSpinner from "../../../Pages/Loading/Loading";

const OurProducts = () => {
  const axiosSecure = useAxiosSecure();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/all-products-limited?show_on_home=true"
      );
      return res.data;
    },
  });

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, idx) => (
            <div
              key={idx}
              className="animate-pulse flex flex-col bg-gray-200 rounded-xl h-[450px] p-4">
              <div className="bg-gray-300 h-56 w-full rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
              <div className="h-10 bg-gray-300 rounded mt-auto"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col bg-white/50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[450px] p-2">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="max-h-40 w-full object-cover"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {product.description}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>
                    Price:{" "}
                    <span className="text-green-600 font-semibold">
                      {product.price}/-
                    </span>
                  </span>
                  <span>Rating: ⭐ {product.rating || "4.5"}</span>
                </div>

                {/* View Details Button */}
                <Link to={`/productDetails/${product._id}`} className="mt-auto">
                  <button className="w-full py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link to="/all-products">
          <button className="px-8 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
