import React , {Component } from 'react';
import './App.css';
import Nav from './Component/Nav/Nav.js';
import Logo from './Component/Logo/Logo.js';
import DetectedImage from './Component/onDetectModel/DetectedImage';
import Imagelinkform from './Component/InputField/Imagelinkform.js';
import Signin from './Component/Signin/Signin.js';
import Register from './Component/Register/Register.js';
import Rank from './Component/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particle = {
	particles: {
		number: {
			value: 150,
			density:{
			enable: true,
			value_area: 800
		  	}
		}
	},    
	interactivity: {
		detect_on: "window",
		events:{
			onhover: {
				enable: true,
				mode:  'repulse'
			}
		}
	}
}

const app = new Clarifai.App({
 apiKey: 'c40d63db0c6a4f6997a7605b19cc5693'
});


class App extends Component {
	constructor (){
		super ()
		this.state = {
			input: '',
			imageUrl : '',
			box: [],
			route: 'signin',
			isSignIn: false
		}
	}
	
	calculateFaceLocation = (res) => {
		let boxList = [];
		for ( let i = 0; i<res['outputs'][0]['data']['regions'].length ; i++ ){
			const data = res['outputs'][0]['data']['regions'][i]['region_info']['bounding_box']
			const faceBox = document.getElementById('imagePic');
			const length = Number(faceBox.width);
			const height = Number(faceBox.height);
			let boxImage = {
							left: length * data.left_col,
							right: length  - length* data.right_col,
							top: height * data.top_row,
							bottom: height - height * data.bottom_row
						};
			boxList.push (boxImage)
		}
		return boxList
	}
	// using for loop to get multiple box images
	
	faceBoxDetect = (box)=> {
		this.setState({box: box})
	}
	
	onInputChange = (event) => {
		this.setState ({input: event.target.value})
	}
	
	onButtonSubmit = () =>{
		this.setState({imageUrl: this.state.input});
		app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
			.then(faceModel =>  faceModel.predict (this.state.input))
			.then(response => this.faceBoxDetect (this.calculateFaceLocation(response)))
			.catch((err)=>console.log(err))
	}
	
	onRouteChange = (route) =>{
		if (route === 'home'){
			this.setState({ isSignIn: true})
		} else {
			this.setState({ isSignIn: false})
		}
		this.setState({ route: route })
	}
	
	
	render() {
		const { isSignIn,imageUrl,box,route } = this.state;
		return (
			<div className= 'App' >
				<Particles params = { particle } className ='particles' />
				<Nav isSignIn= {isSignIn} onRouteChange = {this.onRouteChange} />
				{ route === 'home'
				? <div> 
					<Logo />
					<Rank />
					<Imagelinkform onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
					<DetectedImage imageUrl = { imageUrl} box= { box} />
				  </div>
				: ( route === 'signin'
				   ? <Signin onRouteChange = {this.onRouteChange}/> 
				   : <Register onRouteChange = {this.onRouteChange}/> 
				  )
				}
			</div>
		);
	}
}


export default App;
