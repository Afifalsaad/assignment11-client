import React from "react";
import { CheckCircle, BarChart3, Package, Truck, Target } from "lucide-react";

const About = () => {
  return (
    <div className="bg-base-100 text-secondary font-sans">
      {/* Hero Section - Gradient Background with simple layout */}
      <section className="relative bg-base-100 py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Future of Garments Tech
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-secondary leading-tight">
            Streamlining Garment <br />
            <span className="text-blue-600">Production & Orders</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A comprehensive digital ecosystem designed to track, manage, and
            optimize your garment factory operations in real-time.
          </p>
        </div>
      </section>

      {/* Who We Are - Two Column Layout */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
              alt="Industrial Factory"
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary">
              Empowering Factories with Intelligence
            </h2>
            <p className="text-lg text-secondary/50 leading-relaxed">
              <strong>Garments Order & Production Tracker</strong> is more than
              just a tool; it's a digital partner. We understand the complexity
              of garment manufacturing—from initial order to final shipment.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time data synchronization",
                "Advanced inventory forecasting",
                "Eliminate manual entry errors",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-secondary/50 font-medium">
                  <CheckCircle className="text-blue-500 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features - Card Grid with Icons */}
      <section className="py-24 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Order Tracking",
                icon: <Target />,
                desc: "Monitor order status from placement to delivery.",
              },
              {
                title: "Production",
                icon: <BarChart3 />,
                desc: "Identify bottlenecks in the sewing and finishing lines.",
              },
              {
                title: "Inventory",
                icon: <Package />,
                desc: "Live stock updates of fabrics and accessories.",
              },
              {
                title: "On-Time Delivery",
                icon: <Truck />,
                desc: "AI-driven scheduling to ensure deadlines are met.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-base-100 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Clean & Focused */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-2xl mb-8">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6 text-left inline-block">
            "To revolutionize the apparel industry by providing transparent,
            organized, and data-driven solutions that bridge the gap between
            production floors and management offices."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
