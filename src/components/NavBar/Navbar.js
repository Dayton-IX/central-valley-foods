import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Navbar.module.css';

class Navbar extends Component {
    state = {
        cartOpen: false
    }

    openCartDrawer = () => {
        this.setState({cartOpen: true});
    }

    render () {
        let cartButtonStyle = {};
        if (this.props.cart.length >= 1) {
            cartButtonStyle = {color: '#3498DB'};
        } else if (this.props.cart.length < 1) {
            cartButtonStyle = {};
        }
        return (
            <nav className={classes.Navbar}>
                <NavLink to="/" exact activeClassName={classes.Active}>Home</NavLink>
                <NavLink to="/shopping" activeClassName={classes.Active}>Products</NavLink>
                <NavLink to="/contact" activeClassName={classes.Active}>Contact</NavLink>
                <NavLink to="/about" activeClassName={classes.Active}>About Us</NavLink>
    
                <div style={cartButtonStyle} onClick={this.openCartDrawer} className={classes.Cart}>Cart ( {this.props.cart.length} )</div>
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