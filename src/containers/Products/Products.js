import React, { Component } from 'react';

import Product from './Product/Product';

class Products extends Component {
    render() {
        return (
            <div>
                <Product type="suckling" />
                <Product type="roaster" />
            </div>
        )
    }
};

export default Products;