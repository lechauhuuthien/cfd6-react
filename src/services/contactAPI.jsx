import { endpoint } from "./config";

const contactAPI = {
	contact: (data) => {
		return fetch(`${endpoint}/elearning/v4/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => res.json());
	},
};

export default contactAPI;
