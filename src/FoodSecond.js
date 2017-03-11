import React, { Component,PropTypes } from 'react';
import './w3.css';
import './myscript.css';
import './bootstrap.css';
import logo from './img/logofood/clean2.jpg';
export class FoodSecond extends Component{
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
									<li>พริกขี้หนู , หอมแดง</li>
									<li>กระเทียม , ตะไคร้ </li>
									<li>ขมิ้น , เนื้ออกไก่ (ลอกหนังออก)</li>
									<li>น้ำมันมะกอก</li>
									<li>พริกแกง</li>
									<li>น้ำปลา (สูตรโซเดียมต่ำ)</li>
									<li>ซอสหอยนางรม (สูตรโซเดียมต่ำ)</li>
									<li>ใบมะกรูดหั่นฝอย</li>
									<li>ข้าวหอมนิล</li>
							</ul>
							</div>

						</div>
						<div className="col-md-6">
							<h2 className="food-font-style-Header">วิธีทำ</h2>
							<div className="food-box-content-style">
								<ul type="circle" className="food-font-style-list">
									<li>1. โขลกพริกขี้หนูกับหอมแดง กระเทียม ตะไคร้ และขมิ้นให้ละเอียด </li>
									<li>2. สับเนื้ออกให้ละเอียด ตั้งกระทะใส่น้ำมันมะกอกเล็กน้อย ใส่น้ำพริกแกงลงผัดพอหอมเอาไก่ลงผัด ปรุงรสด้วยน้ำปลาและซอสหอยนางรม โรยใบมะกรูดหั่นฝอย เสิร์ฟพร้อมข้าวหอมนิล</li>
								</ul>
							</div>

						</div>
				</div>
			</div>

			);
	}
}