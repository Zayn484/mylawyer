import React from 'react';
import { Form, Input } from 'reactstrap';
import axios from '../axios.config';

export default function SearchLawyer() {
	const [ categories, setCategories ] = React.useState([]);
	const [ selectedCat, setSelctedCat ] = React.useState('');
	const [ city, setCity ] = React.useState('');

	React.useEffect(() => {
		axios.get(`/home/list_of_category`).then((res) => {
			setCategories(res.data.data);
		});
	}, []);

	return (
		<div className="search-lawyer">
			<Form>
				<Input type="select" onChange={(e) => setSelctedCat(e.target.value)}>
					<option>Select Category</option>
					{categories.map((c) => <option key={c.typeName}>{c.typeName}</option>)}
				</Input>
				<Input placeholder="City" onChange={(e) => setCity(e.target.value)} />
			</Form>
		</div>
	);
}
