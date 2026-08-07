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

import { useNavigate } from "react-router-dom";


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
      
  const navigate = useNavigate();
  return (
   <div
  className="
  w-full
  lg:w-95
  bg-[#111216]
  lg:bg-white
  border border-gray-800
  lg:border-gray-200
  rounded-2xl
  p-4
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
             transition-all
             duration-300
             ${
               isActive
                 ? "bg-white lg:bg-black"
                 : "hover:bg-white lg:hover:bg-black"
             }
             `}
          >


            <div className="flex items-center gap-4">


              <Icon
                size={24}
                className={`
                ${
                  isActive
                    ? "text-purple-500"
                    : "text-gray-400 lg:text-gray-600 group-hover:text-black lg:group-hover:text-white"
                }
                `}
              />



              <div>


                <h3
                  className={`
                  font-medium
                  ${
                    isActive
                      ? "text-black lg:text-white"
                      : "text-white lg:text-black group-hover:text-black lg:group-hover:text-white"
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
                     ? "text-gray-600 lg:text-gray-300"
                     : "text-gray-400 lg:text-gray-500 group-hover:text-gray-600 lg:group-hover:text-gray-300"
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
                    ? "text-black lg:text-white"
                    : "text-gray-400 lg:text-gray-500 group-hover:text-black lg:group-hover:text-white"
              }
              `}
            />


          </div>
        )
      })}




      {/* Logout */}
      <div
          onClick={() => {
            localStorage.clear();
            navigate("/Signup");
          }}
          className="
          border-t border-gray-700 lg:border-gray-200
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