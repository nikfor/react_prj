import React, { Component } from 'react';
import CartContext from '../context/CartContext';


export default class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = { products: [] };

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(newProduct, count = 1) {
        const products = this.state.products.slice();

        if (products.some( (product) => (product.id == newProduct.id) )){
            products.find((product) => (product.id == newProduct.id)).count += count;
        } else{
            newProduct.count = count;
            products.push(newProduct);
        }

        this.setState( { products: products });
    }

    render() {
        const { children } = this.props;
        const { products } = this.state;
        return(
            <CartContext.Provider value = {{ products, addToCart: this.addToCart }} >
                { children }
            </CartContext.Provider>
        );
    }


}