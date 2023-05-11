import React from 'react'
import { Link } from "react-router-dom";
import "./styles/Nav.css";

const NavDropdown = () => {
  return (
    <div  style={{display: 'flex', flexDirection: 'column'}}>
<<<<<<< HEAD
      <Link to={'/course/paintings'}>
        <button className="navButton">Painting</button>
      </Link>
      <Link to={'/course/graphic-design'}>
        <button className="navButton">Graphic Design</button>
      </Link>
      <Link to={'/course/digital-art'}>
        <button className="navButton">Digital Art</button>
      </Link>
      <Link to={'/course/creative-art'}>
        <button className="navButton">Creative Art</button>
=======
      <Link to={'/course/drawing'}>
        <button className="navButton nav-button-subsection">Drawing</button>
      </Link>
      <Link to={'/course/paintings'}>
        <button className="navButton nav-button-subsection">Painting</button>
      </Link>
      <Link to={'/course/creative-art'}>
        <button className="navButton nav-button-subsection">Creative Art</button>
      </Link>
      <Link to={'/course/digital-art'}>
        <button className="navButton nav-button-subsection">Digital Art</button>
>>>>>>> Nathan
      </Link>
      <Link to={'/course/graphic-design'}>
        <button className="navButton nav-button-subsection">Graphic Design</button>
      </Link>
      <Link to={'/course/anime-manga'}>
        <button className="navButton nav-button-subsection">Anime/Manga</button>
      </Link>
      <Link to={'/course/child-programs'}>
        <button className="navButton nav-button-subsection">Child Programs</button>
      </Link>
      
      
    </div>
  )
}

export default NavDropdown;
