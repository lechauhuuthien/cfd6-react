import React from 'react';

function Member({ thumb, name, title, myRef }) {
	return (
		<div className="wrap" style={{height: 'auto'}}>
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