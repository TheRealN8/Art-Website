import React from "react";
import './styles/Courses.css'
import { Link } from "react-router-dom";
import clsx from "clsx";

const CourseCard = ({ isMiddle, link, image, title }) => {

    return(
        
        <div className="card-container" style={{margin: isMiddle ? '0 5%' : '0'}}>
          <Link to={link} style={{textDecoration: 'none', color: 'black'}}>
            <img src={image} alt="image" className="card-image"/>
            <h2>{title}</h2>
            <p style={{padding: '0 10%'}}> Ut suscipit faucibus massa, fringilla rhoncus augue sagittis vel. Quisque tempor a lorem sed suscipit. Donec cursus, turpis ut 
            sollicitudin porttitor</p>
          </Link>
        </div>
        
    );
}

export default CourseCard;