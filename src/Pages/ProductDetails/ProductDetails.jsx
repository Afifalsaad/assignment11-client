import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";

const ProductDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const { role } = useRole();

  const axiosSecure = useAxiosSecure();

  const { data: product = [], isLoading } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/productDetails/${id}`);
      return res.data;
    },
  });

  const { data: currentUser = [] } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/status?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Main Skeleton Card */}
          <div className="bg-base-100 rounded-4xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* --- Left Side: Media Gallery Skeleton --- */}
              <div className="lg:col-span-5 bg-slate-100/50 dark:bg-slate-800/30 p-6">
                <div className="sticky top-6">
                  {/* Big Image Placeholder */}
                  <div className="aspect-square bg-slate-200 dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600"></div>

                  {/* Thumbnail Placeholders */}
                  <div className="flex gap-4 mt-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-20 h-20 shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- Right Side: Info Skeleton --- */}
              <div className="lg:col-span-7 p-8 md:p-12">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-full">
                    {/* Category Badge Placeholder */}
                    <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded-full mb-4"></div>
                    {/* Title Placeholder */}
                    <div className="h-10 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
                  </div>
                  {/* Price Placeholder */}
                  <div className="w-24 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
                </div>

                {/* Description Section Skeleton */}
                <div className="mb-10 space-y-3">
                  <div className="h-6 w-40 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
                  <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                  <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                  <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>

                {/* Key Specs Grid Skeleton */}
                <div className="mb-10">
                  <div className="h-6 w-40 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 h-20 bg-slate-50 dark:bg-slate-800/50"></div>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 h-20 bg-slate-50 dark:bg-slate-800/50"></div>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 h-24 sm:col-span-2 bg-slate-50 dark:bg-slate-800/50"></div>
                  </div>
                </div>

                {/* Button Placeholder */}
                <div className="h-16 w-full bg-slate-200 dark:bg-slate-700 rounded-2xl mt-auto"></div>
              </div>
            </div>

            {/* Video Section Skeleton */}
            <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-8 md:p-16">
              <div className="max-w-4xl mx-auto">
                <div className="h-8 w-64 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-10"></div>
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-[2.5rem] border-8 border-white dark:border-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-18 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-base-100 text-secondary rounded-4xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 bg-base-100 p-6">
              <div className="sticky top-6">
                <div className="aspect-square bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-20 h-20 shrink-0 rounded-lg border-2 border-primary bg-white dark:bg-slate-800 cursor-pointer overflow-hidden">
                      <img
                        src={product.image}
                        className="w-full h-full object-cover opacity-60 hover:opacity-100 transition"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-4xl font-bold text-secondary">
                    {product.name}
                  </h1>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    ৳{product.price}
                  </p>
                  <p className="text-sm text-slate-400 font-medium">
                    VAT Inclusive
                  </p>
                </div>
              </div>

              <section className="mb-10">
                <h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary rounded-full"></span>
                  Description / Overview
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  {product.description}
                </p>
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary rounded-full"></span>
                  Key Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-base-100 border border-slate-100 dark:border-slate-700">
                    <p className="text-xs text-secondary uppercase font-bold tracking-tighter">
                      Available Stock
                    </p>
                    <p className="text-lg font-bold text-secondary">
                      {product.available_quantity} Units
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-base-100 border border-slate-100 dark:border-slate-700">
                    <p className="text-xs text-secondary uppercase font-bold tracking-tighter">
                      Minimum Order
                    </p>
                    <p className="text-lg font-bold text-secondary">
                      {product.minimum_order_quantity} Units
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 sm:col-span-2">
                    <p className="text-xs text-secondary uppercase font-bold tracking-tighter mb-2">
                      Payment Methods
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {product.payment_option?.split(",").map((opt, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-sm border border-slate-200 dark:border-slate-600 shadow-sm">
                          {opt.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <div className="space-y-4">
                <Link to={`/order-product/${product._id}`}>
                  <button
                    disabled={
                      role !== "Buyer" || currentUser?.status === "suspended"
                    }
                    className="w-full py-4 rounded-2xl bg-secondary text-white font-bold text-xl shadow-xl hover:bg-gray-800 transform transition-all active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Order Now
                  </button>
                </Link>
                {currentUser?.status === "suspended" && (
                  <p className="text-center text-red-500 font-bold text-sm animate-pulse">
                    Account Suspended: Ordering Disabled
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                Product Showcase & Demo
              </h2>
            </div>
            <div className="relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <video controls className="w-full h-full object-cover">
                <source src={product.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
