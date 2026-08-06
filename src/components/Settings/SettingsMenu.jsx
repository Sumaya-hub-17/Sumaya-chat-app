import {
  User,
  Bell,
  Shield,
  Palette,
  MessageCircle,
  Database,
  CircleHelp,
  Info,
  LogOut,
  ChevronRight,
} from "lucide-react";


const menuItems = [
  {
    title: "My Account",
    desc: "Manage your profile information",
    icon: User,
  },
  {
    title: "Notifications",
    desc: "Manage your notifications",
    icon: Bell,
  },
  {
    title: "Privacy & Security",
    desc: "Control your privacy settings",
    icon: Shield,
  },
  {
    title: "Appearance",
    desc: "Customize theme and appearance",
    icon: Palette,
  },
  {
    title: "Chat Settings",
    desc: "Manage chat preferences",
    icon: MessageCircle,
  },
  {
    title: "Data & Storage",
    desc: "Manage storage and data usage",
    icon: Database,
  },
  {
    title: "Help & Support",
    desc: "Get help and contact support",
    icon: CircleHelp,
  },
  {
    title: "About",
    desc: "App information and version",
    icon: Info,
  },
];


const SettingsMenu = ({ selected, setSelected }) => {

  return (
    <div
      className="
      w-full lg:w-[360px]
      bg-white
      border border-gray-200
      rounded-2xl
      p-3
      "
    >


      {/* Menu Items */}
      {menuItems.map((item, index) => {

        const Icon = item.icon;

        const isActive = selected === item.title;


        return (
          <div
            key={index}
            onClick={() => setSelected(item.title)}
            className={`
            flex items-center justify-between
            p-4 rounded-xl
            cursor-pointer
            mb-2
            group
            ${
              isActive
              ? "bg-black"
              : "hover:bg-black"
            }
            `}
          >


            <div className="flex items-center gap-4">


              <Icon
                size={24}
                className={`
                ${
                  isActive
                  ? "text-purple-400"
                  : "text-gray-600 group-hover:text-white"
                }
                `}
              />



              <div>


                <h3
                  className={`
                  font-medium
                  ${
                    isActive
                    ? "text-white"
                    : "text-black group-hover:text-white"
                  }
                  `}
                >
                  {item.title}
                </h3>



                <p
                  className={`
                  text-sm
                  ${
                    isActive
                    ? "text-gray-300"
                    : "text-gray-500 group-hover:text-gray-300"
                  }
                  `}
                >
                  {item.desc}
                </p>


              </div>


            </div>



            <ChevronRight
              size={20}
              className={`
              ${
                isActive
                ? "text-white"
                : "text-gray-500 group-hover:text-white"
              }
              `}
            />


          </div>
        )
      })}




      {/* Logout */}
      <div
        className="
        border-t border-gray-200
        mt-4 pt-4
        flex items-center gap-4
        p-4
        cursor-pointer
        group
        hover:bg-black
        rounded-xl
        "
      >

        <LogOut
          size={24}
          className="text-red-500 group-hover:text-red-400"
        />


        <div>

          <h3 className="
          text-red-500
          font-medium
          ">
            Logout
          </h3>


          <p className="
          text-sm
          text-gray-500
          group-hover:text-gray-300
          ">
            Sign out from your account
          </p>


        </div>


      </div>


    </div>
  )
}


export default SettingsMenu;