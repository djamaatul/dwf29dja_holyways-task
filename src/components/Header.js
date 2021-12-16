import React,{useState} from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import logo from '../assets/icon/logo.svg'
import user from '../assets/some.png'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import DropDown from "./DropDown";
import './styles.css'


function Header() {
	const [isLogin,setIsLogin] = useState(true)
	const dpclick = (e)=>{
		document.getElementById('dpdown').classList.toggle('show')
	}
	return (
		<Router>
		<div>
			<Navbar collapseOnSelect expand="sm" bg="primary">
			<Container fluid="sm">
				<Navbar.Brand>
					<Link to="/">
						<img
							src={logo}
							width="40"
							height="40"
							className="d-inline-block align-top"
							alt="Logo"
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle className='ms-auto' aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className='ms-auto'>
						</Nav>
						{isLogin ? 
						<div className='' id="dpcontain">
							<a href="#" onClick={dpclick}>
								<img src={user}	width="40" height="40" alt="User"
								className="d-inline-block align-top border rounded-circle border-2 border-white"/>
							</a> 
							<DropDown />
						</div>
						:
						<Nav.Link>
							<Button variant='Primary text-secondary'>Login</Button>
							<Button className='ms-4 text-primary ' variant="secondary">Register</Button>
						</Nav.Link>
						}
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</div>
		</Router>
	)
}

export default Header
