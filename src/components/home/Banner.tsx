import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[70vh] bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
      {/* Dark overlay for better text readability */}
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl p-8 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 shadow-2xl">
          <h1 className="mb-5 text-5xl font-extrabold text-white tracking-tight">
            Your Next Adventure Awaits
          </h1>
          <p className="mb-8 text-lg text-gray-200">
            Discover a world of stories, knowledge, and inspiration. From
            bestsellers to hidden gems, we have it all.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={"/all-books"} className="btn btn-primary px-8">
              Browse Collection
            </Link>
            {/* <button className="btn btn-outline btn-neutral text-white px-8">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
