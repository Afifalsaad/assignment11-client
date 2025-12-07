import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white/60 backdrop-blur-sm">
      <div className="relative">
        {/* Outer Ring */}
        <div className="h-20 w-20 rounded-full border-4 border-gray-300"></div>

        {/* Spinning Gradient Ring */}
        <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-4 border-t-transparent border-primary animate-spin"></div>

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-primary rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
