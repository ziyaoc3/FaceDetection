import React from 'react';
import './Imagelink.css';


const Imagelinkform = ({onInputChange, onButtonSubmit }) => {
	return (
		<div >
			<p className= 'f3 white'> It will detect face in your picture. Give it a try !!! </p>
			<div className='flex justify-center'>
				<div className= 'form flex justify-center pa4 shadow-4'  >
					<input
						type= 'search'
						placeholder=' Enter URL here'
						className = 'f4 pa2 ma2 shadow-2 w-70 outline-0 b--light-blue bw3 br2 bg-animate hover-bg-washed-blue'
						onChange= {onInputChange}
					/>
					<button 
						type = 'button'
						className = 'w-30  grow pointer f4 pa2 ma2 br1 white shadow-2 bg-light-blue b--light-blue'
						onClick = {onButtonSubmit}
					>Detect
					</button>
				</div>
			</div>
    		</div>
  	)
}

export default Imagelinkform;
