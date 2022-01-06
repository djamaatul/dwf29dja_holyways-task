import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';

import noresult from '../assets/icon/noresult.png';

import { loginContext } from '../contexts/LoginProvider';
import { loadingContext } from '../contexts/LoadingProvider';

import { API, setAuthToken } from '../config/api';

function Raisefund() {
	document.title = 'Raise Fund - HolyWays';
	const navigate = useNavigate();
	const [state] = useContext(loginContext);
	const { setProgress } = useContext(loadingContext);
	const [myfunds, setMyFunds] = useState([]);

	async function userFunds() {
		try {
			const response = await API.get('/fundsUser');
			setMyFunds(response.data.data);
			setProgress(100);
			setTimeout(() => {
				setProgress(101);
			}, 1000);
		} catch (error) {
			throw error;
		}
	}
	useEffect(() => {
		setProgress(20);
		if (!state.isLogin) {
			if (localStorage.token) {
				setProgress(40);
				setAuthToken(localStorage.token);
				userFunds();
			} else {
				navigate('/');
			}
		} else {
			setProgress(40);
			setAuthToken(localStorage.token);
			userFunds();
		}
	}, []);
	return (
		<Container fluid='xxl' className='mt-2 mt-md-5'>
			<Row>
				<Col md={6} className='order-2 order-md-1'>
					<Row>
						<Col md={12}>
							<h1>My Raise Fund</h1>
						</Col>
					</Row>
				</Col>
				<Col md={6} className='d-flex justify-content-md-end order-1 my-3'>
					<Link to='/makefund'>
						<Button>Make Raise Fund</Button>
					</Link>
				</Col>
			</Row>
			{myfunds.length > 0 ? (
				<Row className='d-flex justify-content-start'>
					{myfunds.map((item, index) => {
						return (
							<Col md={3} sm={6} xs={12} key={index}>
								<Cards
									id={item.id}
									title={item.title}
									description={item.description}
									collected={item.collected}
									goal={item.goal}
									src={item.thumbnail}
								/>
							</Col>
						);
					})}
				</Row>
			) : (
				<Row className='my-5 py-5'>
					<Col xs={12} md={12} className='d-flex justify-content-center'>
						<img src={noresult} width={200} alt='' />
					</Col>
					<Col xs={12} md={12} className='d-flex justify-content-center'>
						<h4>You dont have donate</h4>
					</Col>
				</Row>
			)}
		</Container>
	);
}

export default Raisefund;
