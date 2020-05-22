/*
    Redux reducer for selecting active nations in the game before play begins
*/

import {ACTIVATE_NATION, DEACTIVATE_NATION} from "../constants/action-catalog";

const nationSelectReducer = (state=initial, action) => {
    switch(action.type){
        // TODO:
        case ACTIVATE_NATION:
            return state;
        case DEACTIVATE_NATION:
            return state;
    }
    
};

export default nationSelectReducer;