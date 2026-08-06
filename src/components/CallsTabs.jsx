const CallsTabs = ({setShowDetails}) => {
  return (
    <div
      className="
        flex
        items-center
        gap-3 lg:gap-5
        mt-5 lg:mt-8
      "
    >

      {/* All Calls */}

     <button
onClick={() => setShowDetails(false)}
  className="
    flex-1
    py-3 lg:py-5
    cursor-pointer
    rounded-2xl
    bg-linear-to-r
    from-[#7C3AED]
    to-[#9333EA]
    text-white
    text-sm lg:text-2xl
    font-semibold
  "
>
  All Calls
</button>



      {/* Missed */}
                <button
  onClick={() => setShowDetails(true)}
  className="
    flex-1
    flex
    items-center
    justify-center
    cursor-pointer
    gap-2 lg:gap-3
    py-3 lg:py-5
    rounded-2xl
    bg-[#18181b]
    lg:bg-[#E5E7EB]
    text-white
    lg:text-black
    hover:bg-[#7C3AED]
    hover:text-white
    transition-all
    duration-300
    text-sm lg:text-2xl
    font-semibold
  "
>
  <span>Missed</span>

  <span
    className="
      w-6 h-6
      lg:w-7 lg:h-7
      rounded-full
      bg-red-500
      text-white
      text-xs lg:text-sm
      flex
      items-center
      justify-center
    "
  >
    2
  </span>
</button>
     


     


    </div>
  );
};

export default CallsTabs;