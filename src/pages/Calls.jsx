import { useState } from "react";
import { ChevronRight } from "lucide-react";

import CallsHeader from "../components/CallsHeader";
import CallsTabs from "../components/CallsTabs";
import CallsSearch from "../components/CallsSearch";
import CallsCard from "../components/Callcard";
import CallDetails from "../components/CallDetails";

import calls from "../Data/Calls";

const Calls = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white lg:bg-white lg:text-black p-4 lg:p-8">
{!showDetails && (
  <>
    <CallsHeader />
    <CallsTabs setShowDetails={setShowDetails} />
  </>
)}

      {/* All Calls Screen */}
      {!showDetails && (
        <>
          <CallsSearch />

          <div className="flex items-center justify-between mt-6 mb-4">
            <h2 className="text-xl font-semibold text-black">
              Recent Calls
            </h2>

            <button className="flex items-center gap-1 text-purple-500">
              <span>See all</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {calls.map((call) => (
              <CallsCard
                key={call.id}
                call={call}
              />
            ))}
          </div>
        </>
      )}

      {/* Missed Screen */}
     {showDetails && (
  <CallDetails setShowDetails={setShowDetails} />
)}

    </div>
  );
};

export default Calls;