import React from 'react';
import "../components/styles/artwork.css"
import Card from '../components/Gallery-card';


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
    return (
      <div>
        <div className='artGallery'>
          <Card img={tree1}/>
          <Card img={landscape1}/>
          <Card img={landscape2}/>
          <Card img={beach1}/>
          <Card img={boat1}/>
          <Card img={boat2}/>
          <Card img={boat3}/>
          <Card img={plant1}/>
          <Card img={fruits1}/>
          <Card img={teapot1}/>
          <Card img={dog1}/>
          <Card img={boy1}/>
          <Card img={girl1}/>
          <Card img={girl2}/>
          <Card img={girl3}/>
          <Card img={girl4}/>
        </div>
      </div>
    );
}

export default Artwork;