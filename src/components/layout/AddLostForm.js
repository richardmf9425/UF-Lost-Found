import React from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';

import Button from 'react-bootstrap/Button';

function AddLostForm() {
	const colorOptions = [ 'Yellow', 'Black', 'Blue', 'Green' ];
	const locationOptions = [ 'Marston', 'CISE', 'Reitz', 'Other' ];
	const categoryOptions = [ 'Book', 'Phone', 'Accessory', 'Emergency' ];
	return (
		<div className="lost-section">
			<h3> Add Lost Item:</h3>
			<form className="lost-form">
				<div className="form-group">
					<label htmlFor="description"> Provide a description of the item:</label>
					<textarea id="description" required type="text-area" placeholder="E.g Jacket" />
				</div>
				<div className="form-group">
					<label htmlFor="color">What color is the item?</label>
					<Dropdown id="color" options={colorOptions} />
				</div>
				<div className="form-group">
					<label htmlFor="location">Where did you lose this item or last saw it?</label>
					<Dropdown id="location" options={locationOptions} />
				</div>
				<div className="form-group">
					<label htmlFor="category">Item Category:</label>
					<Dropdown id="category" options={categoryOptions} />
				</div>
				<div className="form-group">
					<label htmlFor="email">Preferred contact email:</label>
					<input id="color" type="email" required placeholder="john@doe.com" />
				</div>

				<Button className="login-button" type="submit">
					Add Lost Item
				</Button>
			</form>
		</div>
	);
}

export default AddLostForm;
