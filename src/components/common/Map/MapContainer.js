import React from 'react';
import GeoLocator from './GeoLocator';
import Map from './Map';

export default function MapContainer(props) {
	const [ latlng, setLatLng ] = React.useState([ 0, 0 ]);
	const [ radiusInput, setRadiusInput ] = React.useState(300);

	React.useEffect(() => {
		if (props.latlng && props.latlng.length) setLatLng(props.latlng);
	}, [props.latlng])

	return (
		<div className="map-container">
			<GeoLocator
				inputEnable={true}
				required={true}
				radiusInput={radiusInput}
				setCoords={(lat, lng) => {
					setLatLng([ lat, lng ]);
					props.setLatLng(lat, lng);
				}}
				setRadiusInput={(e) => setRadiusInput(e.target.value)}
			/>
			<div style={{ position: 'relative', height: '100%' }}>
				<Map latlng={latlng} radiusInput={radiusInput} />
			</div>
		</div>
	);
}
