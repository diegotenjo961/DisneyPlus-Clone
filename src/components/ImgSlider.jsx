import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import API from '../API';
import Loading from './Loading';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// IMAGES SLIDER
// import sliderBadging from '../atends/images/slider-badging.jpg';
// import sliderBadag from '../atends/images/slider-badag.jpg';
// import sliderScale from '../atends/images/slider-scale.jpg';
// import sliderScales from '../atends/images/slider-scales.jpg';

function ImgSlider() {
    const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            await axios.get(API('movie/popular'))
            .then(response => {
                setMovies(response.data.results);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error);
            });
        }
        getData();
    }, []);

    const imageMovie = (image) => {
        return `https://image.tmdb.org/t/p/w500${image}`;
    }
    if(isLoading){
        return <Loading />
    }
    if(error){
        return <h4>{error.message}</h4>
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={imageMovie(movies[0].backdrop_path)} alt={`slider ${movies[0].title}`} />
            </Wrap>
            <Wrap>
                <img src={imageMovie(movies[1].backdrop_path)} alt={`slider ${movies[1].title}`} />
            </Wrap>
            <Wrap>
                <img src={imageMovie(movies[2].backdrop_path)} alt={`slider ${movies[2].title}`} />
            </Wrap>
            <Wrap>
                <img src={imageMovie(movies[3].backdrop_path)} alt={`slider ${movies[3].title}`} />
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
    height: 250px;

    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px  10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249,249, 0.8 );
        }
    }

`
