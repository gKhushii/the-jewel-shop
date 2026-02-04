import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left */}
      <Link to="/" className="navbar-left">
  The Jewel Shop
</Link>


      {/* Right */}
      <div className="navbar-right">
        <Link to="/products">Products</Link>
        <Link to="/customizations">Customizations</Link>
        <a href="#contact">Contact</a>

        <a href="#contact" className="nav-btn">
          Connect with us
        </a>
      </div>
    </nav> 
  );
}
