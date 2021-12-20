import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import photoProfile from '../assets/some.png';
import History from '../components/History';

import { loginContext } from '../contexts/LoginProvider';

function Profile() {
	const { userData, isLogin } = useContext(loginContext);
	if (!isLogin) {
		return <Navigate to='/' />;
	} else {
		return (
			<Row className='mx-0 px-0'>
				<Col sm={12} md={6} className=''>
					<Row>
						<Col md={6} xs={12} className='ps-3 ps-sm-5 py-4 ms-md-3'>
							<h1 className=''>My Profile</h1>
						</Col>
					</Row>
					<Row className='d-md-flex justify-content-center'>
						<Col md={4} xs={6} sm={6} className=''>
							<img src={photoProfile} alt='' />
						</Col>
						<Col md={6} xs={6} sm={4} className='ps-4 ps-sm-0 '>
							<ul className='list-unstyled'>
								<li>
									<h3 className='text-primary'>Full Name</h3>
								</li>
								<li>
									<h5>{userData.name}</h5>
								</li>
								<li>
									<h3 className='text-primary'>Email</h3>
								</li>
								<li>
									<h5>{userData.email}</h5>
								</li>
								<li>
									<h3 className='text-primary'>Phone</h3>
								</li>
								<li>
									<h5>{userData.phone}</h5>
								</li>
							</ul>
						</Col>
					</Row>
				</Col>
				<Col
					sm={12}
					xs={12}
					md={6}
					className='d-flex justify-content-sm-center  justify-content-center my-md-5 my-sm-5'
				>
					<Row>
						<Col md={12} xs={12} className='mt-4 mx-0 '>
							<h1>History Donations</h1>
							<History success={true} viewStatus />
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default Profile;
