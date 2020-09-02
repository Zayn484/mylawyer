import React from 'react';
import RemoteTable from '../RemoteTable';
import axios from '../../axios.config';

const columns = [
	{
		field: '_id',
		name: 'ID'
	},
	{
		field: 'typeName',
		name: 'Type'
	}
];

const Category = () => {
	const [ categories, setCategories ] = React.useState([]);

	React.useEffect(() => {
		getCategories();
	}, []);

	const getCategories = () => {
		axios.get('/home/list_of_category').then((res) => {
			setCategories(res.data);
		});
	};

	return (
		<div>
			<RemoteTable
				title="Categories"
				columns={columns}
				data={categories.data ? categories.data : []}
				fetchData={getCategories}
				actions={[ 'edit', 'delete' ]}
				addNew={true}
			/>
		</div>
	);
};

export default Category;
