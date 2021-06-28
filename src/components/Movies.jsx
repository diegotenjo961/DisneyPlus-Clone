import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';

const Movies = () => {
    const movies = useSelector(selectMovies);

    return (
        <Container>
            <h4>Movies</h4>
            <Content>
                {
                    movies.results.map(movie => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title} />
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
