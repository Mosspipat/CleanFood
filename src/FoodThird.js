import React, { Component,PropTypes } from 'react';
import './w3.css';
import './myscript.css';
import './bootstrap.css';
import logo from './img/logofood/clean3.jpg';
export class FoodThird extends Component{
	static proptypes = {
		backgroundColor: PropTypes.string.isRequired,
	}
	render(){
		return(
			<div className="food-box-style" style={{background: this.props.backgroundColor}}>
				<div className="row">
						<div>  
							<div>
								<img src={logo} alt="logo" className="food-crop-photo"/>	
								<h2 className="food-font-style">ข้าวหอมนิลกับคั่วกลิ้งอกไก่</h2>
							</div>
						</div>
				</div>	

				<div className="row">
						<div className="col-md-6">
							<h2 className="food-font-style-Header">ส่วนผสมอาหาร</h2>
							<div className="food-box-content-style">
							<ul type="circle" className="food-font-style-list">
									<li>เนื้อปลาทูน่ากระป๋องในน้ำแร่</li>
									<li>พริกป่น</li>
									<li>น้ำมะนาว</li>
									<li>น้ำปลา (สูตรโซเดียมต่ำ)</li>
									<li>ข้าวคั่ว</li>
									<li>ใบโหระพา</li>
									<li>ต้นหอมซอย</li>
									<li>ผักชีซอย</li>
									<li>ผักสดตามชอบ</li>
							</ul>
							</div>

						</div>
						<div className="col-md-6">
							<h2 className="food-font-style-Header">วิธีทำ</h2>
							<div className="food-box-content-style">
								<ul type="circle" className="food-font-style-list">
									<li>เมนูนี้ใช้เนื้อปลาทูน่ากระป๋องในน้ำแร่ บีบน้ำออก ปรุงรสด้วยพริกป่น น้ำมะนาว และน้ำปลา ใส่ข้าวคั่ว หอมแดง โหระพา ต้นหอม และผักชีคลุกเคล้าให้เข้ากัน กินคู่กับผักสดตามชอบ </li>
								</ul>
							</div>

						</div>
				</div>
			</div>

			);
	}
}