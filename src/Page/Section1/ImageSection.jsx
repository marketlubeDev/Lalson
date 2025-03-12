import { PiArrowCircleDownThin } from "react-icons/pi";

import Count from "./Count";

function ImageSection() {
  return (
    <div className="imageSection" id="home" loading="lazy">
      <div className="banner-overlay">
        <div className="banner-container">
          <div className="text-center">
            <h2 className="small-text1">Your</h2>
            <h1 className="large-text">Audio Visual</h1>
            <h2 className="small-text2">Partner</h2>
          </div>
          <a
            href="https://wa.me/+918139813883"
            target="_blank"
            rel="noopener noreferrer"
            className="enquiry-button"
          >
            Enquire now
          </a>
        </div>
      </div>
      <div className="imageSection-container">
        <div className="imageSection-container-left">
          <div className="imageSection-container-left-we">
            Elevating Experiences with Sound & Vision
          </div>
        </div>
        <Count />
      </div>
    </div>
  );
}

export default ImageSection;
