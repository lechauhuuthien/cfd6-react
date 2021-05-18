import { LOGIN, LOGOUT, SET_LOGIN_ERROR, SET_LOGIN_STATUS } from '../type';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')),
	loginError: '',
	loginStatus: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
		case LOGIN:
			localStorage.setItem('user', JSON.stringify(action.payload));
			return {
				...state,
				user: { ...action.payload },
				loginStatus: false,
			};

		case LOGOUT:
			localStorage.setItem('user', null);
			return {
				...state,
				user: null,
			};

		case SET_LOGIN_ERROR:
			return {
				...state,
				loginError: action.payload,
			};

		case SET_LOGIN_STATUS:
			return {
				...state,
				loginStatus: action.payload,
			};

		default:
			return state;
	}
}
