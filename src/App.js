import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import classes from './App.module.css';
import Navbar from './components/NavBar/Navbar';
import Titlecard from './components/Titlecard/Titlecard';
import Products from './containers/Products/Products';
import Bio from './components/Bio/Bio';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';
import mountains from './assets/img/mountain-placeholer-2.jpg';

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
						<div className={classes.IconCredit}>
							<div className={classes.FlatIcon}>Pig icon made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
						</div>
					</div>
				} />
				<Route path='/shopping' render={() => 
					<div>
						<Navbar alwaysSticky scrollLength={0}/>
						<Titlecard />
						<Products />
					</div>
				} />
				<Route path='/contact' render={() => 
					<div>
						<Navbar alwaysSticky scrollLength={0}/>
						<Titlecard />
					</div>
				} />
				<Route path='/cart' render={() => 
					<div>
						<Navbar alwaysSticky scrollLength={0}/>
						<Titlecard />
						<Cart />
					</div>
				} />
				<Route path='/checkout' render={() => 
					<div>
						<Navbar alwaysSticky scrollLength={0}/>
						<Titlecard />
						<Checkout />
					</div>
				} />
			</div>
		</BrowserRouter>
	)
}

export default App;
