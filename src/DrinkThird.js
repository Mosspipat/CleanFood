import React, { Component,PropTypes } from 'react';
import './w3.css';
import './myscript.css';
import './bootstrap.css';
import logo from './img/logofood/drink3.jpg';
export class DrinkThird extends Component{
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
								<h2 className="food-font-style">สตรอเบอร์รี่สมูทตี้</h2>
							</div>
						</div>
				</div>	

				<div className="row">
						<div className="col-md-6">
							<h2 className="food-font-style-Header">ส่วนผสมอาหาร</h2>
							<div className="food-box-content-style">
							<ul type="circle" className="food-font-style-list">
								<li>นม fat 0% 1 ถ้วยตวง</li>
								<li>สตรอเบอร์รี่ 1 ถ้วยตวง</li>
								<li>น้ำผึ้ง 1 ช้อนโต๊ะ (ถ้าสตรอเบอร์รี่หวานอยู่แล้วก็ไม่ต้องใส่น้ำผึ้ง)</li>
							</ul>
							</div>

						</div>
						<div className="col-md-6">
							<h2 className="food-font-style-Header">วิธีทำ</h2>
							<div className="food-box-content-style">
								<ul type="circle" className="food-font-style-list">
									<li>1. ใส่ส่วนผสมทั้งหมดเข้าด้วยกันปั่นจนละเอียด</li>
									<li>หมายเหตุ: อาจจะใช้สตรอเบอร์รี่แช่แข็ง และไม่ต้องใส่น้ำแข็งในการปั่น จะทำให้ได้สมูตตี้ที่เข้มข้นมาก แต่ถ้าบางคนไม่ชอบก็สามารถใส่น้ำแข็งเข้าไปปั่นรวมได้</li>
								</ul>
							</div>


						</div>
				</div>
			</div>

			);
	}
}