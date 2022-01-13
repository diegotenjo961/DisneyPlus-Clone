import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';

import backgroundHome from '../assets/images/home-background.png';

function Home() {
    const history = useHistory();

    if (!localStorage.getItem('token')) {
        history.push('/login');
    }

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies category='popular' title='POPULAR MOVIES'/>
            <Movies category='top_rated' title='TOP RELATED'/>
            <Movies category='upcoming' title='UPCOMING'/>
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
