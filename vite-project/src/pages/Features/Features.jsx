import React from "react";

const Features = () => {
  return (
    <div className="bg-black">
      <p className="text-3xl text-red-300 font-semibold p-3 text-center">
        Why Choose Us?
      </p>
      <div className="flex justify-evenly gap-6 p-6 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Monetization & Revenue Diversification
            </h3>
            <p className="text-gray-600">
              Unlock multiple income streams. Get strategies to monetize and
              expand your revenue in the digital space.
            </p>
          </div>

          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Algorithm Mastery
            </h3>
            <p className="text-gray-600">
              Beat the algorithm. Learn platform secrets to boost visibility and
              get your content trending.
            </p>
          </div>

          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Engagement Metrics Mastery
            </h3>
            <p className="text-gray-600">
              Increase your impact. Boost views, likes, and shares to build an
              engaged and loyal community.
            </p>
          </div>

          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Personal Branding
            </h3>
            <p className="text-gray-600">
              Stand out by being real. Build a brand that resonates and builds
              trust with your audience.
            </p>
          </div>

          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Ideation to Creation
            </h3>
            <p className="text-gray-600">
              From idea to impact. Discover your unique niche and receive
              step-by-step guidance to craft captivating content.
            </p>
          </div>

          <div className="p-3 border-2 border-gray-300 rounded-lg shadow-2xl bg-white backdrop-blur-lg w-full h-60 hover:bg-gray-100 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Burnout Prevention
            </h3>
            <p className="text-gray-600">
              Stay inspired, not exhausted. Learn techniques to manage stress
              and avoid burnout for sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
