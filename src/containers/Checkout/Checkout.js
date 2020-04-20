import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Checkout.module.css';

class Checkout extends Component {
    render () {
        let itemBox = <h4>No Items Here, go add some to your cart.</h4>;
        if ( this.props.cart.length > 0) {
            itemBox = <ol className={classes.Items}>
                {this.props.cart.map(item => (
                    <li className={classes.Item}>{item.name} x{item.quant} <span style={{ float: "right"}}>= ${parseFloat(item.price * item.quant).toFixed(2)}</span></li>
                ))}
            </ol>
        }
        // Only show form when items are more than 0
        return (
            <div className={classes.Checkout}>
                <h2>Checkout</h2>
                <h4>Items: </h4>
                {itemBox}
                <h3>Total: <strong>${parseFloat(this.props.total).toFixed(2)}</strong></h3>
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

export default connect(mapStateToProps)(Checkout);