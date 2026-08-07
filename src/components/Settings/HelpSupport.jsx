import {
  CircleHelp,
  FileText,
  MessageSquare,
  Mail,
  Star,
  ChevronRight,
} from "lucide-react";


const HelpSupport = () => {
  return (
    <>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white lg:text-black">
        Help & Support
      </h2>

      <p className="text-gray-400 lg:text-gray-500 mt-2 mb-8">
        Find answers and contact our support team
      </p>



      {/* Support Card */}
      <div className="bg-black lg:bg-white text-white lg:text-black rounded-2xl border-none lg:border border-gray-700 lg:border-gray-300 overflow-hidden">


        <h3 className="px-6 py-4 text-lg font-semibold border-b border-gray-700 lg:border-gray-300">
          Support
        </h3>



        {/* Help Center */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <CircleHelp 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Help Center
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Browse frequently asked questions
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* User Guide */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <FileText 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                User Guide
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Learn how to use the app
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Contact Support */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">

          <div className="flex items-center gap-4">

            <MessageSquare 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Contact Support
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Chat with our support team
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Email Support */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">

            <Mail 
              size={22} 
              className="text-gray-400" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Email Support
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                support@chatapp.com
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Rate App */}
        <div className="flex items-center justify-between px-6 py-5">


          <div className="flex items-center gap-4">

            <Star 
              size={22} 
              className="text-yellow-500" 
            />

            <div>

              <h4 className="font-medium text-white lg:text-black">
                Rate Our App
              </h4>

              <p className="text-sm text-gray-400 lg:text-gray-500">
                Share your feedback
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>


      </div>


    </>
  );
};

export default HelpSupport;