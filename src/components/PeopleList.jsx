import people from "../Data/people";
import { MessageCircle, Phone, MoreVertical } from "lucide-react";

const PeopleList = () => {
  return (
    <div className="mt-10">

      {/* Heading */}
      <div className="flex items-center justify-between">
      <h2 className="text-xl md:text-2xl font-bold text-white md:text-black">
          All People
        </h2>

        <button className="bg-gray-200 text-gray-600 rounded-xl px-4 py-2 text-sm md:text-base">
          All Contacts
        </button>
      </div>

      {/* Desktop Table Header */}
      <div className="hidden md:grid grid-cols-4 bg-gray-100 rounded-xl mt-8 px-6 py-4 text-sm font-semibold uppercase text-gray-500">
        <div>Name</div>
        <div>Status</div>
        <div>Last Seen</div>
        <div className="text-right">Actions</div>
      </div>

      {/* People */}
      <div className="mt-4 space-y-4">
        {people.map((person) => (
          <div
            key={person.id}
            className="relative rounded-2xl p-[2px] aurora-card md:p-0"
          >
            <div className="rounded-2xl border border-transparent md:border-gray-100 bg-black md:bg-white p-5 md:grid md:grid-cols-4 md:items-center">

              {/* Name */}
              <div className="flex items-center gap-3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />

                <div>
                  <h3 className="font-semibold text-white md:text-black">
                    {person.name}
                  </h3>
                </div>
              </div>

              {/* Status */}
              <div className="mt-4 md:mt-0">
                <p className="text-xs text-gray-500 md:hidden mb-1">
                  Status
                </p>

                <span
                  className={`font-medium ${
                    person.status === "Online"
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                >
                  ● {person.status}
                </span>
              </div>

              {/* Last Seen */}
              <div className="mt-4 md:mt-0">
                <p className="text-xs text-gray-500 md:hidden mb-1">
                  Last Seen
                </p>

                <span className="text-gray-400 md:text-gray-600">
                  {person.lastSeen}
                </span>
              </div>

              {/* Actions */}
              <div className="flex md:justify-end gap-3 mt-6 md:mt-0">

                <button className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <MessageCircle size={20} />
                </button>

                <button className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Phone size={20} />
                </button>

                <button className="hidden md:flex w-11 h-11 items-center justify-center text-gray-500">
                  <MoreVertical size={20} />
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PeopleList;