// components/Navbar.tsx
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens or user session info
    localStorage.removeItem("userRole");
    navigate("/"); // Redirect to root
  };

  return (
    <nav className="h-14 bg-background border-b border-gray-300 px-6 flex items-center justify-between">
  <div className="text-lg font-semibold text-gray-800">Welcome, Yousuf</div>

  <div className="flex justify-end">
    <button
      onClick={handleLogout}
      className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
    >
      Logout
    </button>
  </div>
</nav>
  );
};

export default Navbar;
