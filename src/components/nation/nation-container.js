import React from 'react';
import {connect} from 'react-redux';
import Nation from './nation';


import CHANGE_VP from '../../state/actions/changeVP';

const NationContainer = (props) => {
    const handleUpdateVP = () => {
        const n = Math.floor(Math.random()*10);
        console.log(n);
        props.dispatch(CHANGE_VP(0, n));
    }

    return (
        props.isActive
            ? <Nation id={props.id} nationName={props.nationName} victoryPoints={props.victoryPoints} handleUpdateVP={handleUpdateVP} />  // TODO: check this syntax
            : <div> [Nation {props.nationID} is inactive]</div>  // why doesnt this display
    );   
}

const mapStateToProps = (state) => {
    console.log("test props on state map "+props.index);
    return {
        victoryPoints: state.nationReducer.nations[0].victory_points,       // needs to be something other than [0]
        pawns: state.pawns
    }
}



export default connect(mapStateToProps)(NationContainer);