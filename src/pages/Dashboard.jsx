import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Container, Placeholder } from 'react-bootstrap';
import './styles.css';

import Cards from '../components/Cards';
import { loadingContext } from '../contexts/LoadingProvider';

import { API } from '../config/api';

function Dashboard() {
	document.title = 'Dashboard - HolyWays';

	const [funds, setFunds] = useState([]);
	const [loading, setLoading] = useState(true);
	const { setProgress } = useContext(loadingContext);

	async function landingFund() {
		try {
			const response = await API.get('/funds');
			setFunds(response.data.data);
			setProgress(100);
			setTimeout(() => {
				setLoading(false);
			}, 500);
			setTimeout(() => {
				setProgress(101);
			}, 1000);
		} catch (error) {
			setProgress(40);
			throw error;
		}
	}
	useEffect(() => {
		setProgress(20);
		landingFund();
	}, []);
	return (
		<>
			<Container fluid='xxl' className='pb-5'>
				<Row className='bg-primary text-secondary mb-5'>
					<Col className='ms-md-5 ps-md-5 landing-img my-sm-5 pb-5 pt-0 order-2' md={7} sm={12}>
						{!loading ? (
							<>
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
							</>
						) : (
							<>
								<Placeholder animation='wave'>
									<h1 aria-hidden='true'>
										<Placeholder className='ps-md-5 w-100 ' />
									</h1>
									<h1 aria-hidden='true'>
										<Placeholder className='ps-md-5 w-100 ' />
									</h1>
									<h1 aria-hidden='true'>
										<Placeholder className='ps-md-5 w-75 ' />
									</h1>
									<Placeholder md={12} as='p' />
									<Placeholder md={12} as='p' />
									<Placeholder md={12} as='p' />
									<Placeholder md={6} as='p' />
								</Placeholder>
							</>
						)}
					</Col>
					<Col md={12} sm={12} className='position-relative d-sm-flex justify-content-center order-1'>
						{!loading ? (
							<img id='landing1' src={funds[0]?.thumbnail} alt=' ' />
						) : (
							<Placeholder animation='glow'>
								<Placeholder md={4} id='landing1' style={{ height: '40vw' }} />
							</Placeholder>
						)}
					</Col>
				</Row>
				<Row>
					<Col className='position-relative d-sm-flex justify-content-center' md={12} sm={12}>
						{!loading ? (
							<img id='landing2' src={funds[1]?.thumbnail} alt=' ' />
						) : (
							<>
								<Placeholder animation='glow'>
									<Placeholder
										md={4}
										id='landing2'
										style={{ height: '40vw', backgroundColor: 'white' }}
									/>
								</Placeholder>
							</>
						)}
					</Col>
				</Row>
				<Row className='bg-secondary mt-5 ps-md-5 pt-md-5 '>
					<Col className='order-lg-2 offset-lg-4 offset-xs-0' md={6} sm={12}>
						{!loading ? (
							<>
								<h1 className='display-5 fw-bold'>{funds[1]?.title}</h1>
								<Row style={{ color: 'gray' }}>
									<Col md={6} sm={12}>
										<p className='lh-lg'>{funds[1]?.description}</p>
									</Col>
								</Row>
							</>
						) : (
							<Placeholder animation='wave'>
								<h1 aria-hidden='true'>
									<Placeholder className='ps-md-5 w-100 ' />
								</h1>
								<h1 aria-hidden='true'>
									<Placeholder className='ps-md-5 w-75 ' />
								</h1>
								<Placeholder md={12} as='p' />
								<Placeholder md={12} as='p' />
								<Placeholder md={12} as='p' />
								<Placeholder md={6} as='p' />
							</Placeholder>
						)}
					</Col>
				</Row>
				<Row>
					<Col className='d-flex justify-content-left justify-content-md-center  my-2' xs={12}>
						{!loading && (
							<Link to={`detaildonate/${funds[1]?.id}`}>
								<Button className='btn-secondary text-primary'>
									<h3 className='fw-bold fs-2'>Donate Now</h3>
								</Button>
							</Link>
						)}
					</Col>
				</Row>
				<Row className='justify-content-center'>
					{funds.map((item) => {
						return (
							<Col className='' lg={4} md={6} xs={12} key={item.id}>
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
