// features/JobProvider/layout/MainLayout.tsx
import JobProviderSidebar from "../JobProvider/components/JobProviderSidebar";
import { Outlet } from "react-router-dom";

const JobProviderLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <JobProviderSidebar />
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default JobProviderLayout;
