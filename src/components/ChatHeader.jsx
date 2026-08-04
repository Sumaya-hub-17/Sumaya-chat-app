import {
  Phone,
  Video,
  Search,
  EllipsisVertical,
} from "lucide-react";

import Aliceimg from "../assets/images/chat-img-8.webp";

const  ChatHeader = () =>{
    return(
        <>
         <header className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-200">
            {/* left */}

            <div className="flex items-center gap-4">
                <div className="relative">
                         <img
                           src={Aliceimg}
                           alt="Alice"
                           className="w-14 h-14 rounded-full object-cover"
                         />

                         <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                </div>

                <div>
                          <h2 className="text-lg font-semibold text-gray-900">
                            Alice
                          </h2>

                          <p className="text-sm text-green-500">
                            online
                          </p>
                </div>

            </div>

            {/* right */}

            <div className="flex items-center gap-5">
                <button className="text-gray-500 hover:text-[#5B4CF6] transition">
                     <Phone size={22} />
                </button>
                <button className="text-gray-500 hover:text-[#5B4CF6] transition">
                     <Video size={22} />
                </button>


        <button className="text-gray-500 hover:text-[#5B4CF6] transition">
          <Search size={22} />
        </button>


        <button className="text-gray-500 hover:text-[#5B4CF6] transition">
          <EllipsisVertical size={22} />
        </button>
            </div>
         </header>
        </>
    )
}

export default ChatHeader;