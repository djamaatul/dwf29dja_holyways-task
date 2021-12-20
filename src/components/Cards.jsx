import React, { useEffect, useState, useContext } from 'react';
import { Card, Button, Col, Row, ProgressBar } from 'react-bootstrap';

import { showContext } from '../contexts/ShowProvider';
import { loginContext } from '../contexts/LoginProvider';

import ModalComponent from './ModalComponent';

function Cards(props) {
	const { showModal, toggleModal, toggleIn } = useContext(showContext);
	const { isLogin } = useContext(loginContext);
	const [persen, setPersen] = useState(0);
	useEffect(() => {
		setPersen(Math.round((props.total / props.target) * 100));
	}, []);
	return (
		<>
			<ModalComponent show={showModal} hide={toggleModal} />
			<Card className='mx-sm-0 my-sm-4 mt-4'>
				<Card.Img variant='top' src={props.src} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.p}</Card.Text>
					<ProgressBar style={{ height: 5, marginBottom: 20 }} variant='primary' now={persen} />
					<Row>
						<Col xs='8' sm={6} md={8} className='pe-sm-0'>
							<span>Rp. {props.total}</span>
						</Col>
						<Col xs='4' sm={6} md={4} className='ps-sm-0'>
							<Button onClick={isLogin ? toggleModal : toggleIn} variant='primary'>
								Donate
							</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
}

export default Cards;
