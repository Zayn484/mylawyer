import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Navbar from '../components/Navbar';

// styles
import '../assets/css/magnific-popup.css';
import '../assets/css/style.css';

export default function UserLayout() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</React.Fragment>
	);
}
