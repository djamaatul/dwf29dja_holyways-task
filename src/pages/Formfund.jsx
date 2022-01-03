import React, { useState, useContext, useEffect } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { API, configMulter, setAuthToken } from '../config/api';

import { loginContext } from '../contexts/LoginProvider';

function Formfund() {
	const navigate = useNavigate();
	const [state] = useContext(loginContext);
	const [form, setForm] = useState({
		title: '',
		thumbnail: '',
		goal: '',
		description: '',
	});
	useEffect(() => {
		if (!state.isLogin) {
			if (localStorage.token) {
				setAuthToken(localStorage.token);
			} else {
				navigate('/');
			}
		} else {
			setAuthToken(localStorage.token);
		}
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.set('title', form.title);
		formData.set('thumbnail', form.thumbnail, form.thumbnail.name);
		formData.set('goal', form.goal);
		formData.set('description', form.description);
		try {
			const response = await API.post('/fund', formData, configMulter);
			if (response.status == 200) {
				navigate('/myfund');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Container>
			<Row>
				<Col xs={12} className='my-5'>
					<h1>Make Raise Fund</h1>
					<Form onSubmit={handleSubmit}>
						<Form.Group className='my-4' controlId='formBasicEmail'>
							<Form.Control
								style={{ backgroundColor: 'rgba(188, 188, 188, 0.25)' }}
								type='text'
								placeholder='Title'
								onChange={(e) => setForm({ ...form, title: e.target.value })}
							/>
						</Form.Group>
						<Form.Group controlId='thumbnail' className='mb-3 position-relative'>
							<Button className=' full mt-2top-0 '>Attach Payment</Button>
							<Form.Control
								className='position-absolute top-0'
								style={{ opacity: '0%', width: '140px' }}
								type='file'
								onChange={(e) => setForm({ ...form, thumbnail: e.target.files[0] })}
							/>
						</Form.Group>
						<Form.Group className='my-4' controlId='formBasicPassword'>
							<Form.Control
								style={{ backgroundColor: 'rgba(188, 188, 188, 0.25)' }}
								type='text'
								placeholder='Goals Donation'
								onChange={(e) => setForm({ ...form, goal: e.target.value })}
							/>
						</Form.Group>
						<Form.Group className='my-4' controlId='formBasicPassword'>
							<Form.Control
								style={{ backgroundColor: `rgba(188, 188, 188, 0.25)` }}
								as='textarea'
								placeholder='Description'
								rows={3}
								onChange={(e) => setForm({ ...form, description: e.target.value })}
							/>
						</Form.Group>
						<Form.Group className='my-4 d-flex justify-content-end' controlId='formBasicPassword'>
							<Button type='submit' className='px-5'>
								Public Fundraising
							</Button>
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Formfund;
