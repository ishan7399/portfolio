import React, { useState } from "react";
import "../../Style/index.css";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
const Navigation = () => {
  const [burger, setBurger] = useState(false);

  const Toogle = () => {
    const ShowNavbar = () => {
      setBurger(burger);
    };
    const HideNavbar = () =>{
        const hideNavbar = {
            display:'none'
            
        }
    }
  };

  return (
    <>
      <div className="menu-container">
        <div className={burger ? "burger-nav" : "navigation"}>
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
        <button className="burger-icon" onClick={Toogle}>
          <Burger />
        </button>
      </div>
    </>
  );
};

export default Navigation;
