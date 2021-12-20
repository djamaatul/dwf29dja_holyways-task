import React, { useState } from 'react';
import { Card, Row, Col, Alert } from 'react-bootstrap';

function History(props) {
	return (
		<Card className='mt-4' style={{ width: '25rem' }}>
			<Row>
				<Col className='mx-0' xs={8}>
					<Card.Body>
						<Card.Title className='fs-4'>{props.donateTo}</Card.Title>
						<Card.Text className='fs-8'>
							<span>
								<b>Monday</b>, 02 mei 2001
							</span>
						</Card.Text>
						<Card.Text className='fs-8 text-primary'>Total : Rp. 20.0000</Card.Text>
					</Card.Body>
				</Col>
				{props.viewStatus && (
					<Col className='d-flex align-items-end mt-5 pe-5 justify-content-end' xs='4'>
						{props.success ? (
							<Alert className='alert-success p-2 h-1' variant='success'>
								Success
							</Alert>
						) : (
							<Alert className='alert-success p-2 h-1' variant='danger'>
								Failed
							</Alert>
						)}
					</Col>
				)}
			</Row>
		</Card>
	);
}

export default History;
