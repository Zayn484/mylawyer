import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import Autosuggest from 'react-autosuggest';
import { Input } from 'reactstrap';

const openGeocoder = require('node-open-geocoder');

class GeoLocator extends Component {
	constructor(props) {
		super(props);
		this.timeout = 0;
	}

	state = {
		location: false,
		locationInfo: '',
		locationInfoCoords: {},
		value: '',
		suggestions: [],
		locationList: [],
		radiusInput: 500
	};

	/**
	 * Fetching suggestions based on input value
	 * @param {string} value 
	 */

	getSuggestions = (value) => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		return inputLength === 0
			? []
			: this.state.locationList.filter((loc) => loc.name.toLowerCase().slice(0, inputLength) === inputValue);
	};

	/**
	 * 
	 * @param {Object} suggestion 
	 */

	getSuggestionValue = (suggestion) => suggestion.name;

	// Render suggestions
	renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});

		if (this.timeout) clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			// Getting locations based on input
			openGeocoder().geocode(this.state.value).end((err, res) => {

				const updatedLocations = [];

				for (let r of res) {
					switch (r.type) {
						case 'primary':
						case 'residential':
							updatedLocations.push({
								place_id: r.place_id,
								lat: r.lat,
								lon: r.lon,
								name: `${r.address.road} ${r.address.county}, ${r.address.country}`
							});
							break;

						case 'tertiary':
							updatedLocations.push({
								place_id: r.place_id,
								lat: r.lat,
								lon: r.lon,
								name: `${r.address.road} ${r.address.town} ${r.address.county}, ${r.address.country}`
							});
							break;

						case 'town':
							updatedLocations.push({
								place_id: r.place_id,
								lat: r.lat,
								lon: r.lon,
								name: `${r.address.town} ${r.address.county}, ${r.address.country}`
							});
							break;

						case 'city':
							updatedLocations.push({
								place_id: r.place_id,
								lat: r.lat,
								lon: r.lon,
								name: `${r.address.city}, ${r.address.country}`
							});
							break;

						case 'administrative':
							updatedLocations.push({
								place_id: r.place_id,
								lat: r.lat,
								lon: r.lon,
								name: `${r.address.city ? r.address.city : r.address.country}, ${r.address.country}`
							});
							break;

						default:
							updatedLocations.push({
								place_id: r.place_id,
								lat: r.lat,
								lon: r.lon,
								name: `${r.address.city !== '' ? r.address.city + ',' : ''} ${r.address.suburb
									? r.address.suburb + ','
									: ''} ${r.address.country}`
							});
							break;
					}
					
				}

				if (updatedLocations.length)
					this.props.setCoords(parseFloat(updatedLocations[0].lat), parseFloat(updatedLocations[0].lon));
				// this.context.setLocationCoords(
				// 	updatedLocations[0].lat,
				// 	updatedLocations[0].lon,
				// 	updatedLocations[0].name
				// );

				this.setState({ locationList: updatedLocations });
			});
		}, 1000);
	};

	// Autosuggest will call this function every time you need to update suggestions
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	render() {
		// locationInfo for current location and value for selected location
		const { value, locationList } = this.state;

		// Autosuggest will pass through all these props to the input
		const inputProps = {
			placeholder: 'Type a location',
			value,
			onChange: this.onChange
		};

		return (
			<div>
				<div>
					{!this.state.location && (
						<div className="ml-auto mb-3 location-input-container">
							<Autosuggest
								suggestions={locationList}
								onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
								onSuggestionsClearRequested={this.onSuggestionsClearRequested}
								getSuggestionValue={this.getSuggestionValue}
								renderSuggestion={this.renderSuggestion}
								inputProps={inputProps}
							/>
							{/* <Input
								type="number"
								placeholder="Radius in meters"
								className="location-input-container__radius-input"
								value={this.props.radiusInput}
								onChange={this.props.setRadiusInput}
							/> */}
						</div>
					)}
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
