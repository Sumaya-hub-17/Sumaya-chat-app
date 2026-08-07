import SettingsMenu from "../components/Settings/SettingsMenu";
import profile from "../assets/images/chat-img-8.webp";
import { Pencil } from "lucide-react";
import { useState } from "react";
import AccountInfo from "../components/Settings/AccountInfo";
import Preferences from "../components/Settings/Preferences";
import Notifications from "../components/Settings/Notifications";
import PrivacySecurity from "../components/Settings/PrivicySecurity";
import Appearance from "../components/Settings/Appearance";
import ChatSettings from "../components/Settings/ChatSettings";
import DataStorage from "../components/Settings/DataStorage";
import HelpSupport from "../components/Settings/HelpSupport";
import About from "../components/Settings/About";

const Settings = () => {

  const [selected, setSelected] = useState("My Account");

  return (
    <div
      className="
      min-h-screen
      bg-black
      text-white
      p-4
      lg:p-8
      lg:bg-white
      lg:text-black
      "
    >

     <h1 className="text-3xl font-bold mb-8 text-white lg:text-black">
        Settings
      </h1>


      <div
        className="
        flex
        flex-col
        lg:flex-row
        gap-6
        "
      >


        {/* Left Menu */}
        <SettingsMenu
          selected={selected}
          setSelected={setSelected}
        />



        {/* Right Content */}
        <div
            className="
            flex-1
            bg-[#111216]
            text-white
            border border-gray-800
            rounded-2xl
            p-6
            lg:bg-white
            lg:text-black
            lg:border-gray-200
            "
          >


          {/* My Account */}
          {
            selected === "My Account" && (

              <>

                <h2 className="text-2xl font-semibold text-white lg:text-black">
                  My Account
                </h2>


                <p className="text-gray-400 mt-2 lg:text-gray-600">
                  Manage your profile information
                </p>



                {/* Profile */}
                <div
                  className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-gray-700
                  lg:border-gray-300
                  pb-6
                  mt-6
                  "
                >

                  <div className="flex items-center gap-5">

                    <img
                      src={profile}
                      alt="Emma Watson"
                      className="
                      w-20
                      h-20
                      rounded-full
                      object-cover
                      "
                    />


                    <div>

                      <h3 className="text-xl font-semibold text-white lg:text-black">
                        Emma Watson
                      </h3>


                      <p className="text-gray-500">
                        emma@gmail.com
                      </p>


                      <p className="text-green-500">
                        Online
                      </p>

                    </div>

                  </div>



                  <button
                    className="
                      items-center
                      gap-2
                      bg-white
                      text-black
                      px-4
                      py-2
                      rounded-xl
                      lg:bg-black
                      lg:text-white
                      hidden md:flex
                     "
                  >

                    <Pencil size={18}/>
                    Edit

                  </button>

                </div>
                    <AccountInfo />
                    <Preferences />

              </>
            )
          }




          {/* Notifications */}
                     {
                    selected === "Notifications" && (
                      <Notifications />
                    )
                  }





          {/* Privacy */}
          
                              {
                  selected === "Privacy & Security" && (
                    <PrivacySecurity />
                  )
                }
           

           {/* apprence */}
           {
             selected === "Appearance" && (
               <Appearance />
             )
           }

           {/* Chat setting */}

           {
             selected === "Chat Settings" && (
               <ChatSettings />
             )
           }
              

              {/* Data storage */}

              {
                selected === "Data & Storage" && (
                  <DataStorage />
                )
              }

              {/* Help & support */}

              {
                selected === "Help & Support" && (
                  <HelpSupport />
                )
              }

              {/* About */}

              {
                selected === "About" && (
                  <About />
                )
              }

        </div>


      </div>


    </div>
  )
}

export default Settings;