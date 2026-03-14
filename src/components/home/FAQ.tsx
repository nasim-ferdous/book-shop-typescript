import React from "react";

const FAQ = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How long does shipping take?
            </div>
            <div className="collapse-content">
              <p>
                Orders within the country usually arrive within 2-3 business
                days. International shipping takes 7-10 days.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I return a book?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer a 14-day return policy for books in their original
                condition.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Do you offer gift wrapping?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! You can select the gift wrapping option at the
                checkout page for a small fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
