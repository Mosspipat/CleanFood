import React, { Component,PropTypes } from 'react';
import './w3.css';
import './myscript.css';
import './bootstrap.css';
import logo from './img/logofood/drink1.jpg';
export class Drink extends Component{
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
								<h2 className="food-font-style">สมูทตี้เชอร์รี่บอมบ์</h2>
							</div>
						</div>
				</div>	

				<div className="row">
						<div className="col-md-6">
							<h2 className="food-font-style-Header">ส่วนผสมอาหาร</h2>
							<div className="food-box-content-style">
							<ul type="circle" className="food-font-style-list">
								<li>เชอร์รี่ 3/4 ถ้วยตวง</li>
								<li>กีวี 1 ผล</li>
								<li>น้ำส้ม 1/4 ถ้วยตวง</li>
								<li>น้ำมะพร้าว 1/2 ถ้วยตวง</li>
								<li>น้ำผึ้ง 3/4 ช้อนโต๊ะ</li>
								<li>น้ำแข็ง 3 ก้อน</li>
							</ul>
							</div>

						</div>
						<div className="col-md-6">
							<h2 className="food-font-style-Header">วิธีทำ</h2>
							<div className="food-box-content-style">
								<ul type="circle" className="food-font-style-list">
									<li>1. นำส่วนผสมทั้งหมดใส่ลงในเครื่องปั่น จากนั้นปั่นจนละเอียด ตกแต่งด้วยผลไม้สดตามชอบ</li>
								</ul>
							</div>

						</div>
				</div>
			</div>

			);
	}
}