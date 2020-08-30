import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const Home = lazy(() => import('../../pages/home'));
const About = lazy(() => import('../../pages/about'));
const Services = lazy(() => import('../../pages/services'));
const Contact = lazy(() => import('../../pages/contact'));
const Login = lazy(() => import('../../pages/login'));
const Signup = lazy(() => import('../../pages/signup'));
const Attorney = lazy(() => import('../../pages/attorney'));
const AttorneyDetail = lazy(() => import('../../pages/attorneyDetail'));
const Account = lazy(() => import('../../pages/account'));

export default class DefaultLayout extends Component {
	componentDidMount() {
		require('../../assets/css/style.css');
	}

	render() {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<ToastContainer />
				<Navbar />
				<Suspense fallback={<div style={{ width: '100%', height: '100vh' }} />}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about-us" exact component={About} />
						<Route path="/services" exact component={Services} />
						<Route path="/contact-us" exact component={Contact} />
						<Route path="/login" exact component={Login} />
						<Route path="/signup" exact component={Signup} />
						<Route path="/attorney-list" exact component={Attorney} />
						<Route path="/attorney/:id" exact component={AttorneyDetail} />
						<Route path="/my-account" exact component={Account} />
					</Switch>
				</Suspense>
				<Footer />
			</Suspense>
		);
	}
}
