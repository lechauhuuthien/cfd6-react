import React from 'react';
import useFormValidate from '../../hooks/useFormValidate';

function CooperationPage() {
	/*------------------------------*/
	const { form, error, onInputChange, check } = useFormValidate(
		{
			name: '',
			phone: '',
			email: '',
			website: '',
			title: '',
			content: '',
		},
		{
			rule: {
				name: {
					required: true,
					pattern: "name"
				},
				phone: {
					pattern: 'phone',
				},
				email: {
					required: true,
					pattern: 'email',
				},
				website: {
					pattern: 'url',
				},
				title: {
					required: true,
				},
				content: {
					required: true,
				},
			},
			message: {
				name: {
					required: "Vui lòng nhập họ và tên",
					pattern: "Vui lòng nhập họ và tên không chứa số"
				},
				phone: {
					pattern: "Vui lòng nhập đúng số điện thoại Việt Nam"
				},
				email: {
					required: "Vui lòng nhập địa chỉ email",
					pattern: "Vui lòng nhập đúng định dạng email"
				},
				website: {
					pattern: 'Vui lòng nhập đúng định dạng website',
				},
				title: {
					required: 'Vui lòng nhập tiêu đề',
				},
				content: {
					required: 'Vui lòng nhập nội dung',
				},
			}
		}
	);
	/*------------------------------*/
	function onSubmit() {
		let errorObj = check();
		/*---------*/
		if (Object.keys(errorObj).length === 0) {
			console.log('form :>> ', form);
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
