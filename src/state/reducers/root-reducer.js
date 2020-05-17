/*
    Initial state configuration
*/

import {ACTIVATE_NATION} from "../constants/action-catalog";

const initial = {
    activeNations = []
};

const rootReducer = (state=initial, action) => {
    if(action.type == ACTIVATE_NATION) {
        return Object.assign(
            {}, 
            state, 
            {
                activeNations: state.activeNations.concat(action.payload)
            }   
        );
    }
    return state;
};

export default rootReducer;