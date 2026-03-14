import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What Our Readers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-inner border p-6">
            <div className="flex gap-1 text-orange-400 mb-4">★★★★★</div>
            <p className="italic mb-4 text-gray-600">
              "The delivery was incredibly fast, and the book arrived in perfect
              condition. Will definitely buy again!"
            </p>
            <div className="font-bold">- Sarah K.</div>
          </div>
          <div className="card bg-base-100 shadow-inner border p-6">
            <div className="flex gap-1 text-orange-400 mb-4">★★★★★</div>
            <p className="italic mb-4 text-gray-600">
              "Found a rare first edition here that I couldn't find anywhere
              else. Great customer service."
            </p>
            <div className="font-bold">- James W.</div>
          </div>
          <div className="card bg-base-100 shadow-inner border p-6">
            <div className="flex gap-1 text-orange-400 mb-4">★★★★★</div>
            <p className="italic mb-4 text-gray-600">
              "Best prices for tech books. The TypeScript collection is actually
              up to date!"
            </p>
            <div className="font-bold">- Nasim F.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
