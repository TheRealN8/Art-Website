import React from 'react';

import '../components/styles/Home.css';

import Showcase from "../components/Showcase";



function Home() {
    return (
      <div className='home-box'>
        <p className='introduction'>
          Lantian Art Studio is an online school for young art lovers, collectors and artists alike. 
          Our mission is to connect the beauty of art with enthusiastic new students, 
          and to provide support for emerging artists of all styles and genres. We offer courses on paintings, 
          drawings, digital art, etc... Carefully curated by the Chinese professional artist Jun Zhang. 
          Have a look at our gallery and courses and contact us with any questions.
        </p>
        <Showcase />
      </div>
    );
}

export default Home;