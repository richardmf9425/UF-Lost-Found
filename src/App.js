import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import LostItems from './components/layout/LostItems';
import data from './resources/data';
import AddLostForm from './components/layout/AddLostForm';
function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route exact path="/" component={Landing} />
				<Route exact path="/lostItems" render={(props) => <LostItems {...props} data={data} />} />
				<Route exact path="/addLost" component={AddLostForm} />
			</div>
		</Router>
	);
}

export default App;
