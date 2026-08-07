import {
  MessageCircle,
  CheckCheck,
  Clock,
  Archive,
  Trash2,
  ChevronRight,
} from "lucide-react";

import ToggleSwitch from "../ToggleSwitch";

const ChatSettings = () => {
  return (
    <>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white lg:text-black">
        Chat Settings
      </h2>

      <p className="text-gray-400 lg:text-gray-500 mt-2 mb-8">
        Customize your chat experience
      </p>


      {/* Chat Card */}
      <div className="bg-black lg:bg-white text-white lg:text-black rounded-2xl border-none lg:border border-gray-700 lg:border-gray-300 overflow-hidden">


        <h3 className="px-6 py-4 text-lg font-semibold border-b border-gray-700 lg:border-gray-300">
          Chats
        </h3>



        {/* Enter is Send */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <MessageCircle 
              size={22} 
              className="text-gray-400" 
            />

            <div>
              <h4 className="font-medium text-white lg:text-black">
                Enter is Send
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Press Enter to send messages
              </p>
            </div>

          </div>


          <ToggleSwitch defaultOn={true} />

        </div>




        {/* Read Receipts */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">

            <CheckCheck 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Read Receipts
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Let others know you've read messages
              </p>

            </div>

          </div>


          <ToggleSwitch defaultOn={true} />

        </div>




        {/* Auto Delete */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">

            <Clock 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Auto Delete Messages
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Keep messages for 30 days
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Archived Chats */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">

            <Archive 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Archived Chats
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Manage archived conversations
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Clear Chat */}
        <div className="flex items-center justify-between px-6 py-5">


          <div className="flex items-center gap-4">

            <Trash2 
              size={22} 
              className="text-red-500" 
            />

            <div>

              <h4 className="font-medium text-red-500">
                Clear Chat History
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Remove all chat messages
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>


      </div>


    </>
  );
};

export default ChatSettings;