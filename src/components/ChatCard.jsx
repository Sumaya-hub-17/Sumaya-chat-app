const ChatCard = ({ images, name, status, className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <img
          src={images}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-black md:border-white"></span>
      </div>

      <h3 className="mt-2 text-sm font-semibold text-white md:text-gray-900">
        {name}
      </h3>

      <p className="text-xs text-gray-300 md:text-gray-500">
        {status}
      </p>
    </div>
  );
};

export default ChatCard;