import authAPI from '../../services/authAPI';
import { LOGIN, LOGOUT, SET_LOGIN_ERROR, SET_LOGIN_STATUS, UPDATE_USER } from '../type';

export function loginAction(data) {
	return async (dispatch) => {
		let res = await authAPI.login(data);
		if (res?.data) {
			dispatch({
				type: LOGIN,
				payload: res.data,
			});
		} else if (res?.error) {
			dispatch(setLoginError(res.error));
		}
	};
}
export function logoutAction() {
	return {
		type: LOGOUT,
	};
}
export function setLoginError(error) {
	return {
		type: SET_LOGIN_ERROR,
		payload: error,
	};
}
export function setLoginStatus(status) {
	return {
		type: SET_LOGIN_STATUS,
		payload: status,
	};
}
export function updateUser(data) {
	return async (dispatch) => {
		let res = await authAPI.update(data);
		if (res?.data) {
			dispatch({
				type: UPDATE_USER,
				payload: res.data
			})
			return 'Thay đổi thành công'
		} else if (res.error) {
			return res.error
		}
	}
}
