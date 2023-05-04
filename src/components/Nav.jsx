import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

function Nav(){

    const [artworkDropdown, setArtworkDropdown] = useState(false);
    const [courseDropdown, setCourseDropdown] = useState(false);
    
    const toggleAD = () => setArtworkDropdown(!artworkDropdown);
    const toggleCD = () => setCourseDropdown(!courseDropdown);

    return(
        <div className="navBar">
            <Link to={'/'}>
                <button className="navButton">Home</button>
            </Link>
            <div style={{height: artworkDropdown ? 'fit-content' : '10px'}} className={clsx('dropdown', {'dropdown-open': artworkDropdown})} onMouseEnter={toggleAD} onMouseLeave={toggleAD} >
                <Link to={'/artwork'} >
                    <button className="navButton">Artwork</button>
                </Link>
                {artworkDropdown && 
                    <NavDropdown />
                }
            </div>
            {/* <Link to={'/courses'} onMouseEnter={toggleCD} onMouseLeave={toggleCD}>
                <button className="navButton">Courses</button>
            </Link> */}
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