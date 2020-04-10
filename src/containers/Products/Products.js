import React, { Component } from 'react';

import Product from './Product/Product';

class Products extends Component {
    render() {
        return (
            <div>
                <Product type="suckling" />
                <Product type="roaster" />
                <Product type="sausage" />
                <Product type="patties" />
            </div>
        )
    }
};

export default Products;