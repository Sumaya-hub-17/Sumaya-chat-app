import {
  Palette,
  Moon,
  Image,
  Type,
  Monitor,
  ChevronRight,
} from "lucide-react";

import ToggleSwitch from "../ToggleSwitch";

const Appearance = () => {
  return (
    <>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white lg:text-black">
        Appearance
      </h2>

      <p className="text-gray-400 lg:text-gray-500 mt-2 mb-8">
        Customize theme and appearance
      </p>


      {/* Theme Card */}
      <div className="bg-black lg:bg-white text-white lg:text-black rounded-2xl border-none lg:border border-gray-700 lg:border-gray-300 overflow-hidden">


        <h3 className="px-6 py-4 text-lg font-semibold border-b border-gray-700 lg:border-gray-300">
          Theme
        </h3>


        {/* Dark Mode */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <Moon size={22} className="text-gray-400" />

            <div>
              <h4 className="text-white lg:text-black font-medium">
                Dark Mode
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Enable dark theme
              </p>
            </div>

          </div>


          <ToggleSwitch defaultOn={true} />

        </div>




        {/* Chat Background */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <Image size={22} className="text-gray-400" />

            <div>
              <h4 className="text-white lg:text-black font-medium">
                Chat Background
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Choose chat wallpaper
              </p>
            </div>

          </div>


          <ChevronRight size={20} className="text-gray-400" />

        </div>




        {/* Accent Color */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <Palette size={22} className="text-gray-400" />

            <div>
              <h4 className="text-white lg:text-black font-medium">
                Accent Color
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Choose app accent color
              </p>
            </div>

          </div>


          <ChevronRight size={20} className="text-gray-400" />

        </div>




        {/* Font Size */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <Type size={22} className="text-gray-400" />

            <div>
              <h4 className="text-white lg:text-black font-medium">
                Font Size
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Medium
              </p>
            </div>

          </div>


          <ChevronRight size={20} className="text-gray-400" />

        </div>




        {/* Display Style */}
        <div className="flex items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">

            <Monitor size={22} className="text-gray-400" />

            <div>
              <h4 className="text-white lg:text-black font-medium">
                Display Style
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Default
              </p>
            </div>

          </div>


          <ChevronRight size={20} className="text-gray-400" />

        </div>


      </div>


    </>
  );
};

export default Appearance;