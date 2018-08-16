import React, { Component } from 'react';
import CartContext from '../context/CartContext';
import { Callout, Label } from 'react-foundation';

export default class Cart extends Component {
    render(){
        return(
            <CartContext.Consumer>
                {({ products }) => (
                    <Callout>
                        <h5>Корзина</h5>
                        {products.map( 
                            (product) => (
                                <p key={product.id}>
                                    <Label>
                                        {product.title} - {product.count} - {product.count*product.price} руб.
                                    </Label>
                                </p>
                            )
                        )}
                    </Callout>
                )}
            </CartContext.Consumer>
        );
    };
    
};