import React from "react";
import { MoonLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center">
        <MoonLoader color="#4F46E5" size={200} />

        <p className="text-gray-300 text-lg mt-4 animate-pulse">Loading Dashboard...</p>
      </div>
    </div>
  );
};

export default Loader;
