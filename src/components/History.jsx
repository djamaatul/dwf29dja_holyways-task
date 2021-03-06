import React from 'react';
import { Card, Row, Col, Alert } from 'react-bootstrap';

import { weekday, months } from '../data/date';

import toRupiah from './toRupiah';

function History(props) {
	const date = new Date(props.updatedAt);
	return (
		<Card className='mt-4'>
			<Row>
				<Col className='mx-0' xs={12}>
					<Card.Body>
						<Row>
							<span className='fw-bold' style={{ fontSize: '1.2em' }}>
								{props.fund}
							</span>
							<Col xs={12}>
								<Card.Text className='' style={{ fontSize: '0.8em' }}>
									<span>
										<b>{weekday[date.getDay()]}, </b>
										{`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
									</span>
								</Card.Text>
							</Col>
							<Col xs={12}>
								<Row>
									<Col xs={12} md={6}>
										<Card.Text className='fs-8 text-primary my-1'>
											Total : {toRupiah(props.donateAmount)}
										</Card.Text>
									</Col>
									<Col xs={12} md={6} className='d-flex justify-content-end align-items-end'>
										{props.viewStatus && (
											<Alert
												className='alert-success p-2 py-0 my-1  px-5'
												style={{ maxHeight: 30 }}
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
									</Col>
								</Row>
							</Col>
							{props.viewStatus && props.status !== 'success' && (
								<Col xs={12}>
									<Alert variant='warning' className='w-100 my-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											class='bi bi-info-circle'
											viewBox='0 0 16 16'
										>
											<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
											<path d='m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
										</svg>
										{' ' + props.message}
									</Alert>
								</Col>
							)}
						</Row>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
}

export default History;
