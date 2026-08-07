import {
  Info,
  Smartphone,
  Shield,
  FileText,
  Heart,
  ChevronRight,
} from "lucide-react";


const About = () => {
  return (
    <>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white lg:text-black">
        About
      </h2>

      <p className="text-gray-400 lg:text-gray-500 mt-2 mb-8">
        Learn more about this application
      </p>



      {/* About Card */}
      <div className="bg-black lg:bg-white text-white lg:text-black rounded-2xl border-none lg:border border-gray-700 lg:border-gray-300 overflow-hidden">


        <h3 className="px-6 py-4 text-lg font-semibold border-b border-gray-700 lg:border-gray-300">
          Application
        </h3>




        {/* App Version */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">

            <Smartphone 
              size={22} 
              className="text-gray-400" 
            />


            <div>

              <h4 className="font-medium text-white lg:text-black">
                App Version
              </h4>


              <p className="text-sm text-gray-400 lg:text-gray-500">
                Version 1.0.0
              </p>

            </div>

          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Privacy Policy */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">


            <Shield 
              size={22} 
              className="text-gray-400" 
            />


            <div>

              <h4 className="font-medium text-white lg:text-black">
                Privacy Policy
              </h4>


              <p className="text-sm text-gray-400 lg:text-gray-500">
                Read our privacy policy
              </p>

            </div>


          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />

        </div>




        {/* Terms & Conditions */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">


            <FileText 
              size={22} 
              className="text-gray-400" 
            />


            <div>

              <h4 className="font-medium text-white lg:text-black">
                Terms & Conditions
              </h4>


              <p className="text-sm text-gray-400 lg:text-gray-500">
                View terms of service
              </p>


            </div>


          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />


        </div>




        {/* Credits */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700 lg:border-gray-300">


          <div className="flex items-center gap-4">


            <Heart 
              size={22} 
              className="text-red-500" 
            />


            <div>


              <h4 className="font-medium text-white lg:text-black">
                Credits
              </h4>


              <p className="text-sm text-gray-400 lg:text-gray-500">
                Built with ❤️ using React & Tailwind CSS
              </p>


            </div>


          </div>


          <ChevronRight 
            size={20} 
            className="text-gray-400" 
          />


        </div>




        {/* About App */}
        <div className="flex items-center justify-between px-6 py-5">


          <div className="flex items-center gap-4">


            <Info 
              size={22} 
              className="text-gray-400" 
            />


            <div>


              <h4 className="font-medium text-white lg:text-black">
                About App
              </h4>


              <p className="text-sm text-gray-400 lg:text-gray-500">
                Learn more about Chat App
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


export default About;