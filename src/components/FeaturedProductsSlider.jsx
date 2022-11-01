import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { imageURL } from '../utils/api'
import UnauthorizedAlert from './UnauthorizedAlert'

export default class FeaturedProductsSlider extends Component {
  render() {
    console.log('this.props', this.props)

    function SampleNextArrow(props) {
      const { className, style, onClick } = props
      return (
        <div className={className} onClick={onClick}>
          <i
            className='fa fa-arrow-right fa-3x'
            aria-hidden='true'
            style={{ color: 'black' }}
          ></i>
        </div>
      )
    }

    const SamplePrevArrow = (props) => {
      const { className, onClick } = props
      return (
        <div className={className} onClick={onClick}>
          <i
            className='fa fa-arrow-left fa-3x'
            aria-hidden='true'
            style={{ color: 'black' }}
          ></i>
        </div>
      )
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    }
    return (
      <Slider {...settings}>
        {this?.props?.images?.map((pro) => (
          <div className='featured-product animate__animated animate__slideInUp '>
            <img
              onClick={() =>
                pro?.name
                  ? this.props?.history?.push(`/ProductView/${pro._id}`)
                  : pro?.categorytitle
                  ? this.props?.history?.push(`/Capsules/${pro._id}`)
                  : null
              }
              style={{
                height: 296,
                width: 294,
              }}
              src={
                pro?.name || pro?.categorytitle == '3 BITTERS'
                  ? 'images/3BITTERS-min.png'
                  : pro?.name || pro?.categorytitle == 'Kits & Bundles'
                  ? 'images/KITS & BUNDLES png-min.png'
                  : pro?.name || pro?.categorytitle == 'Teas'
                  ? 'images/TEAS-min.png'
                  : null
                // pro?.productimage?.length > 0 &&
                // `${imageURL}${pro?.productimage[0]}`
              }
              alt=''
              className='img-fluid mx-auto abcccc'
            />

            <h3
              className='prod-title text-center'
              style={{ fontWeight: 'bold', fontSize: 27 }}
            >
              {pro?.name
                ? pro?.name
                : pro?.categorytitle
                ? pro?.categorytitle
                : null}
            </h3>
            {/* <h5 className='prod-price text-center'>${pro?.price}</h5> */}
          </div>
        ))}
      </Slider>
    )
  }
}
