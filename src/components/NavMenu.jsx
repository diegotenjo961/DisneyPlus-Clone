import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import iconHome from '../assets/images/home-icon.svg'
import iconSearch from '../assets/images/search-icon.svg'
import iconWatchlist from '../assets/images/watchlist-icon.svg'
import iconOriginal from '../assets/images/original-icon.svg'
import iconMovies from '../assets/images/movie-icon.svg'
import iconSeries from '../assets/images/series-icon.svg'

const navMenuContent = [
  {
    to: '/',
    srcImage: iconHome,
    title: 'home'
  },
  {
    to: '/',
    srcImage: iconSearch,
    title: 'search'
  },
  {
    to: '/',
    srcImage: iconWatchlist,
    title: 'watchlist'
  },
  {
    to: '/',
    srcImage: iconOriginal,
    title: 'originals'
  },
  {
    to: '/',
    srcImage: iconMovies,
    title: 'movies'
  },
  {
    to: '/',
    srcImage: iconSeries,
    title: 'series'
  }

]

function NavMenu () {
  return (
    <NavMenuContainer>
      {navMenuContent.map((item, n) => (
        <Link to={item.to} key={item.title.concat(n)}>
          <img
            src={item.srcImage}
            alt={`icon ${item.title}`}
          />
          <span>{item.title.toUpperCase()}</span>
        </Link>
      ))}
    </NavMenuContainer>
  )
}

export default NavMenu

const NavMenuContainer = styled.section`
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
