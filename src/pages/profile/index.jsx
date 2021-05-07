import React, { Fragment, useState } from 'react';
import AccountInfo from './components/AccountInfo';
import MyCoin from './components/MyCoin';
import MyCourses from './components/MyCourses';
import MyProjects from './components/MyProjects';
import PaymentHistory from './components/PaymentHistory';

function ProfilePage() {
	const [activeTab, setActiveTab] = useState('info');
	/*------------------------------*/
	function _onTabChange(e) {
		e.preventDefault();
		let tab = e.target.name;
		if (tab && tab !== activeTab) {
			setActiveTab(tab);
		}
	}
	/*------------------------------*/
	return (
		<main className="profile" id="main">
			<section>
				<div className="top-info">
					<div className="avatar">
						{/* <span class="text">H</span> */}
						<img src="img/avatar-lg.png" alt="" />
						<div className="camera" />
					</div>
					<div className="name">trần nghĩa</div>
					<p className="des">Thành viên của team CFD1-OFFLINE</p>
				</div>
				<div className="container">
					<div className="tab">
						<div className="tab-title">
							<a
								href="#"
								name="info"
								className={activeTab === 'info' ? 'active' : ''}
								onClick={_onTabChange}
							>
								Thông tin tài khoản
							</a>
							<a
								href="#"
								name="courses"
								className={activeTab === 'courses' ? 'active' : ''}
								onClick={_onTabChange}
							>
								Khóa học của bạn
							</a>
							<a
								href="#"
								name="projects"
								className={activeTab === 'projects' ? 'active' : ''}
								onClick={_onTabChange}
							>
								Dự án đã làm
							</a>
							<a
								href="#"
								name="payment"
								className={`${activeTab === 'payment' ? 'active' : ''}`}
								onClick={_onTabChange}
							>
								Lịch sử thanh toán
							</a>
							<a
								href="#"
								name="coin"
								className={`${activeTab === 'coin' ? 'active' : ''}`}
								onClick={_onTabChange}
							>
								Quản lý COIN của tôi
							</a>
						</div>
						<div className="tab-content">
							{activeTab === 'info' ? (
								<AccountInfo />
							) : activeTab === 'courses' ? (
								<MyCourses />
							) : activeTab === 'projects' ? (
								<MyProjects />
							) : activeTab === 'payment' ? (
								<PaymentHistory />
							) : activeTab === 'coin' ? (
								<MyCoin />
							) : (
								<Fragment />
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default ProfilePage;
