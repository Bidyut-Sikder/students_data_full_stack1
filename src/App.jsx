import {useState} from "react";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import {HashRouter, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
     
      <Router>
       <Navbar />
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
