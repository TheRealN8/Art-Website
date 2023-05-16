import React from 'react';
import "../../components/styles/Courses.css";
import squirrel1 from "../../components/images/squirrel1.jpg";

function Drawing() {
    return (
      <div className='container'>
        <h1>Learn how to create beautiful drawings!!</h1>
        <h2>Sketching, Pastel, Colour pencil (SEPERATE COURSES)</h2>
        <div style={{display: 'flex'}}>
          <div style={{width: '50%', paddingRight: '20px'}}>
            <div style={{padding: '0 10px', width: '100%'}}>
              Develop your drawing skills and unleash your creativity with our comprehensive drawing courses. 
              Whether you're interested in sketching, pastel art, or colour pencil techniques, we have the perfect course for you. 
              Our experienced instructor will guide you step-by-step, helping you master the fundamentals and discover your unique artistic style.
            </div>
            <ul className='course-list' style={{margin: '30px'}}>
              <li>
                Learn essential sketching techniques and bring your ideas to life on paper.
              </li>
              <li>
                Explore the versatile medium of pastels and create expressive and textured artworks.
              </li>
              <li>
                Master the art of using colour pencils to add vibrancy and depth to your drawings.
              </li>
            </ul>
            <div style={{padding: '0 10px', marginTop: '10px', width: '100%'}}>
              Elevate your drawing skills and embark on a creative journey that will inspire and challenge you. 
              Whether you're a beginner or an experienced artist, our drawing courses will help you refine your techniques, 
              expand your artistic horizons, and create beautiful drawings that reflect your unique vision. e
            </div>

            <div style={{padding: '0 10px', marginTop: '10px', width: '100%', fontSize: '24px'}}>
              Prices: 
            </div>
            <div style={{padding: '0 10px', marginTop: '10px', width: '100%', fontSize: '24px'}}>
              $35 for 1:30 group session (Only children ages 4-8 are eligible for a 1:30 session) 
            </div>
            <div style={{padding: '0 10px', marginTop: '10px', width: '100%', fontSize: '24px'}}>
              $45 for 2:00 group session) 
            </div>
            <div style={{padding: '0 10px', marginTop: '10px', width: '100%', fontSize: '24px'}}>
              $90 for 4:00 group session 
            </div>
            <div style={{padding: '0 10px', marginTop: '10px', width: '100%', fontSize: '24px'}}>
              $90 for 1:00 private session 
            </div>


            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '8rem', width: '100%'}}>
              <h1>Sketching Course</h1>
              <h2>Master the Art of Sketching</h2>
              <p>Unlock your creative potential and learn the fundamental techniques of sketching in our comprehensive Sketching Course. 
                Whether you're a beginner or an experienced artist, this course will take your sketching skills to the next level.</p>
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '6rem', width: '100%'}}>
              <h1>Pastel Course</h1>
              <h2>Explore the World of Pastel Art</h2>
              <p>Immerse yourself in the vibrant world of pastel art with our engaging Pastel Course. 
                Discover the unique qualities of pastels and learn techniques to create stunning pastel 
                artworks that capture light, color, and texture.</p>
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '6rem', width: '100%'}}>
              <h1>Colour Pencil Course</h1>
              <h2>Unleash Your Creativity with Colour Pencils</h2>
              <p>Experience the magic of colour pencils and learn to create stunning artworks with our comprehensive Colour Pencil Course. 
                Discover various techniques, shading methods, 
                and color blending to bring your drawings to life with vibrant hues and intricate details.</p>
            </div>

          </div>
          <div style={{width: '40%', marginLeft: '50px'}}>
            <img src={squirrel1} alt="image" className='course-image'/>
          </div> 

        </div>
      </div>
    );
}

export default Drawing;