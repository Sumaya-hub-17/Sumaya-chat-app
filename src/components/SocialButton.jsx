const SocialButton = ({ icon, text }) => {
  return (
    <button
      className="
        w-full sm:w-52
        flex items-center justify-center gap-3
        py-3
        border border-gray-300
        rounded-xl
        hover:bg-gray-50
        transition-all duration-300
        cursor-pointer
      "
    >
      {icon}

      <span className="text-base md:text-lg font-medium text-gray-700">
        {text}
      </span>
    </button>
  );
};

export default SocialButton;