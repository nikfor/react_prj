import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { productsArray } from './constants/Products';
import Catalog from './src/Catalog';



class App extends Component {
    render() {
        return(
            <Catalog products={ productsArray }/>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)