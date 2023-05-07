import React from 'react'
import { Link } from "react-router-dom";
import "./styles/Nav.css";

const NavDropdown = () => {
  return (
    <div  style={{display: 'flex', flexDirection: 'column'}}>
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
      </Link>
    </div>
  )
}

export default NavDropdown;
