import React, { useRef } from 'react';
import Member from './components/Member';

function TeamPage(props) {

	return (
		<main className="team" id="main">
			<section>
				<div className="container">
					<div className="top">
						<h2 className="main-title">
							cfd team
						</h2>
						<p className="top-des">
							Lorem ipsum dolor sit amet
							consectetur adipiscing elit. aliquam
							tincidunt elementum sem non luctus
						</p>
					</div>
					<div className="list row">
						<div className="item col-md-6 col-sm-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="trần nghĩa"
								title="Founder &amp; Creative
										Front-End Developer"
							/>
						</div>
						<div className="item col-md-6 col-sm-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="đặng thuyền vương"
								title="Founder &amp; Fullstack Developer"
							/>
						</div>
						<div className="item col-md-6 col-sm-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="đặng thuyền vương"
								title="Founder &amp; Fullstack Developer"
							/>
						</div>
						<div className="item col-md-6 col-sm-6">
							<Member
								thumb="/img/thumb-member.jpg"
								name="nguyễn đức huy"
								title="Co-Founder &amp; Front-End
								Developer"
							/>
						</div>
						<div className="item col-md-3 col-sm-4 col-xs-6">
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
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default TeamPage;
