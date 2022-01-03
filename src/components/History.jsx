import React from 'react';
import { Card, Row, Col, Alert } from 'react-bootstrap';

import { weekday, months } from '../data/date';

import Rupiah from './toRupiah';

function History(props) {
	const date = new Date(props.updatedAt);
	return (
		<Card className='mt-4' style={{ width: '25rem' }}>
			<Row>
				<Col className='mx-0' xs={8}>
					<Card.Body>
						<Card.Title className='fs-4'>{props.donateTo}</Card.Title>
						<Card.Text className='fs-8'>
							<span>
								<b>{weekday[date.getDay()]}, </b>
								{`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
							</span>
						</Card.Text>
						<Card.Text className='fs-8 text-primary'>Total : {Rupiah(props.donateAmount)}</Card.Text>
					</Card.Body>
				</Col>
				{props.viewStatus && (
					<Col className='d-flex align-items-end pe-4 justify-content-end' xs='4'>
						<Alert
							className='alert-success p-2 py-0  px-5'
							variant={
								props.status == 'success' ? 'success' : props.status == 'pending' ? 'warning' : 'danger'
							}
						>
							{props.status}
						</Alert>
					</Col>
				)}
			</Row>
		</Card>
	);
}

export default History;
