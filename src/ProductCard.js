import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

export default class ProductCard extends Component {
    render() {
        let source = this.props.imageUrl;
        let {id, title, price, imageUrl} = this.props;
        return(
            <div>
                <Image src={imageUrl} alt='PICTURE' height='150' width='300'/>
                <br/>
                <TextBox>{title}</TextBox>
                <Price>{price}</Price>
            </div>
        )
    }
}