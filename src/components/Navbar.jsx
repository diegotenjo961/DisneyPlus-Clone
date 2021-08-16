import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import GoogleLogin from 'react-google-login';

import LogoDisney from '../assets/images/logo.svg';

// ICONST NAVBAR
import iconHome from '../assets/images/home-icon.svg';
import iconSearch from '../assets/images/search-icon.svg';
import iconWatchlist from '../assets/images/watchlist-icon.svg';
import iconOriginal from '../assets/images/original-icon.svg';
import iconMovies from '../assets/images/movie-icon.svg';
import iconSeries from '../assets/images/series-icon.svg';

import { selectUserName, setUserLogin, setSignOut} from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const userName = useSelector(selectUserName);

    const signIn = (response) => {
        localStorage.setItem('token',response.accessToken);
        localStorage.setItem('photo',response.profileObj.imageUrl);
        dispatch(setUserLogin({
            name: response.profileObj.name,
            email: response.profileObj.email,
            photo: response.profileObj.imageUrl,
        }))
        history.push('/');
    }

    const signOut = () => {
        let confirmQ = window.confirm('Are you sure logout your session ?');
        if(confirmQ){
            localStorage.clear();
            dispatch(setSignOut())
            history.push('/login')
        }
    }

    return (
        <Nav>
            <Link to='/'><Logo src={LogoDisney}/></Link>

            {!localStorage.getItem('token') && !userName ?
                <LoginContainer>
                    <GoogleLogin
                        clientId="369244447701-8ouhrgcia28c0dpqg775u9t8ce4vpsv9.apps.googleusercontent.com"
                        render={renderProps => (
                            <Login onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</Login>
                        )}
                        buttonText="Login"
                        onSuccess={signIn}
                        onFailure={signIn}
                        cookiePolicy={'single_host_origin'}
                    /> 
                </LoginContainer>
                :
                <React.Fragment>
                        <NavMenu>

                            <Link to='/'>
                                <img src={iconHome} alt="icon home"/>
                                <span>HOME</span>
                            </Link>
                            <Link to="/">
                                <img src={iconSearch} alt="icon search"/>
                                <span>SEARCH</span>
                            </Link>
                            <Link to="/">
                                <img src={iconWatchlist} alt="icon watchlist"/>
                                <span>WATCHLIST</span>
                            </Link>
                            <Link to="/">
                                <img src={iconOriginal} alt="icon original"/>
                                <span>ORIGINALS</span>
                            </Link>
                            <Link to="/">
                                <img src={iconMovies} alt="icon movies"/>
                                <span>MOVIES</span>
                            </Link> 
                            <Link to="/">
                                <img src={iconSeries} alt="icon series"/>
                                <span>SERIES</span>
                            </Link>

                        </NavMenu>
                    <ContainerUserImg>
                        <UserImg src={localStorage.getItem('photo')}
                        alt='Image profile'/>
                        <SignOut onClick={signOut}>Sign Out</SignOut>
                    </ContainerUserImg>
                </React.Fragment>
            }
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
    @media (max-width: 870px){
        section {
            display: none;
        }
        figure {
            flex: 1;
            display: flex;
            justify-content: flex-end;
        }
    } 
`

const Logo = styled.img`
    width: 80px;
`

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

const NavMenu = styled.section`
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
const ContainerUserImg = styled.figure`
    display: flex;
    align-items: center;
`
const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const SignOut = styled(Login)`
    margin-left: 10px;
`