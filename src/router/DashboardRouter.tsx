// routes/DashboardRouter.tsx
import { Navigate } from "react-router-dom";
import JobProviderDashboard from "../features/JobProvider/pages/JobProviderDashboard";
import JobSeekerDashboard from "../features/JobSeeker/pages/JobSeekerDashboard";

const DashboardRouter = () => {
  const role = localStorage.getItem("userRole");

  if (role === "jobprovider") return <JobProviderDashboard />;
  if (role === "jobseeker") return <JobSeekerDashboard />;

  // fallback: if no role set, go back to home
  return <Navigate to="/" />;
};

export default DashboardRouter;
