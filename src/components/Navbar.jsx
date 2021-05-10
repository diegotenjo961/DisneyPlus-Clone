import React from 'react'
import styled from 'styled-components';

import LogoDisney from '../atends/images/logo.svg';

// ICONST NAVBAR
import iconHome from '../atends/images/home-icon.svg';
import iconSearch from '../atends/images/search-icon.svg';
import iconWatchlist from '../atends/images/watchlist-icon.svg';
import iconOriginal from '../atends/images/original-icon.svg';
import iconMovies from '../atends/images/movie-icon.svg';
import iconSeries from '../atends/images/series-icon.svg';

import myPhoto from '../atends/images/my-photo.jpeg';



function Navbar() {
    return (
        <Nav>
            <Logo src={LogoDisney}/>

            <NavMenu>

                <a href="#">
                    <img src={iconHome} alt="icon home"/>
                    <span>HOME</span>
                </a>
                <a href="#">
                    <img src={iconSearch} alt="icon search"/>
                    <span>SEARCH</span>
                </a>
                <a href="#">
                    <img src={iconWatchlist} alt="icon watchlist"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="#">
                    <img src={iconOriginal} alt="icon original"/>
                    <span>ORIGINALS</span>
                </a>
                <a href="#">
                    <img src={iconMovies} alt="icon movies"/>
                    <span>MOVIES</span>
                </a>
                <a href="#">
                    <img src={iconSeries} alt="icon series"/>
                    <span>SERIES</span>
                </a>

            </NavMenu>

            <UserImg src={myPhoto}/>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        color: #fff;
        text-decoration: none;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform-original: left center;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`