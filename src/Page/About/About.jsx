import React from "react";
import { Link } from "react-router-dom";

export default function About() {
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
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744007432/sennheiser_logowhite_ojf7dj.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005976/benq_north_america_logo.svg_vzdnjz.svg",
    "https://res.cloudinary.com/ds07e7rod/image/upload/v1744005976/behringer_logo.svg_djwt0x.svg",
  ];

  const duplicatedImages = [...images, ...images];
  return (
    <div className="about-container" id="about">
      <div className="slider">
        <div className="slide-track">
          {duplicatedImages.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`slide-${index}`} />
            </div>
          ))}
          {duplicatedImages.map((src, index) => (
            <div className="slide" key={`duplicate-${index}`}>
              <img src={src} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>
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
