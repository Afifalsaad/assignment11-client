import React from "react";
import { FaChartLine, FaClock, FaHandshake, FaIndustry, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      desc: "Track every production stage in real-time and ensure guaranteed on-time shipment.",
    },
    {
      icon: <FaIndustry />,
      title: "Verified Factories",
      desc: "All factories are audited and verified to meet international compliance standards.",
    },
    {
      icon: <FaChartLine />,
      title: "Live Production Tracking",
      desc: "Monitor cutting, sewing, QC, and packing progress from a single dashboard.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Transparent",
      desc: "Role-based access, secure data handling, and complete order transparency.",
    },
    {
      icon: <FaHandshake />,
      title: "Buyer-Factory Collaboration",
      desc: "Direct communication reduces delays and improves production efficiency.",
    },
  ];
  return (
    <div className="pt-10">
      <section className="py-20 bg-linear-to-br from-base-100 to-base-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Why Choose Us
            </h2>
            <p className="max-w-2xl mx-auto text-base-content/70">
              A smart garments order & production tracking solution designed
              exclusively for buyers.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="card bg-base-100  shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="card-body">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-content text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="card-title text-xl">{item.title}</h3>
                  <p className="text-sm text-base-content/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
