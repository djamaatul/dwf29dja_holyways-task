import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

	const navigate = useNavigate();
	const handleDonate = () => {
		navigate('detaildonate');
	};
	const handleDetail = () => {
		navigate(`/detailfund/${props.id}`);
	};
	return (
		<>
			<ModalComponent show={showModal} hide={toggleModal} />
			<Card className='mx-sm-0 my-sm-4 mt-4 d-flex justify-content-between'>
				<Card.Img variant='top' src={props.src} />
				<Card.Body>
					<Card.Title className='text-black fw-bold'>{props.title}</Card.Title>
					<Card.Text>{props.p}</Card.Text>
					<ProgressBar style={{ height: 5, marginBottom: 20 }} variant='primary' now={persen} />
				</Card.Body>
				<Card.Footer style={{ backgroundColor: 'white', borderTop: 0 }}>
					<Row>
						<Col xs={8} sm={8} md={7} className='pe-sm-0'>
							<span>Rp. {props.total}</span>
						</Col>
						<Col xs={4} sm={2} md={5} className='ps-sm-0 d-flex justify-content-md-end align-end'>
							{props.donate ? (
								<Button
									style={{ borderRadius: 10 }}
									variant='primary'
									onClick={isLogin ? handleDonate : toggleIn}
								>
									Donate
								</Button>
							) : (
								<Button
									style={{ borderRadius: 10 }}
									variant='primary'
									onClick={isLogin ? handleDetail : toggleIn}
								>
									View Donate
								</Button>
							)}
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
}

export default Cards;
