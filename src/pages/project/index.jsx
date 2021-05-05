import React from 'react';
import Project from './components/Project';

function ProjectPage(props) {
	return (
		<main className="projectpage" id="main">
			<section className="section-1">
				<div className="container">
					<h2 className="main-title">dự án</h2>
					<p className="top-des">
						Lorem ipsum dolor sit amet consectetur
						adipiscing elit. aliquam tincidunt
						elementum sem non luctus
					</p>
					<div className="list row">
						<a href="#" className="item col-md-6">
							<Project
								image="/img/project/project (1).jpg"
								name="furnitown"
								makeby="Trần Nghĩa"
							/>
						</a>
						<a href="#" className="item col-md-6">
							<Project
								image="/img/project/project (2).jpg"
								name="kymco"
								makeby="Huỳnh Tiến Tài"
							/>
						</a>
						<a href="#" className="item col-md-6">
							<Project
								image="/img/project/project (3).jpg"
								name="gboxmb"
								makeby="Nguyễn Văn Tuấn"
							/>
						</a>
						<a href="#" className="item col-md-6">
							<Project
								image="/img/project/project (1).jpg"
								name="wooder"
								makeby="Nguyễn Đức Huy"
							/>
						</a>
						<a href="#" className="item col-md-6">
							<Project
								image="/img/project/project (5).jpg"
								name="gboxmb"
								makeby="Nguyễn Văn Tuấn"
							/>
						</a>
						<a href="#" className="item col-md-6">
							<Project
								image="/img/project/project (6).jpg"
								name="wooder"
								makeby="Nguyễn Đức Huy"
							/>
						</a>
						<a href="#" className="item col-md-6">
							<Project
								image="/img/project/project (1).jpg"
								name="gboxmb"
								makeby="Nguyễn Văn Tuấn"
							/>
						</a>
						<a href="#" className="item col-md-6">
							<Project
								image="/img/project/project (2).jpg"
								name="wooder"
								makeby="Nguyễn Đức Huy"
							/>
						</a>
					</div>
					<div className="bottom">
						<div className="btn overlay round btn-more">
							tải thêm
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default ProjectPage;
