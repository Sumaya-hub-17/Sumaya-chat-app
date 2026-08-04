import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center mt-10 px-5">
        <div className="w-full max-w-xl">
          <div className="flex items-center gap-3 bg-gray-800 md:bg-gray-100 rounded-full px-4 py-3">
            <Search className="w-5 h-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search Chat..."
              className="w-full bg-transparent outline-none text-sm text-white md:text-black placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;