import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function UserLayout() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
}
