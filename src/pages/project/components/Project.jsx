import React from 'react';

function Project({ image, name, makeby }) {
	return (
		<div className="wrap">
			<div className="cover">
				<img src={image} alt="project" />
			</div>
			<div className="info">
				<div className="name">{name}</div>
				<div className="makeby">
					Hoàn thành với {makeby}
				</div>
			</div>
		</div>
	);
}

export default Project;
