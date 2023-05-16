import React from 'react';
import "../../components/styles/Courses.css";
import boat2 from "../../components/images/boat2.jpg";

function GraphicDesign() {
    return (
      <div className='container'>
      <h1>Become an expert in graphic design!</h1>
      <h2>(SOFTWARE USED) Photoshop, Illustrator, InDesign (SEPERATE COURSES)</h2>
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
              <h1>Adobe Photoshop Course</h1>
              <h2>SOME MORE INFO FWGYAIGFIHGAHGAHUgahugi</h2>
              <p>GHAUHGUWGAHAUGHAHGWAOIHGIOWAHGIOWAHGWIGHWOIG HWAIGHAIHGIOWAHGIHGWHWGAIHGOIHGOIWAO</p>
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '6rem', width: '100%'}}>
              <h1>Adobe Illustrator Course</h1>
              <h2>SOME MORE INFO FWGYAIGFIHGAHGAHUgahugi</h2>
              <p>GHAUHGUWGAHAUGHAHGWAOIHGIOWAHGIOWAHGWIGHWOIGH WAIGHAIHGIOWAHGIHGWHWGAIHGOIHGOIWAO</p>
            </div>

            <div className='drawing-course-subsections' style={{padding: '0 10px', marginTop: '6rem', width: '100%'}}>
              <h1>InDesign Course</h1>
              <h2>SOME MORE INFO FWGYAIGFIHGAHGAHUgahugi</h2>
              <p>GHAUHGUWGAHAUGHAHGWAOIHGIOWAHGIOWAHGWIGHWOIGH WAIGHAIHGIOWAHGIHGWHWGAIHGOIHGOIWAO</p>
            </div>

        </div>
        <div style={{width: '40%', marginLeft: '50px'}}>
          <img src={boat2} alt="image" className='course-image'/>
        </div>
      </div>
    </div>
    );
}

export default GraphicDesign;