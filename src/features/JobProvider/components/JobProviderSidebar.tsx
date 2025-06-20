import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Applications", path: "/applications" },
  { label: "AI Resume Builder", path: "/resume-builder" },
  { label: "Candidate Insights", path: "/candidate-insights" },
  { label: "Smart Filters", path: "/smart-filters" },
  { label: "Saved Candidates", path: "/saved-candidates" },
  { label: "Interview Scheduler", path: "/interview-scheduler" },
  { label: "Collaboration Hub", path: "/collaboration" },
  { label: "Reports & Analytics", path: "/analytics" },
  { label: "Settings", path: "/settings" },
];

const JobProviderSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="h-screen w-64 bg-background shadow-md flex flex-col justify-between">
      {/* Logo / Header */}
      <div className="p-6 font-bold text-xl text-neutral-800 tracking-wide">
        FreshHire
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  isActive(path)
                    ? "bg-sky-100 text-blue-500"
                    : "text-zinc-500 hover:bg-gray-200"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="text-sm text-emerald-600 px-6 py-4 border-t border-emerald-200">
        © 2025 FreshHire
      </div>
    </aside>
  );
};

export default JobProviderSidebar;
