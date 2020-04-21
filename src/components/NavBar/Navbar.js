import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/img/pig.png';

import classes from './Navbar.module.css';

class Navbar extends Component {
    state = {
        scrolled: false
    }

    componentDidMount() {
        if (!this.props.alwaysSticky) {
            window.addEventListener('scroll', () => {
                const isTop = window.scrollY < this.props.scrollLength;
                if (isTop !== true) {
                    this.setState({scrolled: true});
                } else {
                    this.setState({scrolled: false});
                }
            });
        } else {
            this.setState({scrolled: true})
        }
    }

    render () {
        let cartButtonStyle = {};
        if (this.props.cart.length >= 1) {
            cartButtonStyle = {color: '#3498DB'};
        } else if (this.props.cart.length < 1) {
            cartButtonStyle = {};
        }
        return (
            <nav className={this.state.scrolled ? classes.StickyNavbar : classes.Navbar}>
                <NavLink to="/" exact className={classes.Link} activeClassName={classes.Active}>Home</NavLink>
                <NavLink to="/shopping" className={classes.Link} activeClassName={classes.Active}>Products</NavLink>
                {/* <NavLink to="/contact" className={classes.Link} activeClassName={classes.Active}>Contact</NavLink> */}
                {/* <NavLink to="/about" activeClassName={classes.Active}>About Us</NavLink> */}
                {this.state.scrolled ? <NavLink to="/" exact className={classes.NavTitle}><img className={classes.Logo} src={logo} alt="Pig" />Central Valley Foods</NavLink> : null}
                <NavLink to="/cart" style={cartButtonStyle} className={classes.Cart} activeClassName={classes.CartActive}>Cart ( {this.props.cart.length} )</NavLink>
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