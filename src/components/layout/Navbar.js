import React from 'react';

function Navbar() {
	return (
		<nav className="navbar">
			<div className="nav-top">
				<div className="logo" />
				<form className="search-form">
					<input type="text" name="" className="search-bar" placeholder="Search for your item" />
					<button type="submit" className="search-button">
						<i className="fas fa-search" />
					</button>
				</form>
				<a href="" className="login">
					<i className="fas fa-sign-in-alt" /> <span>LOG IN</span>
				</a>
			</div>
			<div className="nav-bottom">
				<li>Lost Items</li>
				<li>Found Items</li>
				<li>Lost an item?</li>
				<li>Found an item?</li>
				<li>FAQ</li>
				<li>Customer Support</li>
			</div>
		</nav>
	);
}

export default Navbar;
