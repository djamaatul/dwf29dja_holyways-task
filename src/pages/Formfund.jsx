import React, { useState, useContext, useEffect } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { API, configMulter, setAuthToken } from '../config/api';

import { loginContext } from '../contexts/LoginProvider';
import { loadingContext } from '../contexts/LoadingProvider';

function Formfund() {
	document.title = 'Form Fund - HolyWays';
	const navigate = useNavigate();
	const [state] = useContext(loginContext);
	const { setProgress } = useContext(loadingContext);
	const [form, setForm] = useState({
		title: '',
		thumbnail: '',
		goal: '',
		description: '',
	});
	useEffect(() => {
		setProgress(20);
		if (!state.isLogin) {
			if (localStorage.token) {
				setProgress(60);
				setAuthToken(localStorage.token);
				setTimeout(() => {
					setProgress(101);
				}, 1000);
			} else {
				navigate('/');
			}
		} else {
			setAuthToken(localStorage.token);
			setTimeout(() => {
				setProgress(100);
				setTimeout(() => {
					setProgress(101);
				}, 500);
			}, 1000);
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
						<Form.Group className='my-4'>
							<Form.Control
								style={{ backgroundColor: 'rgba(188, 188, 188, 0.25)' }}
								type='text'
								placeholder='Title'
								onChange={(e) => setForm({ ...form, title: e.target.value })}
							/>
						</Form.Group>
						<Form.Group controlId='thumbnail' className='mb-3 position-relative'>
							<Row>
								<Col md={2} xs={12}>
									<Button className=' full mt-2top-0 '>Attach Payment</Button>
									<Form.Control
										className='position-absolute top-0'
										style={{ opacity: '0%', width: '140px' }}
										type='file'
										onChange={(e) => {
											if (e.target.files[0].type.match(/^image\/.*/)) {
												const fr = new FileReader();
												fr.onload = () => {
													document.getElementById('preview').setAttribute('src', fr.result);
												};
												fr.readAsDataURL(e.target.files[0]);
												return setForm({ ...form, thumbnail: e.target.files[0] });
											} else {
												document.getElementById('preview').removeAttribute('src');
												e.target.files = null;
											}
										}}
									/>
								</Col>
								<Col md={10} xs={12}>
									<img src='' id='preview' width='10%' alt='' />
								</Col>
							</Row>
						</Form.Group>
						<Form.Group className='my-4'>
							<Form.Control
								style={{ backgroundColor: 'rgba(188, 188, 188, 0.25)' }}
								type='text'
								placeholder='Goals Donation'
								onChange={(e) => {
									setForm({ ...form, goal: e.target.value });
								}}
							/>
						</Form.Group>
						<Form.Group className='my-4'>
							<Form.Control
								style={{ backgroundColor: `rgba(188, 188, 188, 0.25)` }}
								as='textarea'
								placeholder='Description'
								rows={3}
								onChange={(e) => setForm({ ...form, description: e.target.value })}
							/>
						</Form.Group>
						<Form.Group className='my-4 d-flex justify-content-end'>
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
