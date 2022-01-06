import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ProgressBar, Placeholder, Card } from 'react-bootstrap';

import Listdonation from '../components/Listdonation';
import ModalDonate from '../components/modal/ModalDonate';

import { loginContext } from '../contexts/LoginProvider';
import { showContext } from '../contexts/ShowProvider';
import { loadingContext } from '../contexts/LoadingProvider';

import { weekday, months } from '../data/date';
import { API, setAuthToken } from '../config/api';

function Detailfund() {
	document.title = 'View Fund - HolyWays';
	const navigate = useNavigate();
	const [state] = useContext(loginContext);
	const [show, setShow] = useContext(showContext);
	const [loading, setLoading] = useState(false);
	const { setProgress } = useContext(loadingContext);
	const [fund, setFund] = useState({});
	const { id } = useParams();

	let since = new Date(fund?.createdAt);

	let persen = Math.ceil((fund?.collected / fund?.goal) * 100);

	let successDonate = fund?.donations?.filter((e) => e.status == 'success');

	let pendingDonate = fund?.donations?.filter((e) => e.status == 'pending');

	async function getFund() {
		try {
			const response = await API.get(`/fund/${id}`);
			setFund(response.data.data);
			setProgress(100);
			setTimeout(() => {
				setLoading(false);
			}, 500);
			setTimeout(() => {
				setProgress(101);
			}, 1000);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		setLoading(true);
		setProgress(20);
	}, []);
	useEffect(() => {
		if (!state.isLogin) {
			if (localStorage.token) {
				setProgress(40);
				setAuthToken(localStorage.token);
				getFund();
			} else {
				navigate('/');
			}
		} else {
			setAuthToken(localStorage.token);
			getFund();
		}
	}, [show]);
	return (
		<>
			<Container>
				<Row>
					<Col
						sm={12}
						md={6}
						className='d-flex justify-content-md-center justify-content-sm-center my-sm-5 my-5 '
					>
						{!loading ? (
							<div
								style={{
									backgroundImage: `url(${fund.thumbnail})`,
									width: '80%',
									height: '380px',
									backgroundSize: 'cover',
								}}
							></div>
						) : (
							<Placeholder animation='glow' style={{ width: '100%' }}>
								<Placeholder
									md={12}
									as='p'
									style={{
										height: '380px',
									}}
								/>
							</Placeholder>
						)}
					</Col>
					<Col md={4} sm={12} className='my-md-5'>
						<Row>
							<Col md={12} className=''>
								{!loading ? (
									<h3>{fund?.title}</h3>
								) : (
									<Placeholder animation='wave'>
										<h1>
											<Placeholder md={12} />
										</h1>
									</Placeholder>
								)}
							</Col>
							<Col md={12} className='d-flex justify-content-between fs-6s'>
								{!loading ? (
									<span className='text-primary'>{fund?.collected}</span>
								) : (
									<Placeholder animation='wave' style={{ width: '33%' }}>
										<span>
											<Placeholder md={12} />
										</span>
									</Placeholder>
								)}
								<small>gathered from</small>
								{!loading ? (
									<span>{fund?.goal}</span>
								) : (
									<Placeholder animation='wave' style={{ width: '33%' }}>
										<span>
											<Placeholder md={12} />
										</span>
									</Placeholder>
								)}
							</Col>
							<Col md={12} className='py-0'>
								<ProgressBar
									style={{ height: 5, marginBottom: 20 }}
									variant='primary'
									now={persen}
									className='mb-0'
								/>
							</Col>
							<Col className='d-flex justify-content-between mb-3'>
								{!loading ? (
									<>
										<span>
											{fund?.donations?.length} <small>Donation</small>
										</span>
										<span>
											{Math.ceil((Date.now() - since?.getTime()) / (1000 * 60 * 60 * 24))}
											<small> Day ago</small>
										</span>
									</>
								) : (
									<>
										<Placeholder animation='wave' style={{ width: '50%' }}>
											<p>
												<Placeholder md={5} />
											</p>
										</Placeholder>
										<Placeholder animation='wave' style={{ width: '50%' }}>
											<p style={{ display: 'flex', justifyContent: 'end' }}>
												<Placeholder md={5} style={{ marginTop: '4px' }} />
											</p>
										</Placeholder>
									</>
								)}
							</Col>
							<Col md={12}>
								{!loading ? (
									<p>{fund?.description}</p>
								) : (
									<Placeholder animation='wave' style={{ width: '33%' }}>
										<p>
											<Placeholder md={6} />
											<Placeholder md={4} />
											<Placeholder md={2} />
											<Placeholder md={8} />
											<Placeholder md={4} />
											<Placeholder md={12} />
											<Placeholder md={4} />
										</p>
									</Placeholder>
								)}
							</Col>
							<Col md={12} className='d-flex justify-content-center'>
								{!loading && (
									<Button
										onClick={() => (state.isLogin ? setShow('donate') : setShow('signin'))}
										className='w-100'
									>
										Donate
									</Button>
								)}
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='ms-md-3 mt-5 mt-md-0'>
						<h1 className='fs-2 fs-1'>
							List Donation (<span>{successDonate?.length}</span>)
						</h1>
					</Col>
					{!loading ? (
						fund?.donations?.map((item) => {
							if (item.status == 'success') {
								let createdAt = new Date(item.createdAt);
								return (
									<Col key={item.id} md={12}>
										<Listdonation
											name={item.users.fullName}
											donateAmount={item.donateAmount}
											date={{
												day: weekday[createdAt.getDay()],
												date: `${createdAt.getDate()} ${
													months[createdAt.getMonth()]
												} ${createdAt.getFullYear()}`,
											}}
										/>
									</Col>
								);
							}
						})
					) : (
						<>
							<Card className='m-3'>
								<Row>
									<Col xs='8'>
										<Card.Body>
											<Card.Title className='fs-4'>
												<Placeholder animation='wave' style={{ width: '50%' }}>
													<p>
														<Placeholder md={5} />
													</p>
												</Placeholder>
											</Card.Title>
											<Card.Text className='fs-8'>
												<Placeholder animation='wave' style={{ width: '50%' }}>
													<p>
														<Placeholder md={2} /> <Placeholder md={2} />
													</p>
												</Placeholder>
											</Card.Text>
											<Card.Text className='fs-8 text-primary'>
												Total :{'\t'}
												<Placeholder animation='wave' style={{ width: '50%' }}>
													<Placeholder md={3} />
												</Placeholder>
											</Card.Text>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						</>
					)}
					<Col md={12} className='d-flex justify-content-center'>
						<Button className='btn btn-secondary'>Load More</Button>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='ms-md-3'>
						<h1 className='fs-2 fs-1'>
							Donation has not been approved (<span>{pendingDonate?.length}</span>)
						</h1>
					</Col>

					{!loading ? (
						fund?.donations?.map((item) => {
							if (item.status == 'pending') {
								let createdAt = new Date(item.createdAt);
								return (
									<Col key={item.id} md={12}>
										<Listdonation
											id={item.id}
											name={item.users.fullName}
											donateAmount={item.donateAmount}
											proofattachment={item.proofattachment}
											idFund={id}
											view={true}
											date={{
												day: weekday[createdAt.getDay()],
												date: `${createdAt.getDate()} ${
													months[createdAt.getMonth()]
												} ${createdAt.getFullYear()}`,
											}}
										/>
									</Col>
								);
							}
						})
					) : (
						<>
							<Card className='m-3'>
								<Row>
									<Col xs='8'>
										<Card.Body>
											<Card.Title className='fs-4'>
												<Placeholder animation='wave' style={{ width: '50%' }}>
													<p>
														<Placeholder md={5} />
													</p>
												</Placeholder>
											</Card.Title>
											<Card.Text className='fs-8'>
												<Placeholder animation='wave' style={{ width: '50%' }}>
													<p>
														<Placeholder md={2} /> <Placeholder md={2} />
													</p>
												</Placeholder>
											</Card.Text>
											<Card.Text className='fs-8 text-primary'>
												Total :{'\t'}
												<Placeholder animation='wave' style={{ width: '50%' }}>
													<Placeholder md={3} />
												</Placeholder>
											</Card.Text>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						</>
					)}
					<Col md={12} className='d-flex justify-content-center'>
						<Button className='btn btn-secondary'>Load More</Button>
					</Col>
				</Row>
				<ModalDonate id={fund?.id} show={show.donatemodal} hide={() => setShow('donate')} />
			</Container>
		</>
	);
}

export default Detailfund;
