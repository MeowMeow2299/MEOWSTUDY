import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/aboutus";
import "./App.css"
import Profile from "./pages/Profile";
import Create from "./components/creat";

function App() {
  return (
    <Routes>
      <Route path="/meowstudy/" element={<Home />} />
      <Route path="/meowstudy/about-us" element={<Aboutus />} />
      <Route path="/meowstudy/profile" element={<Profile />} />
       <Route path="/meowstudy/create" element={<Create />} />
    </Routes>
  );
}

export default App;