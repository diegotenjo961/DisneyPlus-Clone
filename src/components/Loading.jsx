import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <Loader>
            <span></span>
            <span></span>
            <span></span>
        </Loader>
    );
}

export default Loading;

const Loader = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-duration: .5s;
    animation-iteration-count: infinite;

    span {
        display: inline-block;
        background-color: rgb(2, 50, 200);
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin: 0 8px;
        transform: translate3d(0);
        animation: bounce 0.5s infinite alternate;
    }
    span:nth-child(2) {
        background-color: rgb(2, 20, 200);
        animation-delay: 0.2s;
    }
    span:nth-child(3) {
        animation-delay: 0.4s;
        background-color: rgb(20, 20, 150);
    }

    @keyframes bounce {
        to {
            width: 20px;
            height: 20px;
            transform: translate3d(0, -30px, 0);
        }
    }
`