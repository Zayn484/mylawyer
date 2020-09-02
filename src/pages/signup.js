import React from 'react';
import {useHistory} from 'react-router-dom'
import axios from '../axios.config';
import { toast } from 'react-toastify';

export default function Signup() {
	const history = useHistory()

	const [ fields, setFields ] = React.useState({});
	const [ file, setFile ] = React.useState(null);

	const inputChange = (e) => {
		const updateFields = {
			...fields,
			[e.target.name]: e.target.value
		};
		setFields(updateFields);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const fd = new FormData();
		fd.append('profileImage', file);
		fd.append('phoneNo', fields.phoneNo);
		fd.append('gender', fields.gender);
		fd.append('name', fields.name);
		fd.append('email', fields.email);
		fd.append('password', fields.password);
		fd.append('type', fields.type);

		axios
			.post('/home/signUp', fd)
			.then((res) => {
				if (res.data.code !== 200) {
					toast.error(res.data.status);
				} else {
					toast.success('Account created successfully')
					setTimeout(() => {
						history.replace('/login');	
					}, 1000);
				}
			})
			.catch((err) => {
				toast.error('Something went wrong! Try again later.');
			});
	};

	return (
		<div className="limiter">
			<div className="container-login100">
				<div className="wrap-login100">
					<form
						className="login100-form validate-form flex-sb flex-w"
						style={{ padding: 50 }}
						onSubmit={handleSubmit}
					>
						<span className="login100-form-title">Create Account</span>

						<span className="txt1 p-b-11">Name</span>
						<div className="wrap-input100 validate-input" style={{ margin: '10px 0px' }}>
							<input
								className="input100"
								type="text"
								name="name"
								required={true}
								value={fields.name}
								onChange={inputChange}
							/>
							<span className="focus-input100" />
						</div>

						<span className="txt1 p-b-11">Email</span>
						<div className="wrap-input100 validate-input" style={{ margin: '10px 0px' }}>
							<input
								className="input100"
								type="email"
								name="email"
								required={true}
								value={fields.email}
								onChange={inputChange}
							/>
							<span className="focus-input100" />
						</div>

						<span className="txt1 p-b-11">Password</span>
						<div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
							<span className="btn-show-pass">
								<i className="fa fa-eye" />
							</span>
							<input
								className="input100"
								type="password"
								name="pass"
								required={true}
								value={fields.password}
								onChange={inputChange}
							/>
							<span className="focus-input100" />
						</div>

						<span className="txt1 p-b-11">Gender</span>
						<div
							className="wrap-input100 validate-input"
							data-validate="Username is required"
							style={{ margin: '10px 0px' }}
						>
							<select className="form-control" name="gender" onChange={inputChange}>
								<option value="default">Select Gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
							<span className="focus-input100" />
						</div>

						<span className="txt1 p-b-11">Phone Number</span>
						<div
							className="wrap-input100 validate-input"
							data-validate="Username is required"
							style={{ margin: '10px 0px' }}
						>
							<input
								className="input100"
								type="text"
								name="phoneNo"
								value={fields.phoneNo}
								onChange={inputChange}
							/>
							<span className="focus-input100" />
						</div>

						<span className="txt1 p-b-11">Type</span>
						<div className="wrap-input100 validate-input" style={{ margin: '10px 0px' }}>
							<select className="form-control" name="type" value={fields.type} onChange={inputChange}>
								<option value="default">Select Type</option>
								<option value="client">Client</option>
								<option value="lawyer">Lawyer</option>
							</select>
							<span className="focus-input100" />
						</div>

						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text" id="inputGroupFileAddon01">
									Upload
								</span>
							</div>
							<div class="custom-file">
								<input
									type="file"
									class="custom-file-input"
									id="inputGroupFile01"
									aria-describedby="inputGroupFileAddon01"
									onChange={(e) => setFile(e.target.files[0])}
								/>
								<label class="custom-file-label" for="inputGroupFile01">
									Choose file
								</label>
							</div>
						</div>

						<div className="container-login100-form-btn">
							<button className="login100-form-btn" type="submit">
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
