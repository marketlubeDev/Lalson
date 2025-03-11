import React from "react";
import logo from "./../../assets/Lalisons.svg";
import aboutSpeaker from "./../../assets/Frame406.png";
import aboutMike from "./../../assets/Frame408.png";

export default function AboutDetail() {
  return (
    <div className="about-detail-container">
      <div className="about-detail-container-header">
        <img
          src={logo}
          alt="Lalisons"
          className="about-detail-container-header-logo"
        />
        <h2 className="about-detail-container-header-title">
          We visualize sound
        </h2>
      </div>
      <div className="about-detail-container-content">
        <h3 className="about-detail-container-content-heading">About us</h3>
        <p className="about-detail-container-content-text">
          We are your one-stop destination for comprehensive audio-visual
          solutions, catering to a wide range of spaces including offices,
          conference rooms, airports, railway stations, bus terminals, places of
          worship, auditoriums, theaters, studios, sports venues, stadiums,
          hospitals, educational institutions, hotels, restaurants, bars,
          shopping malls, large-format retail stores, public gatherings, stage
          shows, concerts, DJs, factories, commercial buildings, parking lots,
          petrol pumps, toll plazas, amusement parks, and many more
        </p>
      </div>
      <div className="about-detail-container-imageRow">
        <div className="about-detail-container-imageRow-card1"></div>
        <div className="about-detail-container-imageRow-card2">
          <h3 className="about-detail-container-imageRow-card2-content">
            Our mission is to deliver high-quality sound and visual experiences
            tailored to every environment.
          </h3>
        </div>
        <div className="about-detail-container-imageRow-card3"></div>
      </div>
      <div className="about-detail-container-paragraph">
        <p className="about-detail-container-paragraph-text">
          As authorized dealers for leading brands like AHUJA, Studiomaster,
          Yamaha, EAW, Wharfedale, Denon, Marantz, Anthem, Paradigm, Dali, JBL,
          Optoma, BenQ, Epson, Panasonic, and many others, we ensure top-notch
          products and services. With our expertise and a wide range of
          solutions, we are committed to enhancing your audio-visual experiences
          with unmatched clarity and performance.
        </p>
      </div>
    </div>
  );
}
