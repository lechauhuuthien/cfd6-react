import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const $ = window.$;
function Banner() {
	useEffect(() => {
		function loadVideoBG() {
			let videoBgWrap = $('.banner .video-bg'),
				srcVideoBg = videoBgWrap.data('src');
			setTimeout(function () {
				videoBgWrap.html(
					'<video autoplay loop muted><source src="' +
						srcVideoBg +
						'" type="video/mp4">Your browser does not support the video tag.</video>'
				);
			}, 800);
		}
		if ($('body').innerWidth() > 768) {
			loadVideoBG();
		}
	}, []);
	return (
		<div className="banner jarallax">
			<div className="container">
				<div className="content">
					<h2 className="title">Thực Chiến</h2>
					<h2 className="title">Tạo ra sản phẩm có giá trị</h2>
					<div className="btn main round">
						<Link to="/courses">KHÓA HỌC</Link>
					</div>
				</div>
			</div>
			<div className="jarallax-img">
				<img data-src="img/bg-cover.jpg" alt="" className="lazyload" />
				<div className="video-bg lazyload" data-src="video/CFD-video-bg2.mp4" />
			</div>
		</div>
	);
}

export default Banner;
