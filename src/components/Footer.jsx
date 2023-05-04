import React from "react";
import "./styles/Footer.css"

function Footer(){
    
    const date = new Date();
    const currentYear = date.getFullYear();
    
    return(
        <div className="footer">
            <p className="footer-text">©{currentYear} Lantian Art Studio. All rights reserved</p>
        </div>
    )
}

export default Footer;