import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const AllProductsHome = () => {
  const axiosSecure = useAxiosSecure();
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const limit = 6;

  const {
    data: products = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/all-products?limit=${limit}&skip=${currentPage * limit}`
      );
      const totalProducts = res.data.totalProducts;
      setTotalProducts(totalProducts);

      const page = Math.ceil(totalProducts / limit);
      setTotalPage(page);
      return res.data.result;
    },
  });

  const filteredProducts = products.filter((product) => {
    const matchedCategory =
      category === "All" || product?.category === category;
    const searchedResult =
      search === "" ||
      product?.name.toLowerCase().includes(search.toLowerCase());

    return searchedResult && matchedCategory;
  });

  const sortedProducts = [...filteredProducts];
  if (sort === "Higher - Lower") {
    sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }
  if (sort === "Lower - Higher") {
    sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
  }

  // if (!isLoading && filteredProducts.length === 0) {
  //   return <h2 className="text-center pt-40 min-h-screen">No Data Found</h2>;
  // }

  if (isLoading || isFetching) {
    return (
      <div className="max-w-11/12 mx-auto pt-5 p-6 mb-10 animate-pulse">
        {/* Total Products Count Skeleton */}
        <div className="flex justify-center pt-14 pb-4">
          <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="max-w-md mx-auto mb-8">
          <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-full shadow-md"></div>
        </div>

        {/* Product Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mt-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-slate-100 dark:bg-slate-800/50 flex flex-col items-center p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              {/* Image Skeleton */}
              <div className="w-full flex justify-center">
                <div className="h-[300px] w-full max-w-[250px] bg-base-100 rounded-xl"></div>
              </div>

              {/* Content Skeleton */}
              <div className="text-left w-full mt-4 space-y-3">
                {/* Name */}
                <div className="h-6 w-3/4 bg-base-100 rounded"></div>

                {/* Category */}
                <div className="h-5 w-1/2 bg-base-100 rounded"></div>

                {/* Price */}
                <div className="h-5 w-1/3 bg-base-100 rounded"></div>

                {/* Quantity */}
                <div className="h-5 w-2/3 bg-base-100 rounded"></div>

                {/* Sizes Skeleton */}
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="h-8 w-10 bg-base-100 rounded"></div>
                  ))}
                </div>

                {/* View Details Button Skeleton */}
                <div className="h-12 w-full bg-base-100 rounded-lg mt-5"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center flex-wrap gap-3 mt-16">
          <div className="h-10 w-20 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
          {[1, 2, 3].map((p) => (
            <div
              key={p}
              className="h-10 w-10 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
          ))}
          <div className="h-10 w-20 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-11/12 mx-auto pt-5 p-6 mb-10">
      <h2 className="text-xl font-bold text-center pt-14">All Products</h2>
      <div>
        <div className="flex flex-col md:flex-row px-1 justify-between mx-auto max-w-6xl pt-5">
          <div className="w-50">
            <h1 className="pb-1">Search Product: </h1>
            <fieldset className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
              />
            </fieldset>
          </div>
          <div className="flex flex-row gap-3 py-2">
            {/* Category */}
            <div className="w-50">
              <h1>Category: </h1>
              <fieldset className="fieldset w-full">
                <select
                  defaultValue={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select w-full">
                  <option>All</option>
                  <option>Jacket</option>
                  <option>Shirt</option>
                  <option>Pant</option>
                  <option>Accessories</option>
                </select>
              </fieldset>
            </div>
            {/* Status */}
            {/* <div className="w-40">
              <h1>Status: </h1>
              <fieldset className="fieldset">
                <select
                  defaultValue={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="select">
                  <option>All</option>
                  <option>ongoing</option>
                  <option>ended</option>
                </select>
              </fieldset>
            </div> */}
            {/* Sort */}
            <div className="w-40">
              <h1>Sort By Amount: </h1>
              <fieldset className="fieldset">
                <select
                  onChange={(e) => setSort(e.target.value)}
                  className="select">
                  <option>None</option>
                  <option>Higher - Lower</option>
                  <option>Lower - Higher</option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mt-5 min-h-screen">
        {sortedProducts.length === 0 ? (
          <div className="text-center col-span-full mt-16">
            <h2 className="text-2xl font-bold text-gray-500">No Data Found</h2>
          </div>
        ) : (
          sortedProducts.map((product) => (
            <div
              key={product._id}
              className="bg-primary/20 flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer">
              <div className="flex justify-center w-full">
                <figure>
                  <img
                    src={product.image}
                    alt="Jacket"
                    className=" h-[300px] rounded-xl"
                  />
                </figure>
              </div>

              <div className="text-left w-full mt-4">
                <h2 className="my-2">
                  {/* <span className="text-[10px] text-gray-800">Name: </span> */}
                  <span className="text-xl font-bold">{product.name}</span>
                </h2>
                <h2 className="my-2">
                  <span className="text-gray-600">Category: </span>{" "}
                  <span className="font-bold text-[18px]">
                    {product.category}
                  </span>
                </h2>
                <h2 className="my-1">
                  <span className="text-gray-600">Price: </span>
                  <span className="font-bold text-[16px]">
                    {" "}
                    {product.price}
                  </span>
                </h2>
                <h2 className="my-1">
                  <span className="text-gray-600">Available Quantity: </span>
                  <span className="font-bold text-[16px]">
                    {" "}
                    {product.available_quantity}
                  </span>
                </h2>
                <div className="card-actions mt-2">
                  <button className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black/30">
                    L
                  </button>
                  <button className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black/30">
                    M
                  </button>
                  <button className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black/30">
                    XL
                  </button>
                  <button className="px-3 py-1 border border-[#dfdfdf] text-sm hover:border-black/30">
                    XXL
                  </button>
                </div>
                <div>
                  <Link
                    to={`/productDetails/${product._id}`}
                    className="btn bg-primary/70 hover:bg-primary w-full mt-5 text-black">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center flex-wrap gap-3 mt-16">
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="btn">
            Prev
          </button>
        )}

        {[...Array(totalPage).keys()].map((i) => (
          <div className="join">
            <button
              onClick={() => setCurrentPage(i)}
              className={`btn btn-square ${
                i === currentPage && "btn-outline"
              } btn-primary rounded-md text-black`}>
              {" "}
              {i + 1}
            </button>
          </div>
        ))}
        {currentPage < totalPage - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProductsHome;
