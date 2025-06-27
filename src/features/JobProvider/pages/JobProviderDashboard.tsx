import { Briefcase, Users, FileText, TrendingUp, Loader } from "lucide-react";
import RecentActivity from "../components/RecentActivity";
import ApplicationsLineChart from "../components/ApplicationsLineChart";
import { useNavigate } from "react-router-dom";
import { usePostJob } from "../hooks/usePostJob";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";
import PostJobModal from "../components/PostJobModal";

const stats = [
  {
    title: "Total Applications",
    value: "1,200",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Candidates Hired",
    value: "320",
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Open Positions",
    value: "18",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Weekly Growth",
    value: "12%",
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
  },
];

const data = [
  { name: "Week 1", applications: 100 },
  { name: "Week 2", applications: 300 },
  { name: "Week 3", applications: 250 },
  { name: "Week 4", applications: 400 },
];

const reminders = [
  {
    time: "10:00 AM",
    title: "Interview with John Doe",
    status: "Upcoming",
  },
  {
    time: "12:30 PM",
    title: "Team Hiring Sync",
    status: "In Progress",
  },
  {
    time: "3:00 PM",
    title: "Call with Tech Lead",
    status: "Upcoming",
  },
];
const JobProviderDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { mutate: postJob, isPending } = usePostJob();


  const handleJobSubmit = (formData: any) => {
  const jobData = {
    ...formData,
    jobProviderId: 'fb60f6db-fcc2-4dc8-aaa8-780f58ed32ed',
    companyId: 'd2136d78-e8af-451a-8fac-924137ab11bc',
  };

  postJob(jobData, {
    onSuccess: () => {
      alert('Job posted successfully!');
      setModalOpen(false)
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

  return (
    <>
      <div className="p-6 bg-white rounded-2xl mt-10">
        <div className="mb-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center space-x-2 bg-blue-300 text-slate-800 font-medium px-4 py-2 rounded-md shadow transition duration-300 cursor-pointer hover:bg-blue-400"
            >
              <span>Post New Job</span>
            </button>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border-1 border-gray-300 p-4 flex items-center gap-4"
            >
              <div className="p-2 rounded-lg">{stat.icon}</div>
              <div>
                <p className="text-sm text-zinc-500 font-medium">
                  {stat.title}
                </p>
                <p className="text-xl font-semibold text-zinc-500">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <RecentActivity />
          <div className="w-1/2 bg-white rounded-xl border border-gray-300 p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Application Trend
            </h2>
            <ResponsiveContainer width="100%" height={190}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {isModalOpen && (
          <PostJobModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleJobSubmit}
          />
        )}
        {isPending && <Loader className="animate-spin text-primary" size={24} />}
      </div>
    </>
  );
};

export default JobProviderDashboard;
