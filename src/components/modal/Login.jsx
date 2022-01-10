import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { API, configJson } from '../../config/api';

import { loginContext } from '../../contexts/LoginProvider';
import { showContext } from '../../contexts/ShowProvider';
import { loadingContext } from '../../contexts/LoadingProvider';

import Register from './Register';
import AlertModal from './Alert';

function Login(props) {
	const [show, setShow] = useContext(showContext);
	const [state, dispatch] = useContext(loginContext);
	const { setProgress } = useContext(loadingContext);

	const [alert, setAlert] = useState('');
	const [message, setMessage] = useState('');
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			setProgress(20);
			const response = await API.post('login', JSON.stringify(form), configJson);
			if (response.status === 200) {
				setProgress(100);
				dispatch({
					type: 'LOGIN_SUCCESS',
					payload: response.data.data,
				});
				setShow('signin');
				setTimeout(() => {
					setMessage('Success');
					setAlert('success');
					setProgress(101);
				}, 1000);
			}
		} catch (error) {
			console.log(error.response);
			return setMessage(error.response.data.message);
		}
	};
	useEffect(() => {
		return () => {
			setMessage('');
		};
	}, [show]);

	return (
		<>
			<Modal show={show.signin} onHide={props.hide}>
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
							<Form.Group className='my-4 mx-auto'>
								{message && <Alert variant='danger'>{message}</Alert>}
							</Form.Group>

							<Form.Text className='text-center'>
								Don't have an account ? Klik{' '}
								<Link
									onClick={() => {
										setShow('signin');
										setShow('register');
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
				<Register show={show.register} hide={() => setShow('register')} />
			</Modal>
			{alert && (
				<AlertModal
					status={alert === 'success' ? 'success' : 'danger'}
					message={message ? message : 'failed'}
				/>
			)}
		</>
	);
}

export default Login;
