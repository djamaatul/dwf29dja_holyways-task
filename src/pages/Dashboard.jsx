import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './styles.css';

import Cards from '../components/Cards';
import Login from '../components/Login';

import landing1 from '../assets/landing1.svg';
import landing2 from '../assets/landing2.svg';
import pic1 from '../assets/card1.svg';
import pic2 from '../assets/card2.svg';
import pic3 from '../assets/card3.svg';

import { showContext } from '../contexts/ShowProvider';
import { loginContext } from '../contexts/LoginProvider';

function Dashboard() {
	const { isLogin } = useContext(loginContext);
	const { showIn, toggleIn } = useContext(showContext);

	const navigate = useNavigate();

	const handleDonate = () => {
		navigate('detaildonate');
	};

	return (
		<Container fluid='xxl' className='pb-5'>
			<Row className='bg-primary text-secondary mb-5'>
				<Login show={showIn} hide={toggleIn} />
				<Col className='ms-md-5 ps-md-5 landing-img my-sm-5 pb-5 pt-0 order-2' md={7} sm={12}>
					<h1 className='ps-md-5 fw-bold display-5'>
						While you are still standing, try to reach out to the people who are falling.
					</h1>
					<p style={{ maxWidth: '75%' }} className='ps-md-5'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.
					</p>
					<Button
						onClick={isLogin ? handleDonate : toggleIn}
						className='btn-secondary fw-bold text-primary ms-md-5 mt-md-4 px-5 mb-md-5'
						style={{ borderRadius: 10 }}
					>
						Donate Now
					</Button>
				</Col>
				<Col md={12} sm={12} className='position-relative d-sm-flex justify-content-center order-1'>
					<img id='landing1' src={landing1} alt='gambar' />
				</Col>
			</Row>
			<Row>
				<Col className='position-relative d-sm-flex justify-content-center' md={12} sm={12}>
					<img id='landing2' src={landing2} alt='gambar' />
				</Col>
			</Row>
			<Row className='bg-secondary mt-5 ps-md-5 pt-md-4 '>
				<Col className='order-md-2 offset-md-4' md={6} sm={12}>
					<h1 className='display-5 fw-bold'>
						Your donation is very helpful for people affected by forest fires in Kalimantan.
					</h1>
					<Row style={{ color: 'gray' }}>
						<Col md={6} sm={12}>
							<p className='lh-lg'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standps-md-5ard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</Col>
						<Col sm={12} md={6}>
							<p className='lh-lg'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s.
							</p>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col className='d-md-flex justify-content-center mt-md-4 pt-md-5' md={12}>
					<Button onClick={isLogin ? handleDonate : toggleIn} className='btn-secondary text-primary'>
						<h3 className='fw-bold fs-2'>Donate Now</h3>
					</Button>
				</Col>
			</Row>
			<Row className='d-flex justify-content-center'>
				<Col className='d-flex justify-content-md-end justify-content-center' md={3} sm={6} xs={12}>
					<Cards
						id={1}
						className='mx-md-2'
						title='The Strength of a People.
						Power of Community'
						p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
						total='500000'
						target='1000000'
						src={pic1}
						donate={1}
					/>
				</Col>
				<Col className='d-flex justify-content-center' md={3} sm={6} xs={12}>
					<Cards
						id={3}
						className='mx-md-2'
						title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
						p='lorem ipsum'
						total='100000'
						target='1000000'
						src={pic2}
						donate={2}
					/>
				</Col>
				<Col className='d-flex justify-content-md-start justify-content-center' md={3} sm={6} xs={12}>
					<Cards
						id={4}
						className='mx-md-2'
						title='Please our brothers in flores'
						p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
						total='800000'
						target='1000000'
						src={pic3}
						donate={3}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Dashboard;
