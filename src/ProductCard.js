import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

export default class ProductCard extends Component {
    render() {
        const { product } = this.props;
        return(
            <div>
                <Image src={ product.imageUrl } alt={ product.title } height='150' width='300'/>
                <br/>
                <TextBox>{ product.title }</TextBox>
                <Price>{ product.price }</Price>
            </div>
        )
    }
}