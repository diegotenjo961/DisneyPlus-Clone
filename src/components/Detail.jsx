import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

// Icons
import play from '../atends/images/play-icon-black.png';
import playWhite from '../atends/images/play-icon-white.png';
import group from '../atends/images/group-icon.png';

import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import moviesData from '../data/movies';

function Detail() {
    const { id } = useParams();
    
     if (!localStorage.getItem('token')) {
        history.push('/login');
    }
    
    let copy = id;
    copy = parseInt(copy);

    const handleClick = e => {
        const openYoutubeTrailer = moviesData[copy - 1].trailer;
        if(openYoutubeTrailer){
            window.open(`https://www.youtube.com/watch?v=${openYoutubeTrailer}`);
        }
    }
    
    const movie = moviesData[copy - 1];

    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg}
                alt={movie && 'Image background'} />
            </Background>
            
            <ImageTitle>
                <img src={movie.cardImg}
                alt={movie.titleImg && movie.titleImg} />
            </ImageTitle>

            <Controls>

                <PlayButton>
                    <img src={play} alt="icon play"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButon onClick={handleClick}>
                    <img src={playWhite} alt="icon play white"/>
                    <span>TRAILER</span>
                </TrailerButon>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWathButton>
                    <img src={group} alt='icon group'/>
                </GroupWathButton>
            </Controls>

            <SubTitle>
                <span>{movie.subTitle}</span>
                <span>{movie.genre}</span>
                <span><strong>{movie.type}</strong></span>
            </SubTitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    margin: 50px 0;
    margin-top: 60px;
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    box-shadow: rgb(20, 20, 20);
    border-radius: 4px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
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

const TrailerButon = styled(PlayButton)`
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

const GroupWathButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
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
