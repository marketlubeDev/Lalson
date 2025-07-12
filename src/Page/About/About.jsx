import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const images = [
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/yamaha_logo.svg_yzecl1+(1).svg",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/epson_do_brasil_logo.png_.png",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/studiomaster_professional_logo.png_jkz5ja.png",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/soundcraft_logo.svg_1_txau7r.svg",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/bss_audio_logo_fjo6lx.svg",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/panasonic_usa_logo.svg_zhnqm9+(1).svg",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/ahuja_and_studiomaster.png",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/Logo.svg_cgcqqc+(1).svg",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/jvcmobile_logo.png_jt77dg.png",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/images_jjvpby.png",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/sennheiser_logowhite_ojf7dj.svg",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/benq_north_america_logo.svg_vzdnjz+(1).svg",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/behringer-logo_sxmn0c.jpg",
    "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/logos/AKG-3300x2550pix_white_uvkjxr.jpg",
  ];

  const duplicatedImages = [...images, ...images];
  return (
    <div className="about-container" id="about">
      <div className="slider">
        <div className="slide-track">
          {duplicatedImages.map((src, index) => (
            <div className="slide" key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                style={{
                  height: index === 2 || index === 6 ? "80px" : "40px",
                }}
              />
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
