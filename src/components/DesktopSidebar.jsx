import {
  MessageCircle,
  Phone,
  Users,
  Settings,
  ChevronDown,
} from "lucide-react";

import Logo from "../assets/images/chat-img-1.png";
import UserImg from "../assets/images/chat-img-8.webp";

const DesktopSidebar = ({ activePage, setActivePage }) => {
  return (
    <aside className="hidden lg:flex w-28 min-h-screen bg-[#16152D] text-white flex-col justify-between py-6">

      {/* Top */}
      <div>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div
            className="w-16 h-16 rounded-3xl
            bg-gradient-to-br from-[#6C63FF] to-[#5B4CF6]
            flex items-center justify-center shadow-lg"
          >
            <img
              src={Logo}
              alt="ChatApp Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-3 px-2 ">

          {/* Chats */}
          <button
            onClick={() => setActivePage("welcome")}
            className={`w-full py-4 rounded-2xl transition flex flex-col items-center gap-2
              ${
                activePage === "welcome"
                  ? "bg-[#5B4CF6]"
                  : "hover:bg-white/10"
              }`}
          >
            <MessageCircle size={26} />
            <span className="text-sm">Chats</span>
          </button>

          {/* Calls */}
          <button
            onClick={() => setActivePage("calls")}
            className={`w-full py-4 rounded-2xl transition flex flex-col items-center gap-2
              ${
                activePage === "calls"
                  ? "bg-[#5B4CF6]"
                  : "hover:bg-white/10"
              }`}
          >
            <Phone size={26} />
            <span className="text-sm">Calls</span>
          </button>

          {/* People */}
          <button
            onClick={() => setActivePage("people")}
            className={`w-full py-4 rounded-2xl transition flex flex-col items-center gap-2
              ${
                activePage === "people"
                  ? "bg-[#5B4CF6]"
                  : "hover:bg-white/10"
              }`}
          >
            <Users size={26} />
            <span className="text-sm">People</span>
          </button>

          {/* Settings */}
          <button
            onClick={() => setActivePage("settings")}
            className={`w-full py-4 rounded-2xl transition flex flex-col items-center gap-2
              ${
                activePage === "settings"
                  ? "bg-[#5B4CF6]"
                  : "hover:bg-white/10"
              }`}
          >
            <Settings size={26} />
            <span className="text-sm">Settings</span>
          </button>

        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center">

        <div className="relative">

          <img
            src={UserImg}
            alt="user"
            className=" mt-20 w-14 h-14 rounded-full object-cover border-2 border-white"
          />

          <span className="absolute bottom-1 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-[#16152D]"></span>

        </div>

        <h3 className="mt-4 text-sm font-semibold">
          Sumaya
        </h3>

        <p className="text-xs text-gray-300">
          Online
        </p>

        <button className="mt-4">
          <ChevronDown size={20} />
        </button>

      </div>

    </aside>
  );
};

export default DesktopSidebar;