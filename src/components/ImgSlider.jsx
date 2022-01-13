import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Loading from './Loading';

import { getMovieCategory } from '../services/movie';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function ImgSlider() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [randomSlice, setRandomSlice] = useState([]);

		const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    useEffect(() => {
        setIsLoading(true);
        const category = 'upcoming';
        getMovieCategory({ category })
					.then(res => setMovies(res.results))
					.catch(err => setError(err))
					.finally(() => setIsLoading(false));

			const arrayIds = [...Array(21).keys()];
			arrayIds.shift();
			const randomIds = [
				...arrayIds
				.sort(() => 0.5 - Math.random())
			].slice(0, 4);
			setRandomSlice(randomIds)
    }, []);

    const imageMovie = (image) => `https://image.tmdb.org/t/p/w500${image}`;

    const getMovie = (num) => movies[randomSlice[num]];

    if(isLoading && !!randomSlice) return <Loading />;
    if(error) return <h4>{error.message}</h4>;

    return (
        <Carousel {...settings}>
            <Wrap to={`/detail/${getMovie(0).id}`}>
                <img src={imageMovie(getMovie(0).backdrop_path)}
                    alt={`${getMovie(0).title}`} />
            </Wrap>

            <Wrap to={`/detail/${getMovie(1).id}`}>
                <img src={imageMovie(getMovie(1).backdrop_path)}
                    alt={`${getMovie(1).title}`} />
            </Wrap>

            <Wrap to={`/detail/${getMovie(2).id}`}>
                <img src={imageMovie(getMovie(2).backdrop_path)}
                    alt={`${getMovie(2).title}`} />
            </Wrap>

            <Wrap to={`/detail/${getMovie(3).id}`}>
                <img src={imageMovie(getMovie(3).backdrop_path)}
                    alt={`${getMovie(3).title}`} />
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
        &:hover {
            .slick-prev:before {
                display: block;
            }
            .slick-next:before {
                display: block;
            }
        }
    }
    button {
        z-index: 1;
    }
    .slick-prev:before {
        font-size: 2rem;
        display: none;
    }
    .slick-next:before {
        font-size: 2rem;
        display: none;
    }
    &:hover {
        .slick-prev:before {
            display: block;
        }
        .slick-next:before {
            display: block;
        }
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
