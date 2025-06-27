// components/JobRecommendations.tsx
import React from "react";

const recommendations = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    postedAgo: "2 days ago",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataWave",
    location: "Bangalore, India",
    postedAgo: "1 day ago",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "Innova",
    location: "Hyderabad, India",
    postedAgo: "4 days ago",
  },
  // ...more mock items
];

const JobRecommendations = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recommended for You</h2>
        <a href="/jobs" className="text-sm text-blue-600 hover:underline">View All</a>
      </div>
      <div className="space-y-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {recommendations.map((job) => (
          <div
            key={job.id}
            className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition"
          >
            <h3 className="text-md font-medium text-gray-900">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company} · {job.location}</p>
            <p className="text-xs text-gray-400 mt-1">{job.postedAgo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
