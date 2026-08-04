import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Calls from "./pages/Calls";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/calls" element={<Calls />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;