import React, { useEffect, useState } from 'react';
import CourseList from '../../components/CourseList';
import courseAPI from '../../services/courseAPI';
import Action from './components/Action';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';

const TEMP_ONLINE_LIST = [
	{
		title: 'Front-end căn bản',
		thumbnail: 'img/img1.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'pending',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
	{
		title: 'Front-end căn bản',
		thumbnail: 'img/img2.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'comming',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
	{
		title: 'Front-end căn bản',
		thumbnail: 'img/img3.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'finish',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
];

const TEMP_OFFLINE_LIST = [
	{
		title: 'Front-end căn bản',
		thumbnail: 'img/img1.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'pending',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
	{
		title: 'React JS',
		thumbnail: 'img/img2.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'comming',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
	{
		title: 'Animation',
		thumbnail: 'img/img3.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'finish',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
	{
		title: 'Scss, Grunt JS và Boostrap 4',
		thumbnail: 'img/img1.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'pending',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
	{
		title: 'UX/UI Design',
		thumbnail: 'img/img2.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'comming',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
	{
		title: 'Web Responsive',
		thumbnail: 'img/img3.png',
		desc: 'One of the best corporate fashion brands in Sydney',
		status: 'finish',
		teacher: {
			name: 'Trần Nghĩa',
			avatar: 'img/avt.png',
		},
	},
];

const TEMP_REVIEW_LIST = [
	{
		name: 'Tiến Tài',
		course: 'Thành viên CFD1',
		content:
			'Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua khóa học. Like cho 4 mentor.',
		fb: 'https://www.facebook.com/',
		date: '09/10/2020',
		image: 'img/tes.jpg',
	},
	{
		name: 'Phạm Thành Trung',
		course: 'Thành viên CFD1',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor in, molestie lectus. Aenean porttitor purus at purus euismod tristique',
		fb: 'https://www.facebook.com/',
		date: '09/10/2020',
		image: 'img/tes.jpg',
	},
	{
		name: 'Nguyễn Văn Tuấn',
		course: 'Thành viên CFD1',
		content:
			'Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua khóa học. Like cho 4 mentor.',
		fb: 'https://www.facebook.com/',
		date: '09/10/2020',
		image: 'img/tes.jpg',
	},
];

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
				console.log(res)

				if (res) {
					res.online && setOnlineCourses(res.online);
					res.offline && setofflineCourses(res.offline);
					res.review && setReview(res.review);
					res.gallery && setGallery(res.gallery);
				} else if (res.error) {
					alert(res.error)
				}
			} catch (error) {
				alert(error)
			}
		}
		/*---------*/
		fetchData()
		/*---------*/
	}, []);
	/*------------------------------*/
	return (
		<main className="homepage" id="main">
			<Banner />
			<CourseList onlineList={onlineCourses} offlineList={offlineCourses} />
			<Testimonial reviewList={TEMP_REVIEW_LIST} />
			<Gallery />
			<Action />
		</main>
	);
}

export default HomePage;
