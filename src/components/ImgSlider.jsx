import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// images slider
import sliderBadging from '../assets/images/slider-badging.jpg';
import sliderBadag from '../assets/images/slider-badag.jpg';
import sliderScale from '../assets/images/slider-scale.jpg';
import sliderScales from '../assets/images/slider-scales.jpg';

function ImgSlider () {
  // if you search the slider image random see log git 38dea3c
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  }

  return (
    <Carousel {...settings}>

      <Wrap>
        <img
          src={sliderScale}
          alt="sliderScale"
        />
      </Wrap>
 
      <Wrap>
        <img
          src={sliderBadging}
          alt="sliderBadging"
        />
      </Wrap>

      <Wrap>
        <img
          src={sliderBadag}
          alt="sliderBadag"
        />
      </Wrap>
   
      <Wrap>
        <img
          src={sliderScales}
          alt="sliderScales"
        />
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    .slick-dots li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
    .slick-prev:before {
        font-size: 36px;
        cursor: pointer;
    }
    .slick-next:before {
        font-size: 36px;
        cursor: pointer;
    }

    @media (max-width: 700px){
      display: block;
      height: 200px;
      ul li button {
        &:before {
          display: none;
        }
      } 
      .slick-prev:before {
        display: none;
      }
      .slick-next:before {
        display: none;
      }
      &:hover {
        .slick-prev:before {
	  display: none;
	}
        .slick-next:before {
	  display: none;
	}
      }
    }
`

const Wrap = styled.div`
    color: #f9f9f9;
    height: 400px;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;

    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;

        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px  10px -10px;
        transition-duration: 300ms;

	object-fit: cover;
        &:hover {
            border: 4px solid rgba(249, 249,249, 0.8 );
        }
    }
    @media(max-width: 700px){
      height: 200px;
    }
`
