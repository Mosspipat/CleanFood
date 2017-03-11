import React, { Component } from 'react';
import logo from './img/screen.jpg';
import './w3.css';
import './bootstrap.css';
import './myscript.css';
export class Home extends Component                         
{
	render(){
		return(                                                                                                                                          
				<div className="w3-animate-bottom">
						<div className="row">         
							<div className="col-md-12">
								<img src={logo} alt="Header" className="home-cropt-photo" />
								<h2 >What It Really Means to Eat Clean ?</h2>
								<h3 >It isn’t as scary, or as limiting, as it sounds.</h3>
							</div>
						</div> 
					
				</div>

			);
	}
}