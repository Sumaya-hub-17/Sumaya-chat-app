import {
  ArrowLeft,
  Star,
  MoreVertical,
  Phone,
  Video,
  MessageCircle,
} from "lucide-react";
import EmmaImg from "../assets/images/chat-img-8.webp";
const CallDetails = ({setShowDetails}) => {
  return (
    <div className="w-full min-h-screen bg-black text-white md:bg-white md:text-black p-4 sm:p-6 lg:p-8 rounded-none lg:rounded-3xl">
      {/* Header */}
      <div className="flex items-center justify-between">
       <button onClick={() => setShowDetails(false)}>
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <div className="flex items-center gap-4">
          <button>
           <Star className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 fill-purple-500" />
          </button>
          <button>
           <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
      {/* Profile */}
      <div className="flex flex-col items-center mt-8 sm:mt-10">
        <div className="relative">
          <img
            src={EmmaImg}
            alt="Emma Watson"
            className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full object-cover"
          />
          {/* Online Dot */}
          <span className="absolute bottom-2 right-1 sm:bottom-3 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 border-2 sm:border-4 border-white bg-green-500 rounded-full"></span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mt-4 sm:mt-6 text-center">
          Emma Watson
        </h2>
        <p className="text-green-500 text-sm sm:text-xl lg:text-2xl mt-2">
          Online
        </p>
      </div>
      {/* Action Buttons */}
     <div className="flex justify-center gap-3 sm:gap-5 lg:gap-6 mt-8 sm:mt-12">
        {/* Voice */}
        <button className="w-28 sm:w-16 lg:w-44 h-24 sm:h-28 lg:h-32 rounded-2xl lg:rounded-3xl border border-gray-300 flex flex-col items-center justify-center hover:border-purple-500 transition">
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-500" />
          <span className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-xl">
            Voice Call
          </span>
        </button>
        {/* Video */}
        <button className="w-28 sm:w-36 lg:w-44 h-24 sm:h-28 lg:h-32 rounded-2xl lg:rounded-3xl bg-linear-to-r from-[#7C3AED] to-[#9333EA] flex flex-col items-center justify-center text-white">
          <Video className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          <span className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-xl">
            Video Call
          </span>
        </button>
        {/* Message */}
        <button className="w-28 sm:w-36 lg:w-44 h-24 sm:h-28 lg:h-32 rounded-2xl lg:rounded-3xl border border-gray-300 flex flex-col items-center justify-center hover:border-purple-500 transition">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-700"/>
          <span className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-xl">
            Message
          </span>
        </button>
      </div>
           {/* Call History */}
<div className="mt-12">
 <div className="flex items-center justify-between mb-4 sm:mb-6">
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
      Call History
    </h3>
    <button className="text-sm sm:text-base text-purple-600 font-medium hover:text-purple-700">
      See all
    </button>
  </div>
  {/* History Card 1 */}
  <div className="flex items-center justify-between bg-[#18181b] md:bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 rounded-full bg-black md:bg-purple-100 flex items-center justify-center">
        <Phone className="w-5 h-5 sm:w-6 sm:h-6"/>
      </div>
      <div>
       <h4 className="font-semibold text-sm sm:text-base lg:text-lg text-white md:text-black">
          Outgoing Voice Call
        </h4>
      <p className="text-gray-400 md:text-gray-500 text-xs sm:text-sm">
          Today, 10:30 AM
        </p>
      </div>
    </div>
    <span className="font-medium text-xs sm:text-sm lg:text-base">
      05:24
    </span>
  </div>
  {/* History Card 2 */}
     <div className="flex items-center justify-between bg-[#18181b] md:bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 flex items-center justify-center">
      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
      </div>
      <div>
        <h4 className="font-semibold text-sm sm:text-base lg:text-lg">
          Missed Voice Call
        </h4>
        <p className="text-gray-500 text-xs sm:text-sm">
          Yesterday, 8:15 PM
        </p>
      </div>
    </div>
    <span className="text-red-500 font-medium text-xs sm:text-sm lg:text-base">
      Missed
    </span>
  </div>
  {/* History Card 3 */}
   <div className="flex items-center justify-between bg-[#18181b] md:bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4">
    <div className="flex items-center gap-4">
     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
       <Video className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
      </div>
      <div>
        <h4 className="font-semibold text-sm sm:text-base lg:text-lg">
          Incoming Video Call
        </h4>
        <p className="text-gray-500 text-xs sm:text-sm">
          Jul 28, 4:20 PM
        </p>
      </div>
    </div>
   <span className="font-medium text-xs sm:text-sm lg:text-base">
     12:08
   </span>
  </div>
</div>
    </div>
   ) ;
};
export default CallDetails;