import React from "react";
import Header from "./Header";

const Portfolio = () => {
  return (
    <div className="Container">
      <Header />
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfolio Details</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Portfolio Details</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>

                    <div className="carousel-inner">
                      <div className="swiper-wrapper align-items-center">
                        <div className="carousel-item active">
                          <img src="Images/portfolio/img1.jpg" alt="" />
                        </div>

                        <div className="carousel-item">
                          <img src="Images/portfolio/img2.jpg" alt="" />
                        </div>

                        <div className="carousel-item">
                          <img src="Images/portfolio/img3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    <li>
                      <strong>Client</strong>: Jun Geo Solutions
                    </li>
                    <li>
                      <strong>Project date</strong>: 06 July, 2020
                    </li>
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href="https://junegeosolutions.com">
                        junegeosolutions.com/
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>About the Website Project for June Geo Solutions</h2>
                  <p>
                    The development of the June Geo Solutions website was a
                    dynamic undertaking that brought together my passion for web
                    development and the company's commitment to geospatial
                    excellence and environmental responsibility. Tasked with
                    showcasing a comprehensive range of geospatial services, I
                    meticulously designed an intuitive and visually engaging
                    website that goes beyond the conventional boundaries of
                    mapping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="copyright">
                &copy; Copyright <strong>DevNasty</strong>. All Rights Reserved
              </div>
              <div className="credits">
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="#intro" className="scrollto">
                  Home
                </a>
                <a href="#about" className="scrollto">
                  About
                </a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
