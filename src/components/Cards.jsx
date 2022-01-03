import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Col, Row, ProgressBar } from 'react-bootstrap';

import toRupiah from './toRupiah';
function Cards(props) {
	const navigate = useNavigate();
	const [persen, setPersen] = useState(0);
	useEffect(() => {
		setPersen(Math.ceil((props.collected / props.goal) * 100));
	}, []);

	const handleButton = (to) => {
		navigate(`/${to}/${props.id}`);
	};
	return (
		<>
			<Card
				style={{ minHeight: 525, minWidth: '20rem' }}
				className='mx-sm-0 my-sm-4 mt-4 d-flex justify-content-between'
			>
				<div
					style={{
						backgroundImage: `url("${props.src}")`,
						width: '100%',
						height: '250px',
						backgroundSize: 'cover',
					}}
				></div>
				<Card.Body>
					<Card.Title className='text-black fw-bold'>{props.title}</Card.Title>
					<Card.Text>{props.description.substring(0, 100)}</Card.Text>
					<ProgressBar style={{ height: 5 }} variant='primary' now={persen} />
				</Card.Body>
				<Card.Footer style={{ backgroundColor: 'white', borderTop: 0 }}>
					<Row>
						<Col xs={8} sm={8} md={7} className='pe-sm-0'>
							<span>{toRupiah(props.collected)}</span>
						</Col>
						<Col xs={4} sm={2} md={5} className='ps-sm-0 d-flex justify-content-md-end align-end'>
							<Button
								style={{ borderRadius: 10 }}
								variant='primary'
								onClick={() =>
									props.donate ? handleButton('detaildonate') : handleButton('detailfund')
								}
							>
								{props.donate ? 'Donate' : 'View Fund'}
							</Button>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
}

export default Cards;
