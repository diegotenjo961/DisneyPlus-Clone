import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Loading from './Loading';
import Video from './Video';
import API from '../API';

// Icons
import play from '../atends/images/play-icon-black.png';
import playWhite from '../atends/images/play-icon-white.png';
import group from '../atends/images/group-icon.png';

import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const history = useHistory();
    const [movie, setMovie] = useState([]);
    const [videos, setVideos] = useState([]);
    const [booleanVideo, setBooleanVideo] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!localStorage.getItem('token')) {
        history.push('/login');
    }

    const getData = async (path) => {
        setIsLoading(true);
        await axios.get(API(path))
        .then(response => {
            switch (path) {
                case `movie/${id}`:
                    setMovie(response.data);
                    break;
                case `movie/${id}/videos`:
                    setVideos(response.data);
                    break;
                default:
                    console.log('Please put the correct path');
            }
            setIsLoading(false);
        })
        .catch(error => {
            new Error(error);
            setIsLoading(false);
            setError(error);
        })
    }

    useEffect(() => {
        getData(`movie/${id}`);
        getData(`movie/${id}/videos`);
        return () => {
            setIsLoading(true);
        }
        // eslint-disable-next-lines
    }, [id]);


    const imageMovie = (image) => {
        return `https://image.tmdb.org/t/p/w500${image}`;
    }

    const handleClick = async e => {
        if(e.target.className === 'button-closed'){
            return setBooleanVideo(false);
        }
        return setBooleanVideo(true);
    }

    if(isLoading){
        return <Loading />
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
                    <PlayButton onClick={handleClick}>
                        <img src={play} alt="icon play"/>
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton onClick={handleClick}>
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
                {booleanVideo && (
                    <>
                    <ButtonClosed>
                        <div className="button-closed" onClick={handleClick}>
                            Close
                        </div>
                    </ButtonClosed>
                        {videos.results.map(video => {
                            return(
                                <div key={video.key}>
                                    <Video url={video.key} title={video.name} />
                                </div>
                            )
                        })}
                    </>
                )}
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
    section:nth-child(2) {
        padding-bottom: 30px;
    }
`
const Image = styled.figure`
    margin-top: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px  10px -10px;
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
const ButtonClosed = styled.button`
    margin-bottom: 10px;

    .button-closed {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #000;
        background: #fff;
        border: none;
        outiline: none;
        border-radius: 4px;
        transition: all 255ms;
    }
    .button-closed:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`