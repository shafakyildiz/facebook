import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="register" element={<Register />} />
    <Route path="login" element={<Login />} />
  </Routes>
}

export default App;
