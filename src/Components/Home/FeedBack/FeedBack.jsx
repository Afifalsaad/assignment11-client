import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import customer from "../../../assets/user.png";

const FeedBack = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Rahim Textile Ltd",
      role: "Buyer",
      message:
        "This system made order tracking extremely easy. Production status is always clear and updated.",
      rating: 5,
      image: customer,
    },
    {
      id: 2,
      name: "Fashion Wear House",
      role: "Factory Manager",
      message:
        "Managing production stages and deadlines has never been this smooth. Highly recommended!",
      rating: 4,
      image: customer ,
    },
    {
      id: 3,
      name: "Global Apparel",
      role: "Exporter",
      message:
        "Excellent platform for tracking bulk orders and ensuring on-time delivery.",
      rating: 5,
      image: customer ,
    },
  ];
  return (
    <div>
      <section className="py-20 bg-linear-to-br from-primary/10 via-base-200 to-secondary/10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-base-content/70">
              Real feedback from buyers, factories & exporters
            </p>
          </div>

          {/* Carousel */}
          <div className="carousel w-full">
            {feedbacks.map((item, index) => (
              <div
                key={item.id}
                id={`slide${index}`}
                className="carousel-item w-full justify-center">
                <div className="card w-full md:w-3/4 bg-base-100 shadow-xl rounded-2xl p-8 relative">
                  <FaQuoteLeft className="text-4xl text-primary absolute top-4 left-6" />

                  {/* Content */}
                  <p className="text-base-content/80 text-lg mb-6 p-6">
                    “{item.message}”
                  </p>

                  {/* Rating */}
                  <div className="flex mb-4 px-8">
                    {Array.from({ length: item.rating }).map(( i) => (
                      <FaStar key={i} className="text-warning mr-1" />
                    ))}
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-4 px-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 p-1 rounded-full border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-base-content/60">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${
                        index === 0 ? feedbacks.length - 1 : index - 1
                      }`}
                      className="btn btn-circle btn-sm">
                      ❮
                    </a>
                    <a
                      href={`#slide${(index + 1) % feedbacks.length}`}
                      className="btn btn-circle btn-sm">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedBack;
