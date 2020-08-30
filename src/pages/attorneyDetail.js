import React from 'react';

export default function attorneyDetail(props) {
	const { data } = props.location.state;

	return (
		<div>
			<div className="pageTitle">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<h1 className="page-heading">Our Expert Attorneys</h1>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="breadCrumb">
								<a href="#.">Home</a> / <span>FAQs</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="parallax-section">
				<div className="container">
					<div className="attorneytop">
						<div className="row">
							<div className="col-md-4 col-sm-4">
								<img src={data.profileImage} className="lawimg" alt="" />
							</div>
							<div className="col-md-8 col-sm-8">
								<h2 className="text-uppercase">{data.name}</h2>
								<h3 className="text-capitalize">{data.type}</h3>

								<ul className="address">
									<li>
										<i className="fa fa-phone" />
										{data.phoneNo}
									</li>
									<li>
										<i className="fa fa-envelope-o" />
										<a href="#">{data.email}</a>
									</li>
									<li>
										<i className="fa fa-skype" />
										{data.name}.attorney
									</li>
									<li>
										<i className="fa fa-globe" />
										<a href="#">www.LawyerDirectory.com</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="atorinfo">
						<div className="row">
							{data.genralInformation && (
								<div className="col-md-6">
									<h2>General Information</h2>
									<ul>
										<li>Age: {data.genralInformation.age}</li>
										<li>City: {data.genralInformation.city}</li>
										<li>Address: {data.genralInformation.completeaddress}</li>
										<li>Language: {data.genralInformation.language}</li>
										<li>State: {data.genralInformation.state}</li>
										<li>Postal Code: {data.genralInformation.postalcode}</li>
									</ul>
								</div>
							)}
							{data.education && (
								<div className="col-md-6">
									<h2>Education</h2>
									<ul>
										<li>Degree: {data.education.degreeName}</li>
										<li>Institute: {data.education.uniName}</li>
										<li>Completion Year: {data.education.completionYear}</li>
										<li>State: {data.education.discription}</li>
									</ul>
								</div>
							)}
						</div>
						<div className="row">
							{data.socialMedia && (
								<div className="col-md-6">
									<h2>Social Media</h2>
									<ul>
										{data.socialMedia.map((s, i) => (
											<li key={i}>
												{s.name}{' '}
												<a href={s.url} target="_blank">
													{s.url}
												</a>
											</li>
										))}
									</ul>
								</div>
							)}
							{data.timing && (
								<div className="col-md-6">
									<h2>Availablity Schedule</h2>
									<ul>
										<li>From: {data.timing.dayfrom}</li>
										<li>To: {data.timing.dayto}</li>
										<li>
											Timing: {data.timing.timefrom} - {data.timing.timeto}
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
