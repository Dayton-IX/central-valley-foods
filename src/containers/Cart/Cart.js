import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return (
            <div className={classes.Cart}>
                <h2>Your Cart</h2>
                <div className={classes.Items}>
                    {this.props.cart.map(item => (
                        <div className={classes.Item} key={item.id} >
                            <img src={item.image} alt={item.name} />
                            <div className={classes.ItemInfo}>
                                <h4>{item.name}</h4>
                                <hr />
                                <h6>Quantity: {item.quant}</h6>
                                <h5>Price: <strong>${parseFloat(item.price * item.quant).toFixed(2)}</strong></h5>
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
        onItemAdded: (item) => dispatch({type: 'ADD', item: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);