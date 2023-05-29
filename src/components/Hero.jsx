import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };
    return (
      <Slider {...settings}>
        <div id="home" className="item1">
          <div className="container">
            <div className="slide-content">
              <div className="slide-subtitle">
                <h4>Παντρευόμαστε!</h4>
              </div>
              <div className="slide-title">
                <h2>Save Our Date</h2>
              </div>
              <div className="slide-text">
                <p> 19 Αυγούστου 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item2">
          <div className="container">
            <div className="container">
              <div className="slide-content">
                <div className="slide-subtitle">
                  <h4>Παντρευόμαστε!</h4>
                </div>
                <div className="slide-title">
                  <h2>Save Our Date</h2>
                </div>
                <div className="slide-text">
                  <p> 19 Αυγούστου 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
