import React from 'react';
import { Container, Row, Col, Alert, ListGroup, ListGroupItem, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function account() {
	return (
		<div style={{ height: '60vh', display: 'flex', justifyContent: 'center' }}>
			<Container style={{ marginTop: 70, marginBottom: 40, border: '1px solid #ccc', padding: 50 }}>
				<Row className="my-5">
					<Col md={3}>
						<ListGroup>
							<Link to="/account/visit-requests">
								<a>
									<ListGroupItem>General Information</ListGroupItem>
								</a>
							</Link>
							<Link to="/account">
								<a>
									<ListGroupItem>Education</ListGroupItem>
								</a>
							</Link>
							<Link to="/account/change-password">
								<a>
									<ListGroupItem>Social Media</ListGroupItem>
								</a>
							</Link>
							<Link to="/account/visit-requests">
								<a>
									<ListGroupItem>Type</ListGroupItem>
								</a>
							</Link>
							<Link to="/account/visit-requests">
								<a>
									<ListGroupItem>Availability Schedule</ListGroupItem>
								</a>
							</Link>
						</ListGroup>
					</Col>
					<Col md={7} className="bg-light border p-3">
						<div>
							<h4>General Information</h4>
							<br />

							<Input placeholder="First Name" style={{ marginBottom: 20 }} />
							<Input placeholder="Last Name" style={{ marginBottom: 20 }} />
							<Input type="email" placeholder="Email" style={{ marginBottom: 20 }} />
							<Button>Save</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
