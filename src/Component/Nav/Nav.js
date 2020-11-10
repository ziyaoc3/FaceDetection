import React from 'react';

const Nav = ( {onRouteChange , isSignIn}) => {
	if (isSignIn) {
		return (
			<div className ='f3 flex justify-end white' >
				<p onClick = { () => onRouteChange('signin')} className ='grow ma2 underline pointer'> Sign Out </p>

			</div>
		);
	} else {
		return (
			<div>
				<div className ='f3 flex justify-end white' >
					<p onClick = { () => onRouteChange('signin')} className ='grow ma2 underline pointer'> Sign In  </p>
					<p onClick = { () => onRouteChange('register')} className ='grow ma2 underline pointer' > Register </p>
				</div>
			</div>
		);	
	}
	
}

export default Nav;
