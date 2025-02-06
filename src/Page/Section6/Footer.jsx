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

        <div className="footer-center">
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

        <div className="footer-right">
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor nibh euismod tincidunt ut. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor nibh
            euismod tincidunt ut
          </p>

          <div>
            <div className="contact-info">
              <a href="mailto:hello@lalsons.com">hello@lalsons.com</a>
              <a href="tel:+919900099900">+91 9900 0999 9900</a>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook">
                  <div className="social-icon"></div>
                </a>
                <a href="#twitter" aria-label="Twitter">
                  <div className="social-icon"></div>
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <div className="social-icon"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          made by <a href="#marketlube">Marketlube</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
