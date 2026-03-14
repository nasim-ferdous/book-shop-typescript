import React from "react";

const Categories = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Genre</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-32 bg-blue-500 rounded-box flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:scale-105 transition-transform">
            Fiction
          </div>
          <div className="h-32 bg-green-500 rounded-box flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:scale-105 transition-transform">
            Science
          </div>
          <div className="h-32 bg-orange-500 rounded-box flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:scale-105 transition-transform">
            History
          </div>
          <div className="h-32 bg-purple-500 rounded-box flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:scale-105 transition-transform">
            Technology
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
