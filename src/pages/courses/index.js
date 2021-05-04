import React from 'react';
import CourseList from '../../components/CourseList';

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
	return <CourseList onlineList={TEMP_ONLINE_LIST} offlineList={TEMP_OFFLINE_LIST} />
}

export default CoursesPage;
