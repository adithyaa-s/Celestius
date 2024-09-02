import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>
        Celusti<span>us</span> welcomes you!
      </h1>
      <p>Join us for workshops, competitions, and more!</p>
      <a href="#about" className="btn-primary">
        Learn More
      </a>
    </div>
  );
};

export default HeroSection;
