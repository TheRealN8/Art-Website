import React from 'react';

import '../components/styles/Home.css';

import Showcase from "../components/Showcase";



function Home() {
    return (
      <div className='home-box'>
        <p className='introduction'>
          Welcome to Lantian Art Studio, where creativity comes to life! 
          Our studio is dedicated to providing exceptional art education for students of all skill levels. 
          Whether you're a beginner or an experienced artist, we have the perfect course for you.
        </p>
        <Showcase />
      </div>
    );
}

export default Home;