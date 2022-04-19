import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton () {
  const { loginWithRedirect } = useAuth0()
  return (
    <LoginContainer>
      <Login onClick={loginWithRedirect}>
        Login
      </Login>
    </LoginContainer>
  )
}

export default LoginButton

const Login = styled.button`
    cursor: pointer;
    color: #fff;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
        font-weight: 400;
    }
`
const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
