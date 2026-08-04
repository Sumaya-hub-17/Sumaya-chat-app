const RecentChatCard = ({ 
  chat,
  setSelectedChat,
  image,
  name,
  message,
  time,
  unread,
  online
}) => {
  return (
    <>
      <div
        onClick={() => setSelectedChat(chat)}
        className="
          flex items-center
          justify-between
          px-4 py-4
          rounded-2xl
          hover:bg-white/10
          md:hover:bg-gray-100
          transition-all duration-300
          cursor-pointer
        "
      >

        {/* left side div */}

        <div className="flex items-center gap-3">

          <div className="relative">

            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-full object-cover"
            />

            {online && (
              <span
                className="
                  absolute bottom-1 right-1
                  w-3.5 h-3.5
                  rounded-full
                  bg-green-500
                  border-2 border-black
                  md:border-white
                "
              ></span>
            )}

          </div>


          <div>

            <h3 className="text-white md:text-gray-900 font-semibold">
              {name}
            </h3>

            <p className="text-sm text-gray-400 md:text-gray-500 truncate max-w-44">
              {message}
            </p>

          </div>

        </div>


        {/* right side */}

        <div className="flex flex-col items-end gap-2">

          <span className="text-xs text-gray-400">
            {time}
          </span>


          {unread > 0 && (
            <div
              className="
                w-5 h-5
                rounded-full
                bg-purple-600
                text-white
                text-xs
                flex items-center justify-center
              "
            >
              {unread}
            </div>
          )}

        </div>


      </div>
    </>
  );
};

export default RecentChatCard;