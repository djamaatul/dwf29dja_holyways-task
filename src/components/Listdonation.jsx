import React, { useContext } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

import { showContext } from '../contexts/ShowProvider';
import ModalApprove from './modal/ModalApprove';

import toRupiah from './toRupiah';

function List(props) {
	const [show, setShow] = useContext(showContext);
	return (
		<>
			<Card className='m-3'>
				<Row>
					<Col xs='8'>
						<Card.Body>
							<Card.Title className='fs-4'>{props.name}</Card.Title>
							<Card.Text className='fs-8'>
								<span>
									<b>{props.date.day}</b>, {props.date.date}
								</span>
							</Card.Text>
							<Card.Text className='fs-8 text-primary'>Total : {toRupiah(props.donateAmount)}</Card.Text>
						</Card.Body>
					</Col>
					{props.view && (
						<Col className='d-flex pe-5 align-self-center justify-content-end' xs='4'>
							<Button onClick={() => setShow('approve')} className='primary px-5'>
								View
							</Button>
						</Col>
					)}
					<ModalApprove
						name={props.name}
						donateAmount={props.donateAmount}
						proofattachment={props.proofattachment}
						id={props.id}
						idFund={props.idFund}
						show={show.approvemodal}
						hide={() => setShow('approve')}
					/>
				</Row>
			</Card>
		</>
	);
}

export default List;
