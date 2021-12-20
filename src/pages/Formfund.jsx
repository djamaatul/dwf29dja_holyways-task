import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";

function Formfund() {
	return (
		<Container>
			<Row>
				<Col xs={12} className="my-5">
					<h1>Make Raise Fund</h1>
					<Form action="">
						<Form.Group className="my-4" controlId="formBasicEmail">
							<Form.Control className="bg-secondary" type="text" placeholder="Title" />
						</Form.Group>
						<Form.Group className="my-4" controlId="formBasicPassword">
							<Button>Attach thumbnail</Button>
						</Form.Group>
						<Form.Group className="my-4" controlId="formBasicPassword">
							<Form.Control className="bg-secondary" type="text" placeholder="Goals Donation" />
						</Form.Group>
						<Form.Group className="my-4" controlId="formBasicPassword">
							<Form.Control className="bg-secondary" as="textarea" placeholder="Description" rows={3} />
						</Form.Group>
						<Form.Group className="my-4 d-flex justify-content-end" controlId="formBasicPassword">
							<Button className="px-5">Public Fundraising</Button>
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Formfund;
