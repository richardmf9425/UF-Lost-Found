import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const booksImg = require('../../resources/pile-of-five-books-51342.jpg');
const phoneImg = require('../../resources/apple-applications-apps-cell-phone-607812.jpg');
const clothing = require('../../resources/assorted-clothes-996329.jpg');
const accessories = require('../../resources/two-eyewear-on-white-surface-1499477.jpg');
const medical = require('../../resources/blue-and-silver-stetoscope-40568.jpg');
const keys = require('../../resources/two-black-and-brass-colored-keys-with-fob-842528.jpg');
const wallet = require('../../resources/brown-leather-wallet-and-us-dollar-banknote-915915.jpg');
const id = require('../../resources/gator1_card_pop.png');
function Landing() {
	return (
		<section className="landing">
			<div className="categories-section">
				<h3 className="text-landing"> Filter Found Items by Category:</h3>
				<div className="categories">
					{/* <div className="category">
						{' '}
						<span className="text-category">Books</span>{' '}
					</div>
					<div className="category" />
					<div className="category" />
					<div className="category" />
					<div className="category" /> */}
					<Card style={{ width: '18rem' }} className="shadow  card-category">
						<Card.Img variant="top" src={booksImg} width="100" height="200" />
						<Card.Body>
							<Card.Title>Books</Card.Title>
							<Card.Text>Books, notebook, binders, paper, etc..</Card.Text>
							<Button variant="primary" className="login-button">
								Search
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }} className="shadow card-category">
						<Card.Img variant="top" src={phoneImg} width="100" height="200" />
						<Card.Body>
							<Card.Title>Electronics</Card.Title>
							<Card.Text>Phones, laptops, headphones, chargers, etc..</Card.Text>
							<Button variant="primary" className="login-button">
								Search
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }} className="shadow card-category">
						<Card.Img variant="top" src={clothing} width="100" height="200" />
						<Card.Body>
							<Card.Title>Clothing</Card.Title>
							<Card.Text>Shirts,hoodies,coats, hats, shoes, etc..</Card.Text>
							<Button variant="info" className="login-button">
								Search
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }} className="shadow card-category">
						<Card.Img variant="top" src={accessories} width="100" height="200" />
						<Card.Body>
							<Card.Title>Accessories</Card.Title>
							<Card.Text>Umbrellas, glasses, backpacks, etc..</Card.Text>
							<Button variant="primary" className="login-button">
								Search
							</Button>
						</Card.Body>
					</Card>
				</div>
				<div className="categories">
					<Card style={{ width: '18rem' }} className="shadow card-category">
						<Card.Img variant="top" src={medical} width="100" height="200" />
						<Card.Body>
							<Card.Title>Medical Items</Card.Title>
							<Card.Text>Inhalers, medication, prescriptions, etc..</Card.Text>
							<Button variant="primary" className="login-button">
								Search
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }} className="shadow card-category">
						<Card.Img variant="top" src={keys} width="100" height="200" />
						<Card.Body>
							<Card.Title>Keys</Card.Title>
							<Card.Text>Keys, car keys, keychains,carabiners, etc...</Card.Text>
							<Button variant="primary" className="login-button">
								Search
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }} className="shadow card-category">
						<Card.Img variant="top" src={wallet} width="100" height="200" />
						<Card.Body>
							<Card.Title>Wallets</Card.Title>
							<Card.Text>Wallets, purses, bags, money, etc..</Card.Text>
							<Button variant="primary" className="login-button">
								Search
							</Button>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem' }} className="shadow card-category">
						<Card.Img variant="top" src={id} width="100" height="200" />
						<Card.Body>
							<Card.Title>Identification</Card.Title>
							<Card.Text>Driver's License, UF ID, any other ID card, etc..</Card.Text>
							<Button variant="primary" className="login-button">
								Search
							</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</section>
	);
}

export default Landing;
