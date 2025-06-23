// features/JobProvider/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import JobSeekerSidebar from "../JobSeeker/components/JobSeekerSidebar";
import Navbar from "../../components/Navbar";
const JobSeekerLayout = () => {
  return (
    <div style={{ display: "flex" }}>
     <JobSeekerSidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default JobSeekerLayout;
