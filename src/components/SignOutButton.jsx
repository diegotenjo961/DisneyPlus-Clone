import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import useSignOut from '../hooks/useSignOut';

function SignOutButton() {
	const [showButton, setShowButton] = useState(false);
	const signOut = useSignOut();
	const userImage = localStorage.getItem('photo');

	return (
	  <>
			<figure
				onClick={() => setShowButton(!showButton)}
			>
				<Image src={userImage} alt="userPhoto"/>
			</figure>
			<Button 
				onClick={signOut}
				show={showButton}
			>
				Sign Out
			</Button>
		</>
	);
}

export default SignOutButton;

const Image = styled.img`
	margin-top: 6px; 
	width: 36px;
	height: 36px;
	border-radius: 50%;
`;

const Button = styled.button`
	position: absolute;
	z-index: 1;
	bottom: 46px;
	width: 32%;
	height: 32px;
	border: none;
	background-color: #090b13;
	color: #fff;
	font-weight: 500;
	letter-spacing: 0.5px;
	border-radius: 0 0 0 8px;
	transition: all .25s ease-in-out;
	${props => {
  		if (props.show) {
				return (css`
					right: 0;
			  `)
			} else {
				return (css`
					right: -34%;
			  `)
			}
		}}
`
