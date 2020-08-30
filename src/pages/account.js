import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from '../axios.config';
import { toast } from 'react-toastify';
export default function Account() {
	const [ activetab, setActiveTab ] = React.useState(1);
	const [ generalInfo, setGeneralInfo ] = React.useState({});
	const [ education, setEducation ] = React.useState({});
	const [ socialMedia, setSocialMedia ] = React.useState({});
	const [ types, setTypes ] = React.useState({});
	const [ date, setDate ] = React.useState(new Date());
	const [ success, setSuccess ] = React.useState(false);

	React.useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));

		if (user.genralInformation) {
			setGeneralInfo(user.genralInformation);
		}
		if (user.education) {
			setEducation(user.education);
		}
		if (user.socialMedia) {
			setSocialMedia(user.socialMedia);
		}
		if (user.types) {
			setTypes({ types: getTypes() });
		}
	}, []);

	const getTypes = () => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user.types) return user.types.join(',');
	};

	const getDays = () => {
		const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];

		return days.map((d) => <option key={d}>{d}</option>);
	};

	/**
	 * Input handler for all tabs to handling values.
	 * @param {number} type 
	 * @param {Object} e 
	 */

	const inputChangeHandler = (type, e) => {
		switch (type) {
			case 1:
				const updateGeneralInfo = {
					...generalInfo,
					[e.target.name]: e.target.value
				};
				setGeneralInfo(updateGeneralInfo);

				break;
			case 2:
				const updateEducation = {
					...education,
					[e.target.name]: e.target.value
				};
				setEducation(updateEducation);

				break;
			case 3:
				const updatedSocialMedia = {
					...socialMedia,
					[e.target.name]: e.target.value
				};
				setSocialMedia(updatedSocialMedia);

				break;

			case 4:
				const updatedTypes = {
					...types,
					[e.target.name]: e.target.value
				};
				setTypes(updatedTypes);

				break;

			case 5:
				const updatedDate = {
					...date,
					[e.target.name]: e.target.value
				};
				setDate(updatedDate);
				break;

			default:
				break;
		}
	};

	/**
	 * Handler from setting user information.
	 * @param {number} type 
	 */
	const handleSave = (type) => {
		let data = {};
		const user = JSON.parse(localStorage.getItem('user'));

		switch (type) {
			case 1:
				data = {
					...generalInfo,
					userId: user._id,
					lat: 32.4945,
					lng: 74.5229
				};
				axios
					.put('/home/add_genralInformation', data)
					.then((res) => {
						if (res.data.code === 200) {
							const updatedUser = {
								...user,
								genralInformation: data
							};
							localStorage.setItem('user', JSON.stringify(updatedUser));
							successMessage();
						}
					})
					.catch((err) => {
						console.log(err);
					});

				break;

			case 2:
				data = {
					...education,
					userId: user._id
				};
				axios
					.put('/home/add_education', data)
					.then((res) => {
						if (res.data.code === 200) {
							const updatedUser = {
								...user,
								education: data
							};
							localStorage.setItem('user', JSON.stringify(updatedUser));
							successMessage();
						}
					})
					.catch((err) => {
						console.log(err);
					});

				break;

			case 3:
				data = {
					...socialMedia,
					userId: user._id
				};
				axios
					.put('/home/add_socialMedia', data)
					.then((res) => {
						if (res.data.code === 200) {
							const updatedUser = {
								...user,
								socialMedia: data
							};
							localStorage.setItem('user', JSON.stringify(updatedUser));
							successMessage();
						}
					})
					.catch((err) => {
						console.log(err);
					});

				break;

			case 4:
				data = {
					types: [ ...types.types.split(',') ],
					userId: user._id
				};
				axios
					.put('/home/add_type', data)
					.then((res) => {
						if (res.data.code === 200) {
							const updatedUser = {
								...user,
								types: data.types
							};
							localStorage.setItem('user', JSON.stringify(updatedUser));
							successMessage();
						}
					})
					.catch((err) => {
						console.log(err);
					});

				break;

			case 5:
				data = {
					...date,
					userId: user._id
				};
				axios
					.put('/home/add_timing', data)
					.then((res) => {
						if (res.data.code === 200) {
							const updatedUser = {
								...user,
								timing: data
							};
							localStorage.setItem('user', JSON.stringify(updatedUser));
							successMessage();
						}
					})
					.catch((err) => {
						console.log(err);
					});

				break;

			default:
				break;
		}
	};

	const successMessage = () => {
		toast.success('Information has been successfuly updated.');
	};

	return (
		<div style={{ height: 'auto', display: 'flex', justifyContent: 'center' }}>
			<Container style={{ marginTop: 70, marginBottom: 40, border: '1px solid #ccc', padding: 50 }}>
				<Row className="my-5">
					<Col md={3}>
						<ListGroup>
							<Link to="#" onClick={() => setActiveTab(1)}>
								<ListGroupItem>General Information</ListGroupItem>
							</Link>
							<Link to="#" onClick={() => setActiveTab(2)}>
								<ListGroupItem>Education</ListGroupItem>
							</Link>
							<Link to="#" onClick={() => setActiveTab(3)}>
								<ListGroupItem>Social Media</ListGroupItem>
							</Link>
							<Link to="#" onClick={() => setActiveTab(4)}>
								<ListGroupItem>Type</ListGroupItem>
							</Link>
							<Link to="#" onClick={() => setActiveTab(5)}>
								<ListGroupItem>Availability Schedule</ListGroupItem>
							</Link>
							<Link
								to="#"
								onClick={() => {
									localStorage.removeItem('user');
									window.location = '/';
								}}
							>
								<ListGroupItem>Logout</ListGroupItem>
							</Link>
						</ListGroup>
					</Col>
					<Col md={7} className="bg-light border p-3">
						{activetab === 1 && (
							<div className="account-form">
								<h4>General Information</h4>
								<br />

								<Input
									placeholder="Age"
									type="number"
									name="age"
									value={generalInfo.age}
									onChange={(e) => inputChangeHandler(1, e)}
								/>
								<Input
									placeholder="Languuage"
									name="language"
									value={generalInfo.language}
									onChange={(e) => inputChangeHandler(1, e)}
								/>
								<Input
									placeholder="Country"
									name="country"
									value={generalInfo.country}
									onChange={(e) => inputChangeHandler(1, e)}
								/>
								<Input
									placeholder="City"
									name="city"
									value={generalInfo.city}
									onChange={(e) => inputChangeHandler(1, e)}
								/>
								<Input
									placeholder="State"
									name="state"
									value={generalInfo.state}
									onChange={(e) => inputChangeHandler(1, e)}
								/>
								<Input
									type="textarea"
									placeholder="Address"
									name="completeaddress"
									value={generalInfo.completeaddress}
									onChange={(e) => inputChangeHandler(1, e)}
								/>
								<Input
									placeholder="Postal Code"
									type="number"
									name="postalcode"
									value={generalInfo.postalcode}
									onChange={(e) => inputChangeHandler(1, e)}
								/>
								<Button onClick={() => handleSave(1)}>Save</Button>
							</div>
						)}

						{activetab === 2 && (
							<div className="account-form">
								<h4>Education</h4>
								<br />

								<Input
									placeholder="Degree"
									name="degreeName"
									value={education.degreeName}
									onChange={(e) => inputChangeHandler(2, e)}
								/>
								<Input
									placeholder="Institute"
									name="uniName"
									value={education.uniName}
									onChange={(e) => inputChangeHandler(2, e)}
								/>
								<Input
									placeholder="Completion Year"
									name="completionYear"
									value={education.completionYear}
									onChange={(e) => inputChangeHandler(2, e)}
								/>
								<Input
									placeholder="Starting Year"
									name="startpracticYear"
									value={education.startpracticYear}
									onChange={(e) => inputChangeHandler(2, e)}
								/>

								<Input
									type="textarea"
									placeholder="Description"
									name="discription"
									rows={3}
									value={education.discription}
									onChange={(e) => inputChangeHandler(2, e)}
								/>

								<Button onClick={() => handleSave(2)}>Save</Button>
							</div>
						)}

						{activetab === 3 && (
							<div className="account-form">
								<h4>Social Media</h4>
								<br />
								<Input
									placeholder="Platform"
									type="select"
									name="name"
									onChange={(e) => inputChangeHandler(3, e)}
								>
									<option value="facebook">Facebook</option>
									<option value="twitter">Twitter</option>
									<option value="linkedin">Linkedin</option>
								</Input>
								<Input
									placeholder="Profile Link"
									name="url"
									value={socialMedia.url}
									onChange={(e) => inputChangeHandler(3, e)}
								/>
								<Button onClick={() => handleSave(3)}>Save</Button>
							</div>
						)}

						{activetab === 4 && (
							<div className="account-form">
								<h4>Type</h4>
								<br />
								<Input
									placeholder="Types"
									name="types"
									value={types.types}
									onChange={(e) => inputChangeHandler(4, e)}
								/>
								<Button style={{ marginTop: 20 }} onClick={() => handleSave(4)}>
									Save
								</Button>
							</div>
						)}

						{activetab === 5 && (
							<div className="account-form">
								<h4>Availability Schedule</h4>
								<br />
								<div>
									<Input
										placeholder="Day From"
										name="dayfrom"
										type="select"
										defaultValue="default"
										onChange={(e) => inputChangeHandler(5, e)}
									>
										<option value="default" disabled={true}>
											Day From
										</option>
										{getDays()}
									</Input>

									<Input
										placeholder="Day To"
										name="dayto"
										type="select"
										defaultValue="default"
										onChange={(e) => inputChangeHandler(5, e)}
									>
										<option value="default" disabled={true}>
											Day To
										</option>
										{getDays()}
									</Input>
									<Input
										placeholder="Time From"
										name="timefrom"
										value={date.timefrom}
										onChange={(e) => inputChangeHandler(5, e)}
									/>
									<Input
										placeholder="Time To"
										name="timeto"
										value={date.timeto}
										onChange={(e) => inputChangeHandler(5, e)}
									/>
								</div>
								<Button style={{ marginTop: 20 }} onClick={() => handleSave(5)}>
									Save
								</Button>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}