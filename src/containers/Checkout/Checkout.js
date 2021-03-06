import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Redirect } from 'react-router';

import classes from './Checkout.module.css';
import axiosO from '../../secret/axios-orders';
import axiosM from '../../secret/axios-mailing';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import logo from '../../assets/img/pig.png';
import { stripeLiveP } from '../../secret/api-keys';

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
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address'
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
                    placeholder: 'City'
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
        },
        formIsValid: false,
        redirect: false
    }

    orderHandler = () => {
        // event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        const itemsArray = [];
        //eslint-disable-next-line
        this.props.cart.map(item => {
            itemsArray.push({
                item: item.name,
                quant: item.quant,
                size: item.value
            })
        })

        axiosO.post(`/orders.json`, {
            items: itemsArray,
            total: this.props.total,
            orderForm: formData
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

        axiosM.post(`/sendMail?dest=${this.state.orderForm.email.value}`).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

        const orderItems = [];
        //eslint-disable-next-line
        this.props.cart.map(item => {
            orderItems.push(`${item.name} x${item.quant} ${item.value}`);
        })

        const orderAddress = `Customer: ${this.state.orderForm.name.value} ${this.state.orderForm.email.value}. Address: ${this.state.orderForm.address.value}, ${this.state.orderForm.city.value}, ${this.state.orderForm.state.value}. ZIP: ${this.state.orderForm.zipCode.value}.`

        axiosM.post(`/sendOrder`, {
            items: orderItems.join(' || '),
            address: orderAddress
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
        
        this.props.onCartRefresh();
        this.setState({redirect: true});
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

        let stripeButton = <p>Please Fill Out The Form Above</p>;
        if (this.props.cart.length === 0) {
            stripeButton = null;
        }
        if (this.state.formIsValid && this.props.cart.length > 0){
            stripeButton = <StripeCheckout 
                token={this.orderHandler}
                stripeKey='pk_test_20Nho73dObiGAHnxsisM56P400Ct5sRO4e'
                name="Central Valley Foods"
                image={logo}
                label="Purchase Your Items"
                amount={this.props.total * 100}
                email={this.state.orderForm.email.value}
                allowRememberMe={false}
            />
        }

        let form = null;
        if (this.props.cart.length > 0){
            form =(
                <form onSubmit={this.orderHandler} className={classes.Form}>
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
                </form>
            );
        }
        if (this.props.loading) {
            form = <Spinner />
        } 

        let redirect = null
        if (this.state.redirect) {
            redirect = <Redirect to="/" />
        }

        return (
            <div className={classes.Checkout}>
                <h2>Checkout</h2>
                <h4>Items: </h4>
                {itemBox}
                <h3>Total: <strong>${parseFloat(this.props.total).toFixed(2)}</strong></h3>
                {form}
                <div className={classes.StripeButton}>
                    {stripeButton}
                </div>
                {redirect}
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
        onCartRefresh: (itemId, itemPrice) => dispatch({type: 'REFRESH'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);