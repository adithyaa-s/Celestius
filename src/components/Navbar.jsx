import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Celestius</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="/register">Join us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
