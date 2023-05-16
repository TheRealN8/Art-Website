import React from 'react';
import "../components/styles/Courses.css";
import CourseCard from '../components/CourseCard';

import squirrel1 from "../components/images/squirrel1.jpg";
import tree1 from "../components/images/trees1.JPG";
import girl1 from "../components/images/girl1.PNG";
import teapot1 from "../components/images/teapot1.JPG";
import boat2 from "../components/images/boat2.jpg";



import creativeArt from "../components/images/creativeArt.jpg";
import gohan1 from "../components/images/gohan1.jpg"


function Courses() {
    return (
      <div className='container'>
        <h1>All courses offered:</h1>
        <div style={{padding: '0 10px'}} className='introduction2'>
          At Lantian Art Studio, we believe that everyone has the potential to be a great artist. 
          Our courses are designed to help you unlock your creativity and develop your skills in a supportive, encouraging environment. 
          Join us today and start your artistic journey!
        </div>
        <div className='course-card-row'>
          <CourseCard image={squirrel1} title={'Drawing Courses'} link={'/course/drawing'} isMiddle={true}/>
          <CourseCard image={boat2} title={'Painting Courses'} link={'/course/paintings'} isMiddle={true}/>
          <CourseCard image={creativeArt} title={'Creative Art Courses'} link={'/course/creative-art'} isMiddle={true}/>
          
        </div>
        <div className='course-card-row'>
          <CourseCard image={girl1} title={'Digital Art Courses'} link={'/course/digital-art'} isMiddle={true}/>
          <CourseCard image={teapot1} title={'Graphic Design Courses'} link={'/course/graphic-design'} isMiddle={true}/>
          <CourseCard image={gohan1} title={'Anime/Manga Courses'} link={'/course/anime-manga'} isMiddle={true}/>
          
        </div>
        <div className='course-card-row-bottom'>
          <CourseCard image={tree1} title={'Programs for Children Courses'} link={'/course/child-programs'} isMiddle={true}/>
          <CourseCard image={tree1} title={'Animation Courses COMING SOON...'} link={''} isMiddle={true}/>
        </div>
        <div style={{padding: '0 10px', marginTop: '50px', fontSize: '24px', textAlign:'center'}}>
          The courses and art offered by Lantian Art Studio are private and should not be shared, 
          streamed, or made public in any way possible. Courses cannot be refunded or returned.
        </div>
      </div>
    );
}

export default Courses;