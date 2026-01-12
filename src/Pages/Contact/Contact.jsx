import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-base-100 text-secondary">
      {/* Header Section */}
      <section className="bg-base-100 pt-25 pb-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg text-slate-500">
            আমাদের সিস্টেম নিয়ে কোনো প্রশ্ন আছে বা ডেমো দেখতে চান? আমাদের মেসেজ
            দিন।
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information (Left Side) */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-secondary mb-8">
                আমাদের টিম ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium uppercase tracking-wider">
                    Call Us
                  </p>
                  <p className="text-lg font-semibold text-secondary">
                    +880 1234 567 890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium uppercase tracking-wider">
                    Email Us
                  </p>
                  <p className="text-lg font-semibold text-secondary">
                    support@garmentstracker.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-secondary">
                    Uttara Sector-7, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium uppercase tracking-wider">
                    Working Hours
                  </p>
                  <p className="text-lg font-semibold text-secondary">
                    Sat - Thu: 9AM - 6PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-2 bg-base-100 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Describe your requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  required></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-max px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transition-all active:scale-95">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map or FAQ CTA */}
      <section className="py-16 bg-slate-900 mx-6 mb-12 rounded-3xl overflow-hidden text-center">
        <div className="max-w-2xl mx-auto px-6">
          <MessageSquare className="mx-auto text-blue-400 mb-6" size={48} />
          <h2 className="text-2xl font-bold text-white mb-4">
            Prefer a direct chat?
          </h2>
          <p className="text-slate-400 mb-8">
            আমাদের সাপোর্ট টিম আপনার যেকোনো কারিগরি সমস্যার সমাধানে প্রস্তুত।
            সরাসরি হোয়াটসঅ্যাপ বা ইমেইল করুন।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition">
              Chat on WhatsApp
            </button>
            <button className="px-6 py-3 border border-slate-700 text-white font-bold rounded-full hover:bg-slate-800 transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
