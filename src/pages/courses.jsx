import React from 'react';
import "../components/styles/Courses.css";
import CourseCard from '../components/CourseCard';
<<<<<<< HEAD
import tree1 from "../components/images/trees1.JPG";
import girl1 from "../components/images/girl1.PNG";
import teapot1 from "../components/images/teapot1.JPG";
=======

import squirrel1 from "../components/images/squirrel1.jpg";
import tree1 from "../components/images/trees1.JPG";
import girl1 from "../components/images/girl1.PNG";
import teapot1 from "../components/images/teapot1.JPG";

import gohan1 from "../components/images/gohan1.jpg"

>>>>>>> Nathan

function Courses() {
    return (
      <div className='container'>
        <h1>We offer online courses!</h1>
<<<<<<< HEAD
        <div style={{padding: '0 10px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla nibh ipsum, semper sed accumsan in, dictum in nunc. Cras pulvinar, tortor vel consectetur efficitur, 
          metus lacus maximus ex, id hendrerit diam mauris at tellus. Vivamus in odio sollicitudin, lobortis dolor pellentesque, 
          suscipit eros. Integer vitae aliquam lacus. Fusce vel magna a libero faucibus rutrum in at lacus. Nam erat velit, blandit e
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
          <CourseCard image={tree1} title={'Painting'} link={'/course/paintings'}/>
          <CourseCard image={girl1} title={'Digital Art'} link={'/course/digital-art'} isMiddle={true}/>
          <CourseCard image={teapot1} title={'Graphic Design'} link={'/course/graphic-design'}/>
=======
        <div style={{padding: '0 10px'}} className='introduction2'>
          At Lantian Art Studio, we believe that everyone has the potential to be a great artist. 
          Our courses are designed to help you unlock your creativity and develop your skills in a supportive, encouraging environment. 
          Join us today and start your artistic journey!
        </div>
        <div className='course-card-row'>
          <CourseCard image={squirrel1} title={'Drawing Courses'} link={'/course/drawing'} isMiddle={true}/>
          <CourseCard image={tree1} title={'Painting Courses'} link={'/course/paintings'} isMiddle={true}/>
          <CourseCard image={tree1} title={'Creative Art Courses'} link={'/course/creative-art'} isMiddle={true}/>
          
        </div>
        <div className='course-card-row'>
          <CourseCard image={girl1} title={'Digital Art Courses'} link={'/course/digital-art'} isMiddle={true}/>
          <CourseCard image={teapot1} title={'Graphic Design Courses'} link={'/course/graphic-design'} isMiddle={true}/>
          <CourseCard image={gohan1} title={'Anime/Manga Courses'} link={'/course/anime-manga'} isMiddle={true}/>
          
        </div>
        <div className='course-card-row-bottom'>
          <CourseCard image={tree1} title={'Programs for Children Courses'} link={'/course/child-programs'} isMiddle={true}/>
          <CourseCard image={tree1} title={'Animation Courses COMING SOON...'} link={''} isMiddle={true}/>
>>>>>>> Nathan
        </div>
        <div style={{padding: '0 10px', marginTop: '50px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla nibh ipsum, semper sed accumsan in, dictum in nunc. Cras pulvinar, tortor vel consectetur efficitur, 
          metus lacus maximus ex, id hendrerit diam mauris at tellus. Vivamus in odio sollicitudin, lobortis dolor pellentesque, 
          suscipit eros. Integer vitae aliquam lacus. Fusce vel magna a libero faucibus rutrum in at lacus. Nam erat velit, blandit e
        </div>
      </div>
    );
}

export default Courses;