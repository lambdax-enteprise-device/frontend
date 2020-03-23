import React from "react";
import { Link } from "react-router-dom"

function HeaderLink() {
  return (
    <div>
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/registration" className="navLink">
        Registration
      </Link>
      <Link to="/login" className="navLink">
        Login
      </Link>
      <Link to="/profile" className="navLink">
        Profile
      </Link>

      {/* 
      --- Future Expansion ---
      <Link to="/about" className="navLink">
        About Us
      </Link>
      <Link to="/contact" className="navLink">
        Contact Us
      </Link> */}
    </div>
  );
}

export default HeaderLink;
