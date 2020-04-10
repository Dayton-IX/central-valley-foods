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
                {id: 0, value: '10 - 15 lbs', price: 95.00},
                {id: 1, value: '16 - 21 lbs', price: 110.00},
                {id: 2, value: '22 - 27 lbs', price: 115.00},
                {id: 3, value: '28 - 33 lbs', price: 125.00}
            ]
        },
        sizesList: true,
        selectedSizeId: 0,
        selectedQuantity: 1,
        cart: []
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
                        {id: 0, value: '10 - 15 lbs', price: 95.00},
                        {id: 1, value: '16 - 21 lbs', price: 110.00},
                        {id: 2, value: '22 - 27 lbs', price: 115.00},
                        {id: 3, value: '28 - 33 lbs', price: 125.00}
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
                        {id: 0, value: '34 - 39 lbs', price: 135.00},
                        {id: 1, value: '40 - 45 lbs', price: 145.00},
                        {id: 2, value: '46 - 51 lbs', price: 165.00},
                        {id: 3, value: '52 - 60 lbs', price: 175.00}
                    ]
                }
            })
        }
    }

    componentDidMount() {
        this.productTypeHandler();
    }

    onSizeChangeHandler = (event) => {
        console.log(event.target.value);
        const sizesArray = this.state.productInfo.sizes;
        let sizeID = 0
        for (let i = 0; i < sizesArray.length; i++) {
            // console.log('i: ' + i, 'Target: ' + event.target.value)
            // eslint-disable-next-line
            if (sizesArray[i].id == event.target.value) {
                sizeID = i;
                // console.log('FOUND!' + sizeID)
            } 
            // else {
            //     // console.log('Never found')
            // }
        }
        // console.log(sizeID)
        this.setState({selectedSizeId: sizeID});
        // console.log(this.state.selectedSizeId);
    }

    onQuantChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({selectedQuantity: event.target.value});
    }

    onSubmitHandler = (event) => {
        var newObject = {...this.state.productInfo.sizes[this.state.selectedSizeId], quant: this.state.selectedQuantity, type: this.state.productInfo.name};
        var newArray = this.state.cart.concat(newObject);
        this.setState({ cart: newArray})
        console.log(newArray, this.state.cart);
        event.preventDefault();
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
                    <form onSubmit={this.onSubmitHandler} className={classes.ProductForm}>
                        <label htmlFor="size">Size:</label>
                        <select id="size" value={this.state.selectedSizeId} onChange={this.onSizeChangeHandler}>
                            {this.state.productInfo.sizes.map(option => (
                                <option key={option.id} value={option.id}>
                                    {option.value}
                                </option>
                            ))}
                        </select>
                        <br />
                        <label htmlFor="quantity">Quantity:</label>
                        <input id="quantity" type="text" value={this.state.selectedQuantity} onChange={e => this.onQuantChangeHandler(e)} ></input>
                        <br />
                        <p id="total" className={classes.Total}>Total: <strong>${parseFloat(this.state.productInfo.sizes[this.state.selectedSizeId].price * this.state.selectedQuantity).toFixed(2)}</strong></p>
                        <button type="submit" className={classes.AddToCart}>Add To Cart</button>
                    </form>
                </div>                
            </div>
        )
    }
};

export default Product;