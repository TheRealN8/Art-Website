import React from "react";
import "./styles//Header.css";

import logo1 from "./images/logo1.png";

function Heading() {
    
    return (

        <div className="heading">
            <img className="logo" src={logo1} alt="Logo"/>
            <h1>Lantian Art Studio</h1> 
        </div>
    )

};

export default Heading;
