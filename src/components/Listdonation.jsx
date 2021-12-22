import React, { useContext } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

import { showContext } from '../contexts/ShowProvider';
import ModalApprove from './ModalApprove';

function List(props) {
	const { showmodalaprove, toggleModalApprove } = useContext(showContext);
	return (
		<>
			<Card className='m-3'>
				<Row>
					<ModalApprove show={showmodalaprove} hide={toggleModalApprove} />
					<Col xs='8'>
						<Card.Body>
							<Card.Title className='fs-4'>{props.name}</Card.Title>
							<Card.Text className='fs-8'>
								<span>
									<b>{props.date.day}</b>, {props.date.date}
								</span>
							</Card.Text>
							<Card.Text className='fs-8 text-primary'>Total : Rp. {props.total}</Card.Text>
						</Card.Body>
					</Col>
					{props.view && (
						<Col className='d-flex pe-5 align-self-center justify-content-end' xs='4'>
							<Button onClick={toggleModalApprove} className='primary px-5'>
								View
							</Button>
						</Col>
					)}
				</Row>
			</Card>
		</>
	);
}

export default List;
