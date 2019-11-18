import React from 'react';
import data from '../../resources/data';

function LostItems() {
	const itemsList = data.map((item) => {
		return (
			<tr key={item.id}>
				<td>{item.title}</td>
				<td>{item.description}</td>
				<td>{item.date}</td>
			</tr>
		);
	});
	return (
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
									<td>Date Uploated:</td>
								</thead>
								<tbody>{itemsList}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LostItems;
