import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import API from '../API';

import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';

import { useDispatch } from "react-redux";
import { setMovies } from '../features/movie/movieSlice';

import backgroundHome from '../atends/images/home-background.png';

function Home() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!localStorage.getItem('token')) {
        history.push('/login');
    }

    const getData = async (path) => {
        setIsLoading(true);
        await axios.get(API(path))
            .then(response => {
                dispatch(setMovies(response.data));
                setIsLoading(false);
            })
            .catch(error => {
                new Error(error);
                setError(error);
            });
    }
    useEffect(() => {
        getData('movie/popular');
        // eslint-disable-next-line
    }, [dispatch])

    if(error){
        return <p>{error.message}</p>
    }
    return (
        <Container>
            {isLoading ? <p>Loading ...</p>
                :(
                <>
                    <ImgSlider />
                    <Viewers />
                    <Movies />
                </>
                )
            }
        </Container>
    )
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url(${backgroundHome}) center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

`