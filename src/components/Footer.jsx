import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	function handleScrollTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	return (
		<footer id="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-5 left">
						<p className="des">
							Sáng tạo, tinh tế và phù hợp sẽ khiến sản phẩm của bạn trở nên khác biệt.
						</p>
						<p className="address">Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh</p>
						<p className="phone">(+84) 98 9596 913</p>
						<div className="social">
							<a className="fb" href="#">
								{/* <img src="img/icon-fb.svg" alt=""> */}
							</a>
							<a className="gmail" href="#">
								{/* <img src="img/icon-gmail.svg" alt=""> */}
							</a>
							<a className="skype" href="#">
								{/* <img src="img/icon-skype.svg" alt=""> */}
							</a>
						</div>
					</div>
					<div className="right">
						<nav>
							<ul>
								<li>
									<Link href="/">Trang chủ</Link>
								</li>
								<li>
									<Link href="/courses">Khóa học</Link>
								</li>
								<li>
									<Link to="/profile/payment">Thanh toán</Link>
								</li>
								<li>
									<a href="/">Điều khoản</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<a
					href="#"
					className="back-to-top"
					onClick={(e) => {
						e.preventDefault();
						handleScrollTop();
					}}
				>
					<div className="line" />
					CUỘN LÊN
				</a>
			</div>
			<div className="copy-right">
				<div className="container">
					<p>2020 Creative Front-End Dev</p>
					<p>Được thiết kế và lập trình bởi CFD Team</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
