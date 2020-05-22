/*
    Initial state configuration
*/

import {ACTIVATE_NATION, MOVE_PAWNS} from "../constants/action-catalog";

const initial = {
    activeNations = []
};

const rootReducer = (state=initial, action) => {
    switch(action.type){
        case ACTIVATE_NATION:
            return Object.assign(
                {}, 
                state, 
                {
                    activeNations: state.activeNations.concat(action.payload)
                }   
            );
        case MOVE_PAWNS:
            return ;
    }
   
    return state;
};

export default rootReducer;