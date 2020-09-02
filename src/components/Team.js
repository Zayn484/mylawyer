import React from 'react';
import { Link } from 'react-router-dom';

export default function Team({ list }) {
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
					{list.map((l) => (
						<Link
							to={{
								pathname: `/attorney/${l._id}`,
								state: {
									data: l
								}
							}}
							key={l._id}
						>
							<div className="col-md-3 col-sm-6">
								<div className="team-thumb">
									<div className="thumb-image">
										<img src={l.profileImage} className="animate" alt="" />
									</div>
									<h4 className="text-uppercase">{l.name}</h4>
									<h5 className="text-capitalize">{l.type}</h5>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
