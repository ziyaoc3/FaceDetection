import React from 'react';
import './BoxStyle.css'

const  DetectedImage = ( {imageUrl, box}) => {	
	return (
		<div className='center ma'>
      		<div className='absolute mt2'>
				<img id = 'imagePic' alt ='' src = {imageUrl} width ='500px' height = 'auto'/>
				{
					box.map((items, i)=>{
						return (
							<div 
							className = 'boxStyle' 
							style ={{left:items.left, right:items.right, top:items.top, bottom:items.bottom}} 
							></div>
						);
					})			
				}
    			</div>
		</div>
  	);
}

export default DetectedImage;
