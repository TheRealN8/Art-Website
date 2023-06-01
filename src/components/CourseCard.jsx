import React from "react";
import './styles/Courses.css'
import { Link } from "react-router-dom";
import clsx from "clsx";

const CourseCard = ({ isMiddle, link, image, title, text}) => {

    return(
        
        <div className="card-container" style={{margin: isMiddle ? '10px 10px 10px 4%' : '0'}}>
          <Link to={link} style={{textDecoration: 'none', color: 'black'}}>
            <img src={image} alt="image" className="card-image-gallery"/>
            <h2>{title}</h2>
            <p style={{padding: '0 10%'}}> {text}</p>
          </Link>
        </div>
        
    );
}

export default CourseCard;