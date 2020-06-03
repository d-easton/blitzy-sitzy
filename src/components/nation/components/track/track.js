import React from 'react';
import './track.css';

import Space from "../space";

const Track = props => {
    /*
    maybe incorporate from board?

    const {activeNations} = this.props
        return(
        
            activeNations.map((nation, index) => {
                return (
                   <h1>board</h1>
                )
            })
        );

    */

    /*
        <li> a </li>
        <li> b </li>
        <li> c </li>

            let durationBody = duration.map((item, i) => {
      return (
        <option key={i} value={item}>
          {item}
        </option>
      );
    });

    */
    const trackBody = props.spaces.map((item) => <Space 
        id={item.id} 
        effect={item.effect} 
        text={item.text} 
        nation={item.nation}
    />);   
                      //    , i    <li key={i} value={item}
  
    return (
        <ul> 
            {trackBody}
        </ul>
    );
}

export default Track;