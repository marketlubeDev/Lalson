import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./../../assets/Lalisons.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            <img src={logo} alt="LALSONS Electronics" />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-navbar">
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#testimonial">Testimonial</a>
              <a href="#contact" className="contact-btn">
                Contact
              </a>
            </nav>
          </div>
          <div className="footer-address">
            <div className="">
              <p className="footer-text">
                Lorem ipsum dolor sit amet,
                <br /> consectetuer adipiscing elit,
                <br /> sed diam nonummy nibh
                <br /> euismod tincidunt ut
              </p>
            </div>
            <div className="contact-info">
              <a href="mailto:hello@lalsons.com">hello@lalsons.com</a>
              <a href="tel:+919900099900">+91 9900 0999 9900</a>
              <div className="social-links">
                <a href="https://www.facebook.com/" className="social-link">
                  <div className="social-circle">
                    <FaFacebookF />
                  </div>
                </a>
                <a href="https://www.instagram.com/" className="social-link">
                  <div className="social-circle">
                    <FaInstagram />
                  </div>
                </a>
                <a href="https://wa.me/1234567890" className="social-link">
                  <div className="social-circle">
                    <FaWhatsapp />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          made by <a href="https://www.marketlube.in/">Marketlube</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
