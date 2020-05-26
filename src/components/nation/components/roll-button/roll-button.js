import React from 'react';
import './roll-button.css';

const RollButton = (props) => {
    return <button class={props.nation}> R -- d{props.dieSize} </button>;   // todo: check prop pass name
}

export default RollButton;