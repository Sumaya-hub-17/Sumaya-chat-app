import { UserPlus, MoreVertical } from "lucide-react";


const CallsHeader = () => {
  return (
    <div className="
      flex items-center justify-between
      px-2 lg:px-0
      mt-4 lg:mt-0
    ">


      {/* Left */}

      <h1 className="
        text-3xl lg:text-5xl
        font-bold
        text-white lg:text-black
        ml-1 lg:ml-10
        mt-2 lg:mt-5
      ">
        Calls
      </h1>



      {/* Right */}

      <div className="flex items-center gap-3 lg:gap-5">


        {/* New Call Button */}

        <button
          className="
            flex items-center gap-2 lg:gap-3
            mr-0 lg:mr-10
            mt-2 lg:mt-10
            px-4 lg:px-8
            py-3 lg:py-5
            rounded-2xl
            bg-[#18181b] lg:bg-gray-200
            border border-gray-800 lg:border-none
            hover:bg-gray-700 lg:hover:bg-gray-400
            transition-all duration-300
          "
        >

          <UserPlus
            size={20}
            className="text-[#8B5CF6]"
          />


          <span className="
            hidden sm:block
            text-white lg:text-black
            text-sm lg:text-2xl
            font-medium
          ">
            New Call
          </span>

        </button>




        {/* More Button */}

        <button
          className="
            mt-2 lg:mt-8
            mr-1 lg:mr-5
            w-11 h-11
            lg:w-18 lg:h-18
            rounded-full
            bg-[#18181b] lg:bg-gray-200
            border border-gray-800 lg:border-none
            flex items-center justify-center
            hover:bg-gray-700 lg:hover:bg-gray-400
            transition-all duration-300
          "
        >

          <MoreVertical
            size={22}
            className="text-white lg:text-black"
          />

        </button>


      </div>


    </div>
  );
};

export default CallsHeader;