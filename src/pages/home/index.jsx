import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import CourseList from '../../components/CourseList';
import courseAPI from '../../services/courseAPI';
import Action from './components/Action';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
function HomePage() {
	/*------------------------------*/
	const [onlineCourses, setOnlineCourses] = useState(null);
	const [offlineCourses, setofflineCourses] = useState(null);
	const [review, setReview] = useState(null);
	const [gallery, setGallery] = useState(null);
	/*------------------------------*/
	useEffect(() => {
		async function fetchData() {
			try {
				let res = await courseAPI.home();

				if (res) {
					res.online && setOnlineCourses(res.online);
					res.offline && setofflineCourses(res.offline);
					res.review && setReview(res.review);
					res.gallery && setGallery(res.gallery);
				} else if (res.error) {
					alert(res.error);
				}
			} catch (error) {
				alert(error);
			}
		}
		/*---------*/
		fetchData();
		/*---------*/
	}, []);
	/*------------------------------*/
	if (!onlineCourses || !offlineCourses || !review || !gallery) return <Fragment />;
	return (
		<main className="homepage" id="main">
			<Banner />
			<CourseList onlineList={onlineCourses} offlineList={offlineCourses} />
			<Testimonial reviewList={review} />
			<Gallery gallery={gallery || []} />
			<Action />
		</main>
	);
}

export default HomePage;
