import React from "react";
import { FaGlobe, FaLock, FaUserShield } from "react-icons/fa";

const SecurityFeatures = () => {
  const securityFeatures = [
    {
      icon: <FaLock />,
      title: "Data Protection",
      desc: "All sensitive data is encrypted and securely stored following industry best practices.",
    },
    {
      icon: <FaUserShield />,
      title: "Role-Based Access Control",
      desc: "Access levels are strictly defined for buyers, factories, and admins to ensure data privacy.",
    },
    {
      icon: <FaGlobe />,
      title: "Export Compliance",
      desc: "Supports international trade compliance including documentation, audit trails, and export standards.",
    },
  ];
  return (
    <div>
      <section className="py-20 bg-linear-to-br from-base-100 to-base-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Security & Compliance
            </h2>
            <p className="max-w-2xl mx-auto text-base-content/70">
              Enterprise-grade security and compliance standards to protect your
              data and global operations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((item, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="card-body text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-linear-to-br from-[#F7E586] to-[#F2CB0A] text-primary-content text-3xl flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-base-content/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Badge */}
          <div className="mt-14 flex justify-center">
            <div className="badge badge-outline badge-primary p-4 text-sm font-semibold">
              ISO-aligned • GDPR-ready • Secure Infrastructure
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityFeatures;
