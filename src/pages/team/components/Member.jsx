import React from 'react';

function Member({ thumb, name, title }) {
	return (
		<div className="wrap">
			<div className="cover">
				<img src={thumb} alt="thumb" />
			</div>
			<div className="info">
				<div className="name">{name}</div>
				<p className="title">{title}</p>
			</div>
		</div>
	);
}

export default Member;