import React from 'react';

function Accordion({
	day,
	title,
	content,
	active,
}) {
	return (
		<div
			className={`accordion ${
				active ? 'active' : ''
			}`}
		>
			<div className="accordion__title">
				<div className="date">Ngày {day}</div>
				<h3>{title}</h3>
			</div>
			<div className="content">{content}</div>
		</div>
	);
}

export default Accordion;
