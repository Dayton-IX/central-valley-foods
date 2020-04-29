import React, { Component } from 'react';

import Product from './Product/Product';
import classes from './Products.module.css';

class Products extends Component {
    render() {
        return (
            <div className={classes.Products}>
                <h3 className={classes.ProductsHeader}>Products</h3>
                <hr />
                <p className={classes.ProductsDescription}>Falslev Livestock and it's new branch, Central Valley Foods, have been raising pigs for over 50 years. We have been supplying roaster and suckling pigs across the United States. Our goal is to provide fresh pork straight from the farm to the family table. <br />Our suckling and roasting pigs are raised naturally without antibiotics or hormones. The smaller pigs, 10-25 lbs, are on a strict milk diet and the 25-45 lbs are on a healthy diet. The suckling pig is very tender and has great flavor.</p>
                <Product type="suckling"/>
                <Product type="roaster" />
                <Product type="sausage" />
                <Product type="patties" />
            </div>
        )
    }
};

export default Products;