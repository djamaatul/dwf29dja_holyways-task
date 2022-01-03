import React from 'react';
import { Modal, Button } from 'react-bootstrap';
export default function Confirm(props) {
	return (
		<Modal show={props.show} onHide={props.hide} size='sm'>
			<Modal.Header className='bg-primary text-white'>
				<Modal.Title>Wait!</Modal.Title>
			</Modal.Header>
			<Modal.Body>Are You Sure ?</Modal.Body>
			<Modal.Footer>
				<Button
					variant='secondary'
					onClick={() => {
						props.hide();
						return props.handleConfirm(false);
					}}
				>
					Cancel
				</Button>
				<Button
					variant='primary'
					onClick={() => {
						props.hide();
						return props.handleConfirm(true);
					}}
				>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
