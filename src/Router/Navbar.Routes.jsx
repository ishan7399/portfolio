import Home from "../Components/Home.jsx";
import About from "../Components/About";
import Technology from "../Components/Technology";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import { Routes, Route } from "react-router-dom";
import React from "react";

const NavbarRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default NavbarRoutes;
