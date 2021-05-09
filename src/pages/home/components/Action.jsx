import React from 'react';
import { Link } from 'react-router-dom';

function Action(props) {
	return (
		<section className="section-action">
			<div className="container">
				<h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
				<Link to="/register">
					<div className="btn main round bg-white">Đăng ký</div>
				</Link>
			</div>
		</section>
	);
}

export default Action;
