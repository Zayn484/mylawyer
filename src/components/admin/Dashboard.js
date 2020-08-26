import React from 'react';
import axios from '../../axios.config';

export default function Dashboard() {
	const [ data, setData ] = React.useState({});

	React.useEffect(() => {
		Promise.all([
			axios.get('/home/list_of_users?type=customer'),
			axios.get('/home/list_of_users?type=lawyer'),
			axios.get('/home/list_of_category')
		]).then((res) => {
			setData({
				customers: res[0].data.data.length,
				lawyers: res[1].data.data.length,
				categories: res[2].data.data.length
			});
		});
	}, []);

	return (
		<div className="d-flex justify-content-between">
			<div className="card text-white bg-info mb-3" style={{ width: 300, height: 100 }}>
				<div className="card-header">Active Customers</div>
				<div className="card-body">
					<h2 className="card-title text-white">{data.customers}</h2>
				</div>
			</div>

			<div className="card text-white bg-info mb-3" style={{ width: 300, height: 100 }}>
				<div className="card-header">Active Lawyers</div>
				<div className="card-body">
					<h2 className="card-title text-white">{data.lawyers}</h2>
				</div>
			</div>

			<div className="card text-white bg-info mb-3" style={{ width: 300, height: 100 }}>
				<div className="card-header">Total Categories</div>
				<div className="card-body">
					<h2 className="card-title text-white">{data.categories}</h2>
				</div>
			</div>
		</div>
	);
}
