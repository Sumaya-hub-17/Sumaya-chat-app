import { House, Users, Phone, Settings } from "lucide-react";

const BottomNavigation = ({ activePage, setActivePage }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 lg:hidden">

      <div className="flex items-center justify-around py-3">


        {/* Home */}

        <button
          onClick={() => setActivePage("welcome")}
          className={`
            flex flex-col items-center
            ${activePage === "welcome"
              ? "text-purple-500"
              : "text-gray-400 hover:text-white"
            }
          `}
        >
          <House className="w-6 h-6" />
          <span className="text-xs mt-1">
            Home
          </span>
        </button>



        {/* People */}

        <button
          onClick={() => setActivePage("people")}
          className={`
            flex flex-col items-center
            ${activePage === "people"
              ? "text-purple-500"
              : "text-gray-400 hover:text-white"
            }
          `}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs mt-1">
            People
          </span>
        </button>



        {/* Calls */}

        <button
          onClick={() => setActivePage("calls")}
          className={`
            flex flex-col items-center
            ${activePage === "calls"
              ? "text-purple-500"
              : "text-gray-400 hover:text-white"
            }
          `}
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs mt-1">
            Calls
          </span>
        </button>



        {/* Settings */}

        <button
          onClick={() => setActivePage("settings")}
          className={`
            flex flex-col items-center
            ${activePage === "settings"
              ? "text-purple-500"
              : "text-gray-400 hover:text-white"
            }
          `}
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">
            Settings
          </span>
        </button>


      </div>

    </nav>
  );
};

export default BottomNavigation;