import React from 'react';
import axios from '../axios.config';
import { toast } from 'react-toastify';
import ReactWhatsapp from 'react-whatsapp';

export default function AttorneyDetail(props) {
	const { data } = props.location.state;
	const [ modal, setModal ] = React.useState(false);
	const [ slot, setSlot ] = React.useState('1');
	const [ meridiem, setMeridiem ] = React.useState('am');
	const [ date, setDate ] = React.useState('');
	const [ loading, setLoading ] = React.useState(false);

	const renderAppointmentButton = () => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user && user.type === 'client') {
			return (
				<li>
					<i className="fa fa-link" />
					<button className="btn" onClick={bookAppointment}>
						Book Appointment
					</button>
				</li>
			);
		}

		return null;
	};

	const bookAppointment = () => {
		setModal(true);
	};

	const saveAppointment = () => {
		setLoading(true);

		axios
			.post('/home/add_booking', {
				customerId: JSON.parse(localStorage.getItem('user'))._id,
				lawyerId: data._id,
				slot: slot + meridiem,
				date: date
			})
			.then((res) => {
				if (res.data.code === 200) {
					setModal(false);
					toast.success('Appointment successful');
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

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
										<a href="#">www.lawyerdirectory.com</a>
									</li>
									{renderAppointmentButton()}
									<li>
										<i className="fa fa-envelope" />
										<ReactWhatsapp className="btn btn-danger" number={data.phoneNo.toString()}>
											Start Chatting
										</ReactWhatsapp>
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

			<div id="myModal" className="modal" style={{ display: modal ? 'block' : 'none' }}>
				<div className="modal-content">
					<span className="close" onClick={() => setModal(false)}>
						&times;
					</span>
					<br />
					<div>
						<div style={{ display: 'inline-block', width: '100%' }}>
							<select style={{ width: '80%', height: '30px' }} onChange={(e) => setSlot(e.target.value)}>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>

							<select
								style={{ width: '20%', height: '30px' }}
								onChange={(e) => setMeridiem(e.target.value)}
							>
								<option value="am">AM</option>
								<option value="pm">PM</option>
							</select>
						</div>
						<input type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
						<input type="button" value="Book" onClick={saveAppointment} disabled={loading} />
					</div>
				</div>
			</div>
		</div>
	);
}
