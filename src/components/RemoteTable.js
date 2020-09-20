import React, { useState } from 'react';
import axios from '../axios.config';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';

const RemoteTable = ({ title, columns, data, url, fetchData, actions, addNew }) => {
	const location = useLocation();
	const history = useHistory();

	const [ modal, setModal ] = useState(false);

	const deleteHandler = (id, index) => {
		axios.delete(`/home/delete_Type?id=${id}`).then((res) => {
			fetchData();
		});
	};

	const actionButtons = (el, index) => {
		return (
			<td>
				{actions.includes('status') && (
					<select
						defaultValue={el.status}
						onChange={(e) => {
							axios
								.put(`/home/update_booking`, { status: e.target.value, bookingId: el._id })
								.then((res) => {
									fetchData();
								});
						}}
					>
						<option value="pending">Pending</option>
						<option value="accept">Accept</option>
						<option value="decline">Decline</option>
					</select>
				)}
				{actions.includes('view') && (
					<button
						color="secondary"
						className="m-1 bg-transparent text-primary action-btn"
						onClick={() => {
							localStorage.setItem('url', url);
							history.push(`${location.pathname}/${el._id}`);
						}}
					>
						<i className="fa fa-eye" />
					</button>
				)}
				{actions.includes('edit') && (
					<button
						color="secondary"
						className="m-1 bg-transparent text-success action-btn"
						onClick={() =>
							history.push({
								pathname: `${location.pathname}/edit`,
								state: {
									...el
								}
							})}
					>
						<i className="fa fa-edit" />
					</button>
				)}
				{actions.includes('delete') && (
					<Button
						color="secondary"
						className="m-1 bg-transparent text-danger action-btn"
						onClick={() => deleteHandler(el._id, index)}
					>
						<i className="fa fa-trash" />
					</Button>
				)}
				{!actions.length && <span>No actions</span>}
			</td>
		);
	};
	const renderRows = () => {
		const rows = [];

		if (!data.length) {
			return (
				<tr>
					<th>No records found</th>
					{Array.from(new Array(columns.length)).map((el, index) => <th key={index} />)}
				</tr>
			);
		}

		for (let col of columns) {
			for (let d of data) {
				if (d.hasOwnProperty(col.field)) {
					rows.push(col.field);
				}
			}
		}

		return data.map((el, index) => (
			<tr key={index}>
				{columns.map((col) => (
					<td key={col.field} className="font-weight-normal">
						{col.badge ? (
							<Badge color="success">{el[col.field]}</Badge>
						) : col.formateDate ? (
							el[col.field].split('T')[0]
						) : (
							el[col.field]
						)}
					</td>
				))}
				{actionButtons(el, index)}
			</tr>
		));
	};

	return (
		<div className="animated fadeIn">
			<Row>
				<Col>
					<Card>
						<CardHeader>
							<i className="fa fa-align-justify" /> {title}
						</CardHeader>
						<CardBody>
							<div className="d-flex justify-content-between mb-3">
								<div>
									{addNew && (
										<Link to={`${location.pathname}/add`}>
											<Button>
												<i className="fa fa-plus" /> Add
											</Button>
										</Link>
									)}
								</div>
							</div>
							<Table responsive striped>
								<thead>
									<tr className="text-capitalize">
										{columns.map((col) => <th key={col.field}>{col.name}</th>)}
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>{renderRows()}</tbody>
							</Table>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

RemoteTable.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array,
	columns: PropTypes.array.isRequired,
	url: PropTypes.string,
	fetchData: PropTypes.func.isRequired,
	actions: PropTypes.array.isRequired,
	addNew: PropTypes.bool.isRequired
};

export default RemoteTable;
