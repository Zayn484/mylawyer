import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';
import axios from '../axios.config';
import GeoLocator from './GeoLocator';

export default function SearchLawyer() {
	const history = useHistory();

	const [ categories, setCategories ] = React.useState([]);
	const [ selectedCat, setSelctedCat ] = React.useState('');
	const [ city, setCity ] = React.useState('');
	const [ inputEnable, setInputEnable ] = React.useState(true);

	React.useEffect(() => {
		axios.get(`/home/list_of_category`).then((res) => {
			setCategories(res.data.data);
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!selectedCat) return alert('Please select category.');

		history.push(`/attorney-list?category=${selectedCat}&city=${city}`);
	};

	return (
		<div className="search-lawyer">
			<Form onSubmit={handleSubmit}>
				<Input type="select" onChange={(e) => setSelctedCat(e.target.value)} required={true}>
					<option>Select Category</option>
					{categories.map((c) => <option key={c.typeName}>{c.typeName}</option>)}
				</Input>
				<Input
					placeholder="City"
					disabled={!inputEnable}
					required={true}
					onChange={(e) => setCity(e.target.value)}
				/>
				<GeoLocator inputEnable={inputEnable} required={true} enableInput={(v) => setInputEnable(v)} />
				<Button type="submit">Search</Button>
			</Form>
		</div>
	);
}
