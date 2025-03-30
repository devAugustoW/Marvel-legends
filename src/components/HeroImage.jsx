import React from "react";
import marvelHero from "../assets/marvel.png";

function HeroImage() {
  return (
    <div className="hero-container">
      <img src={marvelHero} alt="Marvel Heroes" className="hero-image" />
    </div>
  );
}

export default HeroImage;