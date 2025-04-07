import { PiArrowCircleDownThin } from "react-icons/pi";

import Count from "./Count";

function ImageSection() {
  const images = [
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005973/yamaha_logo.svg_yzecl1.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005973/epson_do_brasil_logo.png_gjwbpb.png",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005974/studiomaster_professional_logo.png_jkz5ja.png",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005973/soundcraft_logo.svg_povvs4.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005973/bss_audio_logo_fjo6lx.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005975/panasonic_usa_icon.jpeg_rsog00.png",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005976/ahuja_and_studiomaster_products_at_the_best_price_logo.png_h4nbnp.png",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005975/bose_professional_logo.png_gbtlax.png",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005975/jvcmobile_logo.png_jt77dg.png",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005975/rcf_audio_logo.svg_di5ncr.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005974/sennheiser_logo.svg_nwrdw8.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005976/benq_north_america_logo.svg_vzdnjz.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005976/benq_north_america_logo.svg_vzdnjz.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005976/behringer_logo.svg_djwt0x.svg",
  ];

  // Duplicate images to create infinite scroll effect
  const duplicatedImages = [...images, ...images];

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
      {/* <div className="slider">
        <div className="slide-track">
          {duplicatedImages.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} height="100" width="250" alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div> */}
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
