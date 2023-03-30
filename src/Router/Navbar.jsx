import { NavLink, Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import React, { useState } from "react";
import "../Style/index.scss";
import 'animate.css';

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const SideBar = ()=> setBurger(!burger)
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
        <div className="menu-container">
          <div className={burger?"burger-navigation":"navigation"}  >
            <ul className="animate__backInDown" >
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
            <button className="burger-icon">
              {burger ? <MenuOpenIcon /> : <MenuOpenIcon />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
