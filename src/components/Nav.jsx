import React from "react";
import "./styles/Nav.css";
import { Link } from "react-router-dom";

function Nav(){

    return(

        <div className="navBar">
            <Link to={'/'}>
                <button className="navButton">Home</button>
            </Link>
            <Link to={'/artwork'}>
                <button className="navButton">Artwork</button>
            </Link>
            <Link to={'/courses'}>
                <button className="navButton">Courses</button>
            </Link>
            <Link to={'/about'}>
                <button className="navButton">About Me</button>
            </Link>
        </div>
        

    )

}

export default Nav;