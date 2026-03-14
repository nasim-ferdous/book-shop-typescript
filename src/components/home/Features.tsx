import React from "react";

const Features = () => {
  return (
    <section className="bg-base-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Shop with Confidence</h2>
          <p className="text-gray-500">
            We prioritize your experience from browsing to unboxing.
          </p>
        </div>

        {/* Grid Content - Removed border-b from parent section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4 rounded-xl hover:bg-base-200 transition-colors">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold text-lg">Fast Delivery</h3>
            <p className="text-sm opacity-70">Worldwide shipping in 3-5 days</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-base-200 transition-colors">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-bold text-lg">Secure Payment</h3>
            <p className="text-sm opacity-70">100% encrypted transactions</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-base-200 transition-colors">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="font-bold text-lg">Quality Guarantee</h3>
            <p className="text-sm opacity-70">Hand-picked premium editions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
