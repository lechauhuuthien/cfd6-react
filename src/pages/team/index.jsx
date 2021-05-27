import React, { useEffect, useRef } from 'react';
import Member from './components/Member';

function TeamPage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	return (
		<main className="team" id="main">
			<section>
				<div className="container">
					<div className="top">
						<h2 className="main-title">cfd team</h2>
						<p className="top-des">
							Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum
							sem non luctus
						</p>
					</div>
					<div className="list row">
						<div className="item col-md-6 col-sm-6">
							<Member
								thumb="/img/tran-nghia-cfd-thubnail-2-585x385.jpg"
								name="Trần Nghĩa"
								title="Founder &amp; Creative
										Front-End Developer"
							/>
						</div>
						<div className="item col-md-6 col-sm-6">
							<Member
								thumb="/img/quan-cfd-thubnail-2-585x385.jpg"
								name="Đặng Quân"
								title={`Co-founder CFD & Fullstack Developer`}
							/>
						</div>
						<div className="item col-md-6 col-sm-6">
							<Member
								thumb="/img/huy-thubnail-2-585x385.jpg"
								name="Nguyễn Huy"
								title="Founder &amp; Fullstack Developer"
							/>
						</div>
						<div className="item col-md-6 col-sm-6">
							<Member
								thumb="/img/vuong-cfd-thubnail-2-585x385.jpg"
								name="Đặng Vương"
								title={`Co-Founder & Front-End Developer`}
							/>
						</div>
						{/* <div className="item col-md-3 col-sm-4 col-xs-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="Diệp anh thy"
								title="CFD1-Offline"
							/>
						</div>
						<div className="item col-md-3 col-sm-4 col-xs-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="huỳnh tiến tài"
								title="CFD1-Offline"
							/>
						</div>
						<div className="item col-md-3 col-sm-4 col-xs-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="Ngô thành long"
								title="CFD1-Offline"
							/>
						</div>
						<div className="item col-md-3 col-sm-4 col-xs-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="trần anh tuấn"
								title="CFD1-Offline"
							/>
						</div>
						<div className="item col-md-3 col-sm-4 col-xs-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="Ngô thành long"
								title="CFD1-Offline"
							/>
						</div>
						<div className="item col-md-3 col-sm-4 col-xs-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="nguyễn thành tùng"
								title="CFD1-Offline"
							/>
						</div>
						<div className="item col-md-3 col-sm-4 col-xs-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="phạm thành trung"
								title="CFD1-Offline"
							/>
						</div> */}
					</div>
				</div>
			</section>
		</main>
	);
}

export default TeamPage;
