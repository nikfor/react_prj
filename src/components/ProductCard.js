import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import CartButton from './CartButton'


export default class ProductCard extends Component {
    render() {
        const { product } = this.props;
        return(
            <Row className="display">
                <Column small={12} large={12}>
                    <Row className="display">
                        <Column small={12} large={12}>
                            <Image src={ product.imageUrl } alt={ product.title } height='150' width='300'/>
                        </Column>
                    </Row>
                    <Row className="display info-row">
                        <Column small={12} large={1}><TextBox>{ product.title }</TextBox></Column>
                        <Column small={12} large={1}><Price>{ product.price }</Price></Column>
                        <Column small={12} large={10}><CartButton product={ product }/></Column>
                    </Row>
                </Column>
            </Row>
        )
    }
}