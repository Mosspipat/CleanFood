import React, { Component } from 'react';
import './myscript.css';

export class Video extends Component
{

	render(){
		return(              
			<div>
				  <div className="video-background">
  					 <div className="video-foreground">
      					<iframe width="1280" height="720" src="https://www.youtube.com/embed/95SNbn340TE?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=95SNbn340TE" 
      					ameborder="0" allowfullscreen></iframe>
    				</div>
 				 </div>
			</div>
			
		);
	}
}