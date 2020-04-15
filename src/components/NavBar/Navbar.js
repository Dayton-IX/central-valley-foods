import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/img/pig.png';

import classes from './Navbar.module.css';

class Navbar extends Component {
    state = {
        cartOpen: false
    }

    render () {
        let cartButtonStyle = {};
        if (this.props.cart.length >= 1) {
            cartButtonStyle = {color: '#3498DB'};
        } else if (this.props.cart.length < 1) {
            cartButtonStyle = {};
        }
        let navTitle = null;
        let shadow = {};
        window.addEventListener('scroll', (e) => {
            // console.log(window.pageYOffset);
            if (window.pageYOffset > 250) {
                shadow = {boxShadow: '10px 0px 30px #888888'}
                navTitle = <NavLink to="/" exact className={classes.NavTitle}><img className={classes.Logo} src={logo} alt="Pig" />Central Valley Foods</NavLink>
            } else {
                shadow = {};
                navTitle = null;
            }
        })
        return (
            <nav style={shadow} className={classes.Navbar}>
                <NavLink to="/" exact activeClassName={classes.Active}>Home</NavLink>
                <NavLink to="/shopping" activeClassName={classes.Active}>Products</NavLink>
                <NavLink to="/contact" activeClassName={classes.Active}>Contact</NavLink>
                <NavLink to="/about" activeClassName={classes.Active}>About Us</NavLink>
                {navTitle}
                <NavLink to="/cart" style={cartButtonStyle} className={classes.Cart} activeClassName={classes.Active}>Cart ( {this.props.cart.length} )</NavLink>
            </nav>
        )
    }
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        total: state.total
    }
}

export default connect(mapStateToProps)(Navbar);