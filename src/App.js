import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
 

function App() {
	return (
		<div>
			<Navbar />
			<Landing />
		</div>
	);
}

export default App;
