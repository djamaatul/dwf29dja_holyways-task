import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import {BrowserRouter as Router,Link} from 'react-router-dom'

function Register() {
	return (
		<Router>
		<Modal.Dialog style={{width:'300px',}}>
			<Modal.Body>
				<Form action='#'>
				<h1>Register</h1>
				<Form.Group className="my-4" controlId="formBasicEmail">
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="my-4" controlId="formBasicPassword">
					<Form.Control type="text" placeholder="Password" />
				</Form.Group>
				<Form.Group className="my-4" controlId="formBasicPassword">
					<Form.Control type="text" placeholder="Full name" />
				</Form.Group>
				<div className="d-grid gap-2">
					<Button className='full' variant='primary' type="submit">
						Register
					</Button>
					
					<Form.Text className="text-center">
						Already have an account ? Klik <Link className='text-black text-decoration-none' to="/Register">Here</Link>
					</Form.Text>
				</div>
				</Form>
			</Modal.Body>
		</Modal.Dialog>
		</Router>
	)
}

export default Register
