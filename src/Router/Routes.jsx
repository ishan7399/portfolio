import Navbar from "./Navbar";
import NavbarRoutes from "./Navbar.Routes";
import { BrowserRouter } from "react-router-dom";
import "../Style/index.css";
import React from "react";

const Routes = () => {

  
  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <Navbar></Navbar>
          <div className="container">
            <NavbarRoutes />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};
export default Routes;
