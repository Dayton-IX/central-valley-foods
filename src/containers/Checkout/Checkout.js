import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Checkout.module.css';

class Checkout extends Component {
    render () {
        return (
            <div className={classes.Checkout}>
                <h2>Checkout</h2>
                <ol className={classes.Items}>
                    {this.props.cart.map(item => (
                        <li className={classes.Item}>{item.name} x{item.quant} <span style={{ float: "right"}}>= ${parseFloat(item.price * item.quant).toFixed(2)}</span></li>
                    ))}
                </ol>
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