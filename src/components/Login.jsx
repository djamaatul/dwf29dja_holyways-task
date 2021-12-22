import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { loginContext } from '../contexts/LoginProvider';
import { showContext } from '../contexts/ShowProvider';

import Register from '../components/Register';

import data from '../data/users';

function Login(props) {
	const { showReg, toggleIn, toggleReg } = useContext(showContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [wrong, setWrong] = useState(false);
	const { setIsLogin, setUserData } = useContext(loginContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		let getData = data.filter((e) => e.email === email);
		if (getData.length != 0) {
			if (email === getData[0].email && password === getData[0].password) {
				setIsLogin(true);
				setUserData({ ...getData[0] });
				setWrong(false);
				props.hide();
			} else {
				getData = [];
				setWrong(true);
				setUserData({});
			}
		} else {
			getData = [];
			setWrong(true);
			setUserData({});
		}
	};

	return (
		<Modal onHide={props.hide} show={props.show}>
			<Register show={showReg} hide={toggleReg} />
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<h1>Login</h1>
					<Form.Group className='my-4' controlId='formBasicEmail'>
						<Form.Control
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							placeholder='Enter email'
						/>
					</Form.Group>
					<Form.Group className='my-4' controlId='formBasicPassword'>
						<Form.Control
							onChange={(e) => setPassword(e.target.value)}
							type='password'
							placeholder='Password'
						/>
					</Form.Group>
					<div className='d-grid gap-2'>
						<Button className='full' variant='primary' type='submit'>
							Login
						</Button>
						{wrong && (
							<Form.Group className='my-4 mx-auto'>
								<Alert variant='danger'>Email atau Password Salah</Alert>
							</Form.Group>
						)}

						<Form.Text className='text-center'>
							Don't have an account ? Klik{' '}
							<Link
								onClick={() => {
									toggleReg();
									toggleIn();
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
		</Modal>
	);
}

export default Login;
