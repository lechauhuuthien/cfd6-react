import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import useDelayLink from '../hooks/useDelayLink';

function Nav() {
	const delayLink = useDelayLink();
	/*------------------------------*/
	function _closeNav() {
		$('body').removeClass('menu-is-show');
	}
	/*------------------------------*/
	function onLinkClick(e) {
		delayLink(e);
		_closeNav();
	}
	/*------------------------------*/
	return ReactDOM.createPortal(
		<>
			<nav className="nav">
				<ul>
					<li className="li_login">
						<a href="#">Đăng nhập</a>
						<a href="#">Đăng ký</a>
					</li>
					<li>
						<NavLink onClick={onLinkClick} exact to="/">
							Trang chủ
						</NavLink>
					</li>
					<li>
						<NavLink onClick={onLinkClick} to="/team">
							CFD Team
						</NavLink>
					</li>
					<li>
						<NavLink onClick={onLinkClick} to="/courses">
							Khóa Học
						</NavLink>
					</li>
					<li>
						<NavLink onClick={onLinkClick} to="/projects">
							Dự Án
						</NavLink>
					</li>
					<li>
						<NavLink onClick={onLinkClick} to="/cooperation">
							Liên hệ
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="overlay_nav" onClick={onLinkClick} />
		</>,
		document.body
	);
}

export default Nav;
