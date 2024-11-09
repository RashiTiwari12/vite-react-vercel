import React from "react";

// Example data
const experts = [
  {
    id: 1,
    name: "John Doe",
    intro:
      "An experienced software developer specializing in full-stack development.",
    rating: 4.5,
  },
  {
    id: 1,
    name: "John Doe",
    intro:
      "An experienced software developer specializing in full-stack development.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    intro: "Data scientist with a background in machine learning and AI.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Alex Johnson",
    intro: "Cybersecurity expert with 10+ years in the field.",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Alex Johnson",
    intro: "Cybersecurity expert with 10+ years in the field.",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Alex Johnson",
    intro: "Cybersecurity expert with 10+ years in the field.",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Alex Johnson",
    intro: "Cybersecurity expert with 10+ years in the field.",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Alex Johnson",
    intro: "Cybersecurity expert with 10+ years in the field.",
    rating: 4.2,
  },
];

const ExpertsList = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-12">
      <h1 className="text-3xl font-bold text-center mb-6">Our Experts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white p-6 rounded-lg shadow-md text-gray-800"
          >
            <h2 className="text-xl font-semibold mb-2">{expert.name}</h2>
            <p className="text-gray-600 mb-4">{expert.intro}</p>
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 font-bold">{expert.rating}</span>
              <span className="ml-1 text-sm text-gray-600">/ 5</span>
              <button className="flex bg-black p-3 gap-3 text-white  rounded-lg ">
                Make a call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertsList;
