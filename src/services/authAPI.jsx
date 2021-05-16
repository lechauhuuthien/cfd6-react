import { endpoint } from './config';

const authAPI = {
	// hãy test với tài khoản
	// username: huuthien@gmail.com
	// pw: 123456
	login(data) {
		return fetch(`${endpoint}/elearning/v4/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => res.json());
	},
	register(username, password) {
		return fetch(`${endpoint}/elearning/v4/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({username, password}),
		}).then((res) => res.json());
	},
	update(data) {
		let token = JSON.parse(localStorage.getItem('user'))?.token?.accessToken;
		return fetch(`${endpoint}/elearning/v4/profile/update`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}).then((res) => res.json());
	},
};

export default authAPI;
