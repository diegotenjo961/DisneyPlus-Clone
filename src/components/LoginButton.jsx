import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';
import { clientId } from '../config';

import { useDispatch } from 'react-redux';
import { setUserLogin } from '../features/user/userSlice';

function LoginButton() {
		const dispatch = useDispatch();
		const history = useHistory();

    const signIn = (res) => {
        localStorage.setItem('token',res.accessToken);
			  localStorage.setItem('photo', res.profileObj.imageUrl);
        dispatch(setUserLogin({
            name: res.profileObj.name,
            email: res.profileObj.email,
            photo: res.profileObj.imageUrl,
        }))
        history.push('/');
    }

	return (
      <LoginContainer>
        <GoogleLogin
          clientId={clientId}
          render={renderProps => (
            <Login 
							onClick={renderProps.onClick}	
							disabled={renderProps.disabled}
						>
							Login
						</Login>
          )}
          buttonText="Login"
          onSuccess={signIn}
          onFailure={signIn}
					cookiePolicy={'single_host_origin'}
				/>
			</LoginContainer>
	);
}

export default LoginButton;

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
