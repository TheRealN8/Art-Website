import React, { useState, useEffect } from "react";
import "./styles/Nav.css";
import { Link } from "react-router-dom";

function Nav(){

    const [artworkDropdown, setArtworkDropdown] = useState(false);
    const [courseDropdown, setCourseDropdown] = useState(false);
    
    const toggleArtworkDropdown = () => setArtworkDropdown(!artworkDropdown);
    const toggleCourseDropdown = () => setCourseDropdown(!courseDropdown);

    return(
        <div className="navBar">
            <Link to={'/'}>
                <button className="navButton">Home</button>
            </Link>
            <Link to={'/artwork'} onMouseEnter={toggleArtworkDropdown} onMouseLeave={toggleArtworkDropdown}>
                <button className="navButton">Artwork</button>
            </Link>
            {artworkDropdown && 
                <div className='artwork-dropdown'>
                    <Link to={'/'}>
                        <button className="navButton">Home</button>
                    </Link>
                </div>
            }
            <Link to={'/courses'} onMouseEnter={toggleCourseDropdown} onMouseLeave={toggleCourseDropdown}>
                <button className="navButton">Courses</button>
            </Link>
            <Link to={'/about'}>
                <button className="navButton">About Me</button>
            </Link>
        </div>
        

    )

}

export default Nav;