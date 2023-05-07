import React from "react";
import "./styles/Showcase.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import landscape1 from "./images/landscape1.jpeg";
import teapot1 from "./images/teapot1.JPG";
import boat2 from "./images/boat2.jpg";
import fruits1 from "./images/fruits1.jpeg";
import girl4 from "./images/girl4.PNG";

function Showcase(){

    return (
        <div className="slideshow-container">
            <Carousel className="slideshow">
                <div className="slideshow-image">
                    <img src={landscape1} />
                </div>
                <div className="slideshow-image">
                    <img src={teapot1} />
                </div>
                <div className="slideshow-image">
                    <img src={boat2} />
                </div>
                <div className="slideshow-image">
                    <img src={fruits1} />
                </div>
                <div className="slideshow-image">
                    <img src={girl4} />
                </div>
        </Carousel>
        
        </div>

    );
}

export default Showcase;