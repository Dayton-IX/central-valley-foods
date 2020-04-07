import React, { Component } from 'react';

import sucklingPig from '../../../assets/img/suckling-pig.jpeg';
import classes from './Product.module.css';

class Product extends Component {
    productInfo = {
        name: 'Suckling Pig',
        image: sucklingPig,
        text: {
            normal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus. Ornare arcu dui vivamus arcu. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Lectus quam id leo in vitae turpis. Quisque sagittis purus sit amet volutpat. Amet est placerat in egestas erat imperdiet sed euismod nisi. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.',
            bold: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        sizes: [
            {id: 1, value: '10 - 15 lbs', price: 95.00},
            {id: 2, value: '16 - 21 lbs', price: 110.00},
            {id: 3, value: '22 - 27 lbs', price: 115.00},
            {id: 4, value: '28 - 33 lbs', price: 125.00},
        ],
        
    }

    render() {
        return (
            <div className={classes.Product}>
                <img src={this.productInfo.image} alt={this.productInfo.name} />
                <div className={classes.Info}>
                    <h4>{this.productInfo.name}</h4>
                    <h3>${parseFloat(this.productInfo.sizes[0].price).toFixed(2)} - ${parseFloat(this.productInfo.sizes[this.productInfo.sizes.length - 1].price).toFixed(2)}</h3>
                    <hr align="left" />
                    <p>{this.productInfo.text.normal}</p>
                    <p><strong>{this.productInfo.text.bold}</strong></p>
                    <form className={classes.ProductForm}>
                        <label for="size">Size:</label>
                        <select id="size">
                            {this.productInfo.sizes.map(option => (
                                <option key={option.id} value={option.id}>
                                    {option.value}
                                </option>
                            ))}
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