import {
  User,
  Mail,
  Phone,
  FileText,
  ChevronRight,
} from "lucide-react";

const AccountInfo = () => {
  return (
    <div
      className="
      mt-6
      bg-[#111216]
      lg:bg-white
      border border-gray-700
      lg:border-gray-300
      rounded-2xl
      overflow-hidden
      "
    >

      {/* Username */}
     <div className="flex items-center justify-between px-4 md:px-6 py-5 border-b border-gray-300">
  <div className="flex items-center gap-3">
    <User size={22} className="text-gray-500" />

    <span className="text-white lg:text-black text-base md:text-lg">
      Username
    </span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-gray-500 text-sm md:text-base break-all text-right">
      sumaya_17
    </span>

    <ChevronRight size={18} className="text-gray-500 shrink-0" />
  </div>
</div>

     <div className="flex items-center justify-between px-4 md:px-6 py-5 border-b border-gray-300">
  <div className="flex items-center gap-3">
    <Mail size={22} className="text-gray-500" />

    <span className="text-white lg:text-black text-base md:text-lg">
      Email
    </span>
  </div>

  <div className="flex items-center gap-2 max-w-42.5">
    <span className="text-gray-500 text-sm break-all text-right">
      sumaya@.com
    </span>

    <ChevronRight size={18} className="text-gray-500 shrink-0" />
  </div>
</div>

      <div className="flex items-center justify-between px-4 md:px-6 py-5 border-b border-gray-300">
  <div className="flex items-center gap-3">
    <Phone size={22} className="text-gray-500" />

    <span className="text-white lg:text-black text-base md:text-lg">
      Phone
    </span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-gray-500 text-sm text-right">
       3001234567
    </span>

    <ChevronRight size={18} className="text-gray-500 shrink-0" />
  </div>
</div>

     <div className="flex items-center justify-between px-4 md:px-6 py-5">
  <div className="flex items-center gap-3">
    <FileText size={22} className="text-gray-500" />

    <span className="text-white lg:text-black text-base md:text-lg">
      Bio
    </span>
  </div>

  <div className="flex items-center gap-2 max-w-45">
    <span className="text-gray-500 text-sm wrap-break-words text-right">
      Hey there! I am using ChatApp.
    </span>

    <ChevronRight size={18} className="text-gray-500 shrink-0" />
  </div>
</div>
    </div>
  );
};

export default AccountInfo;