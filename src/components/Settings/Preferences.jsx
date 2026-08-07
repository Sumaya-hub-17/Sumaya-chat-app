import {
  Moon,
  Globe,
  Image,
  Volume2,
  CheckCheck,
  Circle,
  ChevronRight,
} from "lucide-react";

import ToggleSwitch from "../ToggleSwitch";

const Preferences = () => {
  return (
    <>

      {/* preference */}

      <div className="text-purple-500 mt-5 text-lg lg:text-xl">
        <h3 className="">Preference</h3>
      </div>
      {/* Dark Mode */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
        <div className="flex items-center gap-4">
          <Moon className="text-gray-400 lg:text-gray-500" size={22} />

          <div>
            <h4 className="text-white lg:text-black text-lg">
              Dark Mode
            </h4>

            <p className="text-gray-400 lg:text-gray-500 text-sm">
              Choose your preferred theme
            </p>
          </div>
        </div>

        <ToggleSwitch defaultOn={true} />
      </div>


      {/* Language */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
        <div className="flex items-center gap-4">
          <Globe className="text-gray-400 lg:text-gray-500" size={22} />

          <div>
            <h4 className="text-white lg:text-black text-lg">
              Language
            </h4>

            <p className="text-gray-400 lg:text-gray-500 text-sm">
              Select your preferred language
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-400 lg:text-gray-500">
            English
          </span>

          <ChevronRight 
            className="text-gray-400 lg:text-gray-500" 
            size={20} 
          />
        </div>
      </div>


      {/* Chat Wallpaper */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
        <div className="flex items-center gap-4">
          <Image className="text-gray-400 lg:text-gray-500" size={22} />

          <div>
            <h4 className="text-white lg:text-black text-lg">
              Chat Wallpaper
            </h4>

            <p className="text-gray-400 lg:text-gray-500 text-sm">
              Customize your chat background
            </p>
          </div>
        </div>

        <ChevronRight 
          className="text-gray-400 lg:text-gray-500" 
          size={20} 
        />
      </div>


      {/* Sounds */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
        <div className="flex items-center gap-4">
          <Volume2 className="text-gray-400 lg:text-gray-500" size={22} />

          <div>
            <h4 className="text-white lg:text-black text-lg">
              Sounds
            </h4>

            <p className="text-gray-400 lg:text-gray-500 text-sm">
              Manage notification sounds
            </p>
          </div>
        </div>

        <ToggleSwitch defaultOn={true} />
      </div>


      {/* Read Receipts */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
        <div className="flex items-center gap-4">
          <CheckCheck className="text-gray-400 lg:text-gray-500" size={22} />

          <div>
            <h4 className="text-white lg:text-black text-lg">
              Read Receipts
            </h4>

            <p className="text-gray-400 lg:text-gray-500 text-sm">
              Let others know when you've read messages
            </p>
          </div>
        </div>

        <ToggleSwitch defaultOn={true} />
      </div>


      {/* Active Status */}
      <div className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <Circle 
            className="text-green-500 fill-green-500" 
            size={14} 
          />

          <div>
            <h4 className="text-white lg:text-black text-lg">
              Active Status
            </h4>

            <p className="text-gray-400 lg:text-gray-500 text-sm">
              Show when you are online
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Preferences;