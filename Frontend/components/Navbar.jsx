import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link className="nav-link" to="/" style={{color:"black" , textDecoration:"none"}}>SIT SANDBOX</Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link to="/" style={{color:"black" , textDecoration:"none"}}>Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/About" style={{color:"black" , textDecoration:"none"}}>About</Link>
        </div>
        <div className="nav-item">
          <Link to="/Contact" style={{color:"black" , textDecoration:"none"}}>Contact</Link>
        </div>
        <div className="nav-item">
          <Link to="" style={{color:"black" , textDecoration:"none"}}>Course</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
