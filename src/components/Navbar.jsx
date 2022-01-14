import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useSignOut from '../hooks/useSignOut'
import LoginButton from './LoginButton';
import NavMenu from './NavMenu';

import LogoDisney from '../assets/images/logo.svg';

function Navbar() {
		const signOut = useSignOut();
		const userImage = localStorage.getItem('photo');
    return (
        <Nav>
            <Link to='/'>
							<Logo src={LogoDisney}/>
						</Link>

            {
							(!localStorage.getItem('token')) ? <LoginButton />:
                <>
                    <NavMenu />
                    <ContainerUserImg>
                        <UserImg 
													src={userImage}
													alt='Image profile'
										/>
	                    <SignOut 
												onClick={signOut}
											>
												Sign Out
											</SignOut>
                    </ContainerUserImg>
                </>
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
		justify-content: center;
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
const ContainerUserImg = styled.div`
    display: flex;
    align-items: center;
		@media(max-width: 700px){
			display: none;
		}
`
const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const SignOut = styled.button`
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
    margin-left: 10px;
`
