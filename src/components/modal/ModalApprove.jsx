import React, { useContext } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

import { API, configJson } from '../../config/api';
import { showContext } from '../../contexts/ShowProvider';

function ModalApprove(props) {
	const [show, setShow] = useContext(showContext);
	const data = {
		status: 'success',
	};
	async function approve() {
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
				<h5>{props.name}</h5>
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
						<img src={props.proofattachment} alt='struk' />
					</div>
					<div className='d-grid gap-2'>
						<Button
							variant='primary'
							onClick={() => {
								approve();
							}}
						>
							Approve
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default ModalApprove;
