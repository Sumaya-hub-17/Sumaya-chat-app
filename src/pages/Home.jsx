import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import PinnedSection from "../components/PinnedSection";
import RecentChats from "../components/RecentChats";
import BottomNavigation from "../components/BottomNavigation";
import DesktopSidebar from "../components/DesktopSidebar";
import ChatSidebarHeader from "../components/ChatSidebarHeader";
import WelcomeScreen from "../components/WelcomeScreen";

import Chat from "./Chat";
import Calls from "./Calls";
import People from "./People";
import Settings from "./Settings";

import { useState } from "react";

const Home = () => {

  const [selectedChat, setSelectedChat] = useState(null);
  const [activePage, setActivePage] = useState("welcome");


  return (
    <>

      {/* ================= Mobile Layout ================= */}

      <div className="lg:hidden min-h-screen bg-black text-white">

        {
          selectedChat ? (

            <Chat
              chat={selectedChat}
              setSelectedChat={setSelectedChat}
            />

          ) : (

            <>

              <div className="w-full pb-24">


                {
                  activePage === "welcome" && (
                    <>
                      <TopBar />

                      <SearchBar />

                      <PinnedSection />

                      <RecentChats
                        setSelectedChat={setSelectedChat}
                      />
                    </>
                  )
                }



                {
                  activePage === "calls" && (
                    <Calls />
                  )
                }



                {
                  activePage === "people" && (
                    <People />
                  )
                }



                {
                  activePage === "settings" && (
                    <Settings />
                  )
                }


              </div>



              <BottomNavigation
                activePage={activePage}
                setActivePage={setActivePage}
              />

            </>

          )

        }


      </div>





      {/* ================= Desktop Layout ================= */}

      <div className="hidden lg:flex min-h-screen bg-[#F7F7FC]">


        <DesktopSidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />



        {
          activePage === "welcome" && (

            <div className="w-100 bg-white border-r border-gray-200">


              <ChatSidebarHeader />

              <SearchBar />

              <PinnedSection />

              <RecentChats
                setSelectedChat={setSelectedChat}
              />


            </div>

          )
        }



        <div className="flex-1 min-h-screen overflow-hidden">


          {
            activePage === "calls" ? (

              <Calls />

            ) : activePage === "people" ? (

              <People />

            ) : activePage === "settings" ? (

              <Settings />

            ) : selectedChat ? (

              <Chat
                chat={selectedChat}
              />

            ) : (

              <WelcomeScreen />

            )
          }


        </div>


      </div>


    </>
  );
};


export default Home;