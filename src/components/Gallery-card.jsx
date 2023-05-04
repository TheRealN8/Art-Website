import React from "react";
import "./styles/Gallery-card.css";



function Card(props){

    return(
        <div className="card">
            <img src={props.img} alt="image" className="card-image"/>
        </div>

    );


}

export default Card;