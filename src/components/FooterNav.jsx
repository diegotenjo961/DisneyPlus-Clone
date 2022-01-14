import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../features/user/userSlice';
import styled from 'styled-components';
import SignOutButton from './SignOutButton';

import iconHome from '../assets/images/home-icon.svg';
import iconSearch from '../assets/images/search-icon.svg';
import iconWatchlist from '../assets/images/watchlist-icon.svg';

function FooterNav() {
	const isLoggedIn = useSelector(selectUserIsLoggedIn);

	if(!isLoggedIn) return null;

	return (
		<FooterNavContainer>
			<Link to="/">
				<img 
					src={iconHome} 
					alt="Home" 
				/>
			</Link>
			<Link to="/search">
				<img 
					src={iconSearch} 
					alt="Search" 
				/>
			</Link>
			<Link to="/watchlist">
				<img 
					src={iconWatchlist} 
					alt="Watchlist" 
				/>
			</Link>
			<SignOutButton />
		</FooterNavContainer>
	);
}

export default FooterNav;

const FooterNavContainer = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
  height: 48px;
	background-color: #090b13;
	display: flex;
	justify-content: space-around;
	aling-items: center;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
	  color: #fff;
    text-decoration: none;
		cursor: pointer;
		img {
		  width: 28px;
			height: 28px;
		}
	}
`
