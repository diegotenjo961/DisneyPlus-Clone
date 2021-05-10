import React from 'react';
import styled from 'styled-components';

// images viewers
import ViewersDisney from '../atends/images/viewers-disney.png';
import ViewersPixar from '../atends/images/viewers-pixar.png';
import ViewersMarvel from '../atends/images/viewers-marvel.png';
import ViewersStartwars from '../atends/images/viewers-starwars.png';
import ViewersNational from '../atends/images/viewers-national.png';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src={ViewersDisney} alt="viewers diney" />
            </Wrap>
            <Wrap>
                <img src={ViewersPixar} alt="viewers pixar" />
            </Wrap>
            <Wrap>
                <img src={ViewersMarvel} alt="viewers marvel" />
            </Wrap>
            <Wrap>
                <img src={ViewersStartwars} alt="viewers star wars" />
            </Wrap>
            <Wrap>
                <img src={ViewersNational} alt="viewers national geograpic" />
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`

    border-radius: 10px;
    cursor: pointer;
    border: 3px solid  rgba(249, 249,249, 0.1 );
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px  10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0 30px  22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8)

    }
`