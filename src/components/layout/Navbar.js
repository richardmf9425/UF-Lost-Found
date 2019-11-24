import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';

function Navbar() {
	const [ show, setShow ] = useState(false);
	const [ login, setLogin ] = useState(false);
	const [ user, setUser ] = useState('');
	const [ username, setUsername ] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleLogin = () => setLogin(true);
	const handleUser = (e) => {
		setUser(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogin();
		handleClose();
		setUsername(user.split('@')[0]);
		setUser('');
	};
	const handleLogOut = () => {
		setLogin(false);
	};
	return (
		<div>
			<nav className="navbar1">
				<div className="nav-top">
					<Link to="/">
						<div className="logo" />
					</Link>
					<div className="gator-logo" />
					<span className="slogan">Lost and Found</span>
					<div href="" className="login">
						{login ? (
							<div onClick={() => handleLogOut()}>
								{' '}
								Welcome,{username} <i className="fas fa-sign-out-alt" /> <span>LOG OUT</span>
							</div>
						) : (
							<div onClick={handleShow}>
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
							<Form.Control
								required
								type="email"
								value={user}
								placeholder="Enter email"
								onChange={(e) => handleUser(e)}
							/>
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
