import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`number-button ${props.className}`}>{props.content}</button>
    )
}

export default NumberButton;