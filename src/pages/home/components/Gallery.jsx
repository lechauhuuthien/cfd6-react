import React, { Fragment, useEffect, useRef } from 'react';
// import $ from 'jquery';

const $ = window.$;

function Gallery({ gallery }) {
	let listRef = useRef();
	/*------------------------------*/
	console.log('gallery :>> ', gallery);
	useEffect(() => {
		$(listRef.current).flickity({
			contain: true,
			wrapAround: false,
			freeScroll: true,
			cellAlign: 'left',
			lazyLoad: 3,
			imagesLoaded: true,
			prevNextButtons: false,
		});
	}, []);
	/*------------------------------*/
	return (
		<section className="section-gallery">
			<div className="textbox">
				<h2 className="main-title">Chúng ta là một team</h2>
			</div>
			<div className="list" ref={listRef}>
				{gallery.length > 0 ? (
					gallery.map((elem, i) => {
						return <img key={i} data-flickity-lazyload={elem} alt="" />;
					})
				) : (
					<Fragment />
				)}
			</div>
			<div className="controls">
				<div className="btn_ctr prev" />
				<span>Trượt qua</span>
				<div className="timeline">
					<div className="process" />
				</div>
				<div className="btn_ctr next" />
			</div>
		</section>
	);
}

export default Gallery;
