import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import useFormValidate from '../hooks/useFormValidate';
import {
	loginAction,
	setLoginError,
	setLoginOpen,
	setLoginStatus,
} from '../redux/actions/authAction';
import authAPI from '../services/authAPI';

export default function Login() {
	/*------------------------------*/
	// const [loginError, setLoginError] = useState(null);
	const { loginStatus, loginError } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	/*------------------------------*/
	let { form, onInputChange, error, check } = useFormValidate(
		{
			username: '',
			password: '',
		},
		{
			rule: {
				username: {
					required: true,
					pattern: 'email',
				},
				password: {
					required: true,
					min: 6,
					max: 32,
				},
			},
		}
	);
	/*------------------------------*/
	// const { isLoginOpen, setIsLoginOpen, handleLogin } = useAuth();
	/*------------------------------*/
	async function _login() {
		let error = check();
		if (Object.keys(error).length === 0) {
			const { username, password } = form;

			// REDUX
			// let res = await authAPI.login({ username, password });
			// if (res?.data) {
			// 	dispatch(loginAction(res.data));
			// } else if (res?.error) {
			// 	dispatch(setLoginError(res.error));
			// }

			dispatch(loginAction({ username, password }))

			// USECONTEXT
			// let res = await handleLogin(username, password);
			// if (res?.success) {
			// 	setIsLoginOpen(false);
			// } else if (res?.error) {
			// 	setLoginError(res.error);
			// }

			// Test
			// const { username, password } = form;
			// if (username === 'admin@gmail.com' && password === '123456') {
			// 	setCurrentUser({ name: 'Hữu Thiện', avatar: './img/avt.png' });
			// 	setIsLoginOpen(false);
			// } else {
			//     alert("Sai email hoặc mật khẩu!")
			// }
		}
	}

	return ReactDOM.createPortal(
		<div
			className="popup-form popup-login"
			id="popupLogin"
			style={{ display: loginStatus ? 'flex' : 'none' }}
		>
			<div className="wrap">
				{/* login-form */}
				<div className="ct_login" style={{ display: 'block' }}>
					<h2 className="title">Đăng nhập</h2>
					{loginError && <p className="error-text">{loginError}</p>}
					<label>
						<div className="input-wrapper" style={{ width: '100%' }}>
							<input
								type="text"
								name="username"
								value={form.username}
								onChange={onInputChange}
								placeholder="Email / Số điện thoại"
							/>
							{error.username && <p className="error-text">{error.username}</p>}
						</div>
					</label>
					<label>
						<div className="input-wrapper" style={{ width: '100%' }}>
							<input
								type="password"
								name="password"
								value={form.password}
								onChange={onInputChange}
								placeholder="Mật khẩu"
							/>
							{error.password && <p className="error-text">{error.password}</p>}
						</div>
					</label>
					<div className="remember">
						<label className="btn-remember">
							<div>
								<input type="checkbox" />
							</div>
							<p>Nhớ mật khẩu</p>
						</label>
						<a href="#" className="forget">
							Quên mật khẩu?
						</a>
					</div>
					<div className="btn rect main btn-login" onClick={_login}>
						đăng nhập
					</div>
					<div className="text-register" style={{}}>
						<strong>hoặc đăng ký bằng</strong>
					</div>
					<div>
						<div className="btn btn-icon rect white btn-google">
							<img src="/img/google.svg" alt="" />
							Google
						</div>
					</div>
					<div className="close">
						<img src="/img/close-icon.png" alt="" />
					</div>
				</div>
				{/* email form */}
				<div className="ct_email">
					<h2 className="title">Đặt lại mật khẩu</h2>
					<input type="text" placeholder="Email" />
					<div className="btn rect main btn-next">Tiếp theo</div>
					<div className="back" />
					<div className="close" onClick={() => dispatch(setLoginStatus(false))}>
						<img src="/img/close-icon.png" alt="" />
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
}
