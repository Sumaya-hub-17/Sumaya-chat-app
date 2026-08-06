import {
  MessageCircle,
  Phone,
  Users,
  Settings,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";

import { useState } from "react";

import Logo from "../assets/images/chat-img-1.png";
import UserImg from "../assets/images/chat-img-8.webp";

const DesktopSidebar = ({ activePage, setActivePage }) => {
  
  return (
    <aside className="hidden lg:flex w-44 min-h-screen bg-[#16152D] text-white flex-col justify-between py-6">

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
<div className="px-3 pb-4">

  {/* Profile Card */}
  <div className="bg-[#1E1B3A] border border-white/10 rounded-2xl p-4">

    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div className="relative">
          <img
            src={UserImg}
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />

          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#1E1B3A]"></span>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Sumaya</h3>
          <p className="text-xs text-green-400">Online</p>
        </div>

      </div>

      <ChevronDown size={18} className="text-gray-400" />

    </div>
  </div>
</div>

    </aside>
  );
};

export default DesktopSidebar;