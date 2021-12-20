import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import data from "../data/users";
import { showContext } from "../contexts/ShowProvider";
import Login from "./Login";

function Register(props) {
	const { showIn, toggleIn, toggleReg } = useContext(showContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		data.push({
			name,
			email,
			password,
		});
		props.hide();
	};
	return (
		<Modal aria-labelledby="contained-modal-title-vcenter" onHide={props.hide} show={props.show}>
			<Login show={showIn} hide={toggleIn} />
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<h1>Register</h1>
					<Form.Group className="my-4" controlId="formBasicEmail">
						<Form.Control
							type="email"
							placeholder="Enter email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="my-4" controlId="formBasicPassword">
						<Form.Control
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="my-4" controlId="formBasicPassword">
						<Form.Control type="text" placeholder="Full name" onChange={(e) => setName(e.target.value)} />
					</Form.Group>
					<div className="d-grid gap-2">
						<Button className="full" variant="primary" type="submit">
							Register
						</Button>

						<Form.Text className="text-center">
							Already have an account ? Klik{" "}
							<Link
								onClick={() => {
									toggleReg();
									toggleIn();
								}}
								className="text-black text-decoration-none"
								to="/"
							>
								Here
							</Link>
						</Form.Text>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default Register;
