import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Calls from "./pages/Calls";
import People from "./pages/People";
import Settings from "./pages/Settings";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        <Route
          path="/"
          element={<Splash />}
        />


        <Route
          path="/Onboarding"
          element={<Onboarding />}
        />


        <Route
          path="/Signup"
          element={<Signup />}
        />


        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />



        {/* Main Pages */}

        <Route
          path="/home"
          element={<Home />}
        />


        <Route
          path="/chat/:id"
          element={<Chat />}
        />


        <Route
          path="/calls"
          element={<Calls />}
        />


        <Route
          path="/People"
          element={<People />}
        />


        <Route
          path="/settings"
          element={<Settings />}
        />


      </Routes>


    </BrowserRouter>

  );
}


export default App;