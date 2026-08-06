import people from "../data/people";

const FavoritePeople = () => {
  return (
    <div className="mt-10">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white md:text-black">
          Favorite People
        </h2>

        <button className="text-purple-600 font-medium hover:underline text-sm md:text-base">
          See All
        </button>
      </div>

      {/* People */}
      <div className="mt-6 flex gap-4 md:gap-8 overflow-x-auto pb-2 scrollbar-hide">

        {people.map((person) => (
          <div
            key={person.id}
            className="flex flex-col items-center shrink-0 min-w-22.5 md:min-w-27.5"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-purple-500"
            />

            <h3 className="mt-3 text-sm md:text-base font-medium text-white md:text-black text-center">
              {person.name}
            </h3>

            <p className="text-xs md:text-sm text-green-500">
              {person.status}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FavoritePeople;