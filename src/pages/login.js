import React from 'react';

export default function login() {
	return (
		<div className="limiter">
			<div className="container-login100">
				<div className="wrap-login100">
					<form className="login100-form validate-form flex-sb flex-w" style={{ padding: 50 }}>
						<span className="login100-form-title">Account Login</span>

						<span className="txt1 p-b-11">Username</span>
						<div
							className="wrap-input100 validate-input"
							data-validate="Username is required"
							style={{ margin: '10px 0px' }}
						>
							<input className="input100" type="text" name="username" />
							<span className="focus-input100" />
						</div>

						<span className="txt1 p-b-11">Password</span>
						<div className="wrap-input100 validate-input m-b-12" data-validate="Password is required">
							<span className="btn-show-pass">
								<i className="fa fa-eye" />
							</span>
							<input className="input100" type="password" name="pass" />
							<span className="focus-input100" />
						</div>

						{/* <div className="flex-sb-m w-full p-b-48">
							<div>
								<a href="#" className="txt3">
									Forgot Password?
								</a>
							</div>
						</div> */}

						<div className="container-login100-form-btn">
							<button className="login100-form-btn">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
