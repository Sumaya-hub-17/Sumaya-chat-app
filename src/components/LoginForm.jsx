import logo from "../assets/images/chat-img-1.png";
import { UserPlus, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import InputField from "./InputField";
import SocialButton from "./SocialButton";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div
      className="
      min-h-screen
      bg-black md:bg-white
      text-white md:text-black
      px-6 py-8
      overflow-y-auto
      "
    >

      {/* Logo */}
      <div className="flex items-center gap-3">

        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 md:w-16 md:h-16 object-contain"
        />

        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Chat <span className="text-purple-500">App</span>
          </h1>

          <p className="text-gray-300 md:text-gray-500 text-sm">
            Connect. Chat. Share.
          </p>

        </div>

      </div>


      {/* Heading */}
      <div className="mt-10">

        <h1 className="text-2xl md:text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="text-gray-300 md:text-gray-500 mt-2">
          Login to continue chatting with your friends.
        </p>

      </div>


      {/* Inputs */}
      <div className="mt-8 space-y-3">

        <InputField
          label="Email Address"
          id="emailaddress"
          type="email"
          placeholder="Enter your Email Address"
          icon={Mail}
        />


        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder="Create a password"
          icon={Lock}
        />


        <div className="flex justify-end mt-2">

          <Link
            to="/forgot-password"
            className="text-sm text-purple-400 md:text-purple-600 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

      </div>



      {/* Login Button */}
      <div className="mt-10">

        <button
          onClick={handleLogin}
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

          <span>
            Login
          </span>

        </button>

      </div>



      {/* Divider */}
      <div className="flex items-center gap-3 my-8">

        <div className="flex-1 h-px bg-gray-600 md:bg-gray-300"></div>

        <p className="text-gray-300 md:text-gray-500 text-sm whitespace-nowrap">
          or login with
        </p>

        <div className="flex-1 h-px bg-gray-600 md:bg-gray-300"></div>

      </div>



      {/* Social Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">

        <SocialButton
          icon={<FcGoogle size={22} />}
          text="Google"
        />

        <SocialButton
          icon={<FaGithub size={22} />}
          text="GitHub"
        />

      </div>



      {/* Signup */}
      <div className="text-center mt-8">

        <span className="text-gray-300 md:text-gray-500">
          Don't have an account?
        </span>


        <Link
          to="/Signup"
          className="
          ml-2
          font-semibold
          bg-linear-to-r 
          from-blue-500 
          to-purple-600
          bg-clip-text 
          text-transparent
          "
        >
          Signup
        </Link>

      </div>


    </div>
  );
};

export default LoginForm;