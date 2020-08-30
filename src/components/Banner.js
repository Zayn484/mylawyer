import React from 'react';
import SearchLawyer from './SearchLawyer';

export default function Banner() {
	return (
		<div className="tp-banner-container" id="slider">
			<div
				className="tp-banner"
				style={{
					backgroundImage: `url(${require('../assets/images/home-bg.jpg')})`,
					width: '100%',
					height: '800px',
					position: 'relative'
				}}
			>
				<div className="container" style={{ height: '100%' }}>
					<SearchLawyer />
				</div>
			</div>
		</div>
	);
}
