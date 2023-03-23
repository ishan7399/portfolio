import { NavLink,Link } from "react-router-dom";
import React from "react";
import "../Style/index.css";

const Navbar = () => {
  return (
    <>

        <div className="navbar-container">
          <div className="logo-container">
            <h1><Link className="heading" to="/">Ishan...</Link></h1>
          </div>
          <div className="menu-container">
            <div className="navigation">
              <ul>
                <li>
                  <NavLink className="field" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="field" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="field" to="/tech">
                    Technology
                  </NavLink>
                </li>
                <li>
                  <NavLink className="field" to="/edu">
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink className="field" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Navbar;
