import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-container-content ">
        <h3 className="about-container-content-title">Who are we?</h3>
        <p className="about-container-content-text">
          We are a complete <strong>audio-visual solution provider</strong>,
          offering high-quality sound and visual experiences for diverse spaces.
          As <strong>authorized dealers </strong> of leading brands, we ensure
          superior products and services for every environment.
        </p>

        <button className="about-container-content-button">
          <a href="">About Us</a>
        </button>
      </div>
    </div>
  );
}
