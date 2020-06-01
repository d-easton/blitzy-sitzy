import React from 'react';
import './track.css';

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
   
    const trackBody = props.spaces.map((item, i) => <li key={i} value={item}>{item}</li>);

    return (
        <ul> 
            {trackBody}
        </ul>
    );
}

export default Track;