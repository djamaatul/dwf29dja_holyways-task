import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import struk from '../assets/struk.jpg';

function ModalApprove(props) {
	return (
		<Modal onHide={props.hide} show={props.show}>
			<Modal.Body>
				<h5>Zain</h5>
				<Form>
					<Form.Group className='my-4 mt-0' controlId='formBasicEmail'>
						<Form.Control type='email' placeholder='Nominal Donation' />
					</Form.Group>
					<Form.Group className='my-4 mt-0' controlId='formBasicEmail'>
						<img src={struk} width={260} alt='' />
					</Form.Group>
					<div className='d-grid gap-2'>
						<Button className='full' variant='primary' type='submit'>
							Donate
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default ModalApprove;
