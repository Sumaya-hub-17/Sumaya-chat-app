import { useState } from "react";
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

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Splash darkMode={darkMode} />}
        />

        <Route
          path="/Onboarding"
          element={<Onboarding darkMode={darkMode} />}
        />

        <Route
          path="/Signup"
          element={<Signup darkMode={darkMode} />}
        />

        <Route
          path="/login"
          element={<Login darkMode={darkMode} />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword darkMode={darkMode} />}
        />

        <Route
          path="/home"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/chat/:id"
          element={<Chat darkMode={darkMode} />}
        />

        <Route
          path="/calls"
          element={<Calls darkMode={darkMode} />}
        />

        <Route
          path="/People"
          element={<People darkMode={darkMode} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;