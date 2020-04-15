import React, { Component } from 'react';
import { connect } from 'react-redux';

import sucklingPig from '../../assets/img/suckling-pig.jpeg';
import roasterPig from '../../assets/img/roasterPig.jpg';
import sausage from '../../assets/img/sausage.jpg';
import patties from '../../assets/img/patties.jpg';
import classes from './Cart.module.css';

class Cart extends Component {
    render() {
        return (
            <div className={classes.Cart}>
                <h2>Your Cart</h2>
                <ul>
                    {this.props.cart.map(item => (
                        <li key={item.id} >
                            <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                            <h4>{item.price * item.quant}</h4>
                        </li>
                    ))}
                </ul>
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
        onItemAdded: (item) => dispatch({type: 'ADD', item: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);