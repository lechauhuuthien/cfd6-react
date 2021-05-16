import React, { Fragment, useState } from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AccountInfo from './components/AccountInfo';
import MyCoin from './components/MyCoin';
import MyCourses from './components/MyCourses';
import MyProjects from './components/MyProjects';
import PaymentHistory from './components/PaymentHistory';

function ProfilePage() {
	/*------------------------------*/
	const { url } = useRouteMatch();
	/*------------------------------*/
	const { currentUser } = useAuth();
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
							<NavLink to={`${url}/info`}>Thông tin tài khoản</NavLink>
							<NavLink to={`${url}/courses`}>Khóa học của bạn</NavLink>
							<NavLink to={`${url}/projects`}>Dự án đã làm</NavLink>
							<NavLink to={`${url}/payment`}>Lịch sử thanh toán</NavLink>
							<NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
						</div>
						<div className="tab-content">
							<Switch>
								<Route path={`${url}/info`} component={() => <AccountInfo  {...currentUser}/>} />
								<Route path={`${url}/courses`} component={MyCourses} />
								<Route path={`${url}/projects`} component={MyProjects} />
								<Route path={`${url}/payment`} component={PaymentHistory} />
								<Route path={`${url}/coin`} component={MyCoin} />
								<Redirect from={`${url}`} to={`${url}/info`} />
							</Switch>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default ProfilePage;
