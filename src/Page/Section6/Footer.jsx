import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./../../assets/Lalisons.svg";
function Footer() {
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
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
              <a
                style={{ cursor: "pointer" }}
                onClick={(e) => smoothScroll(e, "#home")}
              >
                Home
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={(e) => smoothScroll(e, "#about")}
              >
                About
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={(e) => smoothScroll(e, "#service")}
              >
                Services
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={(e) => smoothScroll(e, "#projects")}
              >
                Products
              </a>
              {/* <a href="#testimonial">Testimonial</a> */}
              <a
                href="https://wa.me/+918139813883"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
                style={{ cursor: "pointer" }}
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="footer-address">
            <div className="">
              <p className="footer-text">
                East end C.H over bridge,
                <br /> Red Cross Rd,
                <br /> behind SBI main branch,
                <br /> Kozhikode, Kerala
                <br />
                673001
              </p>
              <div className="footer-open-close">Open 10am ⋅ Closes 6pm</div>
            </div>
            <div className="contact-info">
              <a href="mailto:lalsonscalicut@gmail.com">
                lalsonscalicut@gmail.com
              </a>
              <a href="tel:+918139813883">+91 81398 13883</a>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/share/16Etpa2YQ8/"
                  className="social-link"
                >
                  <div className="social-circle">
                    <FaFacebookF />
                  </div>
                </a>
                <a href="https://www.instagram.com/" className="social-link">
                  <div className="social-circle">
                    <FaInstagram />
                  </div>
                </a>
                <a href="https://wa.me/+918139813883" className="social-link">
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
          made by <a href="https://www.instagram.com/marketlube/">Marketlube</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
