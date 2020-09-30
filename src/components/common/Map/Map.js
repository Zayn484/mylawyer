import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Circle } from 'google-maps-react';

const containerStyle = {
	position: 'relative',
	width: '100%',
	height: '240px',
	marginBottom: 30
};

const MapContainer = (props) => {
	return (
		<Map
			containerStyle={containerStyle}
			google={props.google}
			zoom={15}
			center={{
				lat: props.latlng[0],
				lng: props.latlng[1]
			}}
		>
			<Marker
				position={{
					lat: props.latlng[0],
					lng: props.latlng[1]
				}}
				name={'Current location'}
			/>

			<Circle
				center={{ lat: props.latlng[0], lng: props.latlng[1] }}
				// radius={parseInt(props.radiusInput)}
				options={{ strokeColor: '#ff0000' }}
			/>

			<InfoWindow>
				<div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
			</InfoWindow>
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBhihSRI1rT15MHKzWdShtusKze34TsfrE'
})(MapContainer);
