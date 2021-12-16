import React from 'react'
import {Card,Button,Col,Row,ProgressBar} from 'react-bootstrap'

function Cards(props) {
	return (
				<Card style={{ width:330 }}>
					<Card.Img variant="top" src={props.src} />
					<Card.Body>
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>
							{props.p}
						</Card.Text>
							<ProgressBar style={{height:5,marginBottom:20}} variant='primary' now={60} />
						<Row>
							<Col xs="8">
								<span>Rp.2500.000</span>
							</Col>
							<Col xs="4">
								<Button variant="primary">Donate</Button>
							</Col>
						</Row>
					</Card.Body>
				</Card>
	)
}

export default Cards
