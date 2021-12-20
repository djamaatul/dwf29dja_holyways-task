import React, { useContext } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

import ModalApprove from './ModalApprove';

import struk from '../assets/icon/struk.svg';
import { showContext } from '../contexts/ShowProvider';

function ModalComponent(props) {
	const { showmodalaprove, toggleModalApprove } = useContext(showContext);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Modal onHide={props.hide} show={props.show}>
			<ModalApprove show={showmodalaprove} hide={toggleModalApprove} />
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='my-4 mt-0' controlId='formBasicEmail'>
						<Form.Control type='email' placeholder='Nominal Donation' />
					</Form.Group>
					<Row className='my-4'>
						<Col xs='5'>
							<Button className='full mt-2' variant='primary' type='submit'>
								Attach Payment
								<img className='ms-3' src={struk} alt='' />
							</Button>
						</Col>
						<Col xs='7' className='p-0 pt-2'>
							<Form.Text className='my-0'>*transfers can be made to holyways accounts</Form.Text>
						</Col>
					</Row>
					<div className='d-grid gap-2'>
						<Button
							onClick={toggleModalApprove}
							showModalApprove
							className='full'
							variant='primary'
							type='submit'
						>
							Donate
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default ModalComponent;