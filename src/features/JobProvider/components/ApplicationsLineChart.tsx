import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "Jan", applications: 400 },
  { date: "Feb", applications: 550 },
  { date: "Mar", applications: 620 },
  { date: "Apr", applications: 480 },
  { date: "May", applications: 710 },
  { date: "Jun", applications: 690 },
];

const ApplicationsLineChart = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-300 p-6 mt-6 h-[300px] w-1/2">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Application Trend Over Time
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="applications"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationsLineChart;
