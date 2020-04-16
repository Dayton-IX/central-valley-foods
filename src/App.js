import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import classes from './App.module.css';
import Navbar from './components/NavBar/Navbar';
import Titlecard from './components/Titlecard/Titlecard';
import Products from './containers/Products/Products';
import Bio from './components/Bio/Bio';
import Cart from './containers/Cart/Cart';
import mountains from './assets/img/mountain-placeholer-2.jpg'

function App() {
	return (
		<BrowserRouter>
			<div>
				<Route path='/' exact render={() => 
					<div>
						<img className={classes.Mountains} src={mountains} alt="mountains"></img>
						<Navbar scrollLength={300}/>
						<Titlecard />
						<Bio />
						<Products />
					</div>
				} />
				<Route path='/shopping' render={() => 
					<div>
						<Navbar alwaysSticky scrollLength={300}/>
						<Titlecard />
						<Products />
					</div>
				} />
				<Route path='/cart' render={() => 
					<div>
						<Navbar alwaysSticky scrollLength={300}/>
						<Titlecard />
						<Cart />
					</div>
				} /> />
			</div>
		</BrowserRouter>
	)
}

export default App;
