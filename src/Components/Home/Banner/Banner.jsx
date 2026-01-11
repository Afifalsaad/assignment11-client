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
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    arrows: false,
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
  );
};

export default Banner;
