import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    };

    this.endCount1 = 15;
    this.endCount2 = 100;
    this.endCount3 = 2;
    this.endCount4 = 50;
    this.interval1 = 100; // in milliseconds
    this.interval2 = 200; // in milliseconds
    this.interval3 = 1000; // in milliseconds
    this.interval4 = 20; // in milliseconds
  }

  componentDidMount() {
    this.startCounting1();
    this.startCounting2();
    this.startCounting3();
    this.startCounting4();
  }

  startCounting1() {
    const countInterval1 = setInterval(() => {
      if (this.state.count1 < this.endCount1) {
        this.setState((prevState) => ({
          count1: prevState.count1 + 1,
        }));
      } else {
        clearInterval(countInterval1);
      }
    }, this.interval1);
  }

  startCounting2() {
    const countInterval2 = setInterval(() => {
      if (this.state.count2 < this.endCount2) {
        this.setState((prevState) => ({
          count2: prevState.count2 + 1,
        }));
      } else {
        clearInterval(countInterval2);
      }
    }, this.interval2);
  }

  startCounting3() {
    const countInterval3 = setInterval(() => {
      if (this.state.count3 < this.endCount3) {
        this.setState((prevState) => ({
          count3: prevState.count3 + 1,
        }));
      } else {
        clearInterval(countInterval3);
      }
    }, this.interval3);
  }

  startCounting4() {
    const countInterval4 = setInterval(() => {
      if (this.state.count4 < this.endCount4) {
        this.setState((prevState) => ({
          count4: prevState.count4 + 1,
        }));
      } else {
        clearInterval(countInterval4);
      }
    }, this.interval4);
  }

  render() {
    return (
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
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div class="section-sub-title">
                    <h2> Why Consider Us</h2>
                  </div>
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-emoji-smile"></i>
                      <span className="purecounter">{this.state.count1}</span>
                      <p>
                        <strong>Happy Clients</strong> Their satisfaction is our
                        greatest achievement.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-journal-richtext"></i>
                      <span className="purecounter">{this.state.count2}</span>
                      <p>
                        <strong>Projects</strong> Multiple projects, countless
                        success stories! Explore our diverse portfolio.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock"></i>
                      <span className="purecounter">{this.state.count3}</span>
                      <p>
                        <strong>Years of experience</strong> "Years of
                        expertise: Delivering excellence since 2021"
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-folder"></i>
                      <span className="purecounter">{this.state.count4}</span>
                      <p>
                        <strong>Products</strong> Efficiency in every detail
                        ensures project success from start to finish
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Count;
