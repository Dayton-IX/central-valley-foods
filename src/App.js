import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Titlecard from './components/Titlecard/Titlecard';
import Products from './containers/Products/Products';

function App() {
	return (
		<div>
			<Navbar />
			<Titlecard />
			<Products />
		</div>
	)
}

export default App;
