import { PiArrowCircleDownThin } from "react-icons/pi";

import Count from "./Count";

function ImageSection() {
  return (
    <div className="imageSection" id="home">
      <div className="banner-container">
        <div className="text-center">
          <h2 className="small-text1">Your</h2>
          <h1 className="large-text">Audio Visual</h1>
          <h2 className="small-text2">Partner</h2>
        </div>
      </div>
      <div className="imageSection-container" id="about">
        <div className="imageSection-container-left">
          <div className="imageSection-container-left-we">
            we love & live craftsmanship
          </div>
          <div className="imageSection-container-left-brand">
            our brands{" "}
            <PiArrowCircleDownThin className="downarrow" style={{}} />
          </div>
        </div>
        <Count />
      </div>
    </div>
  );
}

export default ImageSection;
