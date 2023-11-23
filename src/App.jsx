import React from "react";
import Navmenu from "./layout/Navmenu";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import ServicePage from "./pages/ServicePage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialPage from "./pages/TestimonialPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teampage/" element={<TeamPage />} />
          <Route path="/servicepage/" element={<ServicePage />} />
          <Route path="/projectpage" element={<ProjectPage />} />
          <Route path="/testimonialpage" element={<TestimonialPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
