import { Nums } from './src/mathModule';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/Hello';


let nums = new Nums(6, 3);
console.log(`6 + 3 = ${nums.plus()}`);
console.log(`6 - 3 = ${nums.minus()}`);
console.log(`6 * 3 = ${nums.mult()}`);
console.log(`6 / 3 = ${nums.div()}`);


ReactDOM.render(
    <Hello />,
    document.getElementById('root')
)