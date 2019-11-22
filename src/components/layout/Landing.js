import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const image = require('../../resources/pile-of-five-books-51342.jpg');

function Landing() {
	return (
		<section className="landing">
			<h1 className="text-large">Categories:</h1>
			<div className="categories-section">
				<div className="categories">
					{/* <div className="category">
						{' '}
						<span className="text-category">Books</span>{' '}
					</div>
					<div className="category" />
					<div className="category" />
					<div className="category" />
					<div className="category" /> */}
					<Card style={{ width: '18rem' }} className="shadow">
						<Card.Img variant="top" src={image} width="100" height="200" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Books</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }} className="shadow">
						<Card.Img variant="top" src={image} width="100" height="200" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Books</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }} className="shadow">
						<Card.Img variant="top" src={image} width="100" height="200" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Books</Button>
						</Card.Body>
					</Card>
				</div>
				<div className="categories">
					{/* <div className="category" />
					<div className="category" />
					<div className="category" />
					<div className="category" />
					<div className="category" /> */}
				</div>
			</div>
		</section>
	);
}

export default Landing;
