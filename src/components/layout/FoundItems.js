import React, { useState, Fragment } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
toast.configure();
function FoundItems({ dataf }) {
	const [ show, setShow ] = useState(false);
	const [ item, setItem ] = useState({});
	const [ newest, setNewest ] = useState(true);
	const [ color, setColor ] = useState('');
	const [ location, setLocation ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ searchText, setSearchText ] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = (item) => {
		setShow(true);
		setItem(item);
	};

	if (newest) {
		dataf.sort((a, b) => new Date(b.date) - new Date(a.date));
	} else {
		dataf.sort((a, b) => new Date(a.date) - new Date(b.date));
	}
	if (color) {
		dataf = dataf.filter((item) => item.color === color);
	}
	if (location) {
		dataf = dataf.filter((item) => item.location === location);
	}
	if (category) {
		dataf = dataf.filter((item) => item.category === category);
	}

	if (searchText) {
		dataf = dataf.filter(
			(item) =>
				item.title.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText)
		);
	}
	const itemsList = dataf.map((item) => {
		return (
			<tr key={item.id} onClick={() => handleShow(item)}>
				<td>{item.title}</td>
				<td>{item.description.length > 100 ? `${item.description.slice(0, 70)}...` : item.description}</td>
				<td>{new Date(item.date).toDateString()}</td>
			</tr>
		);
	});

	const clearState = () => {
		setNewest(true);
		setCategory('');
		setColor('');
		setLocation('');
	};
	const onSearch = (text) => {
		setSearchText(text);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		handleClose();
		toast.success('Owner has been notified and should contact you soon! Thank you!', {
			bodyClassName: 'toast-background',
			position: 'top-left',
			autoClose: 4000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true
		});
	};

	const colorOptions = [ 'Yellow', 'Red', 'Black', 'Blue', 'White' ];

	const locationOptions = [ 'Marston', 'CISE', 'Reitz', 'Campus', 'Other' ];

	const categoryOptions = [
		'Books',
		'Electronics',
		'Clothing',
		'Accessories',
		'Identification',
		'Medical Items',
		'Keys',
		'Wallets',
		'Other'
	];

	const dateOptions = [ 'Newest', 'Oldest' ];
	const defaultDateOption = dateOptions[0];

	const onDateSelect = () => {
		setNewest(!newest);
	};

	const onColorSelect = (color) => {
		setColor(color.value);
	};
	const onCategorySelect = (category) => setCategory(category.value);
	const onLocationSelect = (location) => setLocation(location.value);
	return (
		<Fragment>
			<div className="search-section">
				<form className="search-form">
					<input
						type="text"
						name=""
						className="search-bar"
						placeholder="Search for your item"
						onChange={(e) => onSearch(e.target.value)}
					/>
					<button type="submit" className="search-button">
						<i className="fas fa-search" />
					</button>
				</form>
			</div>
			<div className="add-section">
				<h6 className="add-text">Don't see your lost item? Add it to 'Lost Items'</h6>{' '}
				<span>
					<Link to="/addLost" className="">
						<i class="fas fa-plus-circle add-icon" />
					</Link>
				</span>
			</div>
			<div className="items-table">
				<div className="table-headers">
					<div className="row">
						<div className="column1 card shadow">
							<div className="tableWrapper">
								<h1>Items Found</h1>
								<p>
									<span className="star-red">*</span> This is a list of items found by students and
									staff in UF campus.
								</p>
								<table className="table table-striped">
									<thead>
										<td>Item:</td>
										<td>Description:</td>
										<td>Date Uploaded:</td>
									</thead>
									<tbody>{itemsList}</tbody>
								</table>
							</div>
						</div>
						<div className="column2 ">
							<h5>Sort By:</h5>
							<Dropdown
								className="filter-dropdown"
								options={dateOptions}
								value={defaultDateOption}
								placeholder="Select.."
								onChange={onDateSelect}
							/>
							<h5>Color:</h5>
							<Dropdown
								className="filter-dropdown"
								options={colorOptions}
								value={color}
								placeholder="Select..."
								onChange={onColorSelect}
							/>
							<h5>Area Lost:</h5>
							<Dropdown
								className="filter-dropdown"
								options={locationOptions}
								value={location}
								placeholder="Select..."
								onChange={onLocationSelect}
							/>
							<h5>Item Category:</h5>
							<Dropdown
								className="filter-dropdown"
								options={categoryOptions}
								value={category}
								placeholder="Select..."
								onChange={onCategorySelect}
							/>
							<Button className="login-button clear-button" onClick={clearState}>
								Clear
							</Button>
						</div>
					</div>
				</div>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						Lost Item: <br /> <span className="modal-text">{item.title}</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{' '}
					<h3>Description:</h3> <p className="modal-text">{item.description}</p>
					<h3>Area Lost:</h3> <span className="modal-text">{item.location}</span>
				</Modal.Body>
				<Modal.Footer className="modal-footer">
					<Form onSubmit={handleSubmit}>
						<Form.Label>
							{' '}
							<b>Is this item yours?</b>{' '}
						</Form.Label>
						{/* <Form.Control required type="email" placeholder="Enter preferred contact info" />
						<Form.Text className="text-muted">
							We'll never share your information with anyone else.
						</Form.Text> */}

						<Link className="login-button modal-button" to="/claim">
							Claim Item
						</Link>
					</Form>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
}

export default FoundItems;
