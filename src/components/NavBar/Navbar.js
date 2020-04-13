import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={classes.Navbar}>
            <NavLink to="/" exact activeClassName={classes.Active}>Home</NavLink>
            <NavLink to="/shopping" activeClassName={classes.Active}>Products</NavLink>
            <NavLink to="/contact" activeClassName={classes.Active}>Contact</NavLink>
            <NavLink to="/about" activeClassName={classes.Active}>About Us</NavLink>

            <a href="/cart" className={classes.Cart}>Cart (0)</a>
        </nav>
    )
};

export default Navbar;