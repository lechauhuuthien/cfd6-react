import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import CourseItem from '../../components/CourseItem';
import { modifyPrice } from '../../services/commonFunctions';
import courseAPI from '../../services/courseAPI';
import Page404 from '../page404';

function CourseDetailPage() {
	const [course, setCourse] = useState(null);
	const [relatedCourses, setRelatedCourses] = useState(null);
	const [isNoData, setIsNoData] = useState(false);
	const [accordionStatus, setAccordionStatus] = useState(null);

	/*------------------------------*/
	const { slug } = useParams();
	/*------------------------------*/
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	useEffect(() => {
		async function fetchCourseData(param) {
			try {
				let res = await courseAPI.detail(param);

				if (res.data) {
					setCourse(res.data);
					setAccordionStatus(
						res.data.content.map(() => {
							return false;
						})
					);
				} else {
					setIsNoData(true);
				}
			} catch (error) {
				alert(error);
			}
		}
		/*------------------------------*/
		async function fetchRelatedCourseData(param) {
			try {
				let res = await courseAPI.related(param);

				if (res.data) {
					setRelatedCourses(res.data);
				}
			} catch (error) {
				alert(error);
			}
		}
		/*------------------------------*/
		if (slug) {
			fetchCourseData(slug);
			fetchRelatedCourseData(slug);
		}
	}, []);
	/*------------------------------*/
	function _onAccClick(i) {
		let newAccStatus = accordionStatus.map((status, index) => {
			return index === i;
		});

		setAccordionStatus(newAccStatus);
	}
	/*------------------------------*/
	if (isNoData) return <Page404 />;
	if (!course) return <Fragment />;
	/*------------------------------*/
	console.log('course :>> ', course);
	const {
		title,
		opening_time,
		count_video,
		money,
		long_description,
		content,
		benefits,
		required,
		schedule,
		teacher,
	} = course;
	console.log('accordionStatus :>> ', accordionStatus);
	/*------------------------------*/
	return (
		<main className="course-detail" id="main">
			<section className="banner style2" style={{ '--background': '#cde6fb' }}>
				<div className="container">
					<div className="info">
						<h1>{title}</h1>
						<div className="row">
							<div className="date">
								<strong>Khai gi???ng:</strong> {opening_time || ''}
							</div>
							<div className="time">
								<strong>Th???i l?????ng:</strong> {count_video || ''} bu???i
							</div>
						</div>
						<Link to={`/register/${slug}`} className="btn white round" style={{ '--color-btn': '#70b6f1' }}>
							????ng k??
						</Link>
					</div>
				</div>
				<div className="bottom">
					<div className="container">
						<div className="video">
							<div className="icon">
								<img src="/img/play-icon-white.png" alt="" />
							</div>{' '}
							<span>gi???i thi???u</span>
						</div>
						<div className="money">{modifyPrice(money || 0)} VND</div>
					</div>
				</div>
			</section>
			<section className="section-2">
				<div className="container">
					<p className="des">{long_description || ''}</p>
					<h2 className="title">gi???i thi???u v??? kh??a h???c</h2>
					<div className="cover">
						<img src="/img/course-detail-img.png" alt="" />
					</div>
					<h3 className="title">n???i dung kh??a h???c</h3>
					{content && content.length > 0 ? (
						content.map((e, i) => (
							<Accordion
								active={accordionStatus && accordionStatus[i]}
								key={i}
								{...e}
								index={i}
								onAccClick={_onAccClick}
							/>
						))
					) : (
						<Fragment />
					)}
					<h3 className="title">y??u c???u c???n c??</h3>
					<div className="row row-check">
						{required &&
							required.map((req, i) => {
								return (
									<div className="col-md-6" key={i}>
										{req.content}
									</div>
								);
							})}
					</div>
					<h3 className="title">h??nh th???c h???c</h3>
					<div className="row row-check">
						{benefits &&
							benefits.map((benifit, i) => {
								return (
									<div className="col-md-6" key={i}>
										{benifit.content}
									</div>
								);
							})}
					</div>
					<h3 className="title">
						<div className="date-start">l???ch h???c</div>
						<div className="sub">
							*L???ch h???c v?? th???i gian c?? th??? th???ng nh???t l???i theo s??? ????ng h???c vi??n.
						</div>
					</h3>
					<p>
						<strong>Ng??y b???t ?????u: </strong> {opening_time || ''} <br />
						<strong>Th???i gian h???c: </strong> {schedule || ''}
					</p>
					<h3 className="title">Ng?????i d???y</h3>
					<div className="teaches">
						<div className="teacher">
							<div className="avatar">
								<img src={teacher?.avatar.link || ''} alt="" />
							</div>
							<div className="info">
								<div className="name">{teacher?.title || ''}</div>
								<div className="title">{teacher?.position || ''}</div>
								<p className="intro">{teacher?.description || ''}</p>
								<p>
									<strong>Website:</strong>{' '}
									<a href={teacher?.website || '#'} target="_blank" rel="noreferrer">
										{teacher?.website || ''}
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="bottom">
						<div className="user">
							<img src="/img/user-group-icon.png" alt="" /> 12 b???n ???? ????ng k??
						</div>
						<Link to={`/register/${slug}`} className="btn main btn-register round">????ng k??</Link>
						<div className="btn-share btn overlay round btn-icon">
							<img src="/img/facebook.svg" alt="" />
						</div>
					</div>
				</div>
			</section>
			<section className="section-3">
				<div className="container">
					<div className="textbox">
						<h3 className="sub-title">D??? ??N</h3>
						<h2 className="main-title">TH??NH VI??N</h2>
					</div>
					<div className="list row">
						<div className="col-md-4 course">
							<div className="wrap">
								<a href="#" className="cover">
									<img src="/img/img.png" alt="" />
								</a>
								<div className="info">
									<a className="name" href="#">
										React JS
									</a>
									<p className="des">One of the best corporate fashion brands in Sydney</p>
								</div>
								<div className="bottom">
									<div className="teacher">
										<div className="avatar">
											<img src="/img/avt.png" alt="" />
										</div>
										<div className="name">V????ng ?????ng</div>
									</div>
									<div className="register-btn">
										<Link to={`/register/${slug}`}>????ng K??</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 course">
							<div className="wrap">
								<a href="#" className="cover">
									<img src="/img/img2.png" alt="" />
								</a>
								<div className="info">
									<a className="name" href="#">
										Animation
									</a>
									<p className="des">One of the best corporate fashion brands in Sydney</p>
								</div>
								<div className="bottom">
									<div className="teacher">
										<div className="avatar">
											<img src="/img/avt.png" alt="" />
										</div>
										<div className="name">Tr???n Ngh??a</div>
									</div>
									<div className="register-btn">????ng K??</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 course">
							<div className="wrap">
								<a href="#" className="cover">
									<img src="/img/img3.png" alt="" />
								</a>
								<div className="info">
									<a className="name" href="#">
										Scss, Grunt JS v?? Boostrap 4
									</a>
									<p className="des">One of the best corporate fashion brands in Sydney</p>
								</div>
								<div className="bottom">
									<div className="teacher">
										<div className="avatar">
											<img src="/img/avt.png" alt="" />
										</div>
										<div className="name">Tr???n Ngh??a</div>
									</div>
									<div className="register-btn">????ng K??</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{relatedCourses && (
				<section className="section-4">
					<div className="container">
						<div className="textbox">
							<h3 className="sub-title">Kh??a h???c</h3>
							<h2 className="main-title">Li??n quan</h2>
						</div>
						<div className="list row">
							{relatedCourses.map((e, i) => (
								<CourseItem key={i} {...e} />
							))}
						</div>
					</div>
				</section>
			)}
		</main>
	);
}

export default CourseDetailPage;
