import React, { Fragment } from 'react';

function Testimonial({ reviewList }) {
	if (!reviewList) return <Fragment />;
	return (
		<section className="section-testimonial">
			<div className="container">
				<div className="textbox">
					<h2 className="main-title white">Học viên cảm nhận về CFD</h2>
				</div>
				<div className="testimonial">
					<div className="testimonial-item">
						<div className="item">
							<div className="text">
								{reviewList.map((review, i) => (
									<div className={`ct ct-${i + 1} ${i === 0 && 'active'}`} key={i}>
										<div className="info">
											<div className="name">
												<h4>{review.name}</h4>
												<p>{review.course}</p>
											</div>
											<div className="quotes">
												<img src="/img/quotes.svg" alt="" />
											</div>
										</div>
										<div className="content">{review.content}</div>
										<div className="bottom">
											<a href={review.fb} rel="noreferrer" target="_blank">
												<img src="/img/facebook.svg" alt="" />
											</a>
											<span>{review.date}</span>
										</div>
									</div>
								))}
							</div>
							<div className="images">
								<div className="list">
									{reviewList.map((review, i) => (
										<div className="carousel-cell" key={i}>
											<div className="img">
												<picture>
													<source media="(max-width: 767px)" srcSet="img/Intersect.png" />
													<img data-flickity-lazyload={review.image} alt="" />
												</picture>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="dots" />
						<div className="btn_ctr prev" />
						<div className="btn_ctr next" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
