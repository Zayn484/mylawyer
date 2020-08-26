import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import UserLayout from './Layout/UserLayout/index';

import Admin from './Layout/AdminLayout/index';

function App() {
	const location = useLocation();

	return (
		<Switch>
			{location.pathname.includes('/admin') ? (
				<Route path="/admin" name="Admin" render={(props) => <Admin {...props} />} />
			) : (
				<Route path="/" component={UserLayout} />
			)}
		</Switch>
	);
}

export default App;
