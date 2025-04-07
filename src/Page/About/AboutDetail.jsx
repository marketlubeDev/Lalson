import React, { useEffect } from "react";
import logo from "./../../assets/Lalisons.svg";

export default function AboutDetail() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

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
      <div className="about-detail-container-content" id="about-us">
        <h3 className="about-detail-container-content-heading">About us</h3>
        <p className="about-detail-container-content-text">
          With more than 4 decades of experience in the field of Audio and Video
          and dealing with more than 15 industry leader brands, We are your
          one-stop destination for comprehensive audio-visual solutions,
          catering to a wide range of spaces including offices, conference
          rooms, places of worship, Restaurants, Café, airports, railway
          stations, bus terminals, auditoriums, theaters, studios, sports
          venues, stadiums, hospitals, educational institutions, hotels, bars
          and Pubs, shopping malls, large-format retail stores, public
          gatherings, stage shows, concerts, DJs, factories, commercial
          buildings, parking lots, petrol pumps, toll plazas, amusement parks,
          and many more. We provide complete solutions like Acoustic
          consultation and acoustic works, Complete system AV system designing,
          Testing and calibration.
        </p>
      </div>
      <div className="about-detail-container-imageRow">
        <div className="about-detail-container-imageRow-card1"></div>
        <div className="about-detail-container-imageRow-card2">
          <h3 className="about-detail-container-imageRow-card2-content">
            Our mission and vision is to deliver high-quality Audio and Video
            experiences tailored to every environment.
          </h3>
        </div>
        <div className="about-detail-container-imageRow-card3"></div>
      </div>
      <div className="about-detail-container-paragraph">
        <p className="about-detail-container-paragraph-text">
          As authorized dealers in Calicut for leading brands like AHUJA,
          Studiomaster, Yamaha, EAW, Wharfedale, Denon, Marantz, Anthem,
          Paradigm, Dali, JBL, Optoma, BenQ, Epson, Panasonic, and many others,
          we ensure top-notch products along with our after sales services. With
          our expertise and a wide range of solutions, we are committed to
          enhancing your audio-visual experiences with unmatched clarity and
          performance.
        </p>
      </div>
    </div>
  );
}
