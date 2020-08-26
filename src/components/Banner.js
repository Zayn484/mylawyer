import React from 'react';
import SearchLawyer from './SearchLawyer';

export default function Banner() {
	return (
		<div className="tp-banner-container" id="slider">
			<div className="tp-banner">
				<SearchLawyer />
				{/* <h2>
					Welcome to My Lawyer
					<br />
					We care about you, find best lawyers now.
				</h2> */}
				<img className="img-fluid" src={require('../assets/images/home-bg.jpg')} alt="" />
			</div>
		</div>
	);
}
