import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';

import dataMovies from '../data/movies';
import dataSeries from '../data/series';

function Movies() {
    const movies = useSelector(selectMovies);

    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {movies && 
                    movies.map(movie => (
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.cardImg} alt={'Image ' + movie.title} />                            
                            </Link>
                        </Wrap>
                    ))}
            </Content>
            <h4>Movies</h4>
            <Content>
                {dataMovies.map(movie => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt={'Image ' + movie.title} />                        
                        </Link>
                    </Wrap>
                ))}
            </Content>
            <h4>Series</h4>
            <Content>
                    {dataSeries.map(serie => (
                        <Wrap key={serie.id}>
                            <Link to={`/detail/${serie.id}`}>
                                <img src={serie.cardImg} alt={'Image '+ serie.title} />                            
                            </Link>
                        </Wrap>
                    ))}
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
