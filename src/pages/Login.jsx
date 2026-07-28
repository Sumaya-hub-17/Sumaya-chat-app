import { useState } from "react";
import { Menu, X } from "lucide-react";
import LoginForm from "../components/LoginForm";
import WelcomeSection from "../components/WelcomeSection";

const Login = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen">

      {/* ================= Tablet + Desktop ================= */}
      <div className="hidden md:flex min-h-screen w-full">

        {/* Left Side */}
        <div className="w-1/2 bg-white overflow-y-auto">
          <LoginForm />
        </div>

        {/* Right Side */}
        <div className="relative w-1/2 bg-[radial-gradient(circle_at_center,#8B5CF6_0%,#6D5BEF_35%,#5547E8_65%,#3A35CC_100%)]">
          <WelcomeSection />
        </div>

      </div>

      {/* ================= Mobile Only ================= */}
      <div className="relative min-h-screen md:hidden overflow-hidden bg-[radial-gradient(circle_at_center,#8B5CF6_0%,#6D5BEF_35%,#5547E8_65%,#3A35CC_100%)]">

        {/* Menu Button */}
        <button
          onClick={() => setShowForm(true)}
          className="absolute top-6 left-6 z-50 text-white"
        >
          <Menu size={36} />
        </button>

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Overlay */}
        {showForm && (
          <div
            onClick={() => setShowForm(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}

        {/* Slide Login Form */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
            showForm ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-5 right-5"
          >
            <X size={30} />
          </button>

          <div className="pt-16 h-full overflow-y-auto">
            <LoginForm />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Login;