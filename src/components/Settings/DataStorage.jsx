import {
  HardDrive,
  Image,
  Download,
  Trash2,
  ChevronRight,
} from "lucide-react";

import ToggleSwitch from "../ToggleSwitch";

const DataStorage = () => {
  return (
    <>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white lg:text-black">
        Data & Storage
      </h2>

      <p className="text-gray-400 lg:text-gray-500 mt-2 mb-8">
        Manage your storage and data usage
      </p>


      {/* Storage Card */}
      <div className="bg-black lg:bg-white text-white lg:text-black rounded-2xl border-none lg:border border-gray-700 lg:border-gray-300 overflow-hidden">


        <h3 className="px-6 py-4 text-lg font-semibold border-b border-gray-700 lg:border-gray-300">
          Storage
        </h3>



        {/* Storage Usage */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <HardDrive 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Storage Usage
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                2.4 GB of 10 GB used
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Auto Download */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <Download 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Auto Download
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Automatically download media
              </p>

            </div>

          </div>


          <ToggleSwitch defaultOn={true} />

        </div>




        {/* Media Quality */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">

            <Image 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Media Quality
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                High Quality
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Clear Cache */}
        <div className="flex items-center justify-between px-6 py-5">


          <div className="flex items-center gap-4">

            <Trash2 
              size={22} 
              className="text-red-500" 
            />

            <div>

              <h4 className="font-medium text-red-500">
                Clear Cache
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Free up storage space
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

export default DataStorage;