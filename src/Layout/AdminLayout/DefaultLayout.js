import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	AppHeader,
	AppSidebar,
	AppSidebarFooter,
	AppSidebarForm,
	AppSidebarHeader,
	AppSidebarMinimizer,
	AppBreadcrumb2 as AppBreadcrumb,
	AppSidebarNav2 as AppSidebarNav
} from '@coreui/react';
// sidebar nav config
import navigation from './_nav';
// routes config
import routes from './routes';
import Login from '../../components/admin/Login';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
	state = {
		auth: false
	};

	componentDidMount() {
		require('./scss/style.scss');
	}

	login = (username, password) => {
		if (username === 'admin' && password === '1234') {
			this.setState({ auth: true });
		} else {
			alert('Invalid credentials');
		}
	};

	loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

	render() {
		return !this.state.auth ? (
			<Login login={this.login} />
		) : (
			<div className="app admin-layout">
				<ToastContainer />
				<AppHeader fixed>
					<Suspense fallback={this.loading()}>
						<DefaultHeader onLogout={(e) => this.signOut(e)} />
					</Suspense>
				</AppHeader>
				<div className="app-body">
					<AppSidebar fixed display="lg">
						<AppSidebarHeader />
						<AppSidebarForm />
						<Suspense>
							<AppSidebarNav navConfig={navigation} {...this.props} router={router} />
						</Suspense>
						<AppSidebarFooter />
						<AppSidebarMinimizer />
					</AppSidebar>
					<main className="main">
						<AppBreadcrumb appRoutes={routes} router={router} />
						<Container fluid>
							<Suspense fallback={this.loading()}>
								<Switch>
									{routes.map((route, idx) => {
										return route.component ? (
											<Route
												key={idx}
												path={route.path}
												exact={route.exact}
												name={route.name}
												render={(props) => <route.component {...props} />}
											/>
										) : null;
									})}
									<Redirect from="/admin" to="/admin/dashboard" />
								</Switch>
							</Suspense>
						</Container>
					</main>
				</div>
			</div>
		);
	}
}

export default DefaultLayout;
