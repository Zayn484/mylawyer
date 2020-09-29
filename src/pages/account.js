import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from '../axios.config';
import { toast } from 'react-toastify';
import MultiSelect from 'react-multi-select-component';
import RemoteTable from '../components/RemoteTable';

const columns = [
	{
		field: 'userEmail',
		name: 'Email'
	},
	{
		field: 'userName',
		name: 'Username'
	},
	{
		field: 'date',
		name: 'Date'
	},
	{
		field: 'status',
		name: 'Status'
	}
];

let user = {};

export default function Account() {
	const [ activetab, setActiveTab ] = React.useState(1);
	const [ generalInfo, setGeneralInfo ] = React.useState({});
	const [ education, setEducation ] = React.useState({});
	const [ socialMedia, setSocialMedia ] = React.useState({});
	const [ types, setTypes ] = React.useState({});
	const [ date, setDate ] = React.useState(new Date());
	const [ bookings, setBookings ] = React.useState([]);
	const [ categories, setCategories ] = React.useState([]);
	const [ selectedCategories, setSelectedCategories ] = React.useState([]);
	const [ success, setSuccess ] = React.useState(false);

	React.useEffect(() => {
		user = JSON.parse(localStorage.getItem('user'));
		fetchBookings();
		fetchTypes();

		if (user.genralInformation) {
			setGeneralInfo(user.genralInformation);
		}
		if (user.education) {
			setEducation(user.education);
		}
		if (user.socialMedia) {
			setSocialMedia(user.socialMedia);
		}
		if (user.types && user.types.length) {
			setTypes({ types: getTypes() });
			formatSelectedTypes();
		}
	}, []);

	const getTypes = () => {
		if (user.types) return user.types.join(',');
	};

	const formatSelectedTypes = () => {
		const typs = [];
		user.types.forEach((element) => {
			typs.push({ label: element, value: element });
		});
		setSelectedCategories(typs);
	};

	const getDays = () => {
		const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];

		return days.map((d) => <option key={d}>{d}</option>);
	};

	const fetchBookings = () => {
		let url = '';

		if (user.type === 'lawyer') url = `/home/lawyer_bookings?lawyerId=${user._id}`;
		else url = `/home/customer_bookings?customerId=${user._id}`;

		axios.get(url).then((res) => {
			setBookings(res.data);
		});
	};

	const fetchTypes = () => {
		axios.get(`/home/list_of_category`).then((res) => {
			const types = [];
			res.data.data.forEach((element) => {
				types.push({ label: element.typeName, value: element.typeName });
			});
			setCategories(types);
		});
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
					types: selectedCategories.map((cat) => cat.value),
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
							{user.type === 'lawyer' && (
								<React.Fragment>
									<Link to="#" onClick={() => setActiveTab(4)}>
										<ListGroupItem>Type</ListGroupItem>
									</Link>
									<Link to="#" onClick={() => setActiveTab(5)}>
										<ListGroupItem>Availability Schedule</ListGroupItem>
									</Link>
								</React.Fragment>
							)}
							<Link to="#" onClick={() => setActiveTab(6)}>
								<ListGroupItem>Booking Requests</ListGroupItem>
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
									placeholder="Language"
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
									type="select"
									name="city"
									defaultValue={generalInfo.city}
									onChange={(e) => inputChangeHandler(1, e)}
								>
									<option value="default">Select City</option>
									<option value="sialkot">Sialkot</option>
									<option value="gujranwala">Gujranwala</option>
									<option value="lahore">Lahore</option>
									<option value="karachi">Karachi</option>
									<option value="peshawar">Peshawar</option>
								</Input>
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
								<MultiSelect
									options={categories}
									value={selectedCategories}
									onChange={(e) => {
										const typs = [];
										e.forEach((element) => {
											typs.push(element);
										});
										setSelectedCategories(typs);
									}}
									labelledBy={'Select'}
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

						{activetab === 6 && (
							<div className="account-form">
								<h4>Booking Requests</h4>
								<br />
								<RemoteTable
									title="Bookings"
									columns={columns}
									data={bookings.data ? bookings.data : []}
									fetchData={fetchBookings}
									actions={[ 'status' ]}
								/>
							</div>
						)}
					</Col>
					<Col md={1}>
						<label>{JSON.parse(localStorage.getItem('user')).name}</label>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
