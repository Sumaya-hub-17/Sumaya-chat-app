import { Menu, Search, Plus } from "lucide-react";




const TopBar = () =>{
  return(
    <>
    <header className="flex items-center justify-between px-5 py-4 md:hidden">
      {/* Left */}

      <button>
        <Menu className="w-6 h-6"/>
      </button>

      {/* center */}

      <h1 className="text-2xl font-bold">
        Chat <span className="text-purple-600">App</span> </h1>

        {/* right */}

        <div className="flex items-center gap-4">
          < Search className="w-5 h-5 text-black"/>
          <Plus className="w-6 h-6 text-black"/>
        </div>
    </header>
    </>
  )
}

export default TopBar;