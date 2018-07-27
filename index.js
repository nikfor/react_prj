import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { products_array } from './constants/Products';
import Catalog from './src/Catalog';



class App extends Component {
    render() {
        return(
            <Catalog products={products_array}/>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)