import React from 'react'
import styled from 'styled-components'

// images viewers
import ViewersDisney from '../assets/images/viewers-disney.png'
import ViewersPixar from '../assets/images/viewers-pixar.png'
import ViewersMarvel from '../assets/images/viewers-marvel.png'
import ViewersStartwars from '../assets/images/viewers-starwars.png'
import ViewersNational from '../assets/images/viewers-national.png'

// videos viwers
import videoDisney from '../assets/videos/1564674844-disney.mp4'
import videoPixar from '../assets/videos/1564676714-pixar.mp4'
import videoMarvel from '../assets/videos/1564676115-marvel.mp4'
import videoStartwars from '../assets/videos/1608229455-star-wars.mp4'
import videoNational from '../assets/videos/1564676296-national-geographic.mp4'

function Viewers () {
  return (
    <Container>
      <Wrap>
        <img src={ViewersDisney} alt='viewers diney' />
        <video autoPlay loop playsInline>
          <source src={videoDisney} />
        </video>
      </Wrap>
      <Wrap>
        <img src={ViewersPixar} alt='viewers pixar' />
        <video autoPlay loop playsInline>
          <source src={videoPixar} />
        </video>
      </Wrap>
      <Wrap>
        <img src={ViewersMarvel} alt='viewers marvel' />
        <video autoPlay loop playsInline>
          <source src={videoMarvel} />
        </video>
      </Wrap>
      <Wrap>
        <img src={ViewersStartwars} alt='viewers star wars' />
        <video autoPlay loop playsInline>
          <source src={videoStartwars} />
        </video>
      </Wrap>
      <Wrap>
        <img src={ViewersNational} alt='viewers national geograpic' />
        <video autoPlay loop playsInline>
          <source src={videoNational} />
        </video>
      </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media(max-width: 700px){  
		  margin-top: 4px;
			margin-bottom: 16px;
		  grid-auto-flow:column;  
			grid-template-columns: none;
		  grid-gap:10px; 
		  overflow:auto;
    }
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid  rgba(249, 249,249, 0.1 );
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px  10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94);
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0 30px  22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 0.9;
        }
    }
		@media(max-width: 700px) {
			width: 100px;
		}
`
