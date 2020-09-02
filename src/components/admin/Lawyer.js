import React from 'react';
import RemoteTable from '../RemoteTable';
import axios from '../../axios.config';

const columns = [
	{
		field: '_id',
		name: 'ID'
	},
	{
		field: 'name',
		name: 'Name'
	},
	{
		field: 'email',
		name: 'Email'
	},
	{
		field: 'gender',
		name: 'Gender'
	},
	{
		field: 'phoneNo',
		name: 'Phone'
	}
];

const Lawyer = () => {
	const [ laywers, setLawyers ] = React.useState([]);

	React.useEffect(() => {
		getLawyers();
	}, []);

	const getLawyers = () => {
		axios.get('/home/list_of_users?type=lawyer').then((res) => {
			setLawyers(res.data);
		});
	};

	return (
		<div>
			<RemoteTable
				title="Lawyers"
				columns={columns}
				data={laywers.data ? laywers.data : []}
				url="/admin/laywers"
				fetchData={getLawyers}
				actions={['delete']}
			/>
		</div>
	);
};

export default Lawyer;
