import React from 'react';
import './track.css';

import Space from "../space";

/*
    The track component render the spaces that constitue each nation's game board. It does so by rendering a 
    unordered list of Space components. It inherits the array of Spaces from nation.js, which in turn fetches
    data from the model info in the assets/ directory
*/ 

const Track = props => {
    const trackBody = props.spaces.map((item) => <Space 
        id={item.id} 
        effect={item.effect} 
        text={item.text} 
        nation={item.nation}
    />);   
  
    return (
        <ul> 
            {trackBody}
        </ul>
    );
}

export default Track;