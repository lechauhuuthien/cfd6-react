import React, { useState } from 'react';

function CooperationPage() {
	const [form, setForm] = useState({
		name: '',
		phone: '',
		email: '',
		website: '',
		title: '',
		content: '',
	});
	const [error, setError] = useState({
		name: '',
		phone: '',
		email: '',
		website: '',
		title: '',
		content: '',
	});
	/*------------------------------*/
	function onInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		setForm({
			...form,
			[name]: value,
		});
	}
	/*------------------------------*/
	function onSubmit() {
		let errorObj = {};
		/*---------*/
		if (!form.name.trim()) {
			errorObj.name = 'Vui lòng nhập họ và tên';
		} else if (!/^[a-zA-Z\s]*$/.test(form.name)) {
			errorObj.name = 'Vui lòng nhập họ và tên không chứa số';
		}
		/*---------*/
		if (form.phone && !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
			errorObj.phone = 'Vui lòng nhập đúng số điện thoại';
		}
		/*---------*/
		if (!form.email.trim()) {
			errorObj.email = 'Vui lòng nhập địa chỉ email';
		} else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(form.email)) {
			errorObj.email = 'Vui lòng nhập đúng địa chỉ email';
		}
		/*---------*/
		if (
			form.website &&
			!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
				form.website
			)
		) {
			errorObj.website = 'Vui lòng nhập đúng địa chỉ website';
		}
		/*---------*/
		if (!form.title.trim()) {
			errorObj.title = 'Vui lòng nhập tiêu đề';
		}
		/*---------*/
		if (!form.content.trim()) {
			errorObj.content = 'Vui lòng nhập nội dung';
		}
		/*---------*/
		if (Object.keys(errorObj).length > 0) {
			setError(errorObj);
		} else {
			setError({})
		}
	}

	/*------------------------------*/
	const { name, phone, email, website, title, content } = form;
	/*------------------------------*/
	return (
		<main className="register-course" id="main">
			<section className="section-1 wrap container">
				{/* <div class="main-sub-title">liên hệ</div> */}
				<h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
				<p className="top-des">
					Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá
					trị, cũng như việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
				</p>
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
						<p>Số điện thoại</p>
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
						<p>Website</p>
						<div className="input-wrapper">
							<input
								value={website}
								onChange={onInputChange}
								name="website"
								type="text"
								placeholder="Đường dẫn website http://"
							/>
							{error.website && <p className="error-text">{error.website}</p>}
						</div>
					</label>
					<label>
						<p>
							Tiêu đề<span>*</span>
						</p>
						<div className="input-wrapper">
							<input
								value={title}
								onChange={onInputChange}
								name="title"
								type="text"
								placeholder="Tiêu đề liên hệ"
							/>
							{error.title && <p className="error-text">{error.title}</p>}
						</div>
					</label>
					<label>
						<p>
							Nội dung<span>*</span>
						</p>
						<div className="input-wrapper">
							<textarea
								value={content}
								onChange={onInputChange}
								name="content"
								cols={30}
								rows={10}
							/>
							{error.content && <p className="error-text">{error.content}</p>}
						</div>
					</label>
					<div className="btn main rect" onClick={onSubmit}>
						đăng ký
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

export default CooperationPage;
