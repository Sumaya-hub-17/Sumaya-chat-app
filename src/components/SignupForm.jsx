import logo from "../assets/images/chat-img-1.png";
import { User, Mail, AtSign, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import InputField from "./InputField";
import SignupButton from "./SignupButton";
import SocialButton from "./SocialButton";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 md:bg-white md:text-black">

      {/* Logo */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Chat <span className="text-purple-500">App</span>
        </h1>

        <p className="text-gray-300 md:text-gray-500 text-sm">
          Connect. Chat. Share.
        </p>
      </div>


      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-bold">
          Create your account
        </h1>

        <p className="text-gray-300 md:text-gray-500 mt-2">
          Sign up to get started with ChatApp.
        </p>
      </div>


      {/* Inputs */}
      <div className="mt-8 space-y-2">

        <InputField
          label="Full Name"
          id="fullname"
          type="text"
          placeholder="Enter your Full Name"
          icon={User}
        />

        <InputField
          label="Email Address"
          id="emailaddress"
          type="email"
          placeholder="Enter your Email Address"
          icon={Mail}
        />

        <InputField
          label="Username"
          id="username"
          type="text"
          placeholder="Choose a username"
          icon={AtSign}
        />

        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder="Create a password"
          icon={Lock}
        />

        <InputField
          label="Confirm Password"
          id="confirmpassword"
          type="password"
          placeholder="Confirm password"
          icon={Lock}
        />

      </div>


      {/* Signup Button */}
      <div className="mt-8">
        <SignupButton />
      </div>


      {/* Divider */}
      <div className="flex items-center gap-3 my-8">

        <div className="flex-1 h-px bg-gray-600 md:bg-gray-300"></div>

        <p className="text-gray-300 md:text-gray-500 text-sm whitespace-nowrap">
          or sign up with
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


      {/* Login */}
      <div className="text-center mt-8">

        <span className="text-gray-300 md:text-gray-500">
          Already have an account?
        </span>

        <Link
          to="/login"
          className="ml-2 font-semibold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Login
        </Link>

      </div>


    </div>
  );
};

export default SignupForm;