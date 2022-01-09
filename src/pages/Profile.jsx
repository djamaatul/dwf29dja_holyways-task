import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Placeholder, Card } from 'react-bootstrap';

import photoProfile from '../assets/some.png';
import noresult from '../assets/icon/noresult.png';

import History from '../components/History';

import { loginContext } from '../contexts/LoginProvider';
import { loadingContext } from '../contexts/LoadingProvider';

import { API, setAuthToken } from '../config/api';

function Profile() {
	document.title = 'Profile - HolyWays';

	const navigate = useNavigate();

	const [state] = useContext(loginContext);
	const { setProgress } = useContext(loadingContext);

	const [data, setData] = useState([]);
	const [donates, setDonates] = useState([]);
	const [loading, setLoading] = useState(true);

	async function getProfileData() {
		try {
			const response = await API.get('/user');
			setData(response.data);
			setProgress(60);
		} catch (error) {
			throw error;
		}
	}
	async function userDonate() {
		try {
			const response = await API.get('/userDonates');
			setProgress(100);
			setDonates(response.data.data);
			console.log(response);
			setTimeout(() => {
				setLoading(false);
			}, 500);
			setTimeout(() => {
				setProgress(101);
			}, 1000);
		} catch (error) {
			throw error;
		}
	}
	useEffect(() => {
		if (!state.isLogin) {
			setProgress(20);
			if (localStorage.token) {
				setAuthToken(localStorage.token);
				getProfileData();
				userDonate();
			} else {
				navigate('/');
			}
		} else {
			setProgress(20);
			setAuthToken(localStorage.token);
			getProfileData();

			userDonate();
		}
	}, [state]);

	return (
		<Row className='mx-0 px-0'>
			<Col xs={12} md={7} className='my-md-5 my-sm-5'>
				<Row>
					<Col xs={12} className='ps-3 ps-sm-5 py-4 ms-md-3'>
						<h1 className=''>My Profile</h1>
					</Col>
				</Row>
				<Row className='d-md-flex justify-content-center ms-5'>
					<Col md={4} xs={6} className=''>
						{!loading ? (
							<img src={photoProfile} alt='' width='80%' style={{ borderRadius: 5 }} />
						) : (
							<Placeholder animation='glow'>
								<Placeholder md={10} style={{ height: 200 }} />
							</Placeholder>
						)}
					</Col>
					<Col md={8} xs={6} className='ps-4 ps-sm-0 '>
						<ul className='list-unstyled'>
							<li>
								<h3 className='text-primary'>Full Name</h3>
							</li>
							<li>
								{!loading ? (
									<h5>{data.fullName}</h5>
								) : (
									<Placeholder as='h5' animation='glow'>
										<Placeholder xs={8} />
									</Placeholder>
								)}
							</li>
							<li>
								<h3 className='text-primary'>Email</h3>
							</li>
							<li>
								{!loading ? (
									<h5>{data.email}</h5>
								) : (
									<Placeholder as='h5' animation='glow'>
										<Placeholder xs={8} />
									</Placeholder>
								)}
							</li>
						</ul>
					</Col>
				</Row>
			</Col>
			<Col xs={12} md={5} className=' my-md-5 my-sm-5'>
				<Row>
					<Col xs={12} className='mt-4 mx-0 '>
						<h1>History Donations</h1>
					</Col>
				</Row>
				<Row>
					<Col
						md={11}
						style={{
							maxHeight: '400px',
							overflow: 'scroll',
							scrollbarWidth: 'none',
						}}
					>
						{!loading ? (
							donates.length > 0 ? (
								donates.map((item) => {
									return (
										<History
											fund={item.funds.title}
											key={item.id}
											status={item.status}
											message={item.message}
											updatedAt={item.updatedAt}
											donateAmount={item.donateAmount}
											viewStatus
										/>
									);
								})
							) : (
								<div className='d-flex justify-content-center flex-column p-5 '>
									<img src={noresult} width={200} alt='' />
									<h4>You never donating</h4>
								</div>
							)
						) : (
							<Card className='mt-4'>
								<Row>
									<Col className='mx-0' xs={12}>
										<Card.Body>
											<Placeholder animation='wave' style={{ width: '50%' }}>
												<p>
													<Placeholder md={12} />
													<Placeholder md={6} />
												</p>
											</Placeholder>
											<Placeholder animation='wave' style={{ width: '50%' }}>
												<p>
													<Placeholder md={2} /> <Placeholder md={2} />
												</p>
											</Placeholder>
											<div style={{ display: 'flex', justifyContent: 'space-between' }}>
												<Placeholder animation='wave' style={{ width: '50%' }}>
													<h5>
														<Placeholder md={6} bg='primary' />
													</h5>
												</Placeholder>
												<Placeholder
													animation='wave'
													style={{ width: '50%', textAlign: 'end' }}
												>
													<h4>
														<Placeholder md={8} bg='success' />
													</h4>
												</Placeholder>
											</div>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						)}
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default Profile;
