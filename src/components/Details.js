import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Container } from 'reactstrap';
import axios from '../../axios.config';

export default function Details() {
	const { params } = useRouteMatch();
	const url = localStorage.getItem('url');

	const [ data, setData ] = React.useState({});

	React.useEffect(() => {
		axios
			.get(`${url}/${params.id}`)
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<Card>
						<CardHeader>
							<i className="fa fa-eye" />
						</CardHeader>
						<CardBody>
							<Row>
								{Object.keys(data).map((field, index) => (
									<Col md={6} key={index} className="p-2 border">
										<label className="text-capitalize">{field}</label>: {data[field]}
									</Col>
								))}
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
