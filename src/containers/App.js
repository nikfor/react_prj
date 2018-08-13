import Foundation, { Button, Colors, Row, Column } from 'react-foundation';
import React, { Component } from 'react';

import Catalog from '../components/Catalog';
import { productsArray } from '../../constants/Products';
import CartProvider from './CartProvider';
import Cart from '../components/Cart';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { products: productsArray }
    }

    render() {
        const { products } = this.state;
        return(
            <div>
                <br/>
                <Row className="display">
                    <CartProvider>
                        <Column small={6} large={8}>
                            <Catalog products={ products }/>
                        </Column>
                        <Column small={6} large={4}>
                            <Cart/>
                        </Column>
                    </CartProvider>
                </Row>
            </div>
        )
    }
}