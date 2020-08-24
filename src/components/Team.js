import React from 'react';

export default function Team() {
	return (
		<div id="team" className="parallax-section">
			<div className="container">
				<div className="section-title">
					<h3>
						Our <span>Team</span>
					</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-6">
						<div className="team-thumb">
							<div className="thumb-image">
								<img src={require('../assets/images/team/team-img1.jpg')} className="animate" alt="" />
							</div>
							<h4>JOHN DOE</h4>
							<h5>Personal Lawyer</h5>
							<ul className="list-inline social">
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-twitter">
										<i className="fa fa-twitter" aria-hidden="true" />
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-facebook">
										<i className="fa fa-facebook" aria-hidden="true" />
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-linkedin">
										<i className="fa fa-linkedin" aria-hidden="true" />
									</a>{' '}
								</li>
							</ul>
						</div>
					</div>

					<div className="col-md-3 col-sm-6">
						<div className="team-thumb">
							<div className="thumb-image">
								<img src={require('../assets/images/team/team-img2.jpg')} className="animate" alt="" />
							</div>
							<h4>JASON DOE</h4>
							<h5>Criminal Lawyer</h5>
							<ul className="list-inline social">
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-twitter">
										<i className="fa fa-twitter" aria-hidden="true" />
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-facebook">
										<i className="fa fa-facebook" aria-hidden="true" />
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-linkedin">
										<i className="fa fa-linkedin" aria-hidden="true" />
									</a>{' '}
								</li>
							</ul>
						</div>
					</div>

					<div className="col-md-3 col-sm-6">
						<div className="team-thumb">
							<div className="thumb-image">
								<img src={require('../assets/images/team/team-img3.jpg')} className="animate" alt="" />
							</div>
							<h4>JANE DOE</h4>
							<h5>Family Lawyer</h5>
							<ul className="list-inline social">
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-twitter">
										<i className="fa fa-twitter" aria-hidden="true" />
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-facebook">
										<i className="fa fa-facebook" aria-hidden="true" />
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-linkedin">
										<i className="fa fa-linkedin" aria-hidden="true" />
									</a>{' '}
								</li>
							</ul>
						</div>
					</div>

					<div className="col-md-3 col-sm-6">
						<div className="team-thumb">
							<div className="thumb-image">
								<img src={require('../assets/images/team/team-img4.jpg')} className="animate" alt="" />
							</div>
							<h4>MARTIN DOE</h4>
							<h5>Employment Lawyer</h5>
							<ul className="list-inline social">
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-twitter">
										<i className="fa fa-twitter" aria-hidden="true" />
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-facebook">
										<i className="fa fa-facebook" aria-hidden="true" />
									</a>{' '}
								</li>
								<li>
									{' '}
									<a href="javascript:void(0);" className="bg-linkedin">
										<i className="fa fa-linkedin" aria-hidden="true" />
									</a>{' '}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
