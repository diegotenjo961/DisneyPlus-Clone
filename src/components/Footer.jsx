import React from 'react'
import styled from 'styled-components'
import twitterIcon from '../assets/images/twitter-icon.svg'
import githubIcon from '../assets/images/github-icon.svg'
import instagramIcon from '../assets/images/instagram-icon.svg'
import copyrightIcon from '../assets/images/copyright-icon.svg'

function Footer(){
  return (
    <FooterContainer>
      <div>
        <img
          src={copyrightIcon}
          alt="copyright"
        />
        <p> Disney clone by: diegotenjo961</p>
      </div>
      <Social>
        <a href="https://twitter.com/elcokiin" target="_blanck">
          <img
            src={twitterIcon}
            alt="twitter icon"
          />
        </a>
        <a href="https://github.com/elcokiin/DisneyPlus-Clone" target="_blanck">
          <img
            src={githubIcon}
            alt="github icon"
          />
        </a>
        <a href="https://instagram.com/elcokiin" target="_blanck">
          <img
            src={instagramIcon}
            alt="instagram icon"
          />
        </a>
      </Social>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: none;
  @media (min-width: 380px) {
    height: 140px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 4px 0;
    padding-bottom: 8px;
    background: transparent;
    div {
      width: 250px;
      display: flex;
      justify-content: space-between;
    }
    img {
      filter: invert(96%) sepia(96%) saturate(0%) hue-rotate(86deg) brightness(103%) contrast(106%);
      width: 20px;
      height: 20px;
    }
  }
`

const Social = styled.div`
  width: 90px !important;
`
