import React from 'react';
import "../components/styles/Courses.css";
import CourseCard from '../components/CourseCard';
import tree1 from "../components/images/trees1.JPG";
import girl1 from "../components/images/girl1.PNG";
import teapot1 from "../components/images/teapot1.JPG";

function Courses() {
    return (
      <div className='container'>
        <h1>We offer online courses!</h1>
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