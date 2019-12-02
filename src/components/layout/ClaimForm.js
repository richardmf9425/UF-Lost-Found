import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import uuid from 'uuid/v4';

import 'react-dropdown/style.css';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
toast.configure();
function ClaimForm() {
	const [ fireRedirect, setFireRedirect ] = useState(false);
	const [ formInfo, setFormInfo ] = useState({
		title: '',
		description: '',
		location: '',
		picture: '',
		contact: ''
	});
	const { title, description, location, picture, contact } = formInfo;

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
		const email = {
			title,
			description,
			location,
			picture,
			contact
		};
		axios.post('https://www.enformed.io/awrr3hsj', email);
	};

	const onChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

	return (
		<div className="lost-section card shadow-lg p-3 mb-5 bg-white rounded">
			<h3> Claim Form</h3>
			<form className="lost-form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="title">Item: </label>
					<input
						id="title"
						type="text"
						name="title"
						value={title}
						required
						placeholder="Coffee mug"
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Item Description: </label>
					<p className="claim-text-small">
						<span className="star-red">*</span> Please provide as many details as possible to verify you as
						the legitimate owner
					</p>
					<textarea
						id="description"
						name="description"
						value={description}
						required
						type="text-area"
						placeholder="E.g Jacket"
						onChange={(e) => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="location">Where did you lose this item? </label>
					<input type="text" name="location" value={location} onChange={(e) => onChange(e)} />
				</div>
				<div className="form-group">
					<p style={{ fontSize: 'small' }}>
						Do you have any pictures that can help confirming you are the owner?{' '}
					</p>
					<input id="category" name="picture" value={picture} type="file" onChange={(e) => onChange(e)} />
				</div>
				<div className="form-group">
					<label htmlFor="email">Preferred contact info: </label>
					<input
						id="color"
						type="text"
						name="contact"
						value={contact}
						required
						placeholder="john@ufl.edu"
						onChange={(e) => onChange(e)}
					/>
				</div>
				<p className="claim-text-small text-muted">
					The information from this form will be only sent to the person who found the item being claimed.
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
