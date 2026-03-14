import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-primary text-primary-content py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
        <p className="mb-8 max-w-lg mx-auto">
          Subscribe to our newsletter for exclusive discounts and early access
          to new arrivals.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="email@example.com"
            className="input input-bordered text-black w-full"
          />
          <button className="btn btn-neutral">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
