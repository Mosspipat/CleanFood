import React, { Component } from 'react';
import './myscript.css';
import './bootstrap.css';
import logo from './img/logomain/clean.png';
import logoFood from './img/logomain/foodlogo.png';
import logoDrink from './img/logomain/drinklogo.png';
import {Video} from './Video';
import {Food} from './Food';
import {FoodSecond} from './FoodSecond';
import {FoodThird} from './FoodThird';
import {Drink} from './Drink';
import {DrinkSecond} from './DrinkSecond';
import {DrinkThird} from './DrinkThird';
import foodClean1 from './img/logofood/clean1.jpg';
import foodClean2 from './img/logofood/clean2.jpg';
import foodClean3 from './img/logofood/clean3.jpg';
import drinkClean1 from './img/logofood/drink1.jpg';
import drinkClean2 from './img/logofood/drink2.jpg';
import drinkClean3 from './img/logofood/drink3.jpg';
import logoFord from './img/ford.jpg';
import logojune from './img/june.jpg';
import logomoss from './img/moss.jpg';

var ArrayBox=[];
export class Main extends Component{
	
	state={
		open:'',
		close:'',
		keyRecipe:'',
		keyHome:'',           
		keyContact:'',
		keyFoodMenu:'',
		keyFoodMenuSecond:'',
		keyFoodName:'',
		keyFoodNameSecond:'',
		keyFoodNameThird:'',
		keyDrinkFirst:'',
		keyDrinkSecond:'',
		keyDrinkThird:'',
		keyCloseMenu:''
	}

	stateOpen=()=>{
		document.getElementById("mySidenav").style.width="250px";
	}                                               

	stateClose=()=>{
		document.getElementById("mySidenav").style.width="0";
	}

	stateOpenTopbar=()=>{
		document.getElementById("myTopbar").style.width="200px";
		document.getElementById("myTopbar").style.height="200px";

		document.getElementById("myTopbarSecond").style.width="200px";
		document.getElementById("myTopbarSecond").style.height="200px";

		document.getElementById("Contect").style.width="0px";
		document.getElementById("Contect").style.height="0px";
	}

	stateCloseTopbar=()=>{
		document.getElementById("myTopbar").style.height="0px";
		document.getElementById("myTopbar").style.width="0px";

		document.getElementById("myTopbarSecond").style.height="0px";
		document.getElementById("myTopbarSecond").style.width="0px";

		document.getElementById("Home").style.width="0px";
		document.getElementById("Home").style.height="0px";

	}

	stateCloseTopbarSecond=()=>{
		document.getElementById("myTopbar").style.height="0px";
		document.getElementById("myTopbar").style.width="0px";

		document.getElementById("myTopbarSecond").style.height="0px";
		document.getElementById("myTopbarSecond").style.width="0px";
		
	
	}

	stateOnClickFoodCourse=(event)=>{
		this.setState({keyFoodMenu:event.target.value});
		document.getElementById("ContentDrink").style.width="0px";
		document.getElementById("ContentDrink").style.height="0px";
		this.changeStateFoodMenu();
	}

	changeStateFoodMenu=()=>{

		document.getElementById("myTopbar").style.height="0px";
		document.getElementById("myTopbar").style.width="0px";

		document.getElementById("myTopbarSecond").style.height="0px";
		document.getElementById("myTopbarSecond").style.width="0px";

		document.getElementById("ContentFood").style.width="1000px";
		document.getElementById("ContentFood").style.height="600px";
	}


	stateOpenChooseMenuHome=(event)=>{
		document.getElementById("ContentFood").style.width="0px";
		document.getElementById("ContentFood").style.height="0px";

		document.getElementById("ContentDrink").style.width="0px";
		document.getElementById("ContentDrink").style.height="0px";

		document.getElementById("myTopbar").style.height="0px";
		document.getElementById("myTopbar").style.width="0px";

		document.getElementById("myTopbarSecond").style.height="0px";
		document.getElementById("myTopbarSecond").style.width="0px";

		document.getElementById("Contect").style.width="0px";
		document.getElementById("Contect").style.height="0px";

		this.setState({keyHome:event.target.value});
		this.changeTextStatusHome();
	}                                             

	changeTextStatusHome=()=>{

		document.getElementById("Home").style.width="1000px";
		document.getElementById("Home").style.height="600px";
		this.stateCloseFunction();
	}    

	stateOpenChooseMenuContect=(event)=>{
		document.getElementById("Home").style.width="0px";
		document.getElementById("Home").style.height="0px";

		document.getElementById("myTopbar").style.height="0px";
		document.getElementById("myTopbar").style.width="0px";

		document.getElementById("myTopbarSecond").style.height="0px";
		document.getElementById("myTopbarSecond").style.width="0px";


		document.getElementById("ContentFood").style.width="0px";
		document.getElementById("ContentFood").style.height="0px";

		document.getElementById("ContentDrink").style.width="0px";
		document.getElementById("ContentDrink").style.height="0px";
		
		this.setState({keyContact:event.target.value});
		this.changeTextStatusContect();
	}


	changeTextStatusContect=()=>{

		document.getElementById("Contect").style.width="1000px";
		document.getElementById("Contect").style.height="600px";
		
	} 

	stateOpenContentFoodFirst=(event)=>{
		this.setState({keyFoodMenu:event.target.value});
		this.changeStateContentFood();

	}               

	changeStateContentFood=()=>{
		ArrayBox=[];
		
		for(var i=0;i<1;i++){
			ArrayBox.push(<div> 
				<div className="position-closeBtn">
				<a href="#" className="closebtn" onClick={this.stateCloseContentFood} value={this.state.keyCloseMenu}>&times;</a></div>
				<Food backgroundColor="#2E2E2E"/></div>);
			}
	

		document.getElementById("ContentFood").style.width="0px";
		document.getElementById("ContentFood").style.height="0px";
	}
	

	stateOpenContentFoodSecond=(event)=>{
		this.setState({keyFoodNameSecond:event.target.value});
		this.changeStateContentFoodSecond();

	}

	changeStateContentFoodSecond=()=>{

		ArrayBox=[];
		for(var l=0;l<1;l++){
			ArrayBox.push(<div><div className="position-closeBtn">
				<a href="#" className="closebtn" onClick={this.stateCloseContentFood} value={this.state.keyCloseMenu}>&times;</a> </div>
				<FoodSecond backgroundColor="#2E2E2E"/>
				</div>);
		}

		document.getElementById("ContentFood").style.width="0px";
		document.getElementById("ContentFood").style.height="0px";
	}

	stateOpenContentFoodThird=(event)=>{

		this.setState({keyFoodNameThird:event.target.value});
		this.changeStateContentFoodThird();

	}

	changeStateContentFoodThird=()=>{
		ArrayBox=[];
		for(var i=0;i<1;i++){
			ArrayBox.push(<div>
				<div className="position-closeBtn">
				<a href="#" className="closebtn" onClick={this.stateCloseContentFood} value={this.state.keyCloseMenu}>&times;</a> </div>
				<FoodThird backgroundColor="#2E2E2E"/>
				</div>);
		}

		document.getElementById("ContentFood").style.width="0px";
		document.getElementById("ContentFood").style.height="0px";
	}


	stateOnClickFoodCourseSecond=(event)=>{
		this.setState({keyFoodMenuSecond:event.target.value});
		document.getElementById("ContentFood").style.width="0px";
		document.getElementById("ContentFood").style.height="0px";
		this.changeStateFoodMenuSecond();
	}

	changeStateFoodMenuSecond=()=>{
		document.getElementById("ContentDrink").style.width="1000px";
		document.getElementById("ContentDrink").style.height="600px";
	}

	stateOpenContentDrinkFirst=(event)=>{
		this.setState({keyDrinkFirst:event.target.value});
		this.changeStateOpenContentDrinkFirst();

	}

	changeStateOpenContentDrinkFirst=()=>{
		ArrayBox=[];
		for(var i=0;i<1;i++){
			ArrayBox.push(<div><div className="position-closeBtn"> 
				<a href="#" className="closebtn" onClick={this.stateCloseContentFood} value={this.state.keyCloseMenu}>&times;</a></div>
				<Drink backgroundColor="#2E2E2E"/></div>);
		}
		document.getElementById("ContentDrink").style.width="0px";
		document.getElementById("ContentDrink").style.height="0px";
	}

	stateOpenContentDrinkSecond=(event)=>{
		this.setState({keyDrinkSecond:event.target.value});
		this.changeStateOpenContentDrinkSecond();

	}

	changeStateOpenContentDrinkSecond=()=>{
		ArrayBox=[];
		for(var i=0;i<1;i++){
			ArrayBox.push(<div><div className="position-closeBtn"> 
				<a href="#" className="closebtn" onClick={this.stateCloseContentFood} value={this.state.keyCloseMenu}>&times;</a></div>
				<DrinkSecond backgroundColor="#2E2E2E"/>
				</div>);
		}
		document.getElementById("ContentDrink").style.width="0px";
		document.getElementById("ContentDrink").style.height="0px";
	}

	stateOpenContentDrinkThird=(event)=>{
		this.setState({keyDrinkSecond:event.target.value});
		this.changeStateOpenContentDrinkThird();

	}
	changeStateOpenContentDrinkThird=()=>{
		ArrayBox=[];
		for(var i=0;i<1;i++){
			ArrayBox.push(<div><div className="position-closeBtn"> 
				<a href="#" className="closebtn" onClick={this.stateCloseContentFood} value={this.state.keyCloseMenu}>&times;</a></div>
				<DrinkThird backgroundColor="#2E2E2E"/></div>);
		}
		document.getElementById("ContentDrink").style.width="0px";
		document.getElementById("ContentDrink").style.height="0px";
	}

	stateCloseContentFood=(event)=>{
		this.setState({keyCloseMenu:event.target.value});
		this.stateCloseFunction();
	}

	stateCloseFunction=()=>{
		ArrayBox=[];
		for(var i=0;i<1;i++){
			ArrayBox.push(<div></div>);
		}
	}

	

                                                           
	render(){
		return(                                       
			<div> 
				<Video /> 
					<div className="container">
						<div className="row">
							<div className="col-md-5">
								<input type="button" className="button-background" onClick={this.stateOpen}></input>
							<div id="mySidenav" className="sidenav" >
  								<a href="#" className="closebtn" onClick={this.stateClose}>&times;</a>                                     
								<img src= {logo} className="img-center" alt="logo" />
  								<a href="#" className="list-item-box" onClick={this.stateOpenChooseMenuHome} value={this.state.keyHome}>Home</a>                 
                    			<hr></hr>
                    			<a href="#" className="list-item-box" onClick={this.stateOpenTopbar}>Recipt</a> 
                    			<hr></hr>                                        
                    			<a href="#" className="list-item-box" onClick={this.stateOpenChooseMenuContect} value={this.state.keyContact}>Contect</a> 
                    			<hr></hr> 
                    		</div>
                    	</div>
                    	<div className="col-md-7">
                    		<div className="row">
                    			<div className="col-md-5" onClick={this.stateOnClickFoodCourse} value={this.state.keyFoodMenu}>
									<div id="myTopbar" className="sideTop" onClick={this.stateCloseTopbar}>
											<div className="row">
												<div className="box-photo-topbar">
													<img src={logoFood} alt="logoFood" className="crop-photo-topbar" />
												</div>
											</div>

											<div className="row">
													<h2 className="style-text-topbar">Food</h2>
											</div>

									</div>
								</div>
								<div className="col-md-5" onClick={this.stateOnClickFoodCourseSecond} value={this.state.keyFoodMenuSecond}>
									<div id="myTopbarSecond" className="sideTop" onClick={this.stateCloseTopbar}>
											<div className="row" >
												<div className="box-photo-topbar">
													<img src={logoDrink} alt="logoDrink" className="crop-photo-topbar" />
												</div>
											</div>

											<div className="row">
												<h2 className="style-text-topbar">Drink</h2>
											</div>
									</div>
								</div>
							</div>
							</div>
                    	</div>
                    </div> 

                    <div className="home-block-style-background">
                    <div id="Home" className="home-header">
                    	<div className="home-block-style">
                    		<h2 className="home-font-topic-header">Home</h2>
                    		<img src={logo} alt="logo" className="home-crop-photo"/>
                    		<h2 className="home-font-header">What It Really Means to Eat Clean ?</h2>
							<h3 className="food-font-style">It isn’t as scary, or as limiting, as it sounds.</h3>
                    	</div>
                    </div>
                    </div>
                   
                    <div id="ContentFood" className="food-content-style-box">
                    	<div className="food-box-style">
                    		<img src={logoFood} alt="logoFood" className="food-crop-photo"/>
                    		<div className="food-margin-block">
                    		<div className="row">
                    			<div className="col-md-4" >
                    				<img src={foodClean1} alt="logo" className="food-crop-logo" onClick={this.stateOpenContentFoodFirst} value={this.state.keyFoodName}/>
                    			</div>
                    			<div className="col-md-4" >
                    				<img src={foodClean2} alt="logo" className="food-crop-logo" onClick={this.stateOpenContentFoodSecond} value={this.state.keyFoodNameSecond}/>
                    			</div>
                    			<div className="col-md-4" >
                    				<img src={foodClean3} alt="logo" className="food-crop-logo" onClick={this.stateOpenContentFoodThird} value={this.state.keyFoodNameThird} />
                    			</div>
                    			</div>
                    		</div>
                    		<div className="row" >
                    			<div className="col-md-4" >
                    				<h2 className="food-font-style">1.ข้าวอกไก่ย่างซีอิ๊ว</h2>
                    			</div>
                    			<div className="col-md-4">
                    				<h2 className="food-font-style">2.ข้าวไรซ์เบอร์รีผัดกับปลา</h2>
                    			</div>
                    			<div className="col-md-4">
                    				<h2 className="food-font-style">3.ลาบปลาทูน่า</h2>
                    			</div>
                    		</div>
                    	</div>
                    </div>



                    <div id="ContentDrink" className="food-content-style-box-second">
                    	<div className="food-box-style-second">
                    		<img src={logoDrink} alt="logoDrink" className="food-crop-photo"/>
                    		<div className="food-margin-block">
                    		<div className="row">
                    			<div className="col-md-4" onClick={this.stateOpenContentDrinkFirst} value={this.state.keyDrinkFirst}>
                    				<img  src={drinkClean1} alt="logo" className="food-crop-logo"/>
                    			</div>

                    			<div className="col-md-4" onClick={this.stateOpenContentDrinkSecond} value={this.state.keyDrinkSecond}>
                    				<img  src={drinkClean2} alt="logo" className="food-crop-logo"/>
                    			</div>

                    			<div className="col-md-4" onClick={this.stateOpenContentDrinkThird} value={this.state.keyDrinkThird}>
                    				<img  src={drinkClean3} alt="logo" className="food-crop-logo"/>
                    			</div>
                    		</div>
                    		<div className="row">
                    			<div className="col-md-4">
                    				<h2 className="food-font-style">1.สมูทตี้เชอร์รี่บอมบ์</h2>
                    			</div>

                    			<div className="col-md-4">
                    				<h2 className="food-font-style">2.เบอร์รี่สมูทตี้</h2>
                    			</div>
                    			<div className="col-md-4">
                    				<h2 className="food-font-style">3.สตรอเบอร์รี่สมูทตี้</h2>
                    			</div>	
                    		</div>
                    		</div>
                    	</div>
                    </div>

                    <div id="Contect" className="contact-style-box">
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
                 
                    <div className="box-center">
                    	{ArrayBox}
                    </div>
			</div>
                                             
			);
	}
}