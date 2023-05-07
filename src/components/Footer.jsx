import React from "react";
import "./styles/Footer.css"

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Footer(){
    
    const date = new Date();
    const currentYear = date.getFullYear();
    
    return(
        <div className="footer">
            <Link to={'https://www.instagram.com/lantianart/?igshid=YmMyMTA2M2Y%3D'} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon"/>
            </Link>
            <Link to={'https://www.youtube.com/'} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="icon"/>
            </Link>
            <Link to={'https://www.linkedin.com/feed/'} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </Link>
            
            <p className="footer-text">©{currentYear} Lantian Art Studio. All rights reserved</p>
        </div>
    )
}

export default Footer;