import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import API from '../API';

// Icons
import play from '../atends/images/play-icon-black.png';
import playWhite from '../atends/images/play-icon-white.png';
import group from '../atends/images/group-icon.png';

import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async (path) => {
        setIsLoading(true);
        await axios.get(API(path))
        .then(response => {
            setMovie(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            new Error(error);
            setIsLoading(false);
            setError(error);
        })
    }

    useEffect(() => {
        getData(`movie/${id}`)
    }, [id])

    const imageMovie = (image) => {
        return `https://image.tmdb.org/t/p/w500${image}`;
    }
    console.log(movie)


    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>{error.message}</p>
    }
    return (
        <Container>
            <section>
                <Image>
                    <img src={imageMovie(movie.backdrop_path)}
                    alt={movie.title} />
                </Image>

                <Controls>
                    <PlayButton>
                        <img src={play} alt="icon play"/>
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton >
                        <img src={playWhite} alt="icon play white"/>
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src={group} alt='icon group'/>
                    </GroupWatchButton>
                </Controls>
            </section>
            <section>
                <Title>
                    <h3>{movie.title}</h3>
                </Title>
                <SubTitle>
                    <span>{movie.release_date}</span>
                    <div>
                        {movie.genres.map(genre => {
                            return(
                                <span key={genre.id}>{genre.name}</span>
                            )
                })}
                    </div>
                </SubTitle>

                <Description>
                    {movie.overview}
                </Description>
            </section>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    margin: 0 70px;
    height: 100%;
    section:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Image = styled.figure`
    margin-top: 10px;
    box-shadow: 0 0 12px rgb(0, 0, 100);
    img {
        border-radius: 4px;
    }
`
const Title = styled.div``

const Controls = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #fff;
    background: rgba(0, 0, 0, 0.6);

    span {
        font-size: 30px;
        color: #fff;
    }
    &:hover {
        background: rgb(100, 100, 100);
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    display: flex;
    color: rgb(249, 249, 249);
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
    span {
        margin: 0 20px;
        text-transform: uppercase;
    }
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px
`
