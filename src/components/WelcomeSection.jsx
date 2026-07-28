import ChatImage from "../assets/images/chat-img-5.png";
import planimage from "../assets/images/chat-img-2.png";
import chatbubble from "../assets/images/chat-img-3.png";
import chatpersons from "../assets/images/chat-img-6.png";
import { IoPaperPlane } from "react-icons/io5";
import { ShieldCheck, Users, Globe } from "lucide-react";

const WelcomeSection = () => {
  const stars = [
    { top: "top-20", left: "left-20", size: "text-2xl" },
    { top: "top-32", left: "left-40", size: "text-lg" },
    { top: "top-52", right: "right-20", size: "text-xl" },
    { top: "top-72", left: "left-16", size: "text-sm" },
    { top: "bottom-60", right: "right-32", size: "text-2xl" },
    { top: "bottom-40", left: "left-32", size: "text-lg" },
    { top: "top-96", right: "right-10", size: "text-xl" },
    { top: "bottom-80", left: "left-10", size: "text-sm" },
    { top: "top-10", right: "right-40", size: "text-lg" },
    { top: "bottom-20", right: "right-60", size: "text-xl" },
  ];

  return (
  <div className="relative overflow-visible">

      {/* Stars */}
      {stars.map((star, index) => (
        <span
          key={index}
          className={`hidden md:block absolute ${star.top} ${
            star.left || star.right
          } ${star.size} text-[#D8C8FF]`}
        >
          ✦
        </span>
      ))}

      {/* Heading */}
      <div className="flex flex-col items-center pt-16 md:pt-20 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Welcome to ChatApp
        </h1>

        <p className="text-white/90 text-sm sm:text-base md:text-lg text-center mt-4 md:mt-6 max-w-xs sm:max-w-md leading-6 md:leading-9">
          A better way to connect with people around the world.
        </p>
      </div>

      {/* Chat Illustration */}
      <img
        src={ChatImage}
        alt="Chat Illustration"
        className="w-64 sm:w-80 md:w-112.5 mt-5 mx-auto"
      />

      {/* Plane */}
      <IoPaperPlane className="absolute top-56 right-6 sm:top-64 sm:right-10 md:top-76 md:right-16 text-2xl sm:text-3xl md:text-4xl text-white" />

      {/* Chat Bubble */}
      <div className="flex justify-center items-center">
        <img
          src={chatbubble}
          alt="Chat Bubble"
          className="w-12 sm:w-14 md:w-16 h-auto"
        />
      </div>

      {/* Girl & Boy */}
      <div className="flex justify-center items-center">
        <img
          src={chatpersons}
          alt="Chat between a man and woman"
          className="w-56 sm:w-72 md:w-96"
        />
      </div>

      {/* Features */}
      <div className="px-5 sm:px-6 md:px-8 mt-6">

        {/* Feature 1 */}
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-white shrink-0" />

          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl">
              Secure & Private
            </h3>

            <p className="text-white/80 text-xs sm:text-sm">
              Your conversations are end-to-end encrypted
            </p>
          </div>
        </div>

        <hr className="border-white/20 my-5" />

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <Users className="w-6 h-6 md:w-8 md:h-8 text-white shrink-0" />

          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl">
              Connect Instantly
            </h3>

            <p className="text-white/80 text-xs sm:text-sm">
              Real-time messaging with anyone, anywhere
            </p>
          </div>
        </div>

        <hr className="border-white/20 my-5" />

        {/* Feature 3 */}
        <div className="flex items-start gap-4">
          <Globe className="w-6 h-6 md:w-8 md:h-8 text-white shrink-0" />

          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl">
              Join the Community
            </h3>

            <p className="text-white/80 text-xs sm:text-sm">
              Be a part of a growing global community
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default WelcomeSection;