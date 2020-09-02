import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';
import axios from '../axios.config';
import GeoLocator from './GeoLocator';
import Map from './Map';

export default function SearchLawyer() {
	const history = useHistory();

	const [ categories, setCategories ] = React.useState([]);
	const [ selectedCat, setSelctedCat ] = React.useState('');
	const [ city, setCity ] = React.useState('');
	const [ latlng, setLatLng ] = React.useState([]);
	const [ inputEnable, setInputEnable ] = React.useState(true);

	React.useEffect(() => {
		axios.get(`/home/list_of_category`).then((res) => {
			setCategories(res.data.data);
		});
	}, []);

	const selectCity = (e) => {
		const city = e.target.value;

		switch (city) {
			case 'sialkot':
				setCity(city);
				setLatLng([ 32.534657, 74.58457 ]);
				break;

			case 'gujranwala':
				setCity(city);
				setLatLng([ 32.187691, 74.19445 ]);
				break;

			case 'lahore':
				setCity(city);
				setLatLng([ 31.52037, 74.358749 ]);
				break;

			case 'karachi':
				setCity(city);
				setLatLng([ 24.860735, 67.001137 ]);
				break;

			case 'peshawar':
				setCity(city);
				setLatLng([ 34.015137, 71.524918 ]);
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!selectedCat) return alert('Please select category.');

		if (inputEnable) {
			history.push(`/attorney-list?category=${selectedCat}&city=${city}`);
		} else {
			history.push(`/attorney-list?category=${selectedCat}&lat=${latlng[0]}&lng=${latlng[1]}`);
		}
	};

	return (
		<div className="search-lawyer">
			<Form onSubmit={handleSubmit}>
				<Input type="select" onChange={(e) => setSelctedCat(e.target.value)} required={true}>
					<option>Select Category</option>
					{categories.map((c) => <option key={c.typeName}>{c.typeName}</option>)}
				</Input>
				<Input type="select" disabled={!inputEnable} onChange={selectCity}>
					<option value="default">Select City</option>
					<option value="sialkot">Sialkot</option>
					<option value="gujranwala">Gujranwala</option>
					<option value="lahore">Lahore</option>
					<option value="karachi">Karachi</option>
					<option value="peshawar">Peshawar</option>
				</Input>
				<GeoLocator
					inputEnable={inputEnable}
					required={true}
					setCoords={(lat, lng) => setLatLng([ lat, lng ])}
					enableInput={(v) => setInputEnable(v)}
				/>
				<div style={{ position: 'relative', height: '100%' }}>
					<Map latlng={latlng} />
				</div>
				<Button type="submit">Search</Button>
			</Form>
		</div>
	);
}
