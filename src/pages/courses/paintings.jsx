import React from 'react';
import "../../components/styles/Courses.css";
import boat2 from "../../components/images/boat2.jpg";

function Paintings() {
    return (
      <div className='container'>
        <h1>Learn how to create stunning paintings!</h1>
        <h2>Water Colour, Oil Painting, Acrylic Painting, Abstract Painting (SEPERATE COURSES)</h2>
        <div style={{display: 'flex'}}>
          <div style={{width: '50%', paddingRight: '20px'}}>
            <div style={{padding: '0 10px', width: '100%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla nibh ipsum, semper sed accumsan in, dictum in nunc. Cras pulvinar, tortor vel consectetur efficitur, 
              metus lacus maximus ex, id hendrerit diam mauris at tellus. Vivamus in odio sollicitudin, lobortis dolor pellentesque, 
              suscipit eros. Integer vitae aliquam lacus. Fusce vel magna a libero faucibus rutrum in at lacus. Nam erat velit, blandit e
            </div>
            <ul className='course-list' style={{margin: '30px'}}>
              <li>
                Interesting fact!
              </li>
              <li>
                Interesting fact!
              </li>
              <li>
                Interesting fact!
              </li>
              <li>
                Interesting fact!
              </li>
            </ul>
            <div style={{padding: '0 10px', marginTop: '10px', width: '100%'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla nibh ipsum, semper sed accumsan in, dictum in nunc. Cras pulvinar, tortor vel consectetur efficitur, 
              metus lacus maximus ex, id hendrerit diam mauris at tellus. Vivamus in odio sollicitudin, lobortis dolor pellentesque, 
              suscipit eros. Integer vitae aliquam lacus. Fusce vel magna a libero faucibus rutrum in at lacus. Nam erat velit, blandit e
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '8rem', width: '100%'}}>
              <h1>Water Colour Course</h1>
              <h2>Explore the Beauty of Watercolour Painting</h2>
              <p>Dive into the captivating world of watercolour painting with our enriching Water Colour Course. 
                Learn essential techniques, brushwork, and color mixing to create breathtaking watercolour artworks that are vibrant, 
                expressive, and full of life.</p>
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '6rem', width: '100%'}}>
              <h1>Oil Painting Course</h1>
              <h2>Discover the Art of Oil Painting</h2>
              <p>Immerse yourself in the rich and timeless world of oil painting with our comprehensive Oil Painting Course. 
                From understanding color theory to mastering brush techniques, 
                this course will equip you with the skills and knowledge to create stunning oil paintings 
                filled with depth, texture, and luminosity.</p>
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '6rem', width: '100%'}}>
              <h1>Acrylic Painting Course</h1>
              <h2>Unleash Your Creativity with Acrylics</h2>
              <p>Experience the versatility and vibrancy of acrylic paints in our engaging Acrylic Painting Course. 
                Learn essential techniques, color mixing, and layering methods to create dynamic and expressive acrylic 
                paintings that showcase your unique artistic style.</p>
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '6rem', width: '100%'}}>
              <h1>Abstract Painting Course</h1>
              <h2>Unlock Your Creative Potential with Abstract Art</h2>
              <p>Embark on a journey of self-expression and freedom with our inspiring Abstract Painting Course. 
                Learn to create captivating abstract artworks through experimentation, unconventional techniques, 
                and the exploration of color, shape, and texture. Embrace the power of abstraction and let your imagination run wild.</p>
            </div>

          </div>
          <div style={{width: '40%', marginLeft: '50px'}}>
            <img src={boat2} alt="image" className='course-image'/>
          </div>
        </div>
      </div>
    );
}

export default Paintings;