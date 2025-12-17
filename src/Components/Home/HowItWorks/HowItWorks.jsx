import React from "react";
import {
  FaCheckCircle,
  FaClipboardList,
  FaIndustry,
  FaTruck,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Order Placement",
      description:
        "Buyer places garment orders with product details, quantity, delivery date & specifications.",
      icon: <FaClipboardList />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 2,
      title: "Production Process",
      description:
        "Factory starts cutting, sewing & finishing based on approved samples and timeline.",
      icon: <FaIndustry />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "Quality Control",
      description:
        "QC team inspects garments to ensure quality, size accuracy & defect-free production.",
      icon: <FaCheckCircle />,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 4,
      title: "Delivery & Tracking",
      description:
        "Finished garments are packed, shipped and tracked until successful delivery.",
      icon: <FaTruck />,
      color: "from-rose-500 to-pink-500",
    },
  ];
  return (
    <div>
      <section className="py-20 bg-linear-to-br from-base-200 via-base-100 to-base-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              How It Works
            </h2>
            <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
              Step-by-step workflow of our Garments Order & Production Tracker
              System
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative rounded-2xl p-6 bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Gradient Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl bg-linear-to-r ${step.color} mb-5 group-hover:scale-110 transition`}>
                  {step.icon}
                </div>

                {/* Step Number */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-base-300 opacity-40">
                  {step.id}
                </span>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-base-content/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
