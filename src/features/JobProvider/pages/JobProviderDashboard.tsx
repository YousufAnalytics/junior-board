
import { Briefcase, Users, FileText, TrendingUp } from "lucide-react";
import RecentActivity from "../components/RecentActivity";


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

const JobProviderDashboard = () => {
  return (
    <div className="p-6 bg-white rounded-2xl">
      <h1 className="text-2xl font-bold text-neutral-800 mb-6">
        Welcome, Yousuf!
      </h1>

      <div className="mb-6">
        <div className="flex justify-end mb-4">
          <button className="flex items-center space-x-2 bg-blue-300 hover:bg-emerald-600 text-slate-800 font-medium px-4 py-2 rounded-md shadow transition duration-300">
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
      <div>
        <RecentActivity />
      </div>
    </div>
  );
};

export default JobProviderDashboard;
