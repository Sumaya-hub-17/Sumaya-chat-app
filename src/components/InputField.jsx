import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({ label, id, type, placeholder, icon: Icon }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-5">
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-gray-700 text-base md:text-lg font-medium mb-2"
      >
        {label}
      </label>

      {/* Input */}
      <div className="relative">
        <Icon
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          id={id}
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className="w-full h-12 pl-12 pr-12 text-sm md:text-base placeholder:text-sm md:placeholder:text-base border border-gray-300 rounded-lg outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;