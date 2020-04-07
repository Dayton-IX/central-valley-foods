import React, { Component } from 'react';

import sucklingPig from '../../../assets/img/suckling-pig.jpeg';
import classes from './Product.module.css';

class Product extends Component {
    render() {
        return (
            <div className={classes.Product}>
                <img src={sucklingPig} alt="Suckling Pig" />
                <div className={classes.Info}>
                    <h4>Suckling Pig</h4>
                    <h3>$120.00 - $200.00</h3>
                    <hr align="left" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus. Ornare arcu dui vivamus arcu. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Lectus quam id leo in vitae turpis. Quisque sagittis purus sit amet volutpat. Amet est placerat in egestas erat imperdiet sed euismod nisi. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.</p>
                    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                    <form className={classes.ProductForm}>
                        <label for="size">Size:</label>
                        <select id="size">
                            <option>10 - 15 lbs</option>
                            <option>16 - 21 lbs</option>
                            <option>22 - 27 lbs</option>
                            <option>28 - 33 lbs</option>
                        </select>
                        <br />
                        <label for="quantity">Quantity:</label>
                        <input id="quantity" type="text" placeholder="1" value="1"></input>
                        <br />
                        <p id="total" className={classes.Total}>Total: <strong>$120.00</strong></p>
                        <button className={classes.AddToCart}>Add To Cart</button>
                    </form>
                </div>                
            </div>
        )
    }
};

export default Product;