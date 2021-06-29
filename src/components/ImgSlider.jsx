import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
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
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [randomSlice, setRandomSlice] = useState([]);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const getNumRandom = () => {
        let numRandom = Math.floor(Math.random() * 20);

        if(randomSlice[0] !== undefined){
            for(let num of randomSlice){
                if(numRandom === num){
                    return getNumRandom();
                }
            }
        }

        const arrayID = randomSlice.push(numRandom);
        setRandomSlice(arrayID);
        return numRandom;
    }

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            await axios.get(API('movie/upcoming'))
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

    useEffect(() => {
        const numbersRandomSlice = () => {
            setRandomSlice([]);
            const id1 = getNumRandom();
            const id2 = getNumRandom();
            const id3 = getNumRandom();
            const id4 = getNumRandom();

            return {id1, id2, id3, id4}
        }
        setRandomSlice(numbersRandomSlice());
        // eslint-disable-next-line
    }, [])

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
            <Wrap to={`/detail/${movies[randomSlice.id1].id}`}>
                <img src={imageMovie(movies[randomSlice.id1].backdrop_path)}  alt={`${movies[randomSlice.id1].title}`} />
            </Wrap>
            <Wrap to={`/detail/${movies[randomSlice.id2].id}`}>
                <img src={imageMovie(movies[randomSlice.id2].backdrop_path)}  alt={`${movies[randomSlice.id2].title}`} />
            </Wrap>
            <Wrap to={`/detail/${movies[randomSlice.id3].id}`}>
                <img src={imageMovie(movies[randomSlice.id3].backdrop_path)}  alt={`${movies[randomSlice.id3].title}`} />
            </Wrap>
            <Wrap to={`/detail/${movies[randomSlice.id4].id}`}>
                <img src={imageMovie(movies[randomSlice.id4].backdrop_path)}  alt={`${movies[randomSlice.id4].title}`} />
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

const Wrap = styled(Link)`
    cursor: pointer;
    height: 400px;
    color: #f9f9f9;
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

        &:hover {
            border: 4px solid rgba(249, 249,249, 0.8 );
        }
    }

`
