import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { API, configJson } from '../../config/api';

import { loginContext } from '../../contexts/LoginProvider';
import { showContext } from '../../contexts/ShowProvider';

import Register from './Register';

function Login(props) {
	const [show, setShow] = useContext(showContext);
	const [state, dispatch] = useContext(loginContext);
	const [message, setMessage] = useState(null);
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		return () => {
			setMessage(null);
		};
	}, [show]);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const response = await API.post('login', JSON.stringify(form), configJson);
			if (response.status == 200) {
				dispatch({
					type: 'LOGIN_SUCCESS',
					payload: response.data.data,
				});
				setShow('signin');
				setMessage(null);
			}
		} catch (error) {
			setMessage(<Alert variant='danger'>{error.response.data.message}</Alert>);
		}
	};

	return (
		<Modal show={show.signin} onHide={() => setShow('signin')}>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<h1>Login</h1>
					<Form.Group className='my-4' controlId='formBasicEmail'>
						<Form.Control
							onChange={(e) => setForm({ ...form, email: e.target.value })}
							type='email'
							placeholder='Enter email'
						/>
					</Form.Group>
					<Form.Group className='my-4' controlId='formBasicPassword'>
						<Form.Control
							onChange={(e) => setForm({ ...form, password: e.target.value })}
							type='password'
							placeholder='Password'
						/>
					</Form.Group>
					<div className='d-grid gap-2'>
						<Button className='full' variant='primary' type='submit'>
							Login
						</Button>
						<Form.Group className='my-4 mx-auto'>{message}</Form.Group>

						<Form.Text className='text-center'>
							Don't have an account ? Klik{' '}
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
			<Register show={show.register} hide={() => setShow('signin')} />
		</Modal>
	);
}

export default Login;
