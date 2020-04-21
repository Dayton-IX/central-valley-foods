import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import classes from './Checkout.module.css';
import axios from '../../axios-orders';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';

class Checkout extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'city'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'State'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false
    }

    orderHandler = () => {
        // event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }

        axios.post('/orders', {
            items: {...this.props.cart},
            total: this.props.total,
            orderForm: formData
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm 
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
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
        
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form =(
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        invalid={!formElement.config.valid}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        touched={formElement.config.touched}
                    />
                ))}
                <button btnType="Success" disabled={!this.state.formIsValid} clicked={this.orderHandler}>ORDER</button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />
        }
        
        return (
            <div className={classes.Checkout}>
                <h2>Checkout</h2>
                <h4>Items: </h4>
                {itemBox}
                <h3>Total: <strong>${parseFloat(this.props.total).toFixed(2)}</strong></h3>
                {form}
                <StripeCheckout 
                    token={this.orderHandler}
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