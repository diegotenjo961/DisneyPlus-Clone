import React from 'react';
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// IMAGES SLIDER
import sliderBadging from '../atends/images/slider-badging.jpg';
import sliderBadag from '../atends/images/slider-badag.jpg';
import sliderScale from '../atends/images/slider-scale.jpg';
import sliderScales from '../atends/images/slider-scales.jpg';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={sliderBadging} alt="slider images movies and series" />
            </Wrap>
            <Wrap>
                <img src={sliderScale} alt="slider images movies and series" />
            </Wrap> 
            <Wrap>
                <img src={sliderBadag} alt="slider images movies and series" />
            </Wrap>
            <Wrap>
                <img src={sliderScales} alt="slider images movies and series" />
            </Wrap>     
        </Carousel>
    )
}

export default ImgSlider;

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
        color: transparent;
        font-size: 50px;
        cursor: context-menu;
    }
    .slick-next:before {
        color: transparent;
        font-size: 50px;
        cursor: context-menu;
    }
    @media (max-width: 700px){
        display: none;
    }
`

const Wrap = styled.div`
    cursor: pointer;

    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px  10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249,249, 0.8 );
        }
    }

`
