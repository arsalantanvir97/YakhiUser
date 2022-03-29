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
          <div className="featured-product animate__animated animate__slideInUp ">
           
              <img
                onClick={() => {
                  !this?.props?.userInfo
                    ? UnauthorizedAlert()
                    : this.props?.history?.push(`/ProductView/${pro._id}`);
                }}
                style={{
                  height: 216,
                  width: 214
                }}
                src={
                  pro?.productimage?.length > 0 &&
                  `${imageURL}${pro?.productimage[0]}`
                }
                alt=""
                className="img-fluid mx-auto abcccc"
              />
            
            <h4 className="prod-title text-center">{pro?.name}</h4>
            <h5 className="prod-price text-center">${pro?.price}</h5>
          </div>
        ))}
      </Slider>
    );
  }
}
