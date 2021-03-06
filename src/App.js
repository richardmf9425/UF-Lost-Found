import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import LostItems from './components/layout/LostItems';
import list from './resources/data';
import listf from './resources/dataf';
import AddLostForm from './components/layout/AddLostForm';
import AddFoundForm from './components/layout/AddFoundForm';
import FoundItems from './components/layout/FoundItems';
import ClaimForm from './components/layout/ClaimForm';
import FAQ from './components/layout/FAQ';
import Contact from './components/layout/Contact';
function App() {
	const [ data, setData ] = useState(list);
	const [ dataf, setDataf ] = useState(listf);
	const [ categ, setCateg ] = useState('');

	const addItem = (newList) => setData(newList);
	const addItemf = (newListf) => setDataf(newListf);

	return (
		<Router>
			<div>
				<Navbar />
				<Route exact path="/" render={(props) => <Landing {...props} setCateg={setCateg} />} />
				<Route exact path="/lostItems" render={(props) => <LostItems {...props} data={data} />} />
				<Route
					exact
					path="/foundItems"
					render={(props) => <FoundItems {...props} dataf={dataf} categ={categ} />}
				/>
				<Route exact path="/claim" render={(props) => <ClaimForm {...props} dataf={dataf} />} />
				<Route exact path="/faq" component={FAQ} />
				<Route exact path="/contact" component={Contact} />
				<Route
					exact
					path="/addLost"
					render={(props) => <AddLostForm {...props} data={data} addItem={addItem} />}
				/>
				<Route
					exact
					path="/addFound"
					render={(props) => <AddFoundForm {...props} dataf={dataf} addItemf={addItemf} />}
				/>
			</div>
		</Router>
	);
}

export default App;
