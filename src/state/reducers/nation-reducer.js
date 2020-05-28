/*
    Redux reducer for nation manipulation actions
*/

import {CHANGE_VP} from "../constants/action-catalog";

const nationReducer = (state=0, action) => {
    switch(action.type){
        case CHANGE_VP:
        default:
            return state;

    }
    return state;
};

export default nationReducer;