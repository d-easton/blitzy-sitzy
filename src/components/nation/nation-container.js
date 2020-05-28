import React from 'react';
import {connect} from 'react-redux';
import Nation from './nation';

function NationContainer (props) {
    return (
        props.isActive
            ? <Nation id={props.id} nationName={props.nationName} />  // TODO: check this syntax
            : <div> [Nation {props.nationID} is inactive]</div>  // why doesnt this display
    );   
}

export default NationContainer;