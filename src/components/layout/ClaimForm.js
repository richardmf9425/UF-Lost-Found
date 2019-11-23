import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import uuid from 'uuid/v4';

import 'react-dropdown/style.css';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
function ClaimForm() {
	const [ fireRedirect, setFireRedirect ] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		toast.success('Your information has been sent succesfully!', {
			bodyClassName: 'toast-background',
			position: 'top-left',
			autoClose: 4000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true
		});
		setFireRedirect(true);
	};

	return (
		<div className="lost-section card shadow-lg p-3 mb-5 bg-white rounded">
			<h3> Claim Form</h3>
			<form className="lost-form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="title">Item: </label>
					<input id="title" type="text" name="title" required placeholder="Coffee mug" />
				</div>
				<div className="form-group">
					<label htmlFor="description">Item Description: </label>
					<p className="claim-text-small">
						<span className="star-red">*</span> Please provide as many details as possible to verify you as
						the legitimate owner
					</p>
					<textarea id="description" name="description" required type="text-area" placeholder="E.g Jacket" />
				</div>

				<div className="form-group">
					<label htmlFor="location">Where did you lose this item? </label>
					<input type="text" name="location" />
				</div>
				<div className="form-group">
					<p style={{ fontSize: 'small' }}>
						Do you have any pictures that can help confirm you are the owner?{' '}
					</p>
					<input id="category" name="picture" type="file" />
				</div>
				<div className="form-group">
					<label htmlFor="email">Preferred contact info: </label>
					<input id="color" type="text" name="contact" required placeholder="john@doe.com" />
				</div>
				<p className="claim-text-small text-muted">
					The information from this form will be sent to the person who found the item being claimed.
				</p>
				<div className="form-buttons">
					<Link to="/lostItems" className="login-button add-lost-button cancel-button">
						Cancel
					</Link>

					<Button className="login-button add-lost-button" type="submit">
						Submit
					</Button>
				</div>
			</form>
			{fireRedirect && <Redirect to="/lostItems" />}
		</div>
	);
}

export default ClaimForm;
