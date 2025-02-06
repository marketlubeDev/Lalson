import logo from "./../assets/Lalisons.svg";
function Nav() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <div className="logo-text">
            <img src={logo} alt="LALSONS Electronics" className="logo-image" />
          </div>
        </div>

        <nav className="header__nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#service" className="nav-link">
            Service
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link nav-link--contact">
            Contact
          </a>
        </nav>

        <div className="header__social">
          <a href="#facebook" className="social-link">
            <div className="social-circle"></div>
          </a>
          <a href="#twitter" className="social-link">
            <div className="social-circle"></div>
          </a>
          <a href="#instagram" className="social-link">
            <div className="social-circle"></div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
