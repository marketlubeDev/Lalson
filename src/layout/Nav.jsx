import React, { useState } from "react";
import logo from "./../assets/Lalisons.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Nav() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsChecked((prev) => !prev);
    document.body.classList.toggle("no-scroll", !isChecked);
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsChecked(false);
    document.body.classList.remove("no-scroll");
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <div className="logo-text">
            <img
              onClick={(e) => smoothScroll(e, "#home")}
              src={logo}
              alt="LALSONS Electronics"
              className="logo-image"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <nav className="header__nav">
          <a onClick={(e) => smoothScroll(e, "#home")} className="nav-link">
            Home
          </a>
          <a onClick={(e) => smoothScroll(e, "#about")} className="nav-link">
            About
          </a>
          <a onClick={(e) => smoothScroll(e, "#service")} className="nav-link">
            Service
          </a>
          <a onClick={(e) => smoothScroll(e, "#projects")} className="nav-link">
            Projects
          </a>
          <a
            href="https://wa.me/911237896540"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link nav-link--contact"
          >
            Contact
          </a>
        </nav>
        <div className="navigation">
          <input
            checked={isChecked}
            type="checkbox"
            className="navigation__checkbox"
            id="navi__toggle"
            aria-label="Toggle navigation"
          />
          <label
            htmlFor="navi__toggle"
            className="navigation__btn"
            onClick={toggleMenu}
          >
            <span className="navigation__icon"></span>
          </label>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a onClick={(e) => smoothScroll(e, "#home")}>Home</a>
              </li>
              <li className="navigation__item">
                <a onClick={(e) => smoothScroll(e, "#about")}>About</a>
              </li>
              <li className="navigation__item">
                <a onClick={(e) => smoothScroll(e, "#service")}>Service</a>
              </li>
              <li className="navigation__item">
                <a onClick={(e) => smoothScroll(e, "#projects")}>Projects</a>
              </li>
              <li className="navigation__item">
                <a
                  href="https://wa.me/+918139813883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbtn"
                >
                  Contact
                </a>
              </li>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  position: "absolute",
                  bottom: "10%",
                  width: "100%",
                  left: "0",
                }}
              >
                <a
                  href="https://www.facebook.com/share/16Etpa2YQ8/"
                  className="social-link"
                >
                  <div className="social-circle-mobile">
                    <FaFacebookF />
                  </div>
                </a>
                <a href="https://www.instagram.com/" className="social-link">
                  <div className="social-circle-mobile">
                    <FaInstagram />
                  </div>
                </a>
                <a href="https://wa.me/+918139813883" className="social-link">
                  <div className="social-circle-mobile">
                    <FaWhatsapp />
                  </div>
                </a>
              </div>
            </ul>
          </nav>
        </div>
        <div className="header__social">
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
    </header>
  );
}

export default Nav;
