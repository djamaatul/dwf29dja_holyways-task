import React, { useContext } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './styles.css';

import Cards from '../components/Cards';
import ModalComponent from '../components/ModalComponent';
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
	const { showModal, toggleModal, showIn, toggleIn } = useContext(showContext);
	return (
		<Container fluid='xxl'>
			<Row className='bg-primary text-secondary'>
				<ModalComponent show={showModal} hide={toggleModal} />
				<Login show={showIn} hide={toggleIn} />
				<Col className='my-3  p-md-5 landing-img my-sm-5' md={6} sm={12}>
					<h1>While you are still standing, try to reach out to the people who are falling.</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis odit ea blanditiis nulla
						quisquam amet accusantium repudiandae natus laudantium sint corrupti, quidem animi eius tempora
						hic delectus sequi doloremque assumenda!
					</p>
					<Button onClick={isLogin ? toggleModal : toggleIn} className='btn-secondary text-primary'>
						Donate Now
					</Button>
				</Col>
				<Col md={6} sm={12} className='pb-sm-5 position-relative  d-sm-flex justify-content-center'>
					<img id='landing1' src={landing1} alt='gambar' />
				</Col>
			</Row>
			<Row className='bg-secondary my-4'>
				<Col className='order-md-2' md={7} sm={12}>
					<h1>Your donation is very helpful for people affected by forest fires in Kalimantan.</h1>
					<Row>
						<Col sm={12} md={6}>
							<p className='lh-lg'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis odit ea blanditiis
								nulla quisquam amet accusantium repudiandae natus laudantium sint corrupti, quidem animi
								eius tempora hic delectus sequi doloremque assumenda!
							</p>
						</Col>
						<Col sm={12} md={6}>
							<p className='lh-lg'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis odit ea blanditiis
								nulla quisquam amet accusantium repudiandae natus laudantium sint corrupti, quidem animi
								eius tempora hic delectus sequi doloremque assumenda!
							</p>
						</Col>
					</Row>
				</Col>
				<Col className='order-md-1 position-relative d-sm-flex justify-content-center' md={3} sm={12}>
					<img id='landing2' src={landing2} alt='gambar' />
				</Col>
			</Row>
			<Row>
				<Col className='d-md-flex justify-content-center' md={12}>
					<Button onClick={isLogin ? toggleModal : toggleIn} className='btn-secondary text-primary'>
						<h3>Donate Now</h3>
					</Button>
				</Col>
			</Row>
			<Row className='d-flex my-5 pt-md-5 justify-content-center'>
				<Col className='d-flex justify-content-md-end justify-content-center  ' md={4} sm={6} xs={12}>
					<Cards
						id={1}
						className='mx-md-2'
						title='siap'
						p='lorem ipsum'
						total='500000'
						target='1000000'
						src={pic1}
					/>
				</Col>
				<Col className='d-flex justify-content-center' md={4} sm={6} xs={12}>
					<Cards
						id={3}
						className='mx-md-2'
						title='siap'
						p='lorem ipsum'
						total='100000'
						target='1000000'
						src={pic2}
					/>
				</Col>
				<Col className='d-flex justify-content-md-start justify-content-center' md={4} sm={6} xs={12}>
					<Cards
						id={4}
						className='mx-md-2'
						title='siap'
						p='lorem ipsum'
						total='800000'
						target='1000000'
						src={pic3}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Dashboard;
