import React from 'react';

function PaymentHistory(props) {
	return (
		<div
			className="tab4"
			// style={{ display: 'none' }}
		>
			<div className="item itemhistory">
				<div className="name">Khóa học CFD5-offline</div>
				<div className="date">09/09/2020</div>
				<div className="money">1.500.000 VND</div>
			</div>
			<div className="item itemhistory">
				<div className="name">Khóa học CFD6-offline</div>
				<div className="date">18/10/2020</div>
				<div className="money">3.000.000 VND</div>
			</div>
		</div>
	);
}

export default PaymentHistory;
