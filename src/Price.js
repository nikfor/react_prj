import React, { Component } from 'react';
import { spawn } from 'child_process';

export default class Price extends Component {
    render() {
        return(
            <span> { this.props.children }</span>
        )
    }
}