import React, { Component,PropTypes } from 'react';
import './w3.css';
import './myscript.css';
import './bootstrap.css';
import logo from './img/logofood/drink2.jpg';
export class DrinkSecond extends Component{
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
								<h2 className="food-font-style">เบอร์รี่สมูทตี้</h2>
							</div>
						</div>
				</div>	

				<div className="row">
						<div className="col-md-6">
							<h2 className="food-font-style-Header">ส่วนผสมอาหาร</h2>
							<div className="food-box-content-style">
							<ul type="circle" className="food-font-style-list">
								<li>กล้วย 1 ผล</li>
								<li>นม 1/2 ถ้วยตวง</li>
								<li>บลูเบอร์รี่แช่แข็ง 1/4 ถ้วยตวง</li>
								<li>น้ำมะพร้าว 1/2 ถ้วยตวง</li>
								<li>เนยถั่ว 1 ช้อนชา</li>
								<li>น้ำผึ้ง 1/2 ช้อนชา</li>
							</ul>
							</div>

						</div>
						<div className="col-md-6">
							<h2 className="food-font-style-Header">วิธีทำ</h2>
							<div className="food-box-content-style">
								<ul type="circle" className="food-font-style-list">
									<li>1. นำส่วนผสมทั้งหมดลงในเครื่องปั่น ปั่นประมาณ 1 นาที หรือจนกระทั่งได้สมูทตี้ที่ข้น</li>
								</ul>
							</div>

						</div>
				</div>
			</div>

			);
	}
}