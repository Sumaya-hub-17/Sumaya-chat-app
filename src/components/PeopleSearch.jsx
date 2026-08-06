import { Search } from "lucide-react";

const PeopleSearch = () => {
  return (
    <div className="relative mt-8 md:mt-10">

      {/* Animated Glow */}
      <div className="absolute -inset-1 rounded-2xl blur-xl opacity-70 md:hidden aurora"></div>

      {/* Animated Border */}
      <div className="relative rounded-2xl p-0.5 bg-gray-300 md:bg-gray-300 md:p-0 md:border md:border-gray-300 aurora">

        {/* Search Box */}
        <div className="flex items-center rounded-2xl bg-[#18181b] md:bg-white px-4">
          <Search size={20} className="text-gray-400 shrink-0" />

          <input
            type="text"
            placeholder="Search people..."
            className="ml-3 w-full h-12 md:h-14 bg-transparent outline-none text-white md:text-black placeholder:text-gray-400"
          />
        </div>

      </div>

    </div>
  );
};

export default PeopleSearch;