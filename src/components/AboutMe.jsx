import React from "react";
import "./styles/AboutMe.css"

import aboutMePic from "./images/aboutMePic.JPG";
import qrcode from "./images/qrcode.jpg"

function AboutMe () {

    return(
        
        <div className="section">
            <h1>About Me</h1>
            <div className="about-info">
                <p className="text"> Mr. Jun Zhang is the director and the primary instructor of the Lantian Art Studio. 
                Mr. Zhang has a lifelong passion for art by being immersed in art since childhood. 
                In 1991, he graduating from the Zhangbei Normal School (with a specific mission for teacher education) 
                and then was nominated to pursue art in the department of Fine Art of Hebei Normal University 
                (currently the School of Fine Art and Design of the Hebei Normal University) due to his outstanding performance 
                and talent in visual art. In 1992, Mr. Zhang launched the “Lantian Art Studio” to teach children art lessons while 
                serving as the president of the department Student Union. 
                <br/> <br/>
                In 1995, Mr. Zhang graduated with honor from University and was seamlessly employed in the same department where he taught 
                a number of important courses including drawing basics and graphic design etc. 
                His art works have been exhibited in a variety of art shows and collected into the “China Art and Design Yearbook”. 
                In 2020, with his passion and dream in art, Mr. Zhang took an art journey in Europe for 3 years during which he visited 
                many world-famous galleries and museums. He also interacted with and learned from some local artists. 
                This experience opened a window for him to experience and learn a wide range of art styles, profoundly enriched 
                his experience in art and greatly strengthened his passion and dedication to art education. 
                <br/> <br/>
                In 2003, Mr. Zhang and his family landed Toronto where he continued his “Lantian Art Studio”. 
                The mission of the Studio is to ignite and develop interest and passion, sharpen professional skills in visual 
                art and design among individuals of different ages, and prepare a well-rounded portfolio for their future pursuit in art. 
                Mr. Zhang has taught many excellent students who are now studying art at different colleges and universities. 
                He has been honored as the model of “A virtuous and nurturing teacher in the art garden” by his students and colleges. 
                </p> 
                <img className="about-image" src={aboutMePic}/>
                
                
            </div>
        </div>
        

    );
}

export default AboutMe;