import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';

import Listdonation from '../components/Listdonation';
import ModalDonate from '../components/modal/ModalDonate';

import { loginContext } from '../contexts/LoginProvider';
import { showContext } from '../contexts/ShowProvider';
import { weekday, months } from '../data/date';
import { API, setAuthToken } from '../config/api';

function Detailfund() {
	const navigate = useNavigate();
	const [state] = useContext(loginContext);
	const [show, setShow] = useContext(showContext);
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
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		if (!state.isLogin) {
			if (localStorage.token) {
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
						<div
							style={{
								backgroundImage: `url(${fund.thumbnail})`,
								width: '80%',
								height: '380px',
								backgroundSize: 'cover',
							}}
						></div>
					</Col>
					<Col md={4} sm={12} className='my-md-5'>
						<Row>
							<Col md={12} className=''>
								<h3>{fund?.title}</h3>
							</Col>
							<Col md={12} className='d-flex justify-content-between fs-6s'>
								<span className='text-primary'>{fund?.collected}</span>
								<small>gathered from</small>
								<span>{fund?.goal}</span>
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
								<span>
									{fund?.donations?.length} <small>Donation</small>
								</span>
								<span>
									{Math.ceil((Date.now() - since?.getTime()) / (1000 * 60 * 60 * 24))}
									<small>More Day</small>
								</span>
							</Col>
							<Col md={12}>
								<p>{fund?.description}</p>
							</Col>
							<Col md={12} className='d-flex justify-content-center'>
								<Button onClick={() => setShow('donate')} className='w-100'>
									Donate
								</Button>
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
					{fund?.donations?.map((item) => {
						if (item.status == 'success') {
							let createdAt = new Date(item.createdAt);
							return (
								<Col key={item.id} md={12}>
									<Listdonation
										name={item.fullName}
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
					})}
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
					{fund?.donations?.map((item) => {
						if (item.status == 'pending') {
							let createdAt = new Date(item.createdAt);
							return (
								<Col key={item.id} md={12}>
									<Listdonation
										id={item.id}
										name={item.fullName}
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
					})}
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
