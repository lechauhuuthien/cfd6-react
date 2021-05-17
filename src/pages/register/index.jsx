import React, { Fragment, useEffect, useState } from 'react';
import $ from 'jquery';
import useFormValidate from '../../hooks/useFormValidate';
import { useHistory, useRouteMatch } from 'react-router';
import courseAPI from '../../services/courseAPI';
import Page404 from '../page404';
import { modifyPrice } from '../../services/commonFunctions';

function RegisterPage() {
	/*------------------------------*/
	const { slug } = useRouteMatch().params;
	const history = useHistory();
	/*------------------------------*/
	const [course, setCourse] = useState(null);
	const [isNoData, setIsNoData] = useState(false);
	/*------------------------------*/
	useEffect(() => {
		async function fetchCourseData(param) {
			try {
				let res = await courseAPI.detail(param);

				if (res.data) {
					setCourse(res.data);
				} else {
					setIsNoData(true);
				}
			} catch (error) {
				alert(error);
			}
		}

		if (slug) {
			fetchCourseData(slug);
		}
	}, []);

	/*------------------------------*/
	const { form, error, onInputChange, check } = useFormValidate(
		{
			name: '',
			phone: '',
			email: '',
			facebook: '',
			coin: false,
			notes: '',
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
				email: {
					required: true,
					pattern: 'email',
				},
				facebook: {
					required: true,
					pattern: 'facebook',
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
			},
		}
	);
	/*------------------------------*/
	const [payment, setPayment] = useState('transfer');
	/*------------------------------*/
	function _openSelect() {
		$('.register-course .select .sub').css({ display: 'block' });
	}
	function _closeSelect() {
		$('.register-course .select .sub').fadeOut(200);
	}
	/*------------------------------*/
	function _onPaymentSelect(e, value) {
		e.preventDefault();
		if (payment !== value) {
			setPayment(value);
		}
		_closeSelect();
	}
	/*------------------------------*/
	async function _onRegister() {
		let errorObj = check();
		/*---------*/
		if (Object.keys(errorObj).length === 0) {
			let finalForm = { ...form, payment: payment };

			try {
				let res = await courseAPI.register(
					{
						name: finalForm.name,
						phone: finalForm.phone,
						email: finalForm.email,
						fb: finalForm.facebook,
					},
					slug
				);

				if (res.success) {
					alert(res.success);
					history.go(0);
				} else {
					alert('Đăng ký thất bại!');
				}
			} catch (error) {
				alert(error);
			}
		}
	}
	/*------------------------------*/

	const { name, phone, email, facebook, coin, notes } = form;
	/*------------------------------*/
	if (isNoData) return <Page404 />;
	if (!course) return <Fragment />;
	/*------------------------------*/
	const { title, opening_time, count_video, money } = course;
	/*------------------------------*/
	return (
		<main className="register-course" id="main">
			<section>
				<div className="container">
					<div className="wrap container">
						<div className="main-sub-title">ĐĂNG KÝ</div>
						<h1 className="main-title">{title}</h1>
						<div className="main-info">
							<div className="date">
								<strong>Khai giảng:</strong> {opening_time}
							</div>
							<div className="time">
								<strong>Thời lượng:</strong> {count_video} buổi
							</div>
							<div className="time">
								<strong>Học phí:</strong> {modifyPrice(money)} VND
							</div>
						</div>
						<div className="form">
							<label>
								<p>
									Họ và tên<span>*</span>
								</p>
								<div className="input-wrapper">
									<input
										value={name}
										onChange={onInputChange}
										name="name"
										type="text"
										placeholder="Họ và tên bạn"
									/>
									{error.name && <p className="error-text">{error.name}</p>}
								</div>
							</label>
							<label>
								<p>
									Số điện thoại<span>*</span>
								</p>
								<div className="input-wrapper">
									<input
										value={phone}
										onChange={onInputChange}
										name="phone"
										type="text"
										placeholder="Số điện thoại"
									/>
									{error.phone && <p className="error-text">{error.phone}</p>}
								</div>
							</label>
							<label>
								<p>
									Email<span>*</span>
								</p>
								<div className="input-wrapper">
									<input
										value={email}
										onChange={onInputChange}
										name="email"
										type="text"
										placeholder="Email của bạn"
									/>
									{error.email && <p className="error-text">{error.email}</p>}
								</div>
							</label>
							<label>
								<p>
									URL Facebook<span>*</span>
								</p>
								<div className="input-wrapper">
									<input
										value={facebook}
										onChange={onInputChange}
										name="facebook"
										type="text"
										placeholder="https://facebook.com"
									/>
									{error.facebook && <p className="error-text">{error.facebook}</p>}
								</div>
							</label>
							<label className="disable">
								<p>Sử dụng COIN</p>
								<div className="checkcontainer">
									Hiện có <strong>300 COIN</strong>
									{/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
									{/* Cần ít nhất 200 COIN để giảm giá */}
									<input type="checkbox" name="coin" checked={coin} onChange={onInputChange} />
									<span className="checkmark" />
								</div>
							</label>
							<label>
								<p>Hình thức thanh toán</p>
								<div className="select">
									<div className="head" onClick={_openSelect}>
										{payment === 'transfer' ? 'Chuyển khoản' : 'Thanh toán tiền mặt'}
									</div>
									<div className="sub">
										<a href="#" onClick={(e) => _onPaymentSelect(e, 'transfer')}>
											Chuyển khoản
										</a>
										<a href="#" onClick={(e) => _onPaymentSelect(e, 'cash')}>
											Thanh toán tiền mặt
										</a>
									</div>
								</div>
							</label>
							<label>
								<p>Ý kiến cá nhân</p>
								<input
									value={notes}
									onChange={onInputChange}
									name="notes"
									type="text"
									placeholder="Mong muốn cá nhân và lịch bạn có thể học."
								/>
							</label>
							<div className="btn main rect" onClick={_onRegister}>
								đăng ký
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <div class="register-success">
      <div class="contain">
          <div class="main-title">đăng ký thành công</div>
          <p>
              <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
              Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
              hoặc số điện thoại của bạn.
          </p>
      </div>
      <a href="/" class="btn main rect">về trang chủ</a>
  </div> */}
		</main>
	);
}

export default RegisterPage;
