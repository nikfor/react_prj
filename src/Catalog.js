import React, { Component } from 'react';
import ProductCard from './ProductCard.js'

export default class Catalog extends Component {
    render() {
        return(
            <div>
                {   
                    this.props.products.map(
                        ({id, title, price, imageUrl}) => <ProductCard id={id} title={title} price={price} imageUrl={imageUrl}/>
                    )
                }
            </div>
        )
    }
}