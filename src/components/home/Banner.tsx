import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Your Next Adventure Awaits</h1>
          <p className="py-6">
            Discover a world of stories, knowledge, and inspiration. From
            bestsellers to hidden gems, we have it all.
          </p>
          <button className="btn btn-primary">Browse Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
