import React, { Component,PropTypes } from 'react';
import './w3.css';
import './myscript.css';
import './bootstrap.css';
import logo from './img/logofood/clean1.jpg';
export class Food extends Component{

	static proptypes = {
		backgroundColor: PropTypes.string.isRequired,
	}

	render(){
		return(
			<div className="food-box-style" style={{background: this.props.backgroundColor}}>
				<div className="row">
						<div>  
							<div>
								<img src={logo} alt="logo" className="food-crop-margin"/>	
								<h2 className="food-font-style">ข้าวไก่ย่างซีอิ๊ว</h2>
							</div>
						</div>
				</div>	

				<div className="row">
						<div className="col-md-6">
							<h2 className="food-font-style-Header">ส่วนผสมอาหาร</h2>
							<div className="food-box-content-style">
							<ul type="circle" className="food-font-style-list">
								<li>เนื้ออกไก่ลอกหนังออก หั่นเป็นชิ้น</li>
								<li>น้ำปลา (สูตรโซเดียมต่ำ)</li>
								<li>ซีอิ๊วขาว  (สูตรโซเดียมต่ำ)</li>
								<li>ซอสหอยนางรม  (สูตรโซเดียมต่ำ)</li>
								<li>ซีอิ๊วดำ</li>
								<li>ต้นหอมและผักชีซอย</li>
								<li>พริกขี้หนูซอย</li>
								<li>ข้าวกล้อง</li>
								<li>ข้าวกล้อง</li>
								<li>ไข่ดาว</li>
							</ul>
							</div>

						</div>
						<div className="col-md-6">
							<h2 className="food-font-style-Header">วิธีทำ</h2>
							<div className="food-box-content-style">
								<ul type="circle" className="food-font-style-list">
									<li>1. นำเนื้ออกไก่มาลอกหนังออก หั่นเป็นชิ้นพอดีคำ หมักกับน้ำปลา ซีอิ๊วขาว ซอสหอยนางรมโซเดียมต่ำ และซีอิ๊วดำเล็กน้อย หมักไว้ประมาณ 30 นาที </li>
									<li>2. จากนั้นนำไปย่างในกระทะเทฟลอนจนสุก ตักใส่จาน โรยด้วยต้นหอมและผักชีซอย เพิ่มพริกขี้หนูซอย 1 เม็ดเพื่อความฟิน กินคู่กับข้าวกล้อง และไข่ดาว (อันนี้ข้าวกล้องหมดเลยกินข้าวขาวแทน หยวน ๆ)</li>
								</ul>
							</div>

						</div>
				
				</div>
			</div>

			);
	}
}