import SettingsMenu from "../components/Settings/SettingsMenu";
import profile from "../assets/images/chat-img-8.webp";
import { Pencil } from "lucide-react";
import { useState } from "react";

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

      <h1 className="text-3xl font-bold mb-8">
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
          border border-gray-800
          rounded-2xl
          p-6
          lg:bg-gray-100
          lg:border-gray-200
          "
        >


          {/* My Account */}
          {
            selected === "My Account" && (

              <>

                <h2 className="text-2xl font-semibold">
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
                      className="
                      w-20
                      h-20
                      rounded-full
                      object-cover
                      "
                    />


                    <div>

                      <h3 className="text-xl font-semibold">
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
                    flex
                    items-center
                    gap-2
                    bg-black
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    "
                  >

                    <Pencil size={18}/>
                    Edit

                  </button>


                </div>

              </>
            )
          }




          {/* Notifications */}
          {
            selected === "Notifications" && (

              <div>

                <h2 className="text-2xl font-semibold">
                  Notifications
                </h2>

                <p className="text-gray-400 mt-2">
                  Manage your notifications
                </p>

              </div>

            )
          }




          {/* Privacy */}
          {
            selected === "Privacy & Security" && (

              <div>

                <h2 className="text-2xl font-semibold">
                  Privacy & Security
                </h2>

                <p className="text-gray-400 mt-2">
                  Control your privacy settings
                </p>

              </div>

            )
          }



        </div>


      </div>


    </div>
  )
}

export default Settings;