import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";
import TopNav from "./Components/Shared/TopNav/TopNav";
import './App.css'
function App() {
  return (
    <>
      {/* <Navbar /> */}

      <TopNav />
      <Routes>

        <Route index element={<Home />} />
      </Routes>


    </>
  );
}

export default App;
