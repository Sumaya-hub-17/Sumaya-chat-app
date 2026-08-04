import { Search, SlidersHorizontal } from "lucide-react";

const CallsSearch = () => {
  return (
    <div className="
      mt-5 lg:mt-6
      px-1 lg:px-0
    ">


      <div
        className="
          flex
          items-center
          justify-between
          bg-[#18181b]
          lg:bg-gray-200
          border
          border-gray-800
          lg:border-white/10
          rounded-2xl
          px-4 lg:px-6
          py-3 lg:py-5
        "
      >


        {/* Left Side */}

        <div className="flex items-center gap-3 lg:gap-4 flex-1">


          <Search
            size={21}
            className="text-gray-400"
          />


          <input
            type="text"
            placeholder="Search calls..."
            className="
              w-full
              bg-transparent
              outline-none
              text-sm lg:text-lg
              text-white lg:text-black
              placeholder:text-gray-500
            "
          />


        </div>



        {/* Filter Icon */}

        <button
          className="
            ml-3 lg:ml-4
            text-gray-400
            hover:text-[#8B5CF6]
            transition
          "
        >

          <SlidersHorizontal
            size={21}
          />

        </button>


      </div>


    </div>
  );
};

export default CallsSearch;