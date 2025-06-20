// features/JobProvider/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import JobSeekerSidebar from "../JobSeeker/components/JobSeekerSidebar";
const JobSeekerLayout = () => {
  return (
    <div style={{ display: "flex" }}>
     <JobSeekerSidebar />
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default JobSeekerLayout;
