import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className="site-footer">
			<div className="footer-top-area">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-3">
							<div className="footer-lwf">
								<h3 className="footer-logo">
									<strong className="text-danger">LAWYER DIRECTORY</strong>
								</h3>
								<ul className="footer-contact">
									<li>
										<i className="fa fa-phone" /> +1 1234 666777
									</li>
									<li>
										<i className="fa fa-envelope" /> info@lawyerdirectory.com
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
										<Link to="/about-us">About Us</Link>
									</li>
									<li>
										<Link to="/services">Our Services</Link>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
