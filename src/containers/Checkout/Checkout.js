import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import classes from './Checkout.module.css';
import axios from '../../axios-orders';

class Checkout extends Component {
    onToken = (token) => {
        axios.post('/orders', {
            items: {...this.props.cart},
            total: this.props.total
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    render () {
        let itemBox = <h4>No Items Here, go add some to your cart.</h4>;
        if ( this.props.cart.length > 0) {
            itemBox = <ol className={classes.Items}>
                {this.props.cart.map(item => (
                    <li key={item.cartId} className={classes.Item}>{item.name} x{item.quant} <span style={{ float: "right"}}>= ${parseFloat(item.price * item.quant).toFixed(2)}</span></li>
                ))}
            </ol>
        }
        
        return (
            <div className={classes.Checkout}>
                <h2>Checkout</h2>
                <h4>Items: </h4>
                {itemBox}
                <h3>Total: <strong>${parseFloat(this.props.total).toFixed(2)}</strong></h3>
                <StripeCheckout 
                    token={this.onToken}
                    stripeKey="pk_test_rKdvFyD3qBqtMEBXgwog2rn000h80vhkZk"
                    label="Purchase Your Items"
                    amount={this.props.total * 100}
                    shippingAddress
                    zipCode
                    allowRememberMe={false}
                />
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