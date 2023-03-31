import { Link } from "react-router-dom";
import React from "react";
import "../Style/index.css";
import "animate.css";
import Navigation from "../Utils/Navigation/Navigation";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <h1>
            <Link className="heading" to="/">
              Ishan...
            </Link>
          </h1>
        </div>

        <Navigation />
      </div>
    </>
  );
};

export default Navbar;
