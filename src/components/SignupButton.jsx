import { UserPlus } from "lucide-react";

const SignupButton = () => {
  return (
    <button
      className="
        w-full
        flex items-center justify-center gap-3
        py-4
        rounded-xl
        bg-linear-to-r from-indigo-600 to-purple-600
        text-white text-lg md:text-xl font-semibold
        hover:scale-[1.02]
        transition-all duration-300
        shadow-lg
      "
    >
      <UserPlus size={22} />
      <span>Sign Up</span>
    </button>
  );
};

export default SignupButton;