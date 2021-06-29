import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import API from '../API';
import Loading from './Loading';

const Movies = (props) => {
    const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            await axios.get(API(props.path))
            .then(response => {
                setMovies(response.data.results);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                new Error(error);
                setError(error);
            });
        }
        getData();
    }, [props.path]);
    if(isLoading){
        return <Loading />
    }
    if(error){
        return <h4 color="red">{error.message}</h4>
    }
    return (
        <Container>
            <h3>{props.title || 'TYPE MOVIES'}</h3>
            <Content>
                {
                    movies.map(movie => {
                    return (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title || movie.id} />
                            </Link>
                        </Wrap>
                    )
                })}
            </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div`
`
const Content = styled.div`
    margin: 20px 0;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media(max-width: 770px){
        display: block;
        div {
            margin-bottom: 26px;
        }
    }
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px  10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`
