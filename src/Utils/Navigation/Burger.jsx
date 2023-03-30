import React,{useState} from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Navigation from "./Navigation";
const Burger = () => {
const [open,setBurger] = useState(false)
  return (
    <>
 <div className="burger" >
 <MenuOpenIcon />
 </div>
    </>
  );
};

export default Burger;
