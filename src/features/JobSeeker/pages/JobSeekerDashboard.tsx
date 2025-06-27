import React from "react";
import JobRecommendations from "../components/JobRecommendations";

const mockRecommendedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Inc.",
    location: "Remote",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CodeCraft",
    location: "Bangalore",
  },
];

const mockApplications = [
  {
    id: 1,
    jobTitle: "UI/UX Designer",
    company: "Designify",
    status: "In Review",
  },
  {
    id: 2,
    jobTitle: "Product Manager",
    company: "BuildHub",
    status: "Interview Scheduled",
  },
];

export default function JobSeekerDashboard() {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Welcome back, Yousuf!</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Applications Submitted</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Interviews Scheduled</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold">Jobs Saved</h2>
          <p className="text-3xl font-bold mt-2">7</p>
        </div>
      </div>

      <JobRecommendations />

      {/* Recent Applications */}
      
    </div>
  );
}
