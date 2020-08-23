import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className="site-footer">
			<div className="footer-top-area">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-3">
							<div className="footer-lwf">
								<h3 className="footer-logo">
									<strong className="text-danger">BRAND</strong>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, massa ac
									ornare feugiat, nunc dui auctor ipsum, sed posuere eros sapien id quam.{' '}
								</p>
								<ul className="footer-contact">
									<li>
										<i className="fa fa-phone" /> +1 1234 456789
									</li>
									<li>
										<i className="fa fa-envelope" /> info@companyname.com
									</li>
									<li>
										<i className="fa fa-fax" /> +1 123 123456
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3">
							<div className="footer-lwf footer-menu">
								<h3 className="footer-lwf-title">Quick Links</h3>
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about-us">About Company</Link>
									</li>
									<li>
										<Link to="/services">Our Services</Link>
									</li>
									<li>
										<Link to="/blog">Blog</Link>
									</li>
									<li>
										<Link to="/contact-us">Contact Us</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3" />
						<div className="col-xs-12 col-sm-6 col-md-3">
							<div className="footer-lwf">
								<h3 className="footer-lwf-title">Opening Hours</h3>
								<ul className="open-hours">
									<li>
										<span>Mon to Fri:</span> <span className="text-right">09:30AM to 05:30PM</span>
									</li>
									<li>
										<span>Sun:</span> <span className="text-right">Closed</span>
									</li>
								</ul>
								<div className="newsletter">
									<form>
										<input
											type="text"
											placeholder="Enter your email"
											value=""
											className="news-input"
										/>
										<button type="submit" value="" className="news-btn">
											<i className="fa fa-envelope-o" aria-hidden="true" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
