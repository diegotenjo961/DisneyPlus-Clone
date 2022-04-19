import React from 'react'
import styled from 'styled-components'

import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserIsLoggedIn } from '../features/user/userSlice'

import logoOne from '../assets/images/cta-logo-one.svg'
import logoTwo from '../assets/images/cta-logo-two.png'
import BackgroundImage from '../assets/images/login-background.jpg'

function Login () {
  const { loginWithRedirect } = useAuth0()
  const history = useHistory()
	  const isLoggedIn = useSelector(selectUserIsLoggedIn)

  if (isLoggedIn) {
    history.push('/')
			  return null
  }

  return (
    <Container>
      <CTA>
        <CTALogoOne src={logoOne} />
        <SignUp onClick={loginWithRedirect}>
          GET ALL THERE
        </SignUp>
        <Description>
          Get Premiere Access to Raya and the Last Dragon for and additional fee with a Disney+ suscription.
          As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src={logoTwo} />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    height: calc(100vh - 70px);
    position relative;
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(${BackgroundImage});
        opacity: 0.7;
        z-index: -1;
    }

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

`
const CTALogoOne = styled.img`
`
const CTALogoTwo = styled.img`
    width: 90%;
`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 8px;
`
