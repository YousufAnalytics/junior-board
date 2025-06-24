import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard,ClipboardList } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon :  <LayoutDashboard /> },
  { label: "My Jobs", path: "/applications", icon : <ClipboardList /> },
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
          {navItems.map(({ label, path,icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  isActive(path)
                    ? "bg-sky-100 text-blue-500"
                    : "text-zinc-500 hover:bg-gray-200"
                }`}
              >
                <span className="text-lg">{icon}</span>
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
