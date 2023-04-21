import React from "react";
import "./Showcase.css"

function Showcase(){

    return (
        <div className="showcase-container">
            <h2>My Showcase</h2>
            <div className="image-container">
                <img src="./images/exampleArt.jpg" alt="Example Art"/>
            </div>

            <p className="image-caption">Example work</p>
        
        </div>
    )
}

export default Showcase;