import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

const NodeGeocoder = require('node-geocoder');

const geoOptions = {
	provider: 'google',

	// Optional depending on the providers
	httpAdapter: 'https', // Default
	apiKey: 'AIzaSyAaTrZxzHEMpSCOS9Lq5AWCyScys8IDOEg', // for Mapquest, OpenCage, Google Premier
	formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(geoOptions);

function Switch({ isOn, handleToggle, tab }) {
	return (
		<React.Fragment>
			<input
				checked={isOn}
				onChange={handleToggle}
				className="react-switch-checkbox"
				id={`react-switch-new-${tab}`}
				type="checkbox"
			/>

			<label
				style={{ background: isOn && '#739A35' }}
				className="react-switch-label"
				htmlFor={`react-switch-new-${tab}`}
			>
				<span className={`react-switch-button`} />
				{isOn ? <small style={{ marginLeft: 7 }}>ON</small> : <small style={{ marginLeft: 33 }}>OFF</small>}
			</label>
		</React.Fragment>
	);
}

class GeoLocator extends Component {
	constructor(props) {
		super(props);
		this.timeout = 0;
	}

	state = {
		location: false,
		locationInfo: '',
		locationInfoCoords: {},
		value: ''
	};

	componentDidMount() {
		this.showLocation();
	}

	// Show current location
	showLocation = () => {
		if (this.props.coords === null) {
			return this.setState({
				locationInfo: 'Unable to get current location'
			});
		}

		if (this.state.location && this.props.coords !== null)
			geocoder
				.reverse({
					lat: this.props.coords.latitude,
					lon: this.props.coords.longitude
				})
				.then((res) => {
					console.log(res);
					this.setState({
						locationInfo: `${res[0].city}, ${res[0].country}`
					});
				})
				.catch((err) => {
					console.log(err);
					this.setState({
						locationInfo: 'Unable to get current location'
					});
				});
	};

	render() {
		return (
			<div>
				<div
					style={{
						background: '#fff',
						padding: 5,
						display: 'flex',
						justifyContent: 'space-between',
						border: '1px solid #dee2e6',
						height: 35
					}}
				>
					<span>
						<i className="fa fa-map" /> {this.state.locationInfo}
					</span>
					<Switch
						tab={this.props.tab}
						isOn={this.state.location}
						handleToggle={() => {
							this.setState(
								(prevState) => ({
									location: !prevState.location
								}),
								() => {
									this.props.enableInput(!this.props.inputEnable);
									if (this.state.location) this.showLocation();
								}
							);
						}}
					/>
				</div>
			</div>
		);
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false
	},
	userDecisionTimeout: 5000
})(GeoLocator);
