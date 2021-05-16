import { endpoint } from './config';

const courseAPI = {
	home: () => {
		return fetch(`${endpoint}/elearning/v4/home`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			// body: JSON.stringify(data),
		}).then((res) => res.json());
	},
	register(data, slug) {
		let token = JSON.parse(localStorage.getItem('user'))?.token?.accessToken;
		return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		}).then((res) => res.json());
	},
	detail(slug) {
		return fetch(`${endpoint}/elearning/v4/course/${slug}`).then((res) =>
			res.json()
		);
	},
	related(slug) {
		return fetch(`${endpoint}/elearning/v4/course-related/${slug}`).then(
			(res) => res.json()
		);
	},
};

export default courseAPI;
