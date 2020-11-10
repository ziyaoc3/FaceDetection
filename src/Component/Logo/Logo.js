import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';

function Logo() {
	return (
		<div >
			<Tilt className="Tilt" options={{ max: 35 }} style={{ height: 100, width: 100 }} >
				<div className="Tilt-inner">
					<img style={{marginTop : '10px' }} alt='face detection logo' src = {face} />
				</div>
			</Tilt>
    		</div>
  	);
}

export default Logo;