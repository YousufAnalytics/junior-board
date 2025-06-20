// pages/Home.tsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (role: "jobprovider" | "jobseeker") => {
    localStorage.setItem("userRole", role);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 p-8">
      <h1 className="text-2xl font-bold mb-8 text-emerald-700">Welcome to FreshHire</h1>
      <div className="space-x-4">
        <button
          className="bg-white text-emerald-600 border border-emerald-300 px-6 py-3 rounded-lg hover:bg-emerald-50 transition"
          onClick={() => handleClick("jobseeker")}
        >
          I'm a Job Seeker
        </button>
        <button
          className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition"
          onClick={() => handleClick("jobprovider")}
        >
          I'm a Job Provider
        </button>
      </div>
    </div>
  );
};

export default Home;
