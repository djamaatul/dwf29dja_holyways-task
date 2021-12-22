import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import DropDown from './DropDown';
import Login from './Login';
import Register from './Register';

import './styles.css';
import logo from '../assets/icon/logo.svg';
import user from '../assets/some.png';

import { showContext } from '../contexts/ShowProvider';
import { loginContext } from '../contexts/LoginProvider';

function Header() {
	const { showIn, showReg, toggleIn, toggleReg, showDropdown, toggleDropdown } = useContext(showContext);
	const { isLogin } = useContext(loginContext);

	return (
		<>
			<Login show={showIn} hide={toggleIn} />
			<Register show={showReg} hide={toggleReg} />
			<Navbar collapseOnSelect className='bg-primary'>
				<Container fluid='xxl'>
					<Navbar.Brand className='ms-md-5 ps-md-5'>
						<Link to='/'>
							<img src={logo} width='65' height='65' className='d-inline-block align-top' alt='Logo' />
						</Link>
					</Navbar.Brand>
					<Nav className='ms-auto'></Nav>
					{isLogin ? (
						<div className='' id='dpcontain'>
							<img
								onClick={toggleDropdown}
								style={{ cursor: 'pointer' }}
								src={user}
								width='60'
								height='60'
								alt='User'
								className='d-inline-block align-top border rounded-circle border-2 border-white'
							/>
							<DropDown show={showDropdown} />
						</div>
					) : (
						<Nav.Link>
							<Button onClick={toggleIn} variant='primary text-secondary'>
								Login
							</Button>
							<Button
								onClick={toggleReg}
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
