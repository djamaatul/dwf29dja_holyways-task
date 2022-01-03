import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './styles.css';

import Cards from '../components/Cards';

import { API } from '../config/api';

function Dashboard() {
	const [funds, setFunds] = useState([]);

	async function landingFund() {
		try {
			const response = await API.get('/funds');
			setFunds(response.data.data);
		} catch (error) {
			throw error;
		}
	}
	useEffect(() => {
		landingFund();
	}, []);
	return (
		<>
			<Container fluid='xxl' className='pb-5'>
				<Row className='bg-primary text-secondary mb-5'>
					<Col className='ms-md-5 ps-md-5 landing-img my-sm-5 pb-5 pt-0 order-2' md={7} sm={12}>
						<h1 className='ps-md-5 fw-bold display-5'>{funds[0]?.title}</h1>
						<p style={{ maxWidth: '75%' }} className='ps-md-5'>
							{funds[0]?.description}
						</p>
						<Link to={`detaildonate/${funds[0]?.id}`}>
							<Button
								className='btn-secondary fw-bold text-primary ms-md-5 mt-md-4 px-5 mb-md-5'
								style={{ borderRadius: 10 }}
							>
								Donate Now
							</Button>
						</Link>
					</Col>
					<Col md={12} sm={12} className='position-relative d-sm-flex justify-content-center order-1'>
						<img id='landing1' src={funds[0]?.thumbnail} alt=' ' />
					</Col>
				</Row>
				<Row>
					<Col className='position-relative d-sm-flex justify-content-center' md={12} sm={12}>
						<img id='landing2' src={funds[1]?.thumbnail} alt=' ' />
					</Col>
				</Row>
				<Row className='bg-secondary mt-5 ps-md-5 pt-md-5 '>
					<Col className='order-md-2 offset-md-4' md={6} sm={12}>
						<h1 className='display-5 fw-bold'>{funds[1]?.title}</h1>
						<Row style={{ color: 'gray', height: '200px' }}>
							<Col md={6} sm={12}>
								<p className='lh-lg'>{funds[1]?.description}</p>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col className='d-md-flex justify-content-center mt-md-4 pt-md-5' md={12}>
						<Link to={`detaildonate/${funds[1]?.id}`}>
							<Button className='btn-secondary text-primary'>
								<h3 className='fw-bold fs-2'>Donate Now</h3>
							</Button>
						</Link>
					</Col>
				</Row>
				<Row className='d-flex justify-content-center'>
					{funds.map((item) => {
						return (
							<Col
								className='d-flex justify-content-md-end justify-content-center'
								md={3}
								sm={6}
								xs={12}
								key={item.id}
							>
								<Cards
									id={item.id}
									className='mx-md-2'
									title={item.title}
									description={item.description}
									collected={item.collected}
									goal={item.goal}
									src={item.thumbnail}
									donate={true}
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
}

export default Dashboard;
