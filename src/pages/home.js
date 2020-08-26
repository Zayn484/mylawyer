import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Team from '../components/Team';
import Consulation from '../components/Consulation';
import Faqs from '../components/Faqs';

export default function home() {
	return (
		<div>
			<Banner />

			<div className="howitwrap" id="about">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img src={require('../assets/images/about-us.jpg')} alt="" />
						</div>
						<div className="col-md-8">
							<div className="stcontent">
								<div className="section-title">
									<h3>
										Welcome to <span>My Lawyer</span>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, massa ac
										ornare feugiat, nunc dui auctor ipsum, sed posuere eros sapien id quam.{' '}
									</p>
								</div>

								<ul className="howlist">
									<li>
										<div className="howbox">
											<div className="iconcircle">
												<i className="fa fa-university" aria-hidden="true" />
											</div>
											<h4>Protect Your Rights</h4>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
												tempor incidid ut labore
											</p>
										</div>
									</li>

									<li>
										<div className="howbox">
											<div className="iconcircle">
												<i className="fa fa-handshake-o" aria-hidden="true" />
											</div>
											<h4>Medical Treatment</h4>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
												tempor incidid ut labore
											</p>
										</div>
									</li>

									<li>
										<div className="howbox">
											<div className="iconcircle">
												<i className="fa fa-male" aria-hidden="true" />
											</div>
											<h4>We Fight for Justice</h4>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
												tempor incidid ut labore
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="counter">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-3 col-xs-12 counter-item">
							<div className="counterbox">
								<div className="counter-icon">
									<i className="fa fa-users" aria-hidden="true" />
								</div>
								<span className="counter-number" data-from="1" data-to="999" data-speed="1000" />{' '}
								<span className="counter-text">Trusted Client</span>{' '}
							</div>
						</div>
						<div className="col-md-3 col-sm-3 col-xs-12 counter-item">
							<div className="counterbox">
								<div className="counter-icon">
									<i className="fa fa-university" aria-hidden="true" />
								</div>
								<span className="counter-number" data-from="1" data-to="1512" data-speed="2000" />{' '}
								<span className="counter-text">Success Cases</span>{' '}
							</div>
						</div>
						<div className="col-md-3 col-sm-3 col-xs-12 counter-item">
							<div className="counterbox">
								<div className="counter-icon">
									<i className="fa fa-laptop" aria-hidden="true" />
								</div>
								<span className="counter-number" data-from="1" data-to="1756" data-speed="3000" />{' '}
								<span className="counter-text">Case Study</span>{' '}
							</div>
						</div>
						<div className="col-md-3 col-sm-3 col-xs-12 counter-item">
							<div className="counterbox">
								<div className="counter-icon">
									<i className="fa fa-trophy" aria-hidden="true" />
								</div>
								<span className="counter-number" data-from="1" data-to="101" data-speed="4000" />{' '}
								<span className="counter-text">Awards</span>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="practicearea" className="parallax-section">
				<div className="container">
					<div className="section-title">
						<h3>
							Practice <span>Areas</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, massa ac ornare
							feugiat, nunc dui auctor ipsum, sed posuere eros sapien id quam.
						</p>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-6">
							<div className="service-thumb">
								<div className="thumb-img">
									<img src={require('../assets/images/lawyer/1.jpg')} className="animate" alt="" />
								</div>
								<h4>Divorce Law</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque.</p>
							</div>
						</div>

						<div className="col-md-4 col-sm-6">
							<div className="service-thumb">
								<div className="thumb-img">
									<img src={require('../assets/images/lawyer/2.jpg')} className="animate" alt="" />
								</div>
								<h4>Litigation</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque.</p>
							</div>
						</div>

						<div className="col-md-4 col-sm-6">
							<div className="service-thumb">
								<div className="thumb-img">
									<img src={require('../assets/images/lawyer/3.jpg')} className="animate" alt="" />
								</div>
								<h4>Accident Law</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque.</p>
							</div>
						</div>

						<div className="col-md-4 col-sm-6">
							<div className="service-thumb">
								<div className="thumb-img">
									<img src={require('../assets/images/lawyer/4.jpg')} className="animate" alt="" />
								</div>
								<h4>Drug Law</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque.</p>
							</div>
						</div>

						<div className="col-md-4 col-sm-6">
							<div className="service-thumb">
								<div className="thumb-img">
									<img src={require('../assets/images/lawyer/5.jpg')} className="animate" alt="" />
								</div>
								<h4>Personal Law</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque.</p>
							</div>
						</div>

						<div className="col-md-4 col-sm-6">
							<div className="service-thumb">
								<div className="thumb-img">
									<img src={require('../assets/images/lawyer/6.jpg')} className="animate" alt="" />
								</div>
								<h4>Criminal Law</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="servicesbox bg1"
				style={{
					background: `url(${require('../assets/images/service-bg-1.jpg')}) no-repeat left`,
					backgroundPosition: 'cover'
				}}
			>
				<div className="container">
					<div className="section-title">
						<h3>Personal Injury Lawyers</h3>
					</div>
					<div className="ctoggle">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt mauris est, in
							faucibus dui viverra et. Aliquam finibus vestibulum elit, at pharetra nisl congue vel. Nunc
							pretium posuere justo pretium fringilla. Sed volutpat risus non rhoncus convallis. Sed
							fermentum est at hendrerit pellentesque. Mauris nec leo euismod, sagittis mauris in, posuere
							est...
						</p>
						<a href="#" className="readmore">
							Read More <i className="fa fa-long-arrow-right" aria-hidden="true" />
						</a>{' '}
					</div>
				</div>
			</div>

			<Services />

			<Team />

			<Consulation />

			<Faqs />
		</div>
	);
}
