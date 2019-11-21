import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import uuid from 'uuid/v4';

import 'react-dropdown/style.css';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
function AddLostForm({ data, addItem }) {
	const [ formInfo, setFormInfo ] = useState({
		title: '',
		description: '',
		color: '',
		location: '',
		category: '',
		email: ''
	});
	const [ fireRedirect, setFireRedirect ] = useState(false);
	const { title, description, color, location, category, email } = formInfo;
	const onChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		const id = uuid();
		const date = new Date();
		const newItem = {
			id,
			title,
			description,
			color,
			location,
			category,
			email,
			date: date.toDateString()
		};

		e.preventDefault();
		addItem([ ...data, newItem ]);
		toast.success('Your lost item has been successfully added!', {
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

	const onColorSelect = (color) => setFormInfo({ ...formInfo, color: color.value });
	const onLocationSelect = (location) => setFormInfo({ ...formInfo, location: location.value });
	const onCategorySelect = (category) => setFormInfo({ ...formInfo, category: category.value });

	const colorOptions = [ 'Yellow', 'Black', 'Blue', 'Green' ];
	const locationOptions = [ 'Marston', 'CISE', 'Reitz', 'Other' ];
	const categoryOptions = [ 'Book', 'Phone', 'Accessory', 'Emergency' ];
	return (
		<div className="lost-section card shadow-lg p-3 mb-5 bg-white rounded">
			<h3> Add Lost Item:</h3>
			<form className="lost-form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="title">
						<b>Item:</b>{' '}
					</label>
					<input
						id="title"
						type="text"
						name="title"
						value={title}
						required
						placeholder="coffee mug"
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">
						<b>Provide a description of the item:</b>{' '}
					</label>
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
					<label htmlFor="color">
						<b>What color is the item?</b>{' '}
					</label>
					<Dropdown
						id="color"
						name="color"
						value={color}
						options={colorOptions}
						onChange={onColorSelect}
						className="dropdown"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="location">
						<b>Where did you lose this item or last saw it?</b>{' '}
					</label>
					<Dropdown
						id="location"
						name="location"
						value={location}
						options={locationOptions}
						onChange={onLocationSelect}
						className="dropdown"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="category">
						<b>Item Category:</b>{' '}
					</label>
					<Dropdown
						id="category"
						name="category"
						value={category}
						options={categoryOptions}
						onChange={onCategorySelect}
						className="dropdown"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">
						<b>Preferred contact email:</b>{' '}
					</label>
					<input
						id="color"
						type="email"
						name="email"
						value={email}
						required
						placeholder="john@doe.com"
						onChange={(e) => onChange(e)}
					/>
				</div>

				<Button className="login-button" type="submit">
					Add Lost Item
				</Button>
			</form>
			{fireRedirect && <Redirect to="/lostItems" />}
		</div>
	);
}

export default AddLostForm;
