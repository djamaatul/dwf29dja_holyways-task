import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';

import { loginContext } from '../contexts/LoginProvider';
import { API } from '../config/api';

function Raisefund() {
	const [state] = useContext(loginContext);
	const [myfunds, setMyFunds] = useState([]);
	async function userFunds() {
		try {
			const response = await API.get('/fundsUser');
			setMyFunds(response.data.data);
		} catch (error) {
			throw error;
		}
	}
	useEffect(() => {
		userFunds();
	});
	if (!state.isLogin) {
		return <Navigate to='/' />;
	} else {
		return (
			<Container fluid='md' className='mt-2 mt-md-5'>
				<Row>
					<Col md={6} className='order-2 order-md-1'>
						<Row>
							<Col md={12}>
								<h1>My Raise Fund</h1>
							</Col>
						</Row>
					</Col>
					<Col md={6} className='d-flex justify-content-md-end order-1 my-3'>
						<Link to='/makefund'>
							<Button>Make Raise Fund</Button>
						</Link>
					</Col>
				</Row>
				<Row>
					{myfunds.map((item, index) => {
						return (
							<Col xs={12} sm={6} md={4} key={index}>
								<Cards
									id={item.id}
									title={item.title}
									p={item.description}
									collected={item.collected}
									goal={item.goal}
									src={item.thumbnail}
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}

export default Raisefund;
