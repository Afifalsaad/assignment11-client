import React from "react";
import img1 from "../../../assets/Beige and Brown  Minimal Modern New Arrival Fashion Banner.jpg";
import { Link } from "react-router";
import img2 from "../../../assets/Black & White Minimalist Thrift Shop Sale Discount Promotion Outdoor  Banner.jpg";
import img3 from "../../../assets/Black and White Modern Grunge Plastic Texture Streetwear Landscape Banner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container pt-16">
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Banner"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Banner"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Banner"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>
      </Slider>
    </div>

    // <div className="relative w-full overflow-hidden">
    //   <img
    //     className="w-full h-[280px] md:h-[360px] lg:h-[450px] object-cover"
    //     src={banner}
    //     alt=""
    //   />

    //   <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4 mt-8">
    //     <div className="max-w-xl mx-auto text-center text-black">
    //       <p className="w-8/12 mx-auto text-[10px] md:text-sm font-semibold">
    //         Fashion is part of the daily air and it changes all the time, with
    //         all the events. You can even see the approaching of a revolution in
    //         clothes. You can see and feel everything in clothes.
    //       </p>
    //       <div className="hidden md:block">
    //         <div className="flex justify-center gap-4 mt-4 md:">
    //           <Link to="all-products">
    //             <button className="btn mr-3 bg-primary/50 border-none">
    //               View Products
    //             </button>
    //           </Link>
    //           <Link to="all-products">
    //             <button className="btn bg-primary/50 border-none">
    //               Book Products
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
