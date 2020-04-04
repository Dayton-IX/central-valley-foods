import React, { Component } from 'react';

import sucklingPig from '../../../assets/img/suckling-pig.jpeg';
import classes from './Product.module.css';

class Product extends Component {
    render() {
        return (
            <div className={classes.Product}>
                <img src={sucklingPig} alt="Suckling Pig" />
                <div className={classes.Info}>
                    <p>Suckling Pig</p>
                    <p>$120 - $200</p>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus. Ornare arcu dui vivamus arcu. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Lectus quam id leo in vitae turpis. Quisque sagittis purus sit amet volutpat. Amet est placerat in egestas erat imperdiet sed euismod nisi. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                </div>                
            </div>
        )
    }
};

export default Product;