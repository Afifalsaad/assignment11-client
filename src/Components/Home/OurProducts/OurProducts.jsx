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

  // if (isLoading) {
  //   return <LoadingSpinner></LoadingSpinner>;
  // }

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
    // <div className="">
    //   <h2 className="text-4xl font-bold text-center py-8">Our Products</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center text-left">
    //     {products.map((product) => (
    //       <div
    //         key={product._id}
    //         className="flex flex-col items-center p-6 text-left justify-center rounded-xl shadow-sm transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-md hover:cursor-pointer">
    //         <div>
    //           <img
    //             src={product.image}
    //             alt="Jacket"
    //             className=" h-[200px] rounded-xl"
    //           />
    //         </div>

    //         <div className="">
    //           <h2 className="my-2">
    //             <span className="text-xl font-bold">{product.name}</span>
    //           </h2>

    //           <h2 className="my-1">
    //             {" "}
    //             <span className="text-[#4a586a]">Price: </span>
    //             <span className="text-green-600 font-semibold">
    //               {product.price}/-
    //             </span>
    //           </h2>
    //           <p className="my-1 line-clamp-4">
    //             <span className="font-bold">Description:</span>{" "}
    //             {product.description}
    //           </p>
    //           <div className="card-actions mt-2">
    //             <button className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black/30 hover:cursor-pointer">
    //               L
    //             </button>
    //             <p className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black/30 hover:cursor-pointer">
    //               M
    //             </p>
    //             <p className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black/30 hover:cursor-pointer">
    //               XL
    //             </p>
    //             <p className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black/30 hover:cursor-pointer">
    //               XXL
    //             </p>
    //           </div>
    //           <div>
    //             <div class="flex w-full justify-center items-center gap-12 mt-3">
    //               <div class="bg-linear-to-b w-full from-gray-800/40 to-transparent p-1 rounded-md">
    //                 <Link to={`/productDetails/${product._id}`}>
    //                   <button class="p-1 btn w-full border-none rounded-md bg-linear-to-b from-gray-600 to-gray-500 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
    //                     <div class=" rounded-sm px-3 py-2">
    //                       <div class="flex gap-2 items-center">
    //                         <span class="font-semibold text-white">
    //                           View Details
    //                         </span>
    //                       </div>
    //                     </div>
    //                   </button>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="text-center">
    //     <Link to="/all-products">
    //       <button className="btn hover:bg-primary/50 border border-primary px-8 my-6 bg-none text-center">
    //         View All
    //       </button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default OurProducts;
