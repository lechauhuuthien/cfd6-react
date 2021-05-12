import React, { Fragment } from 'react';
import CourseItem from './CourseItem';

function CourseList({ onlineList, offlineList }) {
	if (!onlineList || !offlineList) return <Fragment />;
	return (
		<>
			<section className="section-courseoffline">
				<div className="container">
					<h2 className="main-title">KHÓA HỌC CFD</h2>
					<p className="top-des">
						The readable content of a page when looking at its layout. The point of using Lorem
						Ipsum is that it has a more-or-less normal
					</p>
					<div className="textbox">
						<h2 className="main-title">Khóa học Offline</h2>
					</div>
					<div className="list row">
						{onlineList.map((course, index) => (
							<CourseItem key={index} {...course} />
						))}
					</div>
				</div>
			</section>
			<section className="section-courseonline section-blue">
				<div className="container">
					<div className="textbox">
						<h2 className="main-title">Khóa học Online</h2>
					</div>
					<div className="list row">
						{offlineList.map((course, index) => (
							<CourseItem key={index} {...course} />
						))}
					</div>
					{/* <div className="text-deco">C</div> */}
				</div>
			</section>
		</>
	);
}

export default CourseList;
