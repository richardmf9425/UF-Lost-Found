import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import uuid from 'uuid/v4';

import 'react-dropdown/style.css';

import Button from 'react-bootstrap/Button';

function AddLostForm({ data, addItem }) {
	const [ formInfo, setFormInfo ] = useState({
		description: '',
		color: '',
		location: '',
		category: '',
		email: ''
	});
	const { description, color, location, category, email } = formInfo;
	const onChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		const id = uuid();
		const newItem = {
			id,
			description,
			color,
			location,
			category,
			email
		};

		e.preventDefault();
		addItem([ ...data, newItem ]);
	};

	const onColorSelect = (color) => setFormInfo({ ...formInfo, color: color.value });
	const onLocationSelect = (location) => setFormInfo({ ...formInfo, location: location.value });
	const onCategorySelect = (category) => setFormInfo({ ...formInfo, category: category.value });

	const colorOptions = [ 'Yellow', 'Black', 'Blue', 'Green' ];
	const locationOptions = [ 'Marston', 'CISE', 'Reitz', 'Other' ];
	const categoryOptions = [ 'Book', 'Phone', 'Accessory', 'Emergency' ];
	return (
		<div className="lost-section">
			<h3> Add Lost Item:</h3>
			<form className="lost-form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="description"> Provide a description of the item:</label>
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
					<label htmlFor="color">What color is the item?</label>
					<Dropdown id="color" name="color" value={color} options={colorOptions} onChange={onColorSelect} />
				</div>
				<div className="form-group">
					<label htmlFor="location">Where did you lose this item or last saw it?</label>
					<Dropdown
						id="location"
						name="location"
						value={location}
						options={locationOptions}
						onChange={onLocationSelect}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="category">Item Category:</label>
					<Dropdown
						id="category"
						name="category"
						value={category}
						options={categoryOptions}
						onChange={onCategorySelect}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Preferred contact email:</label>
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
		</div>
	);
}

export default AddLostForm;
