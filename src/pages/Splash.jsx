import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/chat-img-1.png";
import Loader from "../components/Loader";

const Splash = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-black md:bg-white">
        
        <img
          src={logo}
          alt="ChatApp Logo"
          className="w-24 sm:w-28 md:w-36"
        />

        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white md:text-black">
          Chat <span className="text-purple-600">App</span>
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-400 md:text-gray-500 text-center">
          Connect. Chat. Share.
        </p>

        <Loader />
      </div>
    </>
  );
};

export default Splash;