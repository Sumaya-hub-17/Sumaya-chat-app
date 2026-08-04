import RecentChatCard from "./RecentChatCard";
import chats from "../Data/chats";


const RecentChats = ({ setSelectedChat }) => {
  return (
    <>
      <div className="mt-8 px-4">

        {/* heading */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white md:text-gray-900">
            Recent Chats
          </h2>

          <button className="text-sm text-purple-600 font-medium">
            See all
          </button>
        </div>


        {/* chat list */}
        <div className="space-y-2">

         {chats.map((chat) => (
  <RecentChatCard
    key={chat.id}
    chat={chat}
    setSelectedChat={setSelectedChat}
    image={chat.image}
    name={chat.name}
    message={chat.lastMessage}
    time={chat.time}
    unread={chat.unread}
    online={chat.online}
  />
))}

        </div>

      </div>
    </>
  );
};


export default RecentChats;