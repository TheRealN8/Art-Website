import React from 'react'
import { Link } from "react-router-dom";
import "./styles/Nav.css";

const NavDropdown = () => {
  return (
    <div  style={{display: 'flex', flexDirection: 'column'}}>
      <Link to={'/'}>
        <button className="navButton">Home</button>
      </Link>
      <Link to={'/'}>
        <button className="navButton">a</button>
      </Link>
      <Link to={'/'}>
        <button className="navButton">s</button>
      </Link>
      <Link to={'/'}>
        <button className="navButton">e</button>
      </Link>
    </div>
  )
}

export default NavDropdown;
