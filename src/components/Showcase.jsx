import React from "react";
import "./Showcase.css"

function Showcase(){

    return (
        <div className="showcase-container">
            <h2>My Showcase</h2>
            <div className="image-container">
                <img src="https://lh3.googleusercontent.com/ci/AJFM8rwBrYDwhlUFg3Nl4DUeHmjmJBWm8iO3wf-ZN1lMxfR7pd1R8gmjdFYHK9UXICEZv9xQNpLoLw" alt="Example Art"/>
            </div>

            <p className="image-caption">Image Name</p>
        
        </div>
    )
}

export default Showcase;