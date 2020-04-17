import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//eslint-disable-next-line
import sucklingPig from '../../assets/img/suckling-pig.jpeg';
//eslint-disable-next-line
import roasterPig from '../../assets/img/roasterPig.jpg';
//eslint-disable-next-line
import sausage from '../../assets/img/sausage.jpg';
//eslint-disable-next-line
import patties from '../../assets/img/patties.jpg';
import classes from './Cart.module.css';

class Cart extends Component {
    render() {
        let checkoutButton = <p className={classes.NoItems}>There's Nothing Here Yet!</p>
        if (this.props.total > 0) {
            checkoutButton = <NavLink to="/checkout" className={classes.CheckoutLink}>Checkout</NavLink>
        }
        return (
            <div className={classes.Cart}>
                <div className={classes.CartInfo}>
                    <h2>Your Cart</h2>
                    <h3 className={classes.Total}>Total: <strong>${parseFloat(this.props.total).toFixed(2)}</strong></h3>
                    {checkoutButton}
                </div>
                <div className={classes.Items}>
                    {this.props.cart.map(item => (
                        <div className={classes.Item} key={item.id} >
                            <img src={item.image} alt={item.name} />
                            <div className={classes.ItemInfo}>
                                <h4>{item.name}</h4>
                                <hr />
                                <h6>Quantity: {item.quant}</h6>
                                <h5>Price: <strong>${parseFloat(item.price * item.quant).toFixed(2)}</strong></h5>
                                <button className={classes.RemoveButton} onClick={() => this.props.onItemRemoved(item.cartId, item.price)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        total: state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemRemoved: (itemId, itemPrice) => dispatch({type: 'REMOVE', itemId: itemId, price: itemPrice})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);