import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Header from "./Header";
import Count from "./Count";
const Hero = () => {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 card on smaller screens (e.g., phones)
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="home">
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">DevDynasty Where Dreams Meet Code</h1>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  Tech Maestro: Full Stack Developer | IT Consultant | Graphic
                  Designer
                </h2>
                <div data-aos="fade-up" data-aos-delay="800">
                  <a href="#about" class="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src="Images/kenn.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <main id="main">
          <section
            id="clients"
            className="clients clients"
            style={{ marginTop: "30px", marginBottom: "40px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-6">
                  <img
                    src="Images/Budge1.png"
                    className="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  />
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <div className="academy-badge">
                    <a
                      href="https://app.hubspot.com/academy/achievements/phqg1r28/en/1/kennedy-mangeni/seo"
                      title="SEO"
                    >
                      <img
                        src="https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/7e49b405e5ff4b8597cd04570ed6ff69.png"
                        className="img-fluid"
                        alt=""
                        data-aos="zoom-in"
                        data-aos-delay="200"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  />
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <img
                    src="assets/img/clients/client-5.png"
                    class="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  />
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="about">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>About</h2>
              </div>

              <div className="row content">
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <p>
                    Mang’eni Kennedy is a proactive ICT professional with over 2
                    years of experience in web development and IT support. Adept
                    at leading projects, implementing data-driven strategies,
                    and collaborating across departments. Excels in translating
                    client needs into actionable development tasks. Skilled in
                    web development technologies, frameworks, and GIS. Thrives
                    in dynamic environments, bringing a results-oriented
                    approach to ICT projects
                  </p>
                  <section id="skills" class="skills section-bg">
                    <div class="container">
                      <div class="section-sub-title">
                        <h2>Skills</h2>
                      </div>

                      <Skills />
                    </div>
                  </section>
                </div>

                <div
                  class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                  d
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <img src="Images/About.png" alt="" className="img-fluid" />
                </div>

                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className="section-sub-title">
                    <h2> Let's Transform Ideas into Reality!</h2>
                  </div>
                  <p>
                    let's connect. I'm here to make your digital journey
                    seamless and successful.
                  </p>
                  <a href="#contact" className="btn-learn-more">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="counts" className="counts">
            <div class="container">
              <div class="row">
                <div
                  class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  <img src="Images/About.jpg" alt="" className="img-fluid" />
                </div>
                <div
                  class="image col-xl-7 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  <Count />
                </div>
              </div>
            </div>
          </section>
          <section id="services" className="services">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>
                  Enter a world of seamless solutions, where our signature
                  exceptional service meets your needs.
                </p>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="icon">
                      <i className="bx bxl-dribbble"></i>
                    </div>
                    <h4 className="title">
                      <a href="">UI/UX design</a>
                    </h4>
                    <p className="description">
                      We craft visually captivating designs that seamlessly
                      translate your brand identity into a digital masterpiece.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon">
                      <i className="bx bx-file"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Front-end Dynamic Solutions</a>
                    </h4>
                    <p className="description">
                      With dynamic front-end development that takes advantage of
                      cutting-edge HTML, CSS, and JavaScript technologies.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="bx bx-tachometer"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Back-End Development</a>
                    </h4>
                    <p class="description">
                      Dependable back-end development Leverage database
                      integration and strong server-side scripting.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon">
                      <i className="bx bx-world"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Full-Stack Expertise</a>
                    </h4>
                    <p className="description">
                      We create complete and well-rounded web solutions by
                      expertly fusing front-end and back-end technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="more-services" className="more-services">
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div
                    className="card"
                    style={{
                      backgroundImage: 'url("Images/Seo.jpg")',
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href=""> SEO Services</a>
                      </h5>
                      <p class="card-text">
                        <ul>
                          <li>SEO-Friendly Web Design</li>
                          <li>Keyword Integrationords</li>
                          <li>Mobile Optimization</li>
                          <li>Page Speed Optimization</li>
                          <li>SEO Audits and Reporting</li>
                        </ul>
                      </p>
                      <div className="read-more">
                        <a href="#">
                          <i className="bi bi-arrow-right"></i> Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div
                    className="card"
                    style={{
                      backgroundImage: 'url("Images/service.png")',
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="">Free Services</a>
                      </h5>
                      <p className="card-text">
                        <ul>
                          <li>Free web hosting</li>
                          <li>Free Support and Maintenance:</li>
                          <li>Free consultation service.</li>
                        </ul>
                      </p>
                      <div className="read-more">
                        <a href="#">
                          <i className="bi bi-arrow-right"></i> Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="features">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Interests</h2>
                <p></p>
              </div>

              <div className="row" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-3 col-md-4">
                  <div className="icon-box">
                    <i
                      className="bi bi-cloud"
                      style={{ color: "#ffbb2c;" }}
                    ></i>
                    <h3>
                      <a href="">Cloud Computing</a>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box">
                    <i
                      className="bi bi-react"
                      style={{ color: "#5578ff;" }}
                    ></i>
                    <h3>
                      <a href="">React</a>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box">
                    <i
                      className="bi bi-rectangle"
                      style={{ color: "#e80368;" }}
                    ></i>
                    <h3>
                      <a href="">Blockchain</a>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <i
                      className="bi bi-camera"
                      style={{ color: "#e361ff;" }}
                    ></i>
                    <h3>
                      <a href="">Photoshop</a>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i
                      className="ri-database-2-line"
                      style={{ color: "#47aeff;" }}
                    ></i>
                    <h3>
                      <a href="">database</a>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i
                      className="ri-gradienter-line"
                      style={{ color: "#ffa76e;" }}
                    ></i>
                    <h3>
                      <a href="">Data Science</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="testimonials" className="testimonials section-bg">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Testimonials</h2>
                <p>Let's hear What people are saying....</p>
              </div>

              <div
                className="testimonials-slider swiper"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="swiper-wrapper">
                  <Slider {...settings}>
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <img
                            src="assets/img/testimonials/testimonials-1.jpg"
                            className="testimonial-img"
                            alt=""
                          />
                          <h3>Saul Goodman</h3>
                          <h4>Ceo &amp; Founder</h4>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Ken transformed our online presence. His expertise
                            in web development increased traffic and engagement.
                            Highly recommend for a seamless, user-friendly
                            website.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <img
                            src="Images/About.jpg"
                            className="testimonial-img"
                            alt=""
                          />
                          <h3>Nancy W.</h3>
                          <h4>Designer</h4>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Working with Ken was a design dream. His seamless
                            integration of functionality with aesthetics made my
                            creations shine online.``
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <img
                            src="assets/img/testimonials/testimonials-3.jpg"
                            className="testimonial-img"
                            alt=""
                          />
                          <h3>Mr Kimani</h3>
                          <h4>Store Owner</h4>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Ken is a web development wizard. Our sales
                            skyrocketed with the visually stunning and intuitive
                            e-commerce platform he created. A true professional
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <img
                            src="assets/img/testimonials/testimonials-4.jpg"
                            className="testimonial-img"
                            alt=""
                          />
                          <h3>Matt Brandon</h3>
                          <h4>Freelancer</h4>
                          <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            Collaborating with Ken was a pleasure. His
                            creativity and technical skills brought our agency's
                            portfolio to life online. Responsive, proactive, and
                            highly endorsed
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <img
                            src="assets/img/testimonials/testimonials-5.jpg"
                            className="testimonial-img"
                            alt=""
                          />
                          <h3>John Larson</h3>
                          <h4>Entrepreneur</h4>
                          <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            Ken turned our vision into reality. His attention to
                            detail and commitment were impressive. Played a
                            significant role in our successful launch. Highly
                            recommended
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>
          </section>
          <section id="portfolio" className="portfolio">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>
                  Welcome to my portfolio, a curated collection of digital
                  dreams transformed into reality, where every click unveils a
                  story and every scroll reveals the art of innovation
                </p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>
              <div
                className="row portfolio-container"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="june_web.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a
                          href="Images/june_web.png"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                        <a href="junegeosolution.com" title="Portfolio Details">
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="Images/img1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a href="Images/img1.jpg" title="App 1">
                          <i className="bi bi-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          title="Portfolio Details"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="Images/img7.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a
                          href="assets/img/portfolio/portfolio-1.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          data-gallery="portfolioDetailsGallery"
                          data-glightbox="type: external"
                          className="portfolio-details-lightbox"
                          title="Portfolio Details"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="Image/img2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a
                          href="Images/img2.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          data-gallery="portfolioDetailsGallery"
                          data-glightbox="type: external"
                          className="portfolio-details-lightbox"
                          title="Portfolio Details"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="Images/portfolio/img5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a
                          href="assets/img/portfolio/portfolio-1.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          data-gallery="portfolioDetailsGallery"
                          data-glightbox="type: external"
                          className="portfolio-details-lightbox"
                          title="Portfolio Details"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="Images/portfolio/img6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a
                          href="assets/img/portfolio/portfolio-1.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          data-gallery="portfolioDetailsGallery"
                          data-glightbox="type: external"
                          className="portfolio-details-lightbox"
                          title="Portfolio Details"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Repeat the above structure for other portfolio items */}
              </div>
            </div>
          </section>

          <section id="team" className="team section-bg">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>skilled and dedicated Individuals</p>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div
                    className="member"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="member-img">
                      <img
                        src="Images/About4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div class="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Mang'eni Kennedy</h4>
                      <span>Chief Executive Officer</span>
                    </div>
                  </div>
                </div>

                {/*<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
           
                */}
              </div>
            </div>
          </section>

          {/*<section id="pricing" class="pricing">
          <div className="container">
            <div className="section-title">
              <h2>Pricing</h2>
              <p>
                Sit sint consectetur velit nemo qui impedit suscipit alias ea
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="box"
                  data-aos="zoom-in-right"
                  data-aos-delay="200"
                >
                  <h3>Free</h3>
                  <h4>
                    <sup>$</sup>0<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li class="na">Pharetra massa</li>
                    <li class="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div
                  className="box recommended"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <h3>Business</h3>
                  <h4>
                    <sup>$</sup>19<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li class="na">Massa ultricies mi</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="#" class="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div
                  className="box"
                  data-aos="zoom-in-left"
                  data-aos-delay="200"
                >
                  <h3>Developer</h3>
                  <h4>
                    <sup>$</sup>29<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Frequently Asked Questions</h2>
            </div>

            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>Non consectetur a erat nam at lectus urna duis?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </div>
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="col-lg-5">
                <i class="ri-question-line"></i>
                <h4>
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque?
                </h4>
              </div>
              <div class="col-lg-7">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim.
                </p>
              </div>
            </div>
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus.
                </p>
              </div>
            </div>
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Aperiam itaque sit optio et deleniti eos nihil quidem cumque.
                  Voluptas dolorum accusantium sunt sit enim. Provident
                  consequuntur quam aut reiciendis qui rerum dolorem sit odio.
                  Repellat assumenda soluta sunt pariatur error doloribus fuga.
                </p>
              </div>
            </div>
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="col-lg-5">
                <i class="ri-question-line"></i>
                <h4>
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </div>
          </div>
                </section> */}
          <section id="contact" class="contact">
            <div className="container">
              <div className="section-title" data-aos="fade-up">
                <h2>Contact Us</h2>
              </div>

              <div className="row">
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="contact-about">
                    <h3>DevDynasty</h3>
                    <p>
                      Feel free to connect, and let's discuss how we can make
                      your digital aspirations a reality.
                    </p>
                    <div className="social-links">
                      <a href="#" class="twitter">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" class="facebook">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" class="instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 mt-4 mt-md-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="info">
                    <div>
                      <i className="ri-map-pin-line"></i>
                      <p>Nairobi Kenya</p>
                    </div>

                    <div>
                      <i className="ri-mail-send-line"></i>
                      <p>kenmangeniz@gmail.com</p>
                    </div>

                    <div>
                      <i className="ri-phone-line"></i>
                      <p>+254 0707391920</p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-5 col-md-12"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div class="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
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
                  &copy; Copyright <strong>Mang'eni</strong>. All Rights
                  Reserved
                </div>
                <div className="credits">Designed by </div>Kennedy
              </div>
              <div className="col-lg-6">
                <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                  <a href="#intro" className="scrollto">
                    Home
                  </a>
                  <a href="#about" className="scrollto">
                    About
                  </a>
                  <a href="#services" className="scrollto">
                    Services
                  </a>
                  <a href="#">Terms of Use</a>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Hero;
