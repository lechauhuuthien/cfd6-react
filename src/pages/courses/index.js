import React, { useEffect, useState } from 'react';
import CourseList from '../../components/CourseList';
import courseAPI from '../../services/courseAPI';

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

function CoursesPage() {
	/*------------------------------*/
	const [onlineCourses, setOnlineCourses] = useState(null);
	const [offlineCourses, setofflineCourses] = useState(null);
	/*------------------------------*/
	useEffect(() => {
		async function fetchData() {
			try {
				let res = await courseAPI.home();
				console.log(res);

				if (res) {
					res.online && setOnlineCourses(res.online);
					res.offline && setofflineCourses(res.offline);
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
	return <CourseList onlineList={onlineCourses} offlineList={offlineCourses} />;
}

export default CoursesPage;
