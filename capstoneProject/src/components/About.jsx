import React from "react";
import img1 from "../assets/icons_assets/MandA1.jpg";
import img2 from "../assets/icons_assets/MandA2.jpg";
import "./Main.css";

function About() {
  return (
    <div className="about">
    <div className="about-section">
      <div className="cell top-left">
        <h1 className="about-title">About Little Lemon</h1>
        <p className="about-description">
          Welcome to Little Lemon, a cozy neighborhood bistro where Mediterranean tradition meets modern flavor. We take pride in crafting fresh, vibrant dishes using only the finest ingredients — from handpicked herbs to locally sourced produce. Every meal is made with care, capturing the spirit of home-cooked hospitality.
        </p>
      </div>
      <div className="cell top-right">
        <img src={img1} alt="Restaurant Scene 1" className="about-image" />
      </div>
      <div className="cell bottom-left">
        <img src={img2} alt="Restaurant Scene 2" className="about-image" />
      </div>
      <div className="cell bottom-right">
        <p className="about-description">
          Founded by two passionate chefs with deep roots in Mediterranean cooking, Little Lemon was born from a love of family, food, and connection. Our goal is simple: serve unforgettable meals that bring people together — with warmth, laughter, and a twist of lemon.
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;