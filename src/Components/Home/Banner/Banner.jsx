import React from "react";
import banner from "../../../assets/view-from-flat-lay-woman-style-accessories-red-knitted-sweater-checkered-flannel-shirt-denim-jeans-hat-autumn-fashion-trend-vintage-photo-camera-traveler-outfit.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        className="w-full h-[280px] md:h-[360px] lg:h-[450px] object-cover"
        src={banner}
        alt=""
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4 mt-8">
        <div className="max-w-xl mx-auto text-center text-black">
          <p className="w-8/12 mx-auto text-[10px] md:text-sm font-semibold">
            Fashion is part of the daily air and it changes all the time, with
            all the events. You can even see the approaching of a revolution in
            clothes. You can see and feel everything in clothes.
          </p>
          <div className="hidden md:block">
            <div className="flex justify-center gap-4 mt-4 md:">
              <Link to="all-products">
                <button className="btn mr-3 bg-primary/50 border-none">
                  View Products
                </button>
              </Link>
              <Link to="all-products">
                <button className="btn bg-primary/50 border-none">
                  Book Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
