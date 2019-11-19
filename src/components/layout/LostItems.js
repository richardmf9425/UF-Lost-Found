import React, { useState, Fragment } from 'react';
import data from '../../resources/data';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function LostItems() {
	const [ show, setShow ] = useState(false);
	const [ item, setItem ] = useState({});

	const handleClose = () => setShow(false);
	const handleShow = (item) => {
		setShow(true);
		setItem(item);
	};

	const itemsList = data.map((item) => {
		return (
			<tr key={item.id} onClick={() => handleShow(item)}>
				<td>{item.title}</td>
				<td>{`${item.description.slice(0, 70)}...`}</td>
				<td>{item.date}</td>
			</tr>
		);
	});
	const handleSubmit = (e) => {
		e.preventDefault();

		handleClose();
	};

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
					</div>
				</div>
			</div>
			<Modal show={show} onHide={handleClose} contentClassName="modal-content">
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
