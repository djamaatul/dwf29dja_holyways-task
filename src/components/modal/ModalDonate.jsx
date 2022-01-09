import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Col, Row, Alert } from 'react-bootstrap';

import struk from '../../assets/icon/struk.svg';
import bca from '../../assets/icon/bca.webp';

import { API, configMulter, setAuthToken } from '../../config/api';
import { showContext } from '../../contexts/ShowProvider';

import Confirm from './Confirm';
import AlertModal from './Alert';

function ModalComponent(props) {
	const [show, setShow] = useContext(showContext);
	const [confirm, showConfirm] = useState(false);
	const [alert, setAlert] = useState('');
	const [message, setMessage] = useState('');
	const [form, setForm] = useState({
		donateAmount: '',
		proofattachment: '',
	});
	const handleConfirm = async (state) => {
		if (state) {
			const formData = new FormData();
			if (!form.proofattachment) {
				setMessage('please upload file image!');
				return setAlert('danger');
			}
			formData.set('donateAmount', form.donateAmount);
			formData.set('proofattachment', form.proofattachment, form.proofattachment.name);
			setAuthToken(localStorage.token);
			try {
				const response = await API.post(`/donate/${props.id}`, formData, configMulter);
				if (response.status === 200) {
					setMessage('success');
					setAlert('success');
				}
			} catch (error) {
				console.log(error.response);
				setMessage(error.response.data.message);
				return setAlert('danger');
			}
		} else {
			setAlert('danger');
		}
	};
	const handleDonate = (e) => {
		e.preventDefault();
		showConfirm(true);
		setAlert('');
		setShow('donate');
	};
	return (
		<>
			<Modal onHide={props.hide} show={props.show}>
				<Modal.Body>
					<Form onSubmit={handleDonate}>
						<Form.Group className='my-1 mt-0'>
							<Alert
								style={{
									width: '100%',
									padding: '0px 10px',
									lineHeight: '40px',
								}}
								variant='warning'
							>
								Pembayaran donasi hanya dapat dilakukan melalui rekening :
								<div className='d-flex align-items-center my-2 justify-content-center'>
									<img src={bca} width={130} /> <span className='fs-1 ms-4'> 8801177000</span>
								</div>
								Atas nama : PT. DumbWays Indonesia Teknologi
							</Alert>
						</Form.Group>
						<Form.Group className='my-4 mt-0'>
							<Form.Control
								onChange={(e) => setForm({ ...form, donateAmount: e.target.value })}
								type='text'
								placeholder='Nominal Donation'
								required
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
										}}
									/>
								</Form.Group>
							</Col>
							<Col xs='7' className='p-0 pt-2'>
								<Form.Text className='my-0'>*transfers can be made to holyways accounts</Form.Text>
							</Col>
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
			<Confirm show={confirm} hide={() => showConfirm()} handleConfirm={handleConfirm} />
			{alert && (
				<AlertModal
					status={alert === 'success' ? 'success' : 'danger'}
					message={message ? message : 'failed'}
				/>
			)}
			;
		</>
	);
}

export default ModalComponent;
