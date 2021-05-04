import React from 'react';
import Accordion from '../../components/Accordion';
import CourseItem from '../../components/CourseItem';

const TETMP_COURSE_INFO = {
	title: 'Thực Chiến Front-End Căn Bản',
	startTime: '12/10/2020',
	duration: '18',
	price: '4.000.000',
	desc:
		'Many Laravel apps don’t warrant the complexity of a full front-end framework like Vue orReact. In this series, we’ll walk through a handful of simple ways to add dynamic functionality to your apps.',
	content: [
		{
			day: '1',
			title: 'Giới thiệu HTML, SEO, BEM.',
			content:
				"I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions.",
			active: true,
		},
		{
			day: '2',
			title: 'CSS, CSS3, Flexbox, Grid',
			content:
				"I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions.",
			active: false,
		},
		{
			day: '3',
			title: 'Media Queries',
			content: '',
			active: false,
		},
		{
			day: '4',
			title: 'Boostrap 4',
			content:
				"I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions.",
			active: false,
		},
		{
			day: '5',
			title:
				'Thực hành dự án website Landing Page',
			content:
				"I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions.",
			active: false,
		},
	],
	relatedCourses: [
		{
			title: 'Front-end căn bản',
			thumbnail: 'img/img1.png',
			desc:
				'One of the best corporate fashion brands in Sydney',
			status: 'pending',
			teacher: {
				name: 'Trần Nghĩa',
				avatar: 'img/avt.png',
			},
		},
		{
			title: 'Front-end căn bản',
			thumbnail: 'img/img2.png',
			desc:
				'One of the best corporate fashion brands in Sydney',
			status: 'comming',
			teacher: {
				name: 'Trần Nghĩa',
				avatar: 'img/avt.png',
			},
		},
		{
			title: 'Front-end căn bản',
			thumbnail: 'img/img3.png',
			desc:
				'One of the best corporate fashion brands in Sydney',
			status: 'finish',
			teacher: {
				name: 'Trần Nghĩa',
				avatar: 'img/avt.png',
			},
		},
	],
};

function CourseDetailPage(props) {
	const {
		title,
		startTime,
		duration,
		price,
		desc,
		content,
        relatedCourses
	} = TETMP_COURSE_INFO;
	return (
		<main className="course-detail" id="main">
			<section
				className="banner style2"
				style={{ '--background': '#cde6fb' }}
			>
				<div className="container">
					<div className="info">
						<h1>{title}</h1>
						<div className="row">
							<div className="date">
								<strong>Khai giảng:</strong>{' '}
								{startTime}
							</div>
							<div className="time">
								<strong>Thời lượng:</strong>{' '}
								{duration} buổi
							</div>
						</div>
						<div className="btn white round" style={{"--color-btn": "#70b6f1"}}>đăng ký</div>
					</div>
				</div>
				<div className="bottom">
					<div className="container">
						<div className="video">
							<div className="icon">
								<img
									src="/img/play-icon-white.png"
									alt=""
								/>
							</div>{' '}
							<span>giới thiệu</span>
						</div>
						<div className="money">
							{price} VND
						</div>
					</div>
				</div>
			</section>
			<section className="section-2">
				<div className="container">
					<p className="des">{desc}</p>
					<h2 className="title">
						giới thiệu về khóa học
					</h2>
					<div className="cover">
						<img
							src="/img/course-detail-img.png"
							alt=""
						/>
					</div>
					<h3 className="title">
						nội dung khóa học
					</h3>
					{content.map((e, i) => (
						<Accordion
							active={e.active}
							key={i}
							{...e}
						/>
					))}
					<h3 className="title">
						yêu cầu cần có
					</h3>
					<div className="row row-check">
						<div className="col-md-6">
							Đã từng học qua HTML, CSS
						</div>
						<div className="col-md-6">
							Cài đặt phần mềm Photoshop, Adobe
							illustrator, Skype
						</div>
					</div>
					<h3 className="title">hình thức học</h3>
					<div className="row row-check">
						<div className="col-md-6">
							Học offline tại văn phòng, cùng Trần
							Nghĩa và 3 đồng nghiệp.
						</div>
						<div className="col-md-6">
							Dạy và thực hành thêm bài tập online
							thông qua Skype.
						</div>
						<div className="col-md-6">
							Được các mentor và các bạn trong
							team CFD hổ trợ thông qua group CFD
							Facebook hoặc phần mềm điều khiển
							máy tính.
						</div>
						<div className="col-md-6">
							Thực hành 2 dự án thực tế với sự
							hướng dẫn của CFD Team.
						</div>
					</div>
					<h3 className="title">
						<div className="date-start">
							lịch học
						</div>
						<div className="sub">
							*Lịch học và thời gian có thể thống
							nhất lại theo số đông học viên.
						</div>
					</h3>
					<p>
						<strong>Ngày bắt đầu: </strong>{' '}
						09/09/2020 <br />
						<strong>Thời gian học: </strong> Thứ 3
						từ 18h45-21h45, Thứ 7 từ 12h-15h, Chủ
						nhật từ 15h-18h
					</p>
					<h3 className="title">Người dạy</h3>
					<div className="teaches">
						<div className="teacher">
							<div className="avatar">
								<img
									src="/img/avatar-lg.png"
									alt=""
								/>
							</div>
							<div className="info">
								<div className="name">
									TRẦN NGHĨA
								</div>
								<div className="title">
									Founder CFD &amp; Creative
									Front-End Developer
								</div>
								<p className="intro">
									My education, career, and even
									personal life have been molded
									by one simple principle; well
									designed information resonates
									with people and can change
									lives.I have a passion for
									making information resonate. It
									all starts with how people
									think. With how humans work. As
									humans we have learned how to
									read and write and while that is
									incredible, we are also already
									hard-wired to do some things a
									bit more "automatically"
								</p>
								<p>
									<strong>Website:</strong>{' '}
									<a href="#">
										http://nghiatran.info
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="bottom">
						<div className="user">
							<img
								src="/img/user-group-icon.png"
								alt=""
							/>{' '}
							12 bạn đã đăng ký
						</div>
						<div className="btn main btn-register round">
							đăng ký
						</div>
						<div className="btn-share btn overlay round btn-icon">
							<img
								src="/img/facebook.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="section-3">
				<div className="container">
					<div className="textbox">
						<h3 className="sub-title">DỰ ÁN</h3>
						<h2 className="main-title">
							THÀNH VIÊN
						</h2>
					</div>
					<div className="list row">
						<div className="col-md-4 course">
							<div className="wrap">
								<a href="#" className="cover">
									<img
										src="/img/img.png"
										alt=""
									/>
								</a>
								<div className="info">
									<a className="name" href="#">
										React JS
									</a>
									<p className="des">
										One of the best corporate
										fashion brands in Sydney
									</p>
								</div>
								<div className="bottom">
									<div className="teacher">
										<div className="avatar">
											<img
												src="/img/avt.png"
												alt=""
											/>
										</div>
										<div className="name">
											Vương Đặng
										</div>
									</div>
									<div className="register-btn">
										Đăng Ký
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 course">
							<div className="wrap">
								<a href="#" className="cover">
									<img
										src="/img/img2.png"
										alt=""
									/>
								</a>
								<div className="info">
									<a className="name" href="#">
										Animation
									</a>
									<p className="des">
										One of the best corporate
										fashion brands in Sydney
									</p>
								</div>
								<div className="bottom">
									<div className="teacher">
										<div className="avatar">
											<img
												src="/img/avt.png"
												alt=""
											/>
										</div>
										<div className="name">
											Trần Nghĩa
										</div>
									</div>
									<div className="register-btn">
										Đăng Ký
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 course">
							<div className="wrap">
								<a href="#" className="cover">
									<img
										src="/img/img3.png"
										alt=""
									/>
								</a>
								<div className="info">
									<a className="name" href="#">
										Scss, Grunt JS và Boostrap 4
									</a>
									<p className="des">
										One of the best corporate
										fashion brands in Sydney
									</p>
								</div>
								<div className="bottom">
									<div className="teacher">
										<div className="avatar">
											<img
												src="/img/avt.png"
												alt=""
											/>
										</div>
										<div className="name">
											Trần Nghĩa
										</div>
									</div>
									<div className="register-btn">
										Đăng Ký
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-4">
				<div className="container">
					<div className="textbox">
						<h3 className="sub-title">
							Khóa học
						</h3>
						<h2 className="main-title">
							Liên quan
						</h2>
					</div>
					<div className="list row">
						{relatedCourses.map((e) => (
							<CourseItem key={e._id} {...e} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default CourseDetailPage;