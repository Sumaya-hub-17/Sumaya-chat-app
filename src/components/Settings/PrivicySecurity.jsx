import {
  Shield,
  Lock,
  KeyRound,
  Smartphone,
  Eye,
  UserX,
  ChevronRight,
} from "lucide-react";

import ToggleSwitch from "../ToggleSwitch";

const PrivicySecurity = () => {
  return (
    <>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white lg:text-black">
        Privacy & Security
      </h2>

      <p className="text-gray-400 lg:text-gray-500 mt-2 mb-8">
        Control your privacy and security settings
      </p>


      {/* Privacy Card */}
      <div className="bg-black lg:bg-white text-white lg:text-black rounded-2xl border-none lg:border border-gray-700 lg:border-gray-300 overflow-hidden mb-6">

        <h3 className="px-6 py-4 text-lg font-semibold border-b border-gray-700 lg:border-gray-300">
          Privacy
        </h3>


        {/* Last Seen */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <Eye size={22} className="text-gray-400" />

            <div>
              <h4 className="text-white lg:text-black font-medium">
                Last Seen
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Show your last seen status
              </p>
            </div>

          </div>

          <ChevronRight size={20} className="text-gray-400" />

        </div>


        {/* Profile Visibility */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <Shield size={22} className="text-gray-400" />

            <div>
              <h4 className="text-white lg:text-black font-medium">
                Profile Visibility
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Control who can see your profile
              </p>
            </div>

          </div>

          <ChevronRight size={20} className="text-gray-400" />

        </div>


        {/* Blocked Contacts */}
        <div className="flex items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">

            <UserX size={22} className="text-gray-400" />

            <div>
              <h4 className="text-white lg:text-black font-medium">
                Blocked Contacts
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Manage your blocked contacts
              </p>
            </div>

          </div>

          <ChevronRight size={20} className="text-gray-400" />

        </div>


      </div>



      {/* Security Card */}
      <div className="bg-black lg:bg-white text-white lg:text-black rounded-2xl border-none lg:border border-gray-700 lg:border-gray-300 overflow-hidden">


        <h3 className="px-6 py-4 text-lg font-semibold border-b border-gray-700 lg:border-gray-300">
          Security
        </h3>



        {/* Change Password */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <Lock size={22} className="text-gray-400" />

            <div>

              <h4 className="text-white lg:text-black font-medium">
                Change Password
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Update your account password
              </p>

            </div>

          </div>


          <ChevronRight size={20} className="text-gray-400" />

        </div>




        {/* Two Factor */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">

            <KeyRound size={22} className="text-gray-400" />


            <div>

              <h4 className="text-white lg:text-black font-medium">
                Two-Factor Authentication
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Add an extra layer of security
              </p>

            </div>

          </div>


          <ToggleSwitch />

        </div>




        {/* Device Lock */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">

            <Smartphone size={22} className="text-gray-400" />


            <div>

              <h4 className="text-white lg:text-black font-medium">
                Device Lock
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Lock the app using your device security
              </p>

            </div>

          </div>


          <ToggleSwitch />

        </div>




        {/* Login Alerts */}
        <div className="flex items-center justify-between px-6 py-5">


          <div className="flex items-center gap-4">

            <Eye size={22} className="text-gray-400" />


            <div>

              <h4 className="text-white lg:text-black font-medium">
                Login Alerts
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Get notified when your account is accessed
              </p>

            </div>

          </div>


          <ToggleSwitch />

        </div>


      </div>


    </>
  );
};

export default PrivicySecurity;