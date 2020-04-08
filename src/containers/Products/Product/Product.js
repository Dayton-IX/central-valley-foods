import React, { Component } from 'react';

import sucklingPig from '../../../assets/img/suckling-pig.jpeg';
import classes from './Product.module.css';

class Product extends Component {

    state = {
        productInfo: {
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
                {id: 4, value: '28 - 33 lbs', price: 125.00}
            ]
        },
        selectedSizeId: 1,
        selectedQuantity: 1
    }

    productTypeHandler = () => {
        if (this.props.type === 'suckling'){
            this.setState({
                productInfo: {
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
                        {id: 4, value: '28 - 33 lbs', price: 125.00}
                    ]
                }
            })
        } else if (this.props.type === 'roaster'){
            this.setState({
                productInfo: {
                    name: 'Roaster Pig',
                    image: sucklingPig,
                    text: {
                        normal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus. Ornare arcu dui vivamus arcu. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Lectus quam id leo in vitae turpis. Quisque sagittis purus sit amet volutpat. Amet est placerat in egestas erat imperdiet sed euismod nisi. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.',
                        bold: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    },
                    sizes: [
                        {id: 1, value: '34 - 39 lbs', price: 135.00},
                        {id: 2, value: '40 - 45 lbs', price: 145.00},
                        {id: 3, value: '46 - 51 lbs', price: 165.00},
                        {id: 4, value: '52 - 60 lbs', price: 175.00}
                    ]
                }
            })
        }
    }

    componentDidMount() {
        this.productTypeHandler();
    }

    render() {
        return (
            <div className={classes.Product}>
                <img src={this.state.productInfo.image} alt={this.state.productInfo.name} />
                <div className={classes.Info}>
                    <h4>{this.state.productInfo.name}</h4>
                    <h3>${parseFloat(this.state.productInfo.sizes[0].price).toFixed(2)} - ${parseFloat(this.state.productInfo.sizes[this.state.productInfo.sizes.length - 1].price).toFixed(2)}</h3>
                    <hr align="left" />
                    <p>{this.state.productInfo.text.normal}</p>
                    <p><strong>{this.state.productInfo.text.bold}</strong></p>
                    <form className={classes.ProductForm}>
                        <label for="size">Size:</label>
                        <select id="size">
                            {this.state.productInfo.sizes.map(option => (
                                <option key={option.id} value={option.id}>
                                    {option.value}
                                </option>
                            ))}
                        </select>
                        <br />
                        <label for="quantity">Quantity:</label>
                        <input id="quantity" type="text" placeholder="1" value="1"></input>
                        <br />
                        <p id="total" className={classes.Total}>Total: <strong>${parseFloat(this.state.productInfo.sizes[this.state.selectedSizeId - 1].price * this.state.selectedQuantity).toFixed(2)}</strong></p>
                        <button className={classes.AddToCart}>Add To Cart</button>
                    </form>
                </div>                
            </div>
        )
    }
};

export default Product;