import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import NavBar from "./layout/NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
     <NavBar />
        <Routes>
      
          <Route path="/" element={<HomePage />} />
          <Route path="/registration/" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
