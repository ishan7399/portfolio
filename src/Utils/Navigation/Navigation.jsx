import React, { useState } from "react";
import "../../Style/index.css";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from '@mui/icons-material/Close';
const Navigation = () => {
  const [burger, setBurger] = useState(false);



  return (
    <>
      <div className="menu-container">
        <div className="navigation">
          <ul className={burger?"burger-nav":"desktop-nav"}
          onClick={() => setBurger(false)}
          
          >

            <li >
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
          <button className="burger-icon"
          onClick={() => setBurger(!burger)}
          >
      {burger?<CloseIcon/>:<MenuOpenIcon/>}
        </button>
        </div>
    
      </div>
    </>
  );
};

export default Navigation;
