import React from 'react';
import "../components/styles/artwork.css"
import Card from '../components/Gallery-card';


function Artwork() {
    return (
      <div>
        <div className='artGallery'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
}

export default Artwork;