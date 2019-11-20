import React, { useState, Fragment } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
function LostItems({ data }) {
	const [ show, setShow ] = useState(false);
	const [ item, setItem ] = useState({});

	const handleClose = () => setShow(false);
	const handleShow = (item) => {
		setShow(true);
		setItem(item);
	};
	console.log(data);
	const itemsList = data.map((item) => {
		return (
			<tr key={item.id} onClick={() => handleShow(item)}>
				<td>{item.title}</td>
				<td>{item.description.length > 100 ? `${item.description.slice(0, 70)}...` : item.description}</td>
				<td>{item.date}</td>
			</tr>
		);
	});
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

	const colorOptions = [ 'Yellow', 'Red', 'Black', 'Blue' ];
	const defaultColorOption = colorOptions[0];
	const dateOptions = [ 'Newest', 'Oldest' ];
	const defaultDateOption = dateOptions[0];

	return (
		<Fragment>
			<div className="items-table">
				<div className="table-headers">
					<div className="row">
						<div className="column1">
							<div className="tableWrapper">
								<h1>Lost Items</h1>
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
						<div className="column2">
							<h5>Sort By:</h5>
							<Dropdown
								className="filter-dropdown"
								options={dateOptions}
								value={defaultDateOption}
								placeholder="Select an option"
							/>
							<h5>Color:</h5>
							<Dropdown
								className="filter-dropdown"
								options={colorOptions}
								value={defaultOption}
								placeholder="Select an option"
							/>
							<h5>Area Lost:</h5>
							<Dropdown
								className="filter-dropdown"
								options={options}
								value={defaultOption}
								placeholder="Select an option"
							/>
							<h5>Item Category:</h5>
							<Dropdown
								className="filter-dropdown"
								options={options}
								value={defaultOption}
								placeholder="Select an option"
							/>
							<Button className="login-button">Clear</Button>
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
						<Form.Label> Did you find this item?</Form.Label>
						<Form.Control required type="email" placeholder="Enter preferred contact info" />
						<Form.Text className="text-muted">
							We'll never share your information with anyone else.
						</Form.Text>

						<Button className="login-button" type="submit">
							Notify Owner
						</Button>
					</Form>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
}

export default LostItems;
