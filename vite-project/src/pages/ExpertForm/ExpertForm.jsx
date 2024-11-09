import React from "react";

const ExpertForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-white">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Create Expert
        </h2>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            />
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label htmlFor="experience" className="block mb-2">
              Experience (years):
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            />
          </div>

          {/* Specialization */}
          <div className="mb-4">
            <label htmlFor="specialization" className="block mb-2">
              Specialization:
            </label>
            <select
              id="specialization"
              name="specialization"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            >
              <option value="content-strategy">Content Strategy</option>
              <option value="social-media-growth">Social Media Growth</option>
              <option value="personal-branding">Personal Branding</option>
              <option value="monetization">Monetization</option>
              <option value="platform-algorithms">Platform Algorithms</option>
            </select>
          </div>

          {/* Platform Expertise */}
          <div className="mb-4">
            <label htmlFor="platform" className="block mb-2">
              Platform Expertise:
            </label>
            <input
              type="text"
              id="platform"
              name="platform"
              placeholder="e.g., YouTube, Instagram, TikTok"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            />
          </div>

          {/* Consultation Rate */}
          <div className="mb-4">
            <label htmlFor="rate" className="block mb-2">
              Consultation Rate (per hour):
            </label>
            <input
              type="number"
              id="rate"
              name="rate"
              placeholder="Enter rate in USD"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            />
          </div>

          {/* Availability */}
          <div className="mb-6">
            <label htmlFor="availability" className="block mb-2">
              Availability:
            </label>
            <select
              id="availability"
              name="availability"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white"
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpertForm;
