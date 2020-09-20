import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from '../axios.config';
import { Alert } from 'reactstrap';

export default function Login() {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ error, setError ] = React.useState(false);

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('/home/login', {
				email,
				password
			})
			.then((res) => {
				if (res.data.code === 200) {
					localStorage.setItem('user', JSON.stringify(res.data.data));
					history.push('/');
				} else {
					setError(true);
				}
			})
			.catch((err) => {
				throw err;
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
						{error && (
							<small style={{ color: 'red', textAlign: 'center', margin: '0 auto', marginBottom: 10 }}>
								Invalid Email/Password.
							</small>
						)}
						<span className="login100-form-title">Account Login</span>
						<span className="txt1 p-b-11">Email</span>
						<div
							className="wrap-input100 validate-input"
							data-validate="Email is required"
							style={{ margin: '10px 0px' }}
						>
							<input
								className="input100"
								type="text"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
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
								onChange={(e) => setPassword(e.target.value)}
							/>
							<span className="focus-input100" />
						</div>
						<small className="mt-5" style={{ marginTop: 10 }}>
							<Link to="/signup">No account? Create one.</Link>
						</small>
						<div className="container-login100-form-btn">
							<button className="login100-form-btn">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
