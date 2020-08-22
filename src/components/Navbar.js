import React from 'react';

export default function Navbar() {
	return (
		<div className="navbar custom-navbar" role="navigation">
			<div className="container">
				<div className="navbar-header">
					<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						{' '}
						<span className="icon icon-bar" /> <span className="icon icon-bar" />{' '}
						<span className="icon icon-bar" />{' '}
					</button>
					<a href="index-2.html" className="navbar-brand">
						<img src={require('../assets/images/logo-color.png')} alt="" />
					</a>{' '}
				</div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown active">
							<a href="index-2.html">
								Home <span className="caret" />
							</a>

							<ul className="dropdown-menu">
								<li className="active">
									<a href="index-2.html">Home Slider</a>
								</li>
								<li>
									<a href="index2.html">Home Static</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="about-us.html">About</a>
						</li>
						<li>
							<a href="services.html">Service</a>
						</li>
						<li className="dropdown">
							<a href="#">
								Blog <span className="caret" />
							</a>

							<ul className="dropdown-menu">
								<li>
									<a href="blog-list.html">Blog Right Sidebar</a>
								</li>
								<li>
									<a href="blog-list2.html">Blog Left Sidebar</a>
								</li>
								<li>
									<a href="blog-detail.html">Blog Detail</a>
								</li>
							</ul>
						</li>
						<li className="dropdown">
							<a href="#">
								Pages <span className="caret" />
							</a>

							<ul className="dropdown-menu">
								<li>
									<a href="practice-areas.html">Practice Areas List</a>
								</li>
								<li>
									<a href="practice-area-detail.html">Practice Areas Detail</a>
								</li>
								<li>
									<a href="attorney-list.html">Attorney List</a>
								</li>
								<li>
									<a href="attorney.html">Attorney Detail</a>
								</li>
								<li>
									<a href="gallery.html">Gallery 1</a>
								</li>
								<li>
									<a href="gallery2.html">Gallery 2</a>
								</li>
								<li>
									<a href="gallery3.html">Gallery 3</a>
								</li>
								<li>
									<a href="faq.html">FAQs</a>
								</li>
								<li>
									<a href="testimonials.html">Testimonials</a>
								</li>
								<li>
									<a href="404.html">404</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="contact-us.html">Contact</a>
						</li>
						<li>
							<span className="calltxt">
								<i className="fa fa-phone" aria-hidden="true" /> 123 456 7890
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
