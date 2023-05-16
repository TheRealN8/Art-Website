import React from "react";
import "./styles/Gallery-card.css";



const Card = ({ img, toggle }) => {

    return(
        <div onClick={() => toggle(img)} className="card">
            <img src={img} alt="image" className="card-image"/>
        </div>

    );


}

export default Card;