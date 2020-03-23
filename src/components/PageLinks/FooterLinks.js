import React from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
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
      ---- Future expansion ----
      <Link to="/about" className="navLink">
        About Us
      </Link>
      <Link to="/contact" className="navLink">
        Contact Us
      </Link>
      <Link to="/Lambda" className="navLink">
        Learn About Lambda
      </Link>
      <Link to="/tos" className="navLink">
        Terms of Service
      </Link>
      <Link to="/privacy" className="navLink">
        Privacy Policy
      </Link>
      <Link to="/dmca" className="navLink">
        DMCA
      </Link> */}
    </div>
  );
}

export default FooterLinks;
