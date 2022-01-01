import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Col, Row, Alert } from 'react-bootstrap';

import struk from '../../assets/icon/struk.svg';

import { API, configMulter, setAuthToken } from '../../config/api';
import { showContext } from '../../contexts/ShowProvider';

function ModalComponent(props) {
	const [setShow] = useContext(showContext);
	const [message, setMessage] = useState(null);
	const [form, setForm] = useState({
		donateAmount: '',
		proofattachment: '',
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.set('donateAmount', form.donateAmount);
		formData.set('proofattachment', form.proofattachment, form.proofattachment.name);
		setAuthToken(localStorage.token);
		try {
			const response = await API.post(`/donate/${props.id}`, formData, configMulter);
			console.log(response);
			if (response.status == 200) {
				setShow('donate');
			} else {
				return setMessage('File Harus Image');
			}
		} catch (error) {
			console.log(error);
			return setMessage('File Harus Image');
		}
	};
	return (
		<Modal onHide={props.hide} show={props.show}>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className='my-4 mt-0' controlId='formBasicEmail'>
						<Form.Control
							onChange={(e) => setForm({ ...form, donateAmount: e.target.value })}
							type='text'
							placeholder='Nominal Donation'
						/>
					</Form.Group>
					<Row>
						<Col xs='5'>
							<Form.Group controlId='proofattachment' className='mb-3 position-relative'>
								<Button className=' full mt-2top-0 '>
									Attach Payment
									<img className='ms-3' src={struk} alt='' />
								</Button>
								<Form.Control
									name='proofattachment'
									required
									className='position-absolute top-0'
									style={{ opacity: '0%' }}
									type='file'
									onChange={(e) => {
										console.log(e.target.files);
										if (e.target.files[0].type.match(/^image\/.*/)) {
											setMessage(null);
											let fr = new FileReader();
											fr.onload = () => {
												document.querySelector('#preview').setAttribute('src', fr.result);
											};
											fr.readAsDataURL(e.target.files[0]);
											return setForm({ ...form, proofattachment: e.target.files[0] });
										}
										e.target.files = null;
										e.target.value = null;
										document.querySelector('#preview').removeAttribute('src');
										return setMessage('File Harus Image');
									}}
								/>
							</Form.Group>
						</Col>
						<Col xs='7' className='p-0 pt-2'>
							<Form.Text className='my-0'>*transfers can be made to holyways accounts</Form.Text>
						</Col>
					</Row>
					<Row>
						{message && (
							<Col xs={12} className='text-center'>
								<Alert>{message}</Alert>
							</Col>
						)}
					</Row>
					<Row className='mb-3'>
						<img id='preview' alt='' />
					</Row>
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

export default ModalComponent;
