import React, {Component} from 'react';

export default class Image extends Component {
    render () {
        let {src, alt, height, width} = this.props;
        return (
            <img src={src} alt={alt} height={height} width={width}/>
        ) 
    }
}

