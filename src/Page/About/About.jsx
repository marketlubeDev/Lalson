import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-container-content ">
        <h3 className="about-container-content-title">Who are we?</h3>
        <p className="about-container-content-text">
          We are a complete <strong>audio-visual solution provider</strong>,
          offering high-quality sound and visual experiences for diverse spaces.
          As <strong>authorized dealers </strong> of leading brands, we ensure
          superior products and services for every environment.
        </p>

        <Link to="/about-us" className="about-container-content-button">
          About Us
        </Link>
      </div>
    </div>
  );
}
