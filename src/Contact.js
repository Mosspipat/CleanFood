import React, { Component } from 'react';
import logoFord from './img/ford.jpg';
import logojune from './img/june.jpg';
import logomoss from './img/moss.jpg';
import './w3.css';
import './myscript.css';
import './bootstrap.css';             
export class Contact extends Component{
	render(){
		return(            
			<div>
				<div className="w3-animate-bottom"> 
					<div className="container">
					<div className="row">              
						<div className="col-md-12">           
							<h1 className="contact-font-style">Contact</h1>
						</div>                
					</div>                 
					<div className="row">                                      
						<div className="col-md-4">          
						                                 
							<img src={logojune} alt="Header" className="contact-crop-style" />
                                         
							<div className="font-box">
								<h2 className="font-contact-center">Facebook: Chanita Saengpara</h2>
								<h2 className="font-contact-center">Mrs.Chanita Saengpara</h2>
								<h2 className="font-contact-center">E-mail: Chanita_spr@hotmail.com</h2>
								<h2 className="font-contact-center">Phone :095-472-4667</h2>
							</div>
							
						
						</div>                             
						<div className="col-md-4">             
						                                 
							<img src={logoFord} alt="Header" className="contact-crop-style" />
							<div className="font-box">
								<h2 className="font-contact-center">Facebook: Patipan Injai</h2>
								<h2 className="font-contact-center">Mr.Patipan Injai</h2>
								<h2 className="font-contact-center">E-mail: i.patipan2539@gmail.com</h2>
								<h2 className="font-contact-center">Phone: 092-270-7454</h2>
							</div>           
							                   
						</div>         
						<div className="col-md-4">              
							<img src={logomoss} alt="Header" className="contact-crop-style" />
								<div className="font-box">            
									<h2 className="font-contact-center">Facebook: Moss Pipat</h2>
									<h2 className="font-contact-center">Mr.Pipat Horakungthong</h2>
									<h2 className="font-contact-center">E-mail: pt_moss17782@hotmail.com</h2>
									<h2 className="font-contact-center">Phone: 083-266-6988</h2>
								</div>
							</div>
						
						</div>
					</div>

				</div>
			</div>
			);
	}
}