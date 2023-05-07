import React from "react";
import "./styles/AboutMe.css"

import aboutMePic from "./images/aboutMePic.JPG";

function AboutMe () {

    return(
        
        <div className="section">
            <h1>About Me</h1>
            <div className="about-info">
                <p className="text"> This filler text will contain information about client
                uiwg owgwhaoigh ghiw goiwajgi wajiwa jgwajig jwojgjwagij
                uiwag hgwahguh wgho  ighwai wagiowa gwhigowoghwaioghwowhiog
                hgu wahguiw ahguoiwah guiwahgiw ahgiowhgaioghwaoig waioghwai hgaohg
                hgui wahgui wahguwahugiw ahugiuwighu waighuwa ihguwau ghwua ighuwa hgw
                ugiw ahg uwahugih uwaighwua ihguwahug wahugiuwai ghuwai hugwa hguhiawhgwa
                </p> 
                <img className="about-image" src={aboutMePic}/>
            </div>
        </div>
        

    );
}

export default AboutMe;