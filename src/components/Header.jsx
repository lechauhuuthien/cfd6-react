import $ from 'jquery';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { logoutAction, setLoginStatus } from '../redux/actions/authAction';

function Header() {
	/*------------------------------*/
	function _toggleNav() {
		$('body').toggleClass('menu-is-show');
	}
	/*------------------------------*/
	// const { user, setIsLoginOpen, setCurrentUser } = useAuth();
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	/*------------------------------*/
	return (
		<>
			<header id="header">
				<div className="wrap">
					<div className="menu-hambeger" onClick={_toggleNav}>
						<div className="button">
							<span />
							<span />
							<span />
						</div>
						<span className="text">menu</span>
					</div>
					<Link to="/" className="logo">
						<img src="img/logo.svg" alt="" />
						<h1>CFD</h1>
					</Link>
					<div className="right">
						{user ? (
							<div className="have-login">
								<div className="account">
									<div className="info">
										<div className="name">{user?.first_name + ' ' + user?.last_name || ''}</div>
										<div className="avatar">
											<img src={user?.avatar || ''} alt="" />
										</div>
									</div>
								</div>
								<div className="hamberger"></div>
								<div className="sub">
									<Link to="/profile/courses">Khóa học của tôi</Link>
									<Link to="/profile">Thông tin tài khoản</Link>
									<a
										href="#"
										onClick={(e) => {
											e.preventDefault();
											dispatch(logoutAction());
										}}
									>
										Đăng xuất
									</a>
								</div>
							</div>
						) : (
							<div className="not-login bg-none">
								<a
									href="#"
									className="btn-register"
									onClick={(e) => {
										e.preventDefault();
										dispatch(setLoginStatus(true));
									}}
								>
									Đăng nhập
								</a>
								<a href="login.html" className="btn main btn-open-login">
									Đăng ký
								</a>
							</div>
						)}
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
