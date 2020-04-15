import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/NavBar/Navbar';
import Titlecard from './components/Titlecard/Titlecard';
import Products from './containers/Products/Products';
import Bio from './components/Bio/Bio';
import Cart from './containers/Cart/Cart';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Titlecard />
				<Route path='/' exact render={() => 
					<div>
						<Bio />
						<Products />
					</div>
				} />
				<Route path='/shopping' component={Products} />
				<Route path='/cart' component={Cart} />
			</div>
		</BrowserRouter>
	)
}

export default App;
