import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

function Nav(){
    const [courseDropdown, setCourseDropdown] = useState(false);
    
    const toggleCD = () => setCourseDropdown(!courseDropdown);

    return(
        <div className="navBar">
            <Link to={'/'}>
                <button className="navButton">Home</button>
            </Link>
            <Link to={'/artwork'} >
                <button className="navButton">Artwork</button>
            </Link>
            <div style={{height: courseDropdown ? 'fit-content' : '10px'}} className={clsx('dropdown', {'dropdown-open': courseDropdown})} onMouseEnter={toggleCD} onMouseLeave={toggleCD} >
                <Link to={'/courses'} >
                    <button className="navButton">Courses</button>
                </Link>
                {courseDropdown && 
                    <NavDropdown />
                }
            </div>
            <Link to={'/about'}>
                <button className="navButton">About Me</button>
            </Link>
        </div>
        

    )

}

export default Nav;