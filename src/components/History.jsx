import React from 'react';
import { Card, Row, Col, Alert } from 'react-bootstrap';

import { weekday, months } from '../data/date';

import toRupiah from './toRupiah';

function History(props) {
	const date = new Date(props.updatedAt);
	return (
		<Card className='mt-4' style={{ width: '25rem' }}>
			<Row>
				<Col className='mx-0' xs={12}>
					<Card.Body>
						<span className='fw-bold' style={{ fontSize: '1em' }}>
							{props.fund}
						</span>
						<Card.Title className='fs-4'>{props.donateTo}</Card.Title>
						<Card.Text className='' style={{ fontSize: '0.8em' }}>
							<span>
								<b>{weekday[date.getDay()]}, </b>
								{`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
							</span>
						</Card.Text>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<Card.Text className='fs-8 text-primary my-1'>
								Total : {toRupiah(props.donateAmount)}
							</Card.Text>
							{props.viewStatus && (
								<Alert
									className='alert-success p-2 py-0 my-1  px-5'
									variant={
										props.status == 'success'
											? 'success'
											: props.status == 'pending'
											? 'warning'
											: 'danger'
									}
								>
									{props.status}
								</Alert>
							)}
						</div>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
}

export default History;
