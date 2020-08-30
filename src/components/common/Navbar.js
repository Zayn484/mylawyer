import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

export default function Navbar(props) {
	const location = useLocation();
	const history = useHistory();

	return (
		<div className="navbar custom-navbar" role="navigation">
			<div className="container">
				<div className="navbar-header">
					<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span className="icon icon-bar" /> <span className="icon icon-bar" />
						<span className="icon icon-bar" />
					</button>
					<Link to="/" className="navbar-brand">
						<strong className="text-danger">LAWYER DIRECTORY</strong>
					</Link>
				</div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li className={location.pathname === '/' && 'active'}>
							<Link to="/">Home</Link>
						</li>
						<li className={location.pathname === '/about-us' && 'active'}>
							<Link to="/about-us">About</Link>
						</li>
						<li className={location.pathname === '/services' && 'active'}>
							<Link to="/services">Service</Link>
						</li>

						<li className={location.pathname === '/contact-us' && 'active'}>
							<Link to="/contact-us">Contact</Link>
						</li>
						<li>
							{localStorage.getItem('user') ? (
								<span className="nav-login" onClick={() => history.push('/my-account')}>
									<i className="fa fa-user" aria-hidden="true" /> Account
								</span>
							) : (
								<span className="nav-login" onClick={() => history.push('/login')}>
									<i className="fa fa-user" aria-hidden="true" /> Login
								</span>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
