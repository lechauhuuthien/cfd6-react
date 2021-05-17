import React from 'react';

function Accordion({
	learn_date,
	title,
	content,
	onAccClick,
	index,
	active
}) {
	return (
		<div
			className={`accordion ${
				active ? 'active' : ''
			}`}
		>
			<div className="accordion__title" onClick={() => onAccClick(index)}>
				<div className="date">{learn_date}</div>
				<h3>{title}</h3>
			</div>
			<div className="content">{content}</div>
		</div>
	);
}

export default Accordion;
