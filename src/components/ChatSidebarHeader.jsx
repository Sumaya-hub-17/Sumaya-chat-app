import { SquarePen, EllipsisVertical } from "lucide-react";

const ChatSidebarHeader = () => {
  return (
    <div className="hidden lg:flex items-center justify-between px-6 py-6 border-b border-gray-100">
      
      {/* Left */}
      <h1 className="text-3xl font-bold text-gray-900">
        ChatApp
      </h1>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="text-gray-500 hover:text-[#5B4CF6] transition">
          <SquarePen size={24} />
        </button>

        <button className="text-gray-500 hover:text-[#5B4CF6] transition">
          <EllipsisVertical size={24} />
        </button>
      </div>

    </div>
  );
};

export default ChatSidebarHeader;