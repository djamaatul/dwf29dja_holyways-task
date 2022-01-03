import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { showContext } from '../../contexts/ShowProvider';
import { loginContext } from '../../contexts/LoginProvider';
import Login from './Login';
import { configJson, API } from '../../config/api';

function Register(props) {
	const [show, setShow] = useContext(showContext);
	const [message, setMessage] = useState(null);
	const [form, setForm] = useState({
		email: '',
		password: '',
		fullName: '',
	});
	// useEffect(() => {
	// 	return () => {
	// 		setMessage(null);
	// 	};
	// }, [show]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await API.post('register', JSON.stringify(form), configJson);
			if (response.status == 200) {
				setMessage(<Alert variant='success'>Register Success</Alert>);
			}
		} catch (error) {
			setMessage(<Alert variant='danger'>{error.response.data.message}</Alert>);
		}
	};
	return (
		<Modal aria-labelledby='contained-modal-title-vcenter' onHide={props.hide} show={props.show}>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<h1>Register</h1>
					<Form.Group className='my-4' controlId='formBasicEmail'>
						<Form.Control
							type='email'
							placeholder='Enter email'
							onChange={(e) => setForm({ ...form, email: e.target.value })}
						/>
					</Form.Group>
					<Form.Group className='my-4' controlId='formBasicPassword'>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => setForm({ ...form, password: e.target.value })}
						/>
					</Form.Group>
					<Form.Group className='my-4' controlId='formBasicPassword'>
						<Form.Control
							type='text'
							placeholder='Full name'
							onChange={(e) => setForm({ ...form, fullName: e.target.value })}
						/>
					</Form.Group>
					<div className='d-grid gap-2'>
						<Button className='full' variant='primary' type='submit'>
							Register
						</Button>
						<Form.Group className='my-4 mx-auto'>{message}</Form.Group>
						<Form.Text className='text-center'>
							Already have an account ? Klik{' '}
							<Link
								onClick={() => {
									setShow('register');
									setShow('signin');
								}}
								className='text-black text-decoration-none'
								to='/'
							>
								Here
							</Link>
						</Form.Text>
					</div>
				</Form>
			</Modal.Body>
			<Login show={show.signin} hide={() => setShow('signin')} />
		</Modal>
	);
}

export default Register;
