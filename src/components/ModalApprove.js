import React from 'react'
import {Modal,Button,Form,Col,Row} from 'react-bootstrap'
import {BrowserRouter as Router,Link } from 'react-router-dom'
import struk from '../assets/struk.jpg'


function ModalComponent() {
	return (
		<Router>
		<Modal.Dialog style={{width : '300px'}}>
			<Modal.Body>
				<h5>Zain</h5>
				<Form action='#'>
				<Form.Group className="my-4 mt-0" controlId="formBasicEmail">
					<Form.Control type="email" placeholder="Nominal Donation" />
				</Form.Group>
				<Form.Group className="my-4 mt-0" controlId="formBasicEmail">
					<img src={struk} width={260} alt="" />
				</Form.Group>
					<div className="d-grid gap-2">
						<Button className='full' variant='primary' type="submit">
							Login
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal.Dialog >
	</Router>
	)
}

export default ModalComponent
