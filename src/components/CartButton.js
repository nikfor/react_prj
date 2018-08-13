import React, { Component } from 'react';
import { Button, Colors, Sizes } from 'react-foundation';
import CartContext from '../context/CartContext';

export default class CartButton extends Component {

    render(){
        const { product } = this.props;
        return(
            <CartContext.Consumer>
                {({ addToCart }) => (
                    <Button color={Colors.SUCCESS} size={Sizes.TINY} className='buy-button' onClick={() => addToCart(product)}>
                        В корзину
                    </Button>
                )}
            </CartContext.Consumer>
            
        );
    }

}