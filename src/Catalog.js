import React, { Component } from 'react';
import ProductCard from './ProductCard.js'

export default class Catalog extends Component {
    render() {
        return(
            <div>
                {   
                    this.props.products.map(
                        (product) => <ProductCard product={ product } key={ product.id } />
                    )   
                }
            </div>
        )
    }
}