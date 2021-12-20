import React from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import Listdonation from '../components/Listdonation';
import pic1 from '../assets/card1.svg';

function Detailfund(props) {
	return (
		<>
			<Container fluid='sm' className='my-md-4'>
				<Row>
					<Col
						sm={12}
						md={6}
						className='d-flex justify-content-md-center justify-content-sm-center my-sm-5 my-5 '
					>
						<img src={pic1} alt='' className='h-100' />
					</Col>
					<Col md={4} sm={12} className='my-md-5'>
						<Row>
							<Col md={12} className=''>
								<h3>The Strength of a People. Power of Community</h3>
							</Col>
							<Col md={12} className='d-flex justify-content-between fs-6s'>
								<span className='text-primary'>{props.total || 'Rp.9999999'}</span>
								<small>gathered from</small>
								<span>{props.target || 'Rp.2000000000'}</span>
							</Col>
							<Col md={12} className='py-0'>
								<ProgressBar
									style={{ height: 5, marginBottom: 20 }}
									variant='primary'
									now={20}
									className='mb-0'
								/>
							</Col>
							<Col className='d-flex justify-content-between mb-3'>
								<span>
									200 <small>Donation</small>
								</span>
								<span>
									150 <small>More Day</small>
								</span>
							</Col>
							<Col md={12}>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
							</Col>
							<Col md={12} className='d-flex justify-content-center'>
								<Button className='w-100'>Donate</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<div clas></div>
			<hr />
			<Container>
				<Row>
					<Col md={12} className='ms-md-3 mt-5 mt-md-0'>
						<h1 className='fs-2 fs-1'>
							List Donation (<span>200</span>)
						</h1>
					</Col>
					<Col md={12}>
						<Listdonation total='49000' date={{ day: 'kamis', date: '12 mei 2001' }} />
						<Listdonation total='99' date={{ day: 'kamis', date: '12 mei 2001' }} />
						<Listdonation total='99999999' date={{ day: 'kamis', date: '12 mei 2001' }} />
					</Col>
					<Col md={12} className='d-flex justify-content-center'>
						<Button className='btn btn-secondary'>Load More</Button>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col md={12} className='ms-md-3'>
						<h1 className='fs-2 fs-1'>
							Donation has not been approved (<span>10</span>)
						</h1>
					</Col>
					<Col md={12}>
						<Listdonation total='20000' view date={{ day: 'kamis', date: '12 mei 2001' }} />
						<Listdonation total='30000' view date={{ day: 'kamis', date: '12 mei 2001' }} />
						<Listdonation total='40000' view date={{ day: 'kamis', date: '12 mei 2001' }} />
					</Col>
					<Col md={12} className='d-flex justify-content-center'>
						<Button className='btn btn-secondary'>Load More</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Detailfund;
