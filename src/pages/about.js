import React from 'react';
import Team from '../components/Team';

export default function about() {
	return (
		<div>
			<div className="pageTitle">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<h1 className="page-heading">About Us</h1>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="breadCrumb">
								<a href="#.">Home</a> / <span>About Us</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="innerpgWraper">
				<div className="container">
					<div className="about-desc">
						<div className="row">
							<div className="col-md-7">
								<h3>Fusce consequat elit eget</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, lorem nec
									posuere venenatis, nisi tellus rutrum ante, quis faucibus orci turpis in purus.
									Morbi quis facilisis massa, ac finibus quam. Maecenas luctus tempor eros, et lacinia
									eros venenatis a. Aliquam erat volutpat. Praesent aliquet dapibus lacus ut iaculis.
									Nulla tempor lorem a enim commodo facilisis. Quisque feugiat, nisi in volutpat
									ornare, orci nunc dictum risus, non mattis justo erat nec ante. Quisque feugiat
									ligula metus, et efficitur augue commodo ultrices. <br />
									<br />
									Curabitur nunc tellus, dapibus eu porttitor at, dictum vitae lacus. Nam euismod
									venenatis magna, vulputate pharetra neque porttitor quis. In lectus lorem, auctor ut
									posuere et, faucibus eu quam. Nullam ut lacus in neque malesuada placerat. Aenean
									convallis aliquam ipsum quis lobortis. Sed eleifend, est nec lacinia dapibus, magna
									ligula laoreet quam, dictum porta lectus dui quis dolor. Donec ac est in ex mattis
									luctus. Vivamus congue rhoncus erat tempus imperdiet. Maecenas eu purus interdum,
									pretium libero eu, rutrum sapien. Nam ullamcorper euismod nunc, non eleifend risus
									fermentum quis. Curabitur nec interdum est.
								</p>
							</div>
							<div className="col-md-5">
								<div className="postimg">
									<img src={require('../assets/images/about-img.jpg')} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Team />
		</div>
	);
}
