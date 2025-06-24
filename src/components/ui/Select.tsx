import React from "react";
import { ChevronDown } from "lucide-react"; // Optional for a custom dropdown icon

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ value, onChange, options, placeholder }) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-gray-300 shadow-sm bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-gray-400" size={18} />
    </div>
  );
};

export default Select;
