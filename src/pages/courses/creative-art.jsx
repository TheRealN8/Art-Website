import React from 'react';
import "../../components/styles/Courses.css";
import creativeArt from "../../components/images/creativeArt.jpg";


function CreativeArt() {
    return (
      <div className='container'>
        <h1>Learn how to produce creative art!</h1>
        <h2>Creative Drawing, Creative Painting (SEPERATE COURSES)</h2>
        <div style={{display: 'flex'}}>
          <div style={{width: '50%', paddingRight: '20px'}}>
            <div style={{padding: '0 10px', width: '100%'}}>
            Unleashing Creativity: Exploring the Boundless World of Art is a captivating and transformative art course designed to ignite 
            the imaginative spark within you. In this dynamic program, you will embark on an exhilarating journey through various artistic mediums, 
            discovering new techniques and pushing the boundaries of your own artistic expression.
            </div>
            <ul className='course-list' style={{margin: '30px'}}>
              <li>
                You'll delve into the fundamental principles of drawing, learning to observe and interpret the world around you with fresh eyes. 
              </li>
              <li>
                You'll explore the rich tapestry of painting, developing skills that will breathe life into your imagination.
              </li>
              <li>
                Interesting fact!
              </li>
              <li>
                Interesting fact!
              </li>
            </ul>
            <div style={{padding: '0 10px', marginTop: '10px', width: '100%'}}>
            By the end of this course, you will have developed a diverse portfolio of original artwork, reflecting your personal 
            journey of self-discovery and artistic exploration. You will also acquire a strong foundation in art theory, enabling 
            you to articulate your artistic vision and engage in meaningful artistic dialogues.
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '8rem', width: '100%'}}>
              <h1>Creative Drawing Course</h1>
              <h2>SOME MORE INFO FWGYAIGFIHGAHGAHUgahugi</h2>
              <p>GHAUHGUWGAHAUGHAHGWAOIHGIOWAHGIOWAHGWIGHWOIG HWAIGHAIHGIOWAHGIHGWHWGAIHGOIHGOIWAO</p>
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '6rem', width: '100%'}}>
              <h1>Creative Painting Course</h1>
              <h2>SOME MORE INFO FWGYAIGFIHGAHGAHUgahugi</h2>
              <p>GHAUHGUWGAHAUGHAHGWAOIHGIOWAHGIOWAHGWIGHWOIGH WAIGHAIHGIOWAHGIHGWHWGAIHGOIHGOIWAO</p>
            </div>

          </div>
          <div style={{width: '40%', marginLeft: '50px'}}>
            <img src={creativeArt} alt="image" className='course-image'/>
          </div>
        </div>
      </div>
    );
}

export default CreativeArt;