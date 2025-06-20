import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/aboutus";
import "./App.css";
import Profile from "./pages/Profile";
import Create from "./components/creat";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { AllNotes } from "./components/allnote";
// import Recent from "./components/recent";
import Categories from './components/categories';
function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/meowstudy/" element={<Home />} />
        <Route path="/meowstudy/about-us" element={<Aboutus />} />
        <Route path="/meowstudy/profile" element={<Profile />} />
        <Route path="/meowstudy/create" element={<Create />} />
        <Route path="/meowstudy/all-notes" element={<AllNotes />} />
        <Route path="/meowstudy/categories" element={<Categories />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
