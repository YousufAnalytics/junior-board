import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useGetJobs } from "../hooks/useGetJob";



// const mockJobs: Job[] = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     department: "Engineering",
//     location: "Remote",
//     applications: [
//       { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Pending" },
//       { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Interview Scheduled" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Backend Developer",
//     department: "Engineering",
//     location: "Bangalore",
//     applications: [
//       { id: 1, name: "Charlie Brown", email: "charlie@example.com", status: "Rejected" },
//     ],
//   },
//   {
//     id: 3,
//     title: "ML Developer",
//     department: "Engineering",
//     location: "Pune",
//     applications: [
//       { id: 1, name: "Shenkar", email: "shenkar@example.com", status: "Accepted" },
//     ],
//   },
// ];

const Jobs: React.FC = () => {
  const [openJobId, setOpenJobId] = useState<number | null>(null);

  const { data: rawJobs } = useGetJobs();

  const jobs = React.useMemo(() => {
    return rawJobs?.data ?? [];
  }, [rawJobs]);

  console.log(jobs)

  const toggleAccordion = (id: number) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (

    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Job Postings</h2>

      <div className="space-y-4">
        {jobs && jobs.map((job:any) => (
          <div
            key={job.id}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(job.id)}
              className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-medium text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">
                  {job.department} • {job.location}
                </p>
              </div>
              <span className="text-gray-400 text-xl">
                {openJobId === job.id ? <ChevronDown className="w-6 h-6 text-sky-400"/> : <ChevronRight className="w-6 h-6 text-sky-400"/>}
              </span>
            </button>

            {openJobId === job.id && (
              <div className="bg-gray-50 px-6 py-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-700">Applications</h4>
                <div>No Applications yet</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
