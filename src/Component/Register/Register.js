import React from 'react';


const  Register = ({onRouteChange }) => {
	return (
		<article className='mw5 center bg-near-white br3 pa3 pa4-ns mv5 ba b--silver shadow-5' >
			<div action="sign-up_submit" method="get" acceptCharset="utf-8" >
				<legend className="ph0 mh0 f3 fw9 black center">Register</legend>
				<div className="mt3">
					<label className="db fw6 lh-copy f6" htmlFor="Name" > Name </label>
					<input className="pa2 input-reset ba b--dark-gray bg-transparent w-100 measure" type="text" name="Name"  id='Name' />
				</div>
				<div className="mt3">
				   <label className="db fw6 lh-copy f6" htmlFor="Email">Email Address </label>
				   <input className="b pa2 input-reset ba b--dark-gray bg-transparent" type="Email" name="Email"  id="Email" />
				</div>
				<div className="mt3">
				   <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				   <input className="b pa2 input-reset ba b--dark-gray bg-transparent" type="password" name="password"  id="password" />
				</div>
		    		<div className="mt3">
					<input 
						className="b ph3 pv2 input-reset ba b--dark-gray grow-large bg-transparent  pointer f6" 
						type="submit" 
						value="register" 
						onClick = { () => onRouteChange('home') }
					/>
				</div>
			</div>
		</article>
	)
		
}

export default Register;
