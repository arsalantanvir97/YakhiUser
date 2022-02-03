import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageURL } from "../utils/api";
import UnauthorizedAlert from "./UnauthorizedAlert";

export default class ProductSlider extends Component {
  render() {
    console.log("this.props", this.props);
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this?.props?.images?.map((pro) => (
          <div className="featured-product animate__animated animate__slideInUp">
            <Link
              to={this?.props?.userInfo ? `/ProductView/${pro._id}` : "#"}
              onClick={() => {
                !this?.props?.userInfo && UnauthorizedAlert();
              }}
            >
              <img
                style={{
                  height: 216,
                  width: 214
                }}
                src={`${imageURL}${pro?.productimage}`}
                alt=""
                className="img-fluid mx-auto"
              />
            </Link>
            <h4 className="prod-title">{pro?.name}</h4>
            <h5 className="prod-price">${pro?.price}</h5>
          </div>
        ))}
      </Slider>
    );
  }
}