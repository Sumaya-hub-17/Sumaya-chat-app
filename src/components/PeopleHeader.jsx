import { UserPlus } from "lucide-react";

const PeopleHeader = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white md:text-black">
        People
      </h1>

      {/* Add People Button */}
      <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-[#7C3AED] to-[#9333EA] text-white font-medium hover:opacity-90 transition">
        <UserPlus size={20} />
        Add People
      </button>

    </div>
  );
};

export default PeopleHeader;