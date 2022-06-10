import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";
import TopNav from "./Components/Shared/TopNav/TopNav";
import './App.css'
import Footer from "./Components/Footer/Footer";
import Project1 from "./Components/Projects/Project1";
import Project2 from "./Components/Projects/Project2";
import Project3 from "./Components/Projects/Project3";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Blogs from "./Components/Blogs/Blogs";
function App() {

  // useEffect() 
  AOS.init();

  return (
    <>
      <Navbar />

      <TopNav />
      <Routes>
        <Route index element={<Home />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
      </Routes>




      <Footer />


    </>
  );
}

export default App;
