import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	/*------------------------------*/
	function _toggleNav() {
		$('body').toggleClass('menu-is-show');
	}
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
						<div className="have-login">
							<div className="account">
								<div className="info">
									<div className="name">Trần Lê Trọng Nghĩa</div>
									<div className="avatar">
										<img src="img/avt.png" alt="" />
									</div>
								</div>
							</div>
							<div className="hamberger"></div>
							<div className="sub">
								<Link to="/profile/courses">Khóa học của tôi</Link>
								<Link to="/profile">Thông tin tài khoản</Link>
								<a href="#">Đăng xuất</a>
							</div>
						</div>
						{/* <div class="not-login bg-none">
              <a href="#" class="btn-register">Đăng nhập</a>
              <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
          </div> */}
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
