import React, { Component } from "react";
import Slider from "react-slick";

export default class ClientsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:1 ,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <Slider {...settings}>
        <div className="customer-feedback">
          <div className="owl-carousel feedback-slider">
            {/* slider item */}
            <div className="feedback-slider-item">
              <img
                src="images/testi-avatar-1.png"
                className="center-block img-circle"
                alt="Customer Feedback"
              />
              <h3 className="customer-name">Lisa Redfern</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader will be
                distracted by the readable its layout.
              </p>
            </div>
            {/* /slider item */}
            {/* slider item */}
            <div className="feedback-slider-item">
              <img
                src="images/testi-avatar-mid.png"
                className="center-block img-circle"
                alt="Customer Feedback"
              />
              <h3 className="customer-name">Cassi</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader will be
                distracted by the readable its layout.
              </p>
            </div>
            {/* /slider item */}
            {/* slider item */}
            <div className="feedback-slider-item">
              <img
                src="images/testi-avatar-2.png"
                className="center-block img-circle"
                alt="Customer Feedback"
              />
              <h3 className="customer-name">Md Nahidul</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader will be
                distracted by the readable its layout.
              </p>
            </div>
            {/* /slider item */}
            {/* slider item */}
            <div className="feedback-slider-item">
              <img
                src="images/testi-avatar-1.png"
                className="center-block img-circle"
                alt="Customer Feedback"
              />
              <h3 className="customer-name">Lisa Redfern</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader will be
                distracted by the readable its layout.
              </p>
            </div>
            {/* /slider item */}
            {/* slider item */}
            <div className="feedback-slider-item">
              <img
                src="images/testi-avatar-mid.png"
                className="center-block img-circle"
                alt="Customer Feedback"
              />
              <h3 className="customer-name">Cassi</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader will be
                distracted by the readable its layout.
              </p>
            </div>
            {/* /slider item */}
            {/* slider item */}
            <div className="feedback-slider-item">
              <img
                src="images/testi-avatar-2.png"
                className="center-block img-circle"
                alt="Customer Feedback"
              />
              <h3 className="customer-name">Md Nahidul</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader will be
                distracted by the readable its layout.
              </p>
            </div>
            {/* /slider item */}
          </div>
          {/* /End feedback-slider */}
          {/* side thumbnail */}
        
          {/* /side thumbnail */}
         
        </div>
      </Slider>
    );
  }
}
