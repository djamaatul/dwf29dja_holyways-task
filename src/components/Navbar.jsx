import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DropDown from './DropDown';
import Login from './modal/Login';
import Register from './modal/Register';
import LoadingProgress from '../components/LoadingProgress';

import './styles.css';
import logo from '../assets/icon/logo.svg';
import user from '../assets/some.png';

import { showContext } from '../contexts/ShowProvider';
import { loginContext } from '../contexts/LoginProvider';
import { loadingContext } from '../contexts/LoadingProvider';

function Header() {
	const [show, setShow] = useContext(showContext);
	const [state] = useContext(loginContext);
	const { progress, setProgress } = useContext(loadingContext);

	return (
		<>
			{progress <= 100 && <LoadingProgress />}
			<Login show={show.signin} hide={() => setShow('signin')} />
			<Register show={show.register} hide={() => setShow('register')} />
			<Navbar collapseOnSelect className='bg-primary'>
				<Container fluid='xxl'>
					<Navbar.Brand className='ms-md-5'>
						<Link to='/'>
							<img src={logo} width='65' height='65' className='d-inline-block align-top' alt='Logo' />
						</Link>
					</Navbar.Brand>
					<Nav className='ms-auto'></Nav>
					{state.isLogin ? (
						<div className='' id='dpcontain'>
							<img
								onClick={() => setShow('dropdown')}
								style={{ cursor: 'pointer' }}
								src={user}
								width='60'
								height='60'
								alt='User'
								className='d-inline-block align-top border rounded-circle border-2 border-white me-md-5'
							/>
							<DropDown show={show.dropdown} />
						</div>
					) : (
						<Nav.Link>
							<Button onClick={() => setShow('signin')} variant='primary text-secondary'>
								Login
							</Button>
							<Button
								onClick={() => setShow('register')}
								style={{ borderRadius: 10 }}
								className='ms-4 text-primary fw-bold '
								variant='secondary'
							>
								Register
							</Button>
						</Nav.Link>
					)}
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
