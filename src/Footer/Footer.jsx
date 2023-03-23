import React from "react";
import Parent from '../Utils/Contact/Parent'

const Footer = () =>{
    return(
        <>
            <div className="footer-container">
            <Parent />
               <div className="copyright">
               <p>@2023  Copyright: Ishan Tapa</p>
               </div>

               <div className="email">
                <p>ishantapa88@gamil.com</p>
               </div>
            </div>
        </>
    )
}

export default Footer