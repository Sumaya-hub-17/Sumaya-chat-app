import { useState } from "react";
import { Menu, X } from "lucide-react";
import SignupForm from "../components/SignupForm";
import WelcomeSection from "../components/WelcomeSection";

const Signup = ({ darkMode }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className={`min-h-screen md:flex ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* ================= Desktop View ================= */}
      <div className="hidden md:flex w-full">

        {/* Left Side */}
        <div
          className={`w-1/2 overflow-y-auto ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <SignupForm />
        </div>

        {/* Right Side */}
        <div className="relative w-1/2 bg-[radial-gradient(circle_at_center,#8B5CF6_0%,#6D5BEF_35%,#5547E8_65%,#3A35CC_100%)]">
          <WelcomeSection />
        </div>
      </div>

      {/* ================= Mobile View ================= */}
      <div className="md:hidden relative min-h-screen">

        {/* Background */}
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_center,#8B5CF6_0%,#6D5BEF_35%,#5547E8_65%,#3A35CC_100%)]">

          <WelcomeSection />

          <button
            onClick={() => setShowForm(true)}
            className="absolute top-6 left-6 text-white z-50"
          >
            <Menu size={34} />
          </button>

        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            showForm ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setShowForm(false)}
        />

        {/* Sliding Form */}
        <div
          className={`fixed top-0 left-0 h-full w-full sm:w-[90%] shadow-2xl transition-transform duration-300 z-50 ${
            showForm ? "translate-x-0" : "-translate-x-full"
          } ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
         {/* Sticky Header */}
<div className="sticky top-0 flex justify-end p-5 z-20 bg-black md:bg-white">
  <button
    onClick={() => setShowForm(false)}
    className="text-white md:text-black"
  >
    <X size={28} />
  </button>
</div>

          {/* Scrollable Form */}
          <div className="h-[calc(100vh-72px)] overflow-y-auto">
            <SignupForm />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;