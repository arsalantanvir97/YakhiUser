import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { imageURL } from '../utils/api'
import UnauthorizedAlert from './UnauthorizedAlert'
import ImageLazyLoad from './ImageLazyLoad'

export default class ProductSlider extends Component {
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
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
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
            <ImageLazyLoad
              onClick={() => {
                this.props?.history?.push(`/ProductView/${pro._id}`)
              }}
              style={{
                height: 216,
                width: 214,
              }}
              src={
                pro?.productimage?.length > 0 &&
                `${imageURL}${pro?.productimage[0]}`
              }
              alt=''
              classname={'img-fluid mx-auto abcccc'}
            />

            <h4 className='prod-title text-center'>{pro?.name}</h4>
            <h5 className='prod-price text-center'>${pro?.price}</h5>
          </div>
        ))}
      </Slider>
    )
  }
}
