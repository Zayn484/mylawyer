import React, { Component } from 'react';
import axios from '../../axios.config';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';

export default class CategoryEdit extends Component {
	state = {
		typeName: '',
		errors: {}
	};

	componentDidMount() {
		this.setState({ typeName: this.props.location.state.typeName });
	}

	inputChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submit = (e) => {
		e.preventDefault();

		axios
			.put(`/home/updateType`, { ...this.state, typeId: this.props.location.state._id })
			.then((res) => {
				toast.success('Record updated successfully.', {
					position: toast.POSITION.TOP_RIGHT
				});
				this.props.history.goBack();
			})
			.catch((err) => {
				toast.error('Something went wrong.');
			});
	};

	render() {
		const { errors } = this.state;

		return (
			<div className="animated fadeIn">
				<Row>
					<Col>
						<Card>
							<CardHeader>
								<i className="fa fa-align-justify" /> Edit
							</CardHeader>
							<CardBody>
								<Form onSubmit={this.submit}>
									<Row form>
										<Col md={12}>
											<FormGroup>
												<Label for="typeName">Typename</Label>
												<Input
													name="typeName"
													placeholder="Typename"
													value={this.state.typeName}
													onChange={this.inputChangeHandler}
													required={true}
													error={errors && errors.typeName}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Button type="submit">Submit</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
