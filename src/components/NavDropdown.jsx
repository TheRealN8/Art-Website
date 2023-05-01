import React from 'react'
import { Link } from "react-router-dom";

const NavDropdown = () => {
  return (
    <div>
      <Link to={'/'}>
        <button className="navButton">Home</button>
      </Link>
    </div>
  )
}

export default NavDropdown;
