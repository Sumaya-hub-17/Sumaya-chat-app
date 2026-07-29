import { useNavigate } from "react-router-dom";
import chatimg from "../assets/images/chat-img-3.png";
import personschating from "../assets/images/chat-img-6.png";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="
        min-h-screen 
        flex 
        flex-col 
        items-center 
        relative
        bg-black
        md:bg-white
        px-4
      ">
        
        <img
          src={chatimg}
          alt="Chat image"
          className="
            mt-20 
            absolute 
            w-14
            md:w-16
            left-1/2 
            -translate-x-1/2 
            -translate-y-1/2
          "
        />

        <img
          src={personschating}
          alt="Girl and boy chatting"
          className="
            relative 
            flex 
            justify-center 
            items-center 
            mt-20
            max-w-xs
            md:max-w-none
          "
        />

        <h1 className="
          mt-4 
          text-3xl 
          sm:text-4xl 
          font-bold
          text-white
          md:text-black
          text-center
        ">
          Welcome To
          <span className="
            ml-3 
            text-purple-400
            md:text-purple-700
          ">
            ChatApp
          </span>
        </h1>

        <p className="
          mt-2 
          text-sm 
          sm:text-base 
          text-gray-400
          md:text-gray-500
          text-center
        ">
          A simple way to connect with your friends and family
        </p>

        <div className="flex justify-center items-center gap-3 mt-8">
          <span className="w-3 h-3 rounded-full bg-purple-600"></span>
          <span className="w-3 h-3 rounded-full bg-gray-500"></span>
          <span className="w-3 h-3 rounded-full bg-gray-500"></span>
        </div>

        <button
          onClick={() => navigate("/Signup")}
          className="
            w-full
            max-w-sm
            md:w-96
            h-16 
            mt-10
            rounded-2xl
            cursor-pointer
            text-xl 
            text-white
            border 
            border-gray-300
            bg-linear-to-r
            from-[#6D3BFF]
            to-[#4B2BD6]
          "
        >
          Get Started
        </button>

      </div>
    </>
  );
};

export default Onboarding;