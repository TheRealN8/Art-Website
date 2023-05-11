import React, { useState } from 'react';
import "../components/styles/artwork.css"
import Card from '../components/Gallery-card';
import FsLightbox from "fslightbox-react";

/*IMAGE IMPORTS FOR ARTWORK SECTION*/
import tree1 from "../components/images/trees1.JPG";
import fruits1 from "../components/images/fruits1.jpeg";
import dog1 from "../components/images/dog1.JPG";
import landscape1 from "../components/images/landscape1.jpeg";
import landscape2 from "../components/images/landscape2.jpg";
import beach1 from "../components/images/beach1.jpg"
import boat1 from "../components/images/boat1.JPG";
import boat2 from "../components/images/boat2.jpg";
import boat3 from "../components/images/boat3.JPG";
import plant1 from "../components/images/plant1.JPG";
import teapot1 from "../components/images/teapot1.JPG";
import boy1 from "../components/images/boy1.PNG";
import girl1 from "../components/images/girl1.PNG";
import girl2 from "../components/images/girl2.PNG";
import girl3 from "../components/images/girl3.PNG";
import girl4 from "../components/images/girl4.PNG";


function Artwork() {

    const [toggler, setToggler] = useState(false);
    const [cardImage, setCardImage] = useState(null);
    const toggleLightbox = (image) => {
      setToggler(!toggler);
      setCardImage(image);
    };

    return (
      <div>
        <div className='artGallery'>
          <FsLightbox
				    toggler={toggler}
				    sources={[cardImage]}
			    />  
          <Card toggle={toggleLightbox} img={tree1}/>
          <Card toggle={toggleLightbox} img={landscape1}/>
          <Card toggle={toggleLightbox} img={landscape2}/>
          <Card toggle={toggleLightbox} img={beach1}/>
          <Card toggle={toggleLightbox} img={boat1}/>
          <Card toggle={toggleLightbox} img={boat2}/>
          <Card toggle={toggleLightbox} img={boat3}/>
          <Card toggle={toggleLightbox} img={plant1}/>
          <Card toggle={toggleLightbox} img={fruits1}/>
          <Card toggle={toggleLightbox} img={teapot1}/>
          <Card toggle={toggleLightbox} img={dog1}/>
          <Card toggle={toggleLightbox} img={boy1}/>
          <Card toggle={toggleLightbox} img={girl1}/>
          <Card toggle={toggleLightbox} img={girl2}/>
          <Card toggle={toggleLightbox} img={girl3}/>
          <Card toggle={toggleLightbox} img={girl4}/>
        </div>
      </div>
    );
}

export default Artwork;