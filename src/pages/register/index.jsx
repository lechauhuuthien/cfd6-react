import React, { useState } from 'react';
import $ from 'jquery';

function RegisterPage(props) {
	const [form, setForm] = useState({
		name: '',
		phone: '',
		email: '',
		facebook: '',
		coin: false,
		payment: 'transfer',
		notes: '',
	});
	const [error, setError] = useState({
		name: '',
		phone: '',
		email: '',
		facebook: '',
		payment: '',
	});
	/*------------------------------*/
	function _onInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		let type = e.target.type;
		if (type === 'checkbox') {
			value = e.target.checked
		}
		setForm({
			...form,
			[name]: value,
		});
	}
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
		if (form.payment !== value) {
			setForm({
				...form,
				payment: value,
			});
		}
		_closeSelect();
	}
	/*------------------------------*/
	function _onRegister() {
		let errorObj = {};
		/*---------*/
		if (!form.name.trim()) {
			errorObj.name = 'Vui lòng nhập họ và tên';
		} else if (!/^[a-zA-Z\s]*$/.test(form.name)) {
			errorObj.name = 'Vui lòng nhập họ và tên không chứa số';
		}
		/*---------*/
		if (!form.phone.trim()) {
			errorObj.phone = 'Vui lòng nhập số điện thoại';
		} else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
			errorObj.phone = 'Vui lòng nhập đúng số điện thoại';
		}
		/*---------*/
		if (!form.email.trim()) {
			errorObj.email = 'Vui lòng nhập địa chỉ email';
		} else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(form.email)) {
			errorObj.email = 'Vui lòng nhập đúng địa chỉ email';
		}
		/*---------*/
		if (!form.facebook.trim()) {
			errorObj.facebook = 'Vui lòng nhập địa chỉ facebook';
		} else if (
			!/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(
				form.facebook
			)
		) {
			errorObj.facebook = 'Vui lòng nhập đúng địa chỉ facebook';
		}
		/*---------*/
		if (Object.keys(errorObj).length > 0) {
			setError(errorObj);
		} else {
			console.log('form :>> ', form);
			setError({});
		}
	}
	/*------------------------------*/

	const { name, phone, email, facebook, coin, payment, notes } = form;
	/*------------------------------*/
	return (
		<main className="register-course" id="main">
			<section>
				<div className="container">
					<div className="wrap container">
						<div className="main-sub-title">ĐĂNG KÝ</div>
						<h1 className="main-title">Thực chiến front-end căn bản </h1>
						<div className="main-info">
							<div className="date">
								<strong>Khai giảng:</strong> 15/11/2020
							</div>
							<div className="time">
								<strong>Thời lượng:</strong> 18 buổi
							</div>
							<div className="time">
								<strong>Học phí:</strong> 6.000.000 VND
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
										onChange={_onInputChange}
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
										onChange={_onInputChange}
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
										onChange={_onInputChange}
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
										onChange={_onInputChange}
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
									<input type="checkbox" name="coin" checked={coin} onChange={_onInputChange} />
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
									onChange={_onInputChange}
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
