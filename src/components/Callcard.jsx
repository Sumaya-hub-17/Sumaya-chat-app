import { Phone, Video, MoreVertical, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const CallsCard = ({ call }) => {
  return (
    <div className="
      flex items-center justify-between 
      bg-[#18181b] lg:bg-gray-200
      border border-gray-800 lg:border-none
      rounded-2xl 
      px-3 lg:px-4 
      py-3 
      mb-3
    ">

      {/* User */}
      <div className="flex items-center gap-3 min-w-0">

        <img
          src={call.image}
          alt={call.name}
          className="
            w-12 h-12 
            lg:w-14 lg:h-14
            rounded-full 
            object-cover
            flex-shrink-0
          "
        />


        <div className="min-w-0">

          <h3 className="
            text-white lg:text-black
            font-semibold
            truncate
          ">
            {call.name}
          </h3>


          {/* Call Type + Arrow */}
          <div className="flex items-center gap-2">

            {
              call.missed ? (
                <ArrowDownLeft
                  size={17}
                  className="text-red-500"
                />
              ) : (
                <ArrowUpRight
                  size={17}
                  className="text-green-500"
                />
              )
            }


            <p
              className={`
                text-sm
                ${call.missed 
                  ? "text-red-400" 
                  : "text-gray-400"
                }
              `}
            >
              {call.type}
            </p>

          </div>


          <p className="text-xs text-gray-400 lg:text-gray-500">
            {call.time}
          </p>


        </div>

      </div>



      {/* Icons */}
      <div className="flex items-center gap-3 lg:gap-4 ml-2">

        {
          call.video ? (
            <Video
              size={20}
              className="text-purple-400"
            />
          ) : (
            <Phone
              size={20}
              className="text-green-400"
            />
          )
        }


        <MoreVertical
          size={20}
          className="text-gray-400"
        />

      </div>


    </div>
  );
};

export default CallsCard;