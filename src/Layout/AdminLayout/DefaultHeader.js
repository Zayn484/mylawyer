import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/images/logo-color.png';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
	render() {
		// eslint-disable-next-line
		const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				<a href="/">
					<AppNavbarBrand
						full={{ src: logo, width: 45, height: 30, alt: 'Logo' }}
						minimized={{ src: logo, width: 30, height: 50, alt: 'Logo' }}
					/>
				</a>
				<AppSidebarToggler className="d-md-down-none" display="lg" />

				<Nav className="ml-auto" navbar />
			</React.Fragment>
		);
	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
