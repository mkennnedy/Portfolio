import React from "react";

const Header = () => {
  return (
    <header id="header" class="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="index.html">Mang'eni Kennedy</a>
          </h1>

          <a href="index.html">
            <img src="logo.png" alt="" className="img-fluid" />
          </a>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            {/*---
            <li>
              <a className="nav-link scrollto" href="#pricing">
                Pricing
              </a>
  </li>*/}
            <li>
              <a class="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-social-links">
          <a href="https://www.linkedin.com/in/kenmangeni" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/mkennnedy" className="github">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://wa.me/254707391920?text=Hello i Would like to Make an Inquiry"
            className="whatapp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="#" className="x">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </div>
    </header>
  );
};

export default Header;
