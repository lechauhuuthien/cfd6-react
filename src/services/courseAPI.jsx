import authAPI from './authAPI';
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
	async register(data, slug, accessToken) {
		let token = accessToken && JSON.parse(localStorage.getItem('user'))?.token?.accessToken;
		let res = await fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		});

		if (res.status === 200) {
			return res.json();
		}
		if (res.status === 403) {
			let token = await authAPI.refreshToken();
			/*-----when refresh done => continue here----*/
			if (token?.accessToken) {
				return courseAPI.register(data, slug, token?.accessToken);
			}
		}
	},
	detail(slug) {
		return fetch(`${endpoint}/elearning/v4/course/${slug}`).then((res) => res.json());
	},
	related(slug) {
		return fetch(`${endpoint}/elearning/v4/course-related/${slug}`).then((res) => res.json());
	},
};

export default courseAPI;
