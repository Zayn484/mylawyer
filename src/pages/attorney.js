import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from '../axios.config';

export default function Attorney() {
	const location = useLocation();

	const [ list, setList ] = React.useState([]);

	React.useEffect(() => {
		const { category, city, lat, lng } = queryString.parse(location.search);
		let url = '';

		if (lat && lng) {
			url = `/home/list_of_layer?category=${category}&city=${city}&lat=${lat}&lng=${lng}`;
		} else {
			url = `/home/list_of_layer?category=${category}&city=${city}`
		}


		axios
			.get(url)
			.then((res) => {
				setList(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<div className="pageTitle">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<h1 className="page-heading">Our Expert Attorneys</h1>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="breadCrumb">
								<a href="#.">Home</a> / <span>Attorneys</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="parallax-section">
				<div className="container">
					<div className="row">
						{list.map((l) => (
							<Link
								to={{
									pathname: `/attorney/${l._id}`,
									state: {
										data: l
									}
								}}
								key={l._id}
							>
								<div className="col-md-3 col-sm-6">
									<div className="team-thumb">
										<div className="thumb-image">
											<img src={l.profileImage} className="animate" alt="" />
										</div>
										<h4 className="text-uppercase">{l.name}</h4>
										<h5 className="text-capitalize">{l.type}</h5>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
