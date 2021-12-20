import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import pic3 from "../assets/card1.svg";

import { loginContext } from "../contexts/LoginProvider";

function Raisefund() {
	const { userData, isLogin } = useContext(loginContext);
	if (!isLogin) {
		return <Navigate to="/" />;
	} else {
		return (
			<Container fluid="md" className="mt-2 mt-md-5">
				<Row>
					<Col md={6} className="order-2 order-md-1">
						<Row>
							<Col md={12}>
								<h1>My Raise Fund</h1>
							</Col>
						</Row>
					</Col>
					<Col md={6} className="d-flex justify-content-md-end order-1 my-3">
						<Link to="/makefund">
							<Button>Raise Make fund</Button>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={6} md={4}>
						<Cards id={4} title="siap" p="lorem ipsum" total="100000" target="1000000" src={pic3} />
					</Col>
					<Col xs={12} sm={6} md={4}>
						<Cards id={4} title="siap" p="lorem ipsum" total="500000" target="1000000" src={pic3} />
					</Col>
					<Col xs={12} sm={6} md={4}>
						<Cards id={4} title="siap" p="lorem ipsum" total="0" target="1000000" src={pic3} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Raisefund;