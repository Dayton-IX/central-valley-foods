import React from 'react';

import classes from './Navbar.module.css';

const Navbar = (props) => {

        return (
            <nav className={classes.Navbar}>
                <a href="/" className={classes.Active}>Home</a>
                <a href="/">Contact</a>
                <a href="/">Shop Online</a>
                <a href="/">Wholesale</a>

                <a href="/" className={classes.Cart}>Cart (0)</a>
            </nav>
        )
};

export default Navbar;