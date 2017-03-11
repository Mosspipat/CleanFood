import React, { Component } from 'react';
import {Home} from './Home';
import './myscript.css';
import './bootstrap.css';
import './w3.css';
import logo from './img/screen.jpg';
var arrayBox=[];
var countnum=0;
export class ChooseRecipt extends Component{
	render(){
		return(   
		     <div>

			<div className="w3-animate-bottom">                   
				<div className="container">             
					<div className="row">
						<div className="col-md-12">
							<h1 className="font-color">Recipe</h1>                     
						</div>
					</div>
				<div  className="row" >               
					<div className="col-md-6">
						<img src={logo} className="cropt-photo" alt="drink"/>
						<h2 className="font-under-color">Food</h2>
					</div>
					<div className="col-md-6">
						<img src={logo} className="cropt-photo" alt="drink" />
						<h2 className="font-under-color">Drink</h2>
					</div>                 
					</div> 
				 
				</div>  
					{arrayBox}
				 </div> 
				
			</div>
			
		
         
			);
	}               
}