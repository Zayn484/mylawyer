import React, { Component } from 'react';
import axios from '../../axios.config';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';

export default class CategoryAdd extends Component {
	state = {
		typeName: '',
		errors: {}
	};

	inputChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submit = (e) => {
		e.preventDefault();

		axios
			.post(`/home/add_new_category`, { ...this.state })
			.then((res) => {
				toast.success('Record added successfully.', {
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
								<i className="fa fa-align-justify" /> Add
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
