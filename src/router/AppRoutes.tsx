// src/routes/AppRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../features/Pages/Home";
import JobProviderLayout from "../features/Layouts/JobProviderLayout";
import JobSeekerLayout from "../features/Layouts/JobSeekerLayout";
import DashboardRouter from "./DashboardRouter";
import { Applications } from "../features/JobProvider/pages";

const AppRoutes = () => {
  const location = useLocation();

  // Always read role fresh from localStorage
  const role = localStorage.getItem("userRole");
  console.log("ROLE FROM LOCALSTORAGE:", role);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />

      {/* Dynamically choose layout based on role */}
      <Route
        element={role === "jobseeker" ? <JobSeekerLayout /> : <JobProviderLayout />}
      >
        <Route path="/dashboard" element={<DashboardRouter />} />
        <Route path="/applications" element={<Applications />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
