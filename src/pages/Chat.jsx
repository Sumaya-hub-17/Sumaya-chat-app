import { ArrowLeft, Phone, Video } from "lucide-react";

const Chat = ({ chat, setSelectedChat }) => {
  return (
    <div className="w-full min-h-screen bg-white text-white flex flex-col overflow-x-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">

        <div className="flex items-center gap-3">

          <ArrowLeft
            size={20}
            onClick={() => setSelectedChat(null)}
            className="cursor-pointer lg:hidden text-white lg:text-black"
          />

          <img
            src={chat?.image}
            alt={chat?.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold text-lg text-black">
              {chat?.name || "Select Chat"}
            </h2>

            <p className="text-sm text-green-400">
              {chat?.online ? "Online" : "Offline"}
            </p>
          </div>

        </div>

        <div className="flex gap-5">

          <Phone
            size={22}
           className="cursor-pointer text-white lg:text-black"
          />

          <Video
            size={22}
           className="cursor-pointer text-white lg:text-black"
          />

        </div>

      </div>

      {/* Messages Area */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">

        {chat?.messages?.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender === "me"
                ? "bg-[#5B4CF6] text-white ml-auto w-fit max-w-[80%] wrap-break-word px-5 py-3 rounded-2xl"
                : "bg-gray-500 text-white w-fit max-w-[80%] wrap-break-word px-5 py-3 rounded-2xl"
            }
          >
            {msg.text}
          </div>
        ))}

      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-700">

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Type message..."
            className="flex-1 min-w-0 bg-white text-gray-900 rounded-full px-4 py-3 outline-none"
          />

          <button
            className="bg-[#5B4CF6] px-6 rounded-full font-medium"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
};

export default Chat;