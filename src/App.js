import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import LostItems from './components/layout/LostItems';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route exact path="/" component={Landing} />
				<Route exact path="/lostItems" component={LostItems} />
			</div>
		</Router>
	);
}

export default App;
