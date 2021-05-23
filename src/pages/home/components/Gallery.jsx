import React, { Fragment, useEffect, useRef } from 'react';
// import $ from 'jquery';

const $ = window.$;

function Gallery({ gallery }) {
	let listRef = useRef();
	let processRef = useRef();
	/*------------------------------*/
	useEffect(() => {
		function flickitySlider() {
			$(listRef.current).flickity({
				contain: true,
				wrapAround: false,
				freeScroll: true,
				cellAlign: 'left',
				lazyLoad: 3,
				imagesLoaded: true,
				prevNextButtons: false,
			});

			$(listRef.current).on('scroll.flickity', function (event, progress) {
				progress = Math.max(0.05, Math.min(1, progress));
				$(processRef.current).width(progress * 100 + '%');
			});
		}
		/*------------------------------*/
		flickitySlider();
		/*------------------------------*/
	}, []);
	// useEffect(() => {
	// document
	// 	.querySelector('.homepage .section-gallery .list')
	// 	.addEventListener('scroll.flickity', function (event, progress) {
	// 		console.log('here');
	// 		progress = Math.max(0.05, Math.min(1, progress));
	// 		$(processRef.current).width(progress * 100 + '%');
	// 	});

	// 	return () =>
	// 		document
	// 			.querySelector('.homepage .section-gallery .list')
	// 			.removeEventListener('scroll.flickity');
	// }, []);
	/*------------------------------*/
	if (gallery.length < 1) return <Fragment />;
	return (
		<section className="section-gallery">
			<div className="textbox">
				<h2 className="main-title">Chúng ta là một team</h2>
			</div>
			{gallery.length > 0 ? (
				<div className="list" ref={listRef}>
					{gallery.map((elem, i) => {
						return <img key={i} data-flickity-lazyload={elem} src={elem} alt="" />;
					})}
				</div>
			) : (
				<Fragment />
			)}
			<div className="controls">
				<div className="btn_ctr prev" />
				<span>Trượt qua</span>
				<div className="timeline">
					<div className="process" ref={processRef} />
				</div>
				<div className="btn_ctr next" />
			</div>
		</section>
	);
}

export default Gallery;
