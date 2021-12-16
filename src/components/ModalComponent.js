import React from 'react'
import {Modal,Button,Form,Col,Row} from 'react-bootstrap'
import {BrowserRouter as Router,Link } from 'react-router-dom'
import struk from '../assets/icon/struk.svg'


function ModalComponent() {
	return (
		<Router>
		<Modal style={{width : '540px'}}>
			<Modal.Body>
				<Form action='#'>
				<Form.Group className="my-4 mt-0" controlId="formBasicEmail">
					<Form.Control type="email" placeholder="Nominal Donation" />
				</Form.Group>
				<Row className='my-4'>
					<Col xs="5">
					<Button className='full mt-2' variant='primary' type="submit">
						Attach Payment
						<img className='ms-3'  src={struk} alt="" />
					</Button>
					</Col>
					<Col xs="7" className='p-0 pt-2'>
						<Form.Text className="my-0">
							*transfers can be made to holyways accounts
						</Form.Text>
					</Col>
				</Row>
				<div className="d-grid gap-2">
					<Button className='full' variant='primary' type="submit">
						Login
					</Button>
				</div>
				</Form>
			</Modal.Body>
		</Modal >
	</Router>
	)
}

export default ModalComponent
