import { endpoint } from './config';

const authAPI = {
	// hãy test với tài khoản
	// username: huuthien@gmail.com
	// pw: 123456
	async refreshToken() {
		let user = JSON.parse(localStorage.getItem('user'));
		let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				refreshToken: user?.token?.refreshToken || '',
			}),
		});

		let jsonRes = await res?.json();

		let tokenData = jsonRes?.data;
		if (tokenData) {
			user.token = { ...tokenData };
			localStorage.setItem('user', JSON.stringify(user));
			return tokenData;
		} else {
			return null;
		}
	},
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
			body: JSON.stringify({ username, password }),
		}).then((res) => res.json());
	},
	async update(data, accessToken) {
		let currentToken = accessToken || JSON.parse(localStorage.getItem('user'))?.token?.accessToken;
		let res = await fetch(`${endpoint}/elearning/v4/profile/update`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${currentToken}`,
			},
		});
		/*---------*/
		if (res.status === 200) {
			return res.json();
		}
		if (res.status === 403) {
			let token = await authAPI.refreshToken();
			/*-----when refresh done => continue here----*/
			if (token?.accessToken) {
				return authAPI.update(data, token?.accessToken);
			}
		}
	},
};

export default authAPI;
