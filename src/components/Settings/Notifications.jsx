  import {
    Bell,
    MessageCircle,
    Users,
    Phone,
    Heart,
    Volume2,
    Smartphone,
    UserPlus,
    Calendar,
    Download,
    ChevronRight,
  } from "lucide-react";
  import ToggleSwitch from "../ToggleSwitch";
  const Notifications = () => {
      return(
          <>
                {/* Heading */}
        <h2 className="text-3xl font-bold text-white lg:text-black">
          Notifications
        </h2>
        <p className="text-gray-500 mt-2 mb-8">
          Manage your notification preferences
        </p>
              {/* Message Notifications */}
      <div className="bg-black lg:bg-white rounded-2xl border-none lg:border border-gray-300 overflow-hidden text-white lg:text-black">
          <h3 className="px-6 py-4 font-semibold text-lg border-b border-gray-700 lg:border-gray-300 text-white lg:text-black">
            Message Notifications
          </h3>
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
    <div className="flex items-center gap-4">
      <MessageCircle size={22} className="text-gray-500" />
      <div>
       <h4 className="text-white lg:text-black font-medium">
          Message Notifications
        </h4>
        <p className="text-sm text-gray-400 lg:text-gray-500">
          Receive notifications for new messages
        </p>
      </div>
    </div>
    <ToggleSwitch defaultOn={true} />
  </div>
  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
    <div className="flex items-center gap-4 ">
      <Users size={22} className="text-gray-500" />
      <div>
        <h4 className="text-white lg:text-black font-medium">
          Group Notifications
        </h4>
        <p className="text-sm text-gray-400 lg:text-gray-500">
          Get updates from group chats
        </p>
      </div>
    </div>
    <ToggleSwitch defaultOn={true} />
  </div>  
  {/* Call Notifications */}
  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
    <div className="flex items-center gap-4 ">
      <Phone size={22} className="text-gray-500" />
      <div>
        <h4 className="text-white lg:text-black font-medium">
          Call Notifications
        </h4>
        <p className="text-sm text-gray-400 lg:text-gray-500">
          Get notified about incoming calls
        </p>
      </div>
    </div>
    <ToggleSwitch defaultOn={true} />
  </div>
  {/* Reaction Notifications */}
  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
    <div className="flex items-center gap-4">
      <Bell size={22} className="text-gray-500" />
      <div>
        <h4 className="text-white lg:text-black font-medium">
          Reaction Notifications
        </h4>
        <p className="text-sm text-gray-400 lg:text-gray-500">
          Receive notifications for message reactions
        </p>
      </div>
    </div>
    <ToggleSwitch defaultOn={true} />
  </div>
  {/* Notification Sound */}
  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
    <div className="flex items-center gap-4">
      <Volume2 size={22} className="text-gray-500" />
      <div>
       <h4 className="text-white lg:text-black font-medium">
          Notification Sound
        </h4>
       <p className="text-sm text-gray-400 lg:text-gray-500">
          Choose your notification sound
        </p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-gray-500">Default</span>
      <ChevronRight size={18} className="text-gray-500" />
    </div>
  </div>
  {/* Vibration */}
  <div className="flex items-center justify-between px-6 py-5">
    <div className="flex items-center gap-4">
      <Smartphone size={22} className="text-gray-500" />
      <div>
        <h4 className="text-white lg:text-black font-medium">
          Vibration
        </h4>
        <p className="text-sm text-gray-400 lg:text-gray-500">
          Vibrate for incoming notifications
        </p>
      </div>
    </div>
    <ToggleSwitch defaultOn={true} />
  </div>
          </div>
          {/* Other Notifications */}
  <div className="bg-black lg:bg-white rounded-2xl border-none lg:border border-gray-300 overflow-hidden mt-8 text-white lg:text-black">
     <h3 className="px-6 py-4 font-semibold text-lg border-b border-gray-700 lg:border-gray-300 text-white lg:text-black">
      Other Notifications
    </h3>
    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
    <div className="flex items-center gap-4">
      <UserPlus size={22} className="text-gray-500" />
      <div>
       <h4 className="text-white lg:text-black font-medium">
          New Contact Joined
        </h4>
        <p className="text-sm text-gray-400 lg:text-gray-500">
          Notify when your contacts join the app
        </p>
      </div>
    </div>
    <ToggleSwitch defaultOn={true} />
  </div>
  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">
    <div className="flex items-center gap-4">
      <Calendar size={22} className="text-gray-500" />
      <div>
        <h4 className="text-white lg:text-black font-medium">
          Reminders
        </h4>
        <p className="text-sm text-gray-400 lg:text-gray-500">
          Receive reminder notifications
        </p>
      </div>
    </div>
    <ToggleSwitch defaultOn={true} />
  </div>
  <div className="flex items-center justify-between px-6 py-5">
    <div className="flex items-center gap-4">
      <Download size={22} className="text-gray-500" />
      <div>
        <h4 className="text-white lg:text-black font-medium">
          App Updates
        </h4>
        <p className="text-sm text-gray-400 lg:text-gray-500">
          Notify about new app updates
        </p>
      </div>
    </div>
    <ToggleSwitch defaultOn={true} />
  </div>
    </div>
          </>
      )
  }
  export default Notifications;