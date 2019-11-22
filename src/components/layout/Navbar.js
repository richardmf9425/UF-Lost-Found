import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';

function Navbar() {
	const [ show, setShow ] = useState(false);
	const [ login, setLogin ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleLogin = () => setLogin(true);
	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogin();
		handleClose();
	};
	return (
		<div>
			<nav className="navbar1">
				<div className="nav-top">
					<Link to="/">
						<div className="logo" />
					</Link>
					<span className="slogan">Lost and Found</span>
					<div href="" className="login" onClick={handleShow}>
						{login ? (
							'Welcome, Richard'
						) : (
							<div>
								<i className="fas fa-sign-in-alt" /> <span>LOG IN</span>{' '}
							</div>
						)}
					</div>
				</div>
				<div className="nav-bottom">
					<li>
						<Link to="/foundItems">Lost an Item?</Link>{' '}
					</li>
					<li>
						{' '}
						<Link to="/lostItems">Found an item?</Link>{' '}
					</li>
					<li>
						{' '}
						<a href="">FAQ</a>{' '}
					</li>
					<li>
						{' '}
						<a href="">Customer Support</a>{' '}
					</li>
				</div>
			</nav>
			<Modal show={show} onHide={handleClose}>
				<Form onSubmit={handleSubmit}>
					<Modal.Header closeButton>
						<Modal.Title> UF LOGIN</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>
								{' '}
								<b> UF Email address</b>
							</Form.Label>
							<Form.Control required type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>
								{' '}
								<b>UF Password</b>{' '}
							</Form.Label>
							<Form.Control required type="password" placeholder="Password" />
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
						</Button>
						<Button className="login-button" type="submit">
							Log In
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</div>
	);
}

export default Navbar;
