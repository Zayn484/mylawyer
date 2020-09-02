import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
	position: 'absolute',
	left: 0,
	top: 0,
	width: '100%',
	height: '240px'
};

export class MapContainer extends Component {
	render() {
		return (
			<Map
				containerStyle={containerStyle}
				google={this.props.google}
				zoom={10}
				center={{
					lat: this.props.latlng[0],
					lng: this.props.latlng[1]
				}}
			>
				<Marker onClick={this.onMarkerClick} name={'Current location'} />

				<InfoWindow onClose={this.onInfoWindowClose}>
					<div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAm4VxhmADtL6zpXCY26thCvbbUzgriJCA'
})(MapContainer);
