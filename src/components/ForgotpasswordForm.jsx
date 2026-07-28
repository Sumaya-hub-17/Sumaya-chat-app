import logo from "../assets/images/chat-img-1.png";
import InputField from "./InputField";
import { Mail, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";


const ForgotpasswordForm = () => {
  return (
    <div className="p-6 sm:p-8 md:p-10">
      {/* Logo + Text */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="chat app image"
          className="ml-10 w-12 h-12 md:w-16 md:h-16"
        />

        <div>
          <h1 className="text-2xl font-bold">
            Chat<span className="text-purple-500">App</span>
          </h1>

          <p className="text-gray-500 text-sm">
            Connect. Chat. Share.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="ml-10">
        <h1 className="mt-20 text-5xl">
          Forgot Password?
        </h1>

        <p className="mt-5 text-gray-500">
          Don't worry! It happens. Please enter the email <br />
          address associated with your account.
        </p>

        <h2 className="mt-16 text-3xl">
          Email Address
        </h2>

        <div className="mt-8 w-full max-w-96">
          <InputField
            type="email"
            placeholder="Enter your email"
            icon={Mail}
          />
        </div>

        <div className="mt-10 w-full max-w-96">
          <button
            className="
              w-full
              flex items-center justify-center gap-3
              py-3
              border border-gray-300
              rounded-lg
              hover:bg-gray-50
              transition-all duration-300
              cursor-pointer
              bg-[linear-gradient(90deg,_#8B4CF6_0%,_#4B46F5_100%)]
            "
          >
            <span className="text-base md:text-lg font-medium text-white">
              Send Reset Link
            </span>
            
            <Send size={20} className=" text-white" />
          </button>

          <div className="flex items-center w-full max-w-96 my-8">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="mx-4 text-gray-500">or back to</span>

            <div className="flex-1 h-px bg-gray-300"></div>

          </div>

          <Link 
          to="/login"
          className=" 
           w-full max-w-96
           flex items-center justify-center gap-3
           py-3
           border border-purple-300
           rounded-lg
           text-[#4F46E5]
           hover:bg-purple-600
           hover:text-white
           transition-all
           duration-500
           cursor-pointer"
          >
              <ArrowLeft className="w-5 h-5" />
               <span className="text-base font-medium">
                  Back to Login
               </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotpasswordForm;