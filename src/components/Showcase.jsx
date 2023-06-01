import React from "react";
import "./styles/Showcase.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import landscape1 from "./images/landscape1.jpeg";
import teapot1 from "./images/teapot1.JPG";
import boat2 from "./images/boat2.jpg";
import fruits1 from "./images/fruits1.jpeg";
import girl4 from "./images/girl4.PNG";

import facility1 from "./images/facility1.jpg";
import facility2 from "./images/facility2.jpg";
import facility3 from "./images/facility3.jpg";
import facility4 from "./images/facility4.jpg";
import facility5 from "./images/facility5.jpg";


function Showcase(){

    return (
        <div className="slideshow-container">
            <Carousel className="slideshow">
                <div className="slideshow-image">
                    <img src={facility1} />
                </div>
                <div className="slideshow-image">
                    <img src={facility2} />
                </div>
                <div className="slideshow-image">
                    <img src={facility3} />
                </div>
                <div className="slideshow-image">
                    <img src={facility4} />
                </div>
                <div className="slideshow-image">
                    <img src={facility5} />
                </div>
        </Carousel>
        
        </div>

    );
}

export default Showcase;