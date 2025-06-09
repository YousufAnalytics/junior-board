// components/RoleToggle.tsx
import React from "react";

type Role = "candidate" | "recruiter";

interface RoleToggleProps {
  value: Role;
  onChange: (role: Role) => void;
  options?: Role[]; // Optional to support more roles in future
}

const RoleToggle: React.FC<RoleToggleProps> = ({
  value,
  onChange,
  options = ["candidate", "recruiter"],
}) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex bg-gray-100 rounded-full p-1">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-4 py-2 rounded-full font-medium transition cursor-pointer ${
              value === option
                ? "bg-emerald-500 text-white shadow"
                : "text-gray-700 hover:text-emerald-500"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleToggle;
