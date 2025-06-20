import React from "react";
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";
import Dock from "../components/dock";
import Footer from "../components/footer";
import Search from "../components/search";


const Home = () => {
  
  return (
    <div>
      <Dashboard />
      <Search/>
      <Footer />
    </div>
  );
};

export default Home;
