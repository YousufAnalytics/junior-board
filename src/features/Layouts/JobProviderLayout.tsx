// features/JobProvider/layout/MainLayout.tsx
import JobProviderSidebar from "../JobProvider/components/JobProviderSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const JobProviderLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <JobProviderSidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default JobProviderLayout;
