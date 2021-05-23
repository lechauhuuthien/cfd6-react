import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import useFormValidate from '../../../hooks/useFormValidate';
import { updateUser } from '../../../redux/actions/authAction';
import authAPI from '../../../services/authAPI';

function AccountInfo({ first_name, last_name, phone, fb, skype, email }) {
	/*------------------------------*/
	// const {currentUser, setCurrentUser} = useAuth();
	const dispatch = useDispatch();
	/*------------------------------*/
	const { form, error, onInputChange, check } = useFormValidate(
		{
			name: first_name && last_name ? first_name + " " + last_name : '',
			phone: phone ? phone : '',
			email: email ? email : '',
			facebook: fb ? fb : '',
			skype: skype ? skype : '',
		},
		{
			rule: {
				name: {
					required: true,
					pattern: 'name',
				},
				phone: {
					required: true,
					pattern: 'phone',
				},
				facebook: {
					required: true,
					pattern: 'url',
				},
				skype: {
					required: true,
					pattern: /^((ftp|http|https):\/\/)?www\.skype.com\//,
				},
			},
			message: {
				name: {
					required: 'Vui lòng nhập họ và tên',
					pattern: 'Vui lòng nhập họ và tên không chứa số',
				},
				phone: {
					required: 'Vui lòng nhập số điện thoại',
					pattern: 'Vui lòng nhập đúng số điện thoại Việt Nam',
				},
				email: {
					required: 'Vui lòng nhập địa chỉ email',
					pattern: 'Vui lòng nhập đúng định dạng email',
				},
				facebook: {
					required: 'Vui lòng nhập địa chỉ facebook',
					pattern: 'Vui lòng nhập đúng định dạng url facebook',
				},
				skype: {
					required: 'Vui lòng nhập địa chỉ skype',
					pattern: 'Vui lòng nhập đúng định dạng url skype',
				},
			},
		}
	);
	/*------------------------------*/
	async function _onSave() {
		let errorObj = check();
		/*---------*/
		if (Object.keys(errorObj).length === 0) {
			let updateFirstName = form?.name.split(' ').slice(0, -1).join(' ');
			let updateLastName = form?.name.split(' ').slice(-1).join(' ');
			try {
				let res = await dispatch(
					updateUser({
						first_name: updateFirstName || null,
						last_name: updateLastName || null,
						phone: form?.phone || null,
						fb: form?.facebook || null,
						skype: form?.skype || null,
					})
				);

				res && alert(res);
			} catch (error) {
			}
		}
	}

	/*------------------------------*/
	const { name, facebook } = form;
	/*------------------------------*/
	return (
		<div
			className="tab1"
			// style={{ display: 'none' }}
		>
			<label style={{ justifyContent: 'space-between' }}>
				<p>
					Họ và tên<span>*</span>
				</p>
				<div className="input-wrapper">
					<input
						value={name}
						onChange={onInputChange}
						name="name"
						type="text"
						placeholder="Nguyễn Văn A"
					/>
					{error.name && <p className="error-text">{error.name}</p>}
				</div>
			</label>
			<label style={{ justifyContent: 'space-between' }}>
				<p>
					Số điện thoại<span>*</span>
				</p>
				<div className="input-wrapper">
					<input
						value={form.phone}
						onChange={onInputChange}
						name="phone"
						type="text"
						placeholder="0949******"
					/>
					{error.phone && <p className="error-text">{error.phone}</p>}
				</div>
			</label>
			<label style={{ justifyContent: 'space-between' }}>
				<p>
					Email<span>*</span>
				</p>
				<div className="input-wrapper">
					<input value={form.email} name="email" type="text" disabled />
				</div>
			</label>
			<label style={{ justifyContent: 'space-between' }}>
				<p>
					Facebook<span>*</span>
				</p>
				<div className="input-wrapper">
					<input
						value={facebook}
						onChange={onInputChange}
						name="facebook"
						type="text"
						placeholder="Facebook url"
					/>
					{error.facebook && <p className="error-text">{error.facebook}</p>}
				</div>
			</label>
			<label style={{ justifyContent: 'space-between' }}>
				<p>
					Skype<span>*</span>
				</p>
				<div className="input-wrapper">
					<input
						value={form.skype}
						onChange={onInputChange}
						name="skype"
						type="text"
						placeholder="Skype url"
					/>
					{error.skype && <p className="error-text">{error.skype}</p>}
				</div>
			</label>
			<div className="btn main rect" onClick={_onSave}>
				LƯU LẠI
			</div>
		</div>
	);
}

export default AccountInfo;
