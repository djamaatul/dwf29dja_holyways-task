import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Alert, Row, Col } from 'react-bootstrap';

import { API, configJson } from '../../config/api';
import { showContext } from '../../contexts/ShowProvider';

function ModalApprove(props) {
	const [show, setShow] = useContext(showContext);
	const [message, setMessage] = useState(null);
	async function approve() {
		const data = {
			status: 'success',
			message: message ? message : 'terimakasih telah mendonasi!',
		};
		try {
			const response = await API.patch(`/donate/${props.idFund}/${props.id}`, data, configJson);
			if (response.status == 200) {
				return setShow('approve');
			}
		} catch (error) {
			console.log(error);
		}
	}
	async function reject() {
		const data = {
			status: 'failed',
			message: message ? message : 'maaf donasi gagal, dana belum masuk!',
		};
		try {
			const response = await API.patch(`/donate/${props.idFund}/${props.id}`, data, configJson);
			if (response.status == 200) {
				return setShow('approve');
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Modal onHide={props.hide} show={props.show}>
			<Modal.Body>
				<h5>{props.name} :</h5>
				<Form>
					<Alert
						style={{
							width: '100%',
							border: '1px solid gray',
							height: '40px',
							padding: '0px 10px',
							lineHeight: '40px',
						}}
						variant='dark'
					>
						{props.donateAmount}
					</Alert>
					<div className='d-flex justify-content-center pb-3'>
						<img src={props.proofattachment} width='100%' alt='struk' />
					</div>
					<div className='d-flex justify-content-center pb-3'>
						<Form.Control
							onChange={(e) => setMessage(e.target.value)}
							type='text'
							placeholder='Message'
							required
						/>
					</div>
					<Row>
						<Col xs={6} className='d-flex justify-content-center'>
							<Button
								style={{ width: '100%' }}
								variant='dark'
								className='bg-primary text-white'
								onClick={() => {
									reject();
								}}
							>
								Reject
							</Button>
						</Col>
						<Col xs={6} className='d-flex justify-content-center'>
							<Button
								style={{ width: '100%' }}
								variant='dark'
								className='bg-success text-white'
								onClick={() => {
									approve();
								}}
							>
								Approve
							</Button>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default ModalApprove;
