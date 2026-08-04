import { MessageCircleMore } from "lucide-react";

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center ">

      {/* chat icon */}
      <div className="w-28 h-28 rounded-full bg-[#5B4CF6] flex items-center justify-center shadow-lg">
        <MessageCircleMore size={56} className="text-white" />
      </div>


      {/* Heading */}
      <h1 className="mt-5 text-4xl font-bold text-gray-900">
        Welcome to ChatApp
      </h1>


      {/* Description */}
      <p className="mt-4 max-w-md text-gray-500 leading-7">
        Select a conversation from the left panel to start chatting.
        Your messages will appear here.
      </p>

    </div>
  );
};

export default WelcomeScreen;