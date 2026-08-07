import { useState } from "react";

const ToggleSwitch = ({ defaultOn = true }) => {
  const [isOn, setIsOn] = useState(defaultOn);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`
        w-14 h-8
        flex items-center
        rounded-full
        p-1
        shrink-0
        transition-all
        duration-300
        focus:outline-none
        ${
          isOn
            ? "bg-purple-600"
            : "bg-gray-500"
        }
      `}
    >
      <div
        className={`
          w-6 h-6
          bg-white
          rounded-full
          shadow-sm
          transition-transform
          duration-300
          ${
            isOn
              ? "translate-x-6"
              : "translate-x-0"
          }
        `}
      />
    </button>
  );
};

export default ToggleSwitch;